import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { getUserFromRequest } from "@/app/lib/auth";

export async function GET(req: NextRequest) {
  const user = await getUserFromRequest(req);
  if (!user)
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const sessionId = req.nextUrl.searchParams.get("sessionId");
  if (!sessionId)
    return NextResponse.json({ error: "missing_session" }, { status: 400 });
  const messages = await prisma.chatMessage.findMany({
    where: { sessionId },
    orderBy: { createdAt: "asc" },
  });
  return NextResponse.json(messages);
}

export async function POST(req: NextRequest) {
  const user = await getUserFromRequest(req);
  if (!user)
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const { sessionId, role, content } = await req.json();
  const message = await prisma.chatMessage.create({
    data: { sessionId, role, content, userId: user.id },
  });
  return NextResponse.json(message);
}
