import GizmoItems from "./gizmo-items";
import SearchBar from "./search-bar";
import { useState } from "react";

export default function GizmoHomePage(): JSX.Element {
  const [gizmos, setGizmos] = useState<Gizmo[]>([]);

  return (
    <div className="flex flex-col gap-16 p-16">
      <SearchBar setGizmos={setGizmos} />
      <GizmoItems gizmos={gizmos} />
    </div>
  );
}
