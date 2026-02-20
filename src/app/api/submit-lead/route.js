import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// --- Rate Limiting (in-memory) ---
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 5;

function checkRateLimit(ip) {
  const now = Date.now();
  for (const [key, entry] of rateLimitMap) {
    if (now - entry.firstRequest > RATE_LIMIT_WINDOW) {
      rateLimitMap.delete(key);
    }
  }
  const entry = rateLimitMap.get(ip);
  if (!entry) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count++;
  return true;
}

function saveLead(entry) {
  const logDir = path.join(process.cwd(), "leads");
  const logFile = path.join(logDir, "leads.json");
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }
  fs.appendFileSync(logFile, JSON.stringify(entry) + "\n", "utf8");
}

export async function POST(request) {
  try {
    // --- Origin Check ---
    const origin = request.headers.get("origin");
    const host = request.headers.get("host");

    if (!origin) {
      return NextResponse.json(
        { success: false, message: "Unauthorized request." },
        { status: 403 }
      );
    }

    try {
      const originHost = new URL(origin).host;
      if (originHost !== host) {
        return NextResponse.json(
          { success: false, message: "Unauthorized request." },
          { status: 403 }
        );
      }
    } catch {
      return NextResponse.json(
        { success: false, message: "Unauthorized request." },
        { status: 403 }
      );
    }

    // --- Rate Limiting ---
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, source, message, honeypot } = body;

    // --- Honeypot Check (bots fill this, humans don't) ---
    if (honeypot) {
      return NextResponse.json({
        success: true,
        message: "Lead submitted successfully!",
      });
    }

    // --- Validation ---
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "Name, email, and phone are required." },
        { status: 400 }
      );
    }

    // --- CRM Submission ---
    const ACCESS_CODE =
      process.env.SCALEDINO_ACCESS_CODE || "DB06-FCDB-E37D-1E18-0A07-E259";
    const API_ENDPOINT =
      process.env.SCALEDINO_API_URL ||
      "https://leadapi.scaledino.com/api/leads/web";

    const crmPayload = {
      access_code: ACCESS_CODE,
      name,
      email,
      phone,
      source: source || "Website",
      additional_col1: message || "",
      created_date: new Date().toISOString(),
    };

    let crmResponseBody = null;
    let crmStatusCode = 0;
    let crmSuccess = false;

    try {
      const crmRes = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(crmPayload),
      });

      crmStatusCode = crmRes.status;
      const crmText = await crmRes.text();

      try {
        crmResponseBody = JSON.parse(crmText);
      } catch {
        crmResponseBody = { raw: crmText };
      }

      crmSuccess = crmRes.ok;
    } catch (fetchError) {
      crmResponseBody = { error: fetchError.message };
      crmStatusCode = 0;
      crmSuccess = false;
    }

    // --- Save Lead (always, regardless of CRM result) ---
    try {
      saveLead({
        id: `${Date.now()}-${Math.random().toString(36).substring(2, 8)}`,
        submittedAt: new Date().toISOString(),
        formData: {
          name,
          email,
          phone,
          source: source || "Website",
          message: message || "",
        },
        requestPayload: crmPayload,
        crmResponse: crmResponseBody,
        crmStatusCode,
        success: crmSuccess,
      });
    } catch (writeError) {
      console.error("Failed to write lead to file:", writeError);
      return NextResponse.json(
        { success: false, message: "Please try again later." },
        { status: 500 }
      );
    }

    // --- Return Response ---
    if (crmSuccess) {
      return NextResponse.json({
        success: true,
        message: "Lead submitted successfully!",
      });
    } else {
      return NextResponse.json(
        { success: false, message: "Please try again later." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { success: false, message: "Please try again later." },
      { status: 500 }
    );
  }
}
