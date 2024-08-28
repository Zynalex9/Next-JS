import { NextResponse } from "next/server";
import { schema } from "./schema";
export function GET(request) {
  return NextResponse.json([
    {
      id: 1,
      name: "John",
      email: "abc@gmail.com",
      age: 30,
    },
    {
      id: 2,
      name: "Micheal",
      email: "abc@h.com",
      age: 20,
    },
  ]);
}
export async function POST(request) {
  const body = await request.json()
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  return NextResponse.json(
    { id: Date.now(), name: body.name, email: body.email, age: body.age },
    { status: 200 }
  );
}
