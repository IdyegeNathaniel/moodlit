import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { message: "Not implemented — client-side Google Books fetch is used instead." },
    { status: 501 }
  );
}