import { pool } from "@/app/config/db"; // Adjust the import path according to your project structure
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    const result = await pool.query("INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)", [
      name, email, subject, message
    ]);
    return NextResponse.json(result.insertId);
  } catch (error) {
    return NextResponse.json({ message: "Error submitting form", error: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
