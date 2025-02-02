import prisma from "@/prisma/client";
import { NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcrypt";
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});
export async function POST(request) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(
      { error: "Please enter valid details" },
      { status: 400 }
    );
  }
  const user = await prisma.user.findUnique({
    where: { email: body.email },
  });
  if (user) {
    return NextResponse.json({ error: "User Already Exist" }, { error: 401 });
  }
  const hashPassword = await bcrypt.hash(body.password, 10);
  const newUser = await prisma.user.create({
    data: {
      email: body.email,
      hashPassword,
    },
  });
  return NextResponse.json({ email: body.email });
}
