import path from "path";
import fs from "fs";

process.env.USER_DATA_FILE = path.join(process.cwd(), "data/users.test.json");

let registerUser: any;
let authenticateUser: any;

beforeAll(async () => {
  ({ registerUser, authenticateUser } = await import("../app/lib/user-store"));
});

afterAll(() => {
  if (fs.existsSync(process.env.USER_DATA_FILE!)) {
    fs.unlinkSync(process.env.USER_DATA_FILE!);
  }
});

test("register and authenticate user", async () => {
  const user = await registerUser("alice", "password123");
  expect(user.username).toBe("alice");
  const ok = await authenticateUser("alice", "password123");
  expect(ok).not.toBeNull();
  const bad = await authenticateUser("alice", "bad");
  expect(bad).toBeNull();
});
