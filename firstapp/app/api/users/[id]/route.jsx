import { NextResponse } from "next/server";
import { schema } from "../schema";
export function GET(request, { params }) {
  return NextResponse.json({ id: params.id, name: "Zain" });
}
export async function PUT(request, { params }) {
  const body = await request.json();
  const validation = schema.safeParse(body)
  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  }
  if (params.id > 10) {
    return NextResponse.json({ error: "Enter a valid user" }, { status: 404 });
  }
  return NextResponse.json(
    { id: params.id, name: body.name, email: body.email, age: body.age },
    { status: 200 }
  );
}

export function DELETE(request, { params }) {
  if (params.id > 10) {
    return NextResponse.json({ error: "Inavalid user" }, { status: 400 });
  }
  return NextResponse.json({});
}
