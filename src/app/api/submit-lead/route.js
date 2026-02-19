import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

function logLead(entry) {
  try {
    const logDir = path.join(process.cwd(), "leads");
    const logFile = path.join(logDir, "leads.log");

    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }

    const line = JSON.stringify({ ...entry, timestamp: new Date().toISOString() }) + "\n";
    fs.appendFileSync(logFile, line, "utf8");
  } catch (err) {
    console.error("❌ Failed to write to leads.log:", err);
  }
}

export async function POST(request) {
  console.log("🔑 Submit Lead API Route Hit");

  try {
    const body = await request.json();
    const { name, email, phone, source, message } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email, and phone are required.",
        },
        { status: 400 }
      );
    }

    // Server-side secrets (NOT exposed to client)
    const ACCESS_CODE = process.env.SCALEDINO_ACCESS_CODE || "DB06-FCDB-E37D-1E18-0A07-E259";
    const API_ENDPOINT = process.env.SCALEDINO_API_URL || "https://leadapi.scaledino.com/api/leads/web";

    // Construct payload for Scaledino
    const payload = {
      access_code: ACCESS_CODE,
      name,
      email,
      phone,
      source: source || "Website",
      additional_col1: message || "",
      created_date: new Date().toISOString(),
    };

    console.log("📤 Sending to Scaledino:", { source, email });

    // Send to Scaledino
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();
    console.log("📥 Scaledino Response:", response.status, responseText);

    let result;
    try {
      result = JSON.parse(responseText);
    } catch (e) {
      result = { message: responseText };
    }

    // Return success/failure to client
    if (response.ok) {
      console.log("✅ Lead submitted successfully");

      // Log successful lead to file
      logLead({
        status: "success",
        name,
        email,
        phone,
        source: source || "Website",
        message: message || "",
      });

      return NextResponse.json({
        success: true,
        message: result?.message || "Lead submitted successfully!",
      });
    } else {
      console.error("❌ Scaledino API Error:", response.status);

      // Log failed lead to file
      logLead({
        status: "failed",
        name,
        email,
        phone,
        source: source || "Website",
        message: message || "",
        error: result?.message || `HTTP ${response.status}`,
      });

      return NextResponse.json(
        {
          success: false,
          message: result?.message || "Submission failed. Please try again.",
        },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("❌ Lead submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}