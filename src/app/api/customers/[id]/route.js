import { NextResponse } from "next/server";
import { pool } from "@/app/config/db";

// Function to handle DELETE requests
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const result = await pool.query("DELETE FROM customers WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { message: "Customer not found" },
        { status: 404 }
      );
    }
    else
    { 
      return NextResponse.json({ message: "Customer deleted successfully" });
    }
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
export async function GET(request, { params }) {
    try {
        const selectedUser = await pool.query("SELECT * FROM customers WHERE id = ?", [params.id])

        if (selectedUser.affectedRows === 0) {
            return NextResponse.json({ status: 404, message: "user not found" });
        }
        else {
            return NextResponse.json(selectedUser);
        }
    } catch (error) {
        return NextResponse.json({ status: 500, message: error.message });
    }
}
// Function to handle PUT requests
export async function PUT(request, { params }) {
  const data = await request.json();
  try {
    const { id } = params;
    const result = await pool.query("UPDATE customers SET ? WHERE id = ?", [data, id]);

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { message: "Customer not found" },
        { status: 404 }
      );
    }
    console.log("Before debugging-----------");

    return NextResponse.json({
      ...data,
      id,
    });

  } catch (error) {
        console.log("After debugging-----------");

    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
