import Image from "next/image";
import Link from "next/link";

function Gizmo({ gizmo }: { gizmo: IGizmo }) {
  return (
    <Link href={`/gizmo/${encodeURIComponent(gizmo.resource)}`}>
      <div className="flex flex-row gap-4 justify-center items-center p-8 text-white bg-black rounded-md cursor-pointer dark:text-black dark:bg-white">
        <Image
          className="rounded-lg"
          src={`https://el-gizmos.s3.amazonaws.com/img/GizmoSnap/${gizmo.resource}DET.jpg`}
          alt="Gizmo"
          layout="intrinsic"
          width={128}
          height={85}
        />
        <div className="flex flex-col gap-2 justify-center items-center">
          <div>
            <h2 className="text-xl">{gizmo.title}</h2>
            <p className="text-base">{gizmo.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Gizmo;
