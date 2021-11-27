import GizmoCard from "./components/GizmoCard";
import { useEffect, useState } from "react";
import { getGizmo, getGizmos, addGizmo, updateGizmo, deleteGizmo } from "./API";

function App() {
  const [gizmo, setGizmo] = useState<IGizmo | undefined>(undefined);

  useEffect(() => {
    handleGetGizmo(1200);
  }, []);

  async function handleGetGizmo(resource: number) {
    await getGizmo(resource)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Gizmo not deleted");
        } else {
          setGizmo(data.gizmo);
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
    <div className="h-full App">
      <GizmoCard gizmo={gizmo} />
    </div>
  );
}

export default App;
