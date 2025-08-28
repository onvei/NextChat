import { NextRequest } from "next/server";
import { prisma } from "./prisma";

export async function getUserFromRequest(req: NextRequest) {
  const auth = req.headers.get("authorization");
  if (!auth) return null;
  const token = auth.replace("Bearer ", "");
  return prisma.user.findUnique({ where: { token } });
}
