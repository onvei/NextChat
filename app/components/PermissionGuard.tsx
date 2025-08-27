"use client";

import { ReactNode } from "react";
import { usePermissionStore } from "../store/permission";

export function PermissionGuard({
  kind,
  id,
  children,
}: {
  kind: "resource" | "knowledge";
  id: string;
  children: ReactNode;
}) {
  const { role, resources, knowledgeBases } = usePermissionStore();
  const list = kind === "resource" ? resources : knowledgeBases;

  if (role !== "admin" && !list.includes(id)) {
    return <div>Access denied</div>;
  }

  return <>{children}</>;
}
