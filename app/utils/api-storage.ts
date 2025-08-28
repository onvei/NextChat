import { StateStorage } from "zustand/middleware";
import { apiFetch } from "@/app/client/api";
import { StoreKey } from "@/app/constant";

class ApiStorage implements StateStorage {
  async getItem(name: string): Promise<string | null> {
    if (name === StoreKey.Chat) {
      const res = await apiFetch(`/api/sessions`);
      if (!res.ok) return null;
      const sessions = await res.json();
      return JSON.stringify({ state: { sessions } });
    }
    return null;
  }

  async setItem(name: string, value: string): Promise<void> {
    if (name === StoreKey.Chat) {
      const data = JSON.parse(value);
      await apiFetch(`/api/sessions`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data.state.sessions),
      });
    }
  }

  async removeItem(name: string): Promise<void> {
    if (name === StoreKey.Chat) {
      await apiFetch(`/api/sessions`, { method: "DELETE" });
    }
  }

  async clear(): Promise<void> {
    await apiFetch(`/api/sessions`, { method: "DELETE" });
  }
}

export const apiStorage = new ApiStorage();
