import { PermissionGuard } from "../components/PermissionGuard";

export default function ResourcePage() {
  return (
    <PermissionGuard kind="resource" id="default">
      <div>Protected Resource Content</div>
    </PermissionGuard>
  );
}
