import { NextResponse } from "next/server";

export function GET(request, { params }) {
  return NextResponse.json({ id: params.id, name: "Zain" });
}
export async function PUT(request, { params }) {
  const body = await request.json();
  if (!body.name) {
    return NextResponse.json(
      { error: "Name is required to update user" },
      { status: 400 }
    );
  }
  if (params.id > 10) {
    return NextResponse.json({ error: "Enter a valid user" }, { status: 404 });
  }
  return NextResponse.json({ id: params.id, name: body.name });
}
