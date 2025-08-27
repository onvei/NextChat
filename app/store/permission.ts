import { StoreKey } from "../constant";
import { createPersistStore } from "../utils/store";

export type MemberRole = "admin" | "member";

export interface PermissionState {
  role: MemberRole;
  resources: string[];
  knowledgeBases: string[];
}

const DEFAULT_PERMISSION_STATE: PermissionState = {
  role: "member",
  resources: [],
  knowledgeBases: [],
};

export const usePermissionStore = createPersistStore(
  DEFAULT_PERMISSION_STATE,
  (set, get) => ({
    setRole(role: MemberRole) {
      set({ role });
    },
    addResource(id: string) {
      set({ resources: Array.from(new Set([...get().resources, id])) });
    },
    removeResource(id: string) {
      set({ resources: get().resources.filter((r) => r !== id) });
    },
    addKnowledgeBase(id: string) {
      set({
        knowledgeBases: Array.from(new Set([...get().knowledgeBases, id])),
      });
    },
    removeKnowledgeBase(id: string) {
      set({
        knowledgeBases: get().knowledgeBases.filter((k) => k !== id),
      });
    },
  }),
  {
    name: StoreKey.Permission,
    version: 1,
  },
);

export type PermissionStore = ReturnType<typeof usePermissionStore>;
