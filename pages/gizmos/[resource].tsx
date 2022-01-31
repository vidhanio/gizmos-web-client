import { getGizmo, getGizmos } from "api";
import { useEffect, useState } from "react";

import GizmoPage from "components/gizmo-page";
import { useRouter } from "next/router";

export default function Page() {
  const [gizmo, setGizmo] = useState<Gizmo>({
    title: "",
    materials: "",
    description: "",
    resource: 0,
    answers: [],
  });

  const router = useRouter();
  const resource = router.query.resource as string;

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
      const { data } = await getGizmo(Number(resource));
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
