import { Gizmo } from "components/types";
import Image from "next/image";
import Link from "next/link";

export default function GizmoItem({ gizmo }: { gizmo: Gizmo }): JSX.Element {
  return (
    <Link href={`/gizmos/${encodeURIComponent(gizmo.resource)}`}>
      <a className="flex flex-row gap-4 items-center p-8 text-gray-200 bg-gray-800 rounded-md dark:text-gray-800 dark:bg-gray-200">
        <div className="relative flex-shrink-0 h-gizmo-item-image w-gizmo-item-image">
          <Image
            className="rounded-md"
            src={`https://el-gizmos.s3.amazonaws.com/img/GizmoSnap/${gizmo.resource}DET.jpg`}
            alt="Gizmo"
            layout="fill"
          />
        </div>
        <div className="flex flex-col gap-2 justify-center items-start">
          <h2 className="text-xl">{gizmo.title}</h2>
          <p className="text-base">{gizmo.description}</p>
        </div>
      </a>
    </Link>
  );
}
