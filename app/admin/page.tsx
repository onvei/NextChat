"use client";

import { useState } from "react";
import { usePermissionStore } from "../store/permission";

export default function AdminPage() {
  const {
    role,
    setRole,
    resources,
    knowledgeBases,
    addResource,
    removeResource,
    addKnowledgeBase,
    removeKnowledgeBase,
  } = usePermissionStore();

  const [resInput, setResInput] = useState("");
  const [kbInput, setKbInput] = useState("");

  if (role !== "admin") {
    return (
      <div>
        Access denied.{" "}
        <button onClick={() => setRole("admin")}>Become admin</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Panel</h1>
      <section>
        <h2>Member Role</h2>
        <select value={role} onChange={(e) => setRole(e.target.value as any)}>
          <option value="admin">admin</option>
          <option value="member">member</option>
        </select>
      </section>
      <section>
        <h2>Resources</h2>
        <ul>
          {resources.map((r) => (
            <li key={r}>
              {r} <button onClick={() => removeResource(r)}>remove</button>
            </li>
          ))}
        </ul>
        <input
          value={resInput}
          onChange={(e) => setResInput(e.target.value)}
          placeholder="resource id"
        />
        <button
          onClick={() => {
            addResource(resInput);
            setResInput("");
          }}
        >
          add
        </button>
      </section>
      <section>
        <h2>Knowledge Bases</h2>
        <ul>
          {knowledgeBases.map((k) => (
            <li key={k}>
              {k} <button onClick={() => removeKnowledgeBase(k)}>remove</button>
            </li>
          ))}
        </ul>
        <input
          value={kbInput}
          onChange={(e) => setKbInput(e.target.value)}
          placeholder="knowledge id"
        />
        <button
          onClick={() => {
            addKnowledgeBase(kbInput);
            setKbInput("");
          }}
        >
          add
        </button>
      </section>
    </div>
  );
}
