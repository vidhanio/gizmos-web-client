import GizmoItem from "./components/GizmoItem";
import { useEffect, useState } from "react";
import { getGizmo, getGizmos, addGizmo, updateGizmo, deleteGizmo } from "./API";

function App() {
  const [gizmos, setGizmos] = useState<IGizmo[]>([]);

  useEffect(() => {
    async function fetchGizmos() {
      const { data } = await getGizmos();
      setGizmos(data.gizmos);
    }
    fetchGizmos();
  }, []);

  async function handleGetGizmos() {
    await getGizmos()
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Gizmos could not be retrieved.");
        } else {
          setGizmos(data.gizmos);
        }
      })
      .catch((err) => console.log(err));
  }

  /*
  const handleSaveGizmo = (e: React.FormEvent, formData: IGizmo): void => {
    e.preventDefault();
    addGizmo(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error("Error! Gizmo not saved");
        }
        setGizmos(data.gizmos);
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateGizmo = (gizmo: IGizmo) => {
    updateGizmo(gizmo)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Gizmo not updated");
        }
        setGizmos(data.gizmos);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteGizmo = (resource: number) => {
    deleteGizmo(resource)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Gizmo not deleted");
        }
        setGizmos(data.gizmos);
      })
      .catch((err) => console.log(err));
  };*/

  return (
    <div className="flex flex-col gap-16 p-16 App">
      {gizmos.map((gizmo: IGizmo) => (
        <GizmoItem key={gizmo.resource} gizmo={gizmo} />
      ))}
    </div>
  );
}

export default App;
