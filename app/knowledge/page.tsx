import { PermissionGuard } from "../components/PermissionGuard";

export default function KnowledgePage() {
  return (
    <PermissionGuard kind="knowledge" id="kb1">
      <div>Knowledge Base Content</div>
    </PermissionGuard>
  );
}
