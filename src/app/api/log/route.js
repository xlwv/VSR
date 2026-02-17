import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req) {
  console.log("🔥 ROUTE HIT");

  try {
    const text = await req.text();
    console.log("📨 Raw body received");

    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      return NextResponse.json({ success: false, error: "Invalid JSON" });
    }

    const { type = "form_submission", payload } = data;
    const timestamp = new Date().toISOString();
    const logEntry = JSON.stringify({ timestamp, type, payload }, null, 2);

    // ✅ Date-wise log file: leads/2025-02-17.log
    const today = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"
    const leadsDir = path.join(process.cwd(), "leads");
    const logFile = path.join(leadsDir, `${today}.log`);

    console.log("📄 Writing to:", logFile);

    try {
      // Create leads/ folder if it doesn't exist
      if (!fs.existsSync(leadsDir)) {
        fs.mkdirSync(leadsDir, { recursive: true });
      }

      fs.appendFileSync(logFile, logEntry + "\n---\n", "utf8");
      console.log("✅ WRITTEN SUCCESSFULLY to", logFile);
    } catch (err) {
      console.error("❌ WRITE FAILED:", err.message);
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("❌ ERROR:", error.message);
    return NextResponse.json({ success: false });
  }
}