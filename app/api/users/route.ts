import { NextRequest, NextResponse } from "next/server";
import { authenticateUser, registerUser } from "@/app/lib/user-store";

export async function POST(req: NextRequest) {
  const { action, username, password } = await req.json();
  if (!username || !password) {
    return NextResponse.json({ error: "missing_credentials" }, { status: 400 });
  }
  try {
    if (action === "register") {
      const user = await registerUser(username, password);
      return NextResponse.json({ apiKey: user.apiKeys[0] });
    }
    if (action === "login") {
      const user = await authenticateUser(username, password);
      if (!user) {
        return NextResponse.json(
          { error: "invalid_credentials" },
          { status: 401 },
        );
      }
      return NextResponse.json({ apiKey: user.apiKeys[0] });
    }
    return NextResponse.json({ error: "unknown_action" }, { status: 400 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}

export const runtime = "nodejs";
