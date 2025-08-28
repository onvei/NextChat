import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { randomUUID } from "crypto";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  if (!email || !password) {
    return NextResponse.json({ error: "missing_credentials" }, { status: 400 });
  }
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || user.password !== password) {
    return NextResponse.json({ error: "invalid_credentials" }, { status: 401 });
  }
  const token = randomUUID();
  await prisma.user.update({ where: { id: user.id }, data: { token } });
  return NextResponse.json({ token });
}
