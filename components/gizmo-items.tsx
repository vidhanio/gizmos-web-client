import { Gizmo } from "components/types";
import GizmoItem from "./gizmo-item";

export default function GizmoItems({
  gizmos,
}: {
  gizmos: Gizmo[];
}): JSX.Element {
  return (
    <div className="flex flex-col gap-8">
      {gizmos.map((gizmo) => (
        <GizmoItem key={gizmo.resource} gizmo={gizmo} />
      ))}
    </div>
  );
}
