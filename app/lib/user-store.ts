import fs from "fs";
import path from "path";
import { randomUUID } from "crypto";
import { scryptSync, randomBytes, timingSafeEqual } from "crypto";

export interface UserRecord {
  username: string;
  passwordHash: string; // salt:hash format
  apiKeys: string[];
  role: "user" | "admin";
}

function getDataFile() {
  return (
    process.env.USER_DATA_FILE || path.join(process.cwd(), "data/users.json")
  );
}

function readUsers(): Record<string, UserRecord> {
  try {
    const txt = fs.readFileSync(getDataFile(), "utf8");
    return JSON.parse(txt) as Record<string, UserRecord>;
  } catch {
    return {};
  }
}

function writeUsers(users: Record<string, UserRecord>) {
  const file = getDataFile();
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(users, null, 2));
}

function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const buf = scryptSync(password, salt, 64);
  return `${salt}:${buf.toString("hex")}`;
}

function verifyPassword(password: string, stored: string): boolean {
  const [salt, key] = stored.split(":");
  const hashedBuffer = Buffer.from(key, "hex");
  const derived = scryptSync(password, salt, 64);
  try {
    return timingSafeEqual(hashedBuffer, derived);
  } catch {
    return false;
  }
}

export async function registerUser(username: string, password: string) {
  const users = readUsers();
  if (users[username]) {
    throw new Error("user_exists");
  }
  const apiKey = randomUUID();
  const user: UserRecord = {
    username,
    passwordHash: hashPassword(password),
    apiKeys: [apiKey],
    role: "user",
  };
  users[username] = user;
  writeUsers(users);
  return user;
}

export async function authenticateUser(username: string, password: string) {
  const users = readUsers();
  const user = users[username];
  if (!user) return null;
  return verifyPassword(password, user.passwordHash) ? user : null;
}

export async function getUserByApiKey(apiKey: string) {
  const users = readUsers();
  return Object.values(users).find((u) => u.apiKeys.includes(apiKey)) || null;
}
