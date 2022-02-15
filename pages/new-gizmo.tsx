import { useEffect, useState } from "react";

import { Gizmo } from "components/types";
import { postGizmo } from "api";

export default function NewGizmoPage(): JSX.Element {
  const [gizmo, setGizmo] = useState<Gizmo | null>(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [materials, setMaterials] = useState("");
  const [resource, setResource] = useState(0);

  useEffect(() => {
    if (gizmo) {
      postGizmo(gizmo);
    }
  }, [gizmo]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setGizmo({
      title,
      description,
      materials,
      resource,
      answers: [],
    });
  };

  return (
    <div className="flex flex-col gap-16 p-16">
      <h1>New Gizmo</h1>

      <form className="flex flex-col gap-16" onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            className="bg-gray-800"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <label>
          Materials:
          <input
            type="text"
            className="bg-gray-800"
            value={materials}
            onChange={(event) => setMaterials(event.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            className="bg-gray-800"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <label>
          Resource:
          <input type="number" className="bg-gray-800" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
