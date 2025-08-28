import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { getUserFromRequest } from "@/app/lib/auth";

export async function GET(req: NextRequest) {
  const user = await getUserFromRequest(req);
  if (!user)
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const sessions = await prisma.chatSession.findMany({
    where: { userId: user.id },
    include: { messages: true },
  });
  return NextResponse.json(sessions);
}

export async function POST(req: NextRequest) {
  const user = await getUserFromRequest(req);
  if (!user)
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const { title } = await req.json();
  const session = await prisma.chatSession.create({
    data: { title, userId: user.id },
  });
  return NextResponse.json(session);
}

export async function PUT(req: NextRequest) {
  const user = await getUserFromRequest(req);
  if (!user)
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const body = await req.json();
  if (Array.isArray(body)) {
    await prisma.chatMessage.deleteMany({
      where: { session: { userId: user.id } },
    });
    await prisma.chatSession.deleteMany({ where: { userId: user.id } });
    for (const s of body) {
      await prisma.chatSession.create({
        data: {
          id: s.id,
          title: s.topic || s.title || "",
          userId: user.id,
          messages: {
            create: (s.messages || []).map((m: any) => ({
              id: m.id,
              role: m.role,
              content:
                typeof m.content === "string"
                  ? m.content
                  : JSON.stringify(m.content),
              userId: user.id,
            })),
          },
        },
      });
    }
    return NextResponse.json({});
  }
  const { id, title } = body;
  const session = await prisma.chatSession.update({
    where: { id },
    data: { title },
  });
  return NextResponse.json(session);
}

export async function DELETE(req: NextRequest) {
  const user = await getUserFromRequest(req);
  if (!user)
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const { id } = await req.json();
  await prisma.chatSession.delete({ where: { id } });
  return NextResponse.json({});
}
