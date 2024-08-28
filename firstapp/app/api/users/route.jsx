import { NextResponse } from "next/server";

export function GET(request) {
  return NextResponse.json([
    {
      id: 1,
      name: "John",
    },
    {
      id: 2,
      name: "Micheal",
    },
  ]);
}
export async function POST(request) {
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  return NextResponse.json(
    { id: Date.now(), name: body.name },
    { status: 201 }
  );
}
