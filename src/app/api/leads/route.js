import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const logFile = path.join(process.cwd(), "leads", "leads.log");

    if (!fs.existsSync(logFile)) {
      return NextResponse.json({ leads: [] });
    }

    const raw = fs.readFileSync(logFile, "utf8");
    const lines = raw.trim().split("\n").filter(Boolean);

    const leads = lines
      .map((line) => {
        try {
          return JSON.parse(line);
        } catch {
          return null;
        }
      })
      .filter(Boolean)
      .reverse(); // newest first

    return NextResponse.json({ leads, total: leads.length });
  } catch (error) {
    console.error("❌ Failed to read leads.log:", error);
    return NextResponse.json({ leads: [], total: 0 });
  }
}
