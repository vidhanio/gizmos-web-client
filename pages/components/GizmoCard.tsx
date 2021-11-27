import Image from "next/image";

function Gizmo({ gizmo }: { gizmo: IGizmo | undefined }) {
  return gizmo ? (
    <div className="flex flex-col gap-4 justify-center items-center p-16 m-16 text-black bg-green-200 rounded-lg shadow-2xl">
      <h3 className="text-2xl text-center">{gizmo.title}</h3>
      <p className="text-base text-center">{gizmo.description}</p>
      <div className="relative w-96 h-96">
        <Image
          className="rounded-lg shadow-md"
          src={`https://el-gizmos.s3.amazonaws.com/img/GizmoSnap/${gizmo.resource}DET.jpg`}
          alt="Gizmo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-row gap-4">
        <span>
          <strong>1.</strong> {gizmo.answers[0]}
        </span>
        <span>
          <strong>2.</strong> {gizmo.answers[1]}
        </span>
        <span>
          <strong>3.</strong> {gizmo.answers[2]}
        </span>
        <span>
          <strong>4.</strong> {gizmo.answers[3]}
        </span>
        <span>
          <strong>5.</strong> {gizmo.answers[4]}
        </span>
      </div>
    </div>
  ) : (
    <div className="flex-col justify-center items-center shadow-lg rounded-white"></div>
  );
}

export default Gizmo;
