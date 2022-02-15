import { useEffect, useState } from "react";

import { Gizmo } from "components/types";
import { getGizmos } from "api";

export default function SearchBar({
  setGizmos,
}: {
  setGizmos: React.Dispatch<React.SetStateAction<Gizmo[]>>;
}): JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    async function handleGetGizmos() {
      const { data } = await getGizmos();
      console.log(data);
      const gizmos = data.gizmos.filter((gizmo) =>
        gizmo.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setGizmos(gizmos);
    }
    handleGetGizmos();
  }, [searchQuery]);

  return (
    <input
      value={searchQuery}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setSearchQuery(e.target.value)
      }
      className="p-2 text-gray-200 bg-gray-800 rounded-md dark:text-gray-800 dark:bg-gray-200"
    />
  );
}
