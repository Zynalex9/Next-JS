import { NextResponse } from "next/server";
import { schema } from "../schema";
import prisma from '@/prisma/client';

export async function GET(request, { params }) {
  const userId = parseInt(params.id, 10); 
  if (isNaN(userId)) {
    return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
  }
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
  return NextResponse.json(user);
}
export async function PUT(request, { params }) {
  const body = await request.json();
  const validation = schema.safeParse(body);
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
