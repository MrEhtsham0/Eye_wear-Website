import { pool } from "@/app/config/db"; // Importing database pool configuration
import { NextResponse } from "next/server";

// Function to handle GET requests
export async function GET() {
  try {
    // Querying the database to select all customers
    const results = await pool.query("SELECT * FROM customers");
    // Returning the results as a JSON response
    return NextResponse.json(results);
  } catch (error) {
    // Handling errors by returning an error message with a status code of 500
    return NextResponse.json(
      { message: error.message }, // Sending error message in JSON format
      {
        status: 500, // Setting status code to 500 (Internal Server Error)
      }
    );
  }
}

// Function to handle POST requests
export async function POST(request) {
  try {
    const { firstName, lastName, email, address, mobileNo, leftEyesight, rightEyesight } = await request.json();
    
    const result = await pool.query("INSERT INTO customers SET ?", {
      firstName,
      lastName,
      email,
      address,
      mobileNo,
      leftEyesight,
      rightEyesight,
    });

    return NextResponse.json(result.insertId);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });

  }
}
