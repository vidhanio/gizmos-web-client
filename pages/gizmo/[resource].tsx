import { useRouter } from "next/router";
import GizmoPage from "../components/GizmoPage";
import { getGizmo, getGizmos } from "../API";
import { useState, useEffect } from "react";

function Gizmo() {
  const [gizmo, setGizmo] = useState<IGizmo>({
    _id: "",
    title: "",
    materials: "",
    description: "",
    resource: 0,
    answers: [],
  });

  const router = useRouter();
  const { resource } = router.query;

  useEffect(() => {
    if (resource === undefined) {
      return;
    }
    async function handleRandomGizmo() {
      const { data } = await getGizmos();
      const gizmo = data.gizmos[Math.floor(Math.random() * data.gizmos.length)];
      setGizmo(gizmo);
    }
    async function handleGetGizmo() {
      const { data } = await getGizmo(Number(resource as string));
      setGizmo(data.gizmo);
    }
    if (resource === "random") {
      handleRandomGizmo();
    } else {
      handleGetGizmo();
    }
  }, [resource]);

  return <GizmoPage gizmo={gizmo} />;
}

export default Gizmo;
