import GizmoItem from "./components/GizmoItem";
import { useEffect, useState } from "react";
import { getGizmo, getGizmos, addGizmo, updateGizmo, deleteGizmo } from "./API";

function App() {
  const [gizmos, setGizmos] = useState<IGizmo[]>([]);

  useEffect(() => {
    async function handleGetGizmos() {
      const { data } = await getGizmos();
      setGizmos(data.gizmos);
    }
    handleGetGizmos();
  }, []);

  return (
    <div className="flex flex-col gap-16 p-16 App">
      {gizmos.map((gizmo: IGizmo) => (
        <GizmoItem key={gizmo.resource} gizmo={gizmo} />
      ))}
    </div>
  );
}

export default App;
