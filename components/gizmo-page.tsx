import ErrorPage from "next/error";
import Image from "next/image";

export default function Gizmo({ gizmo }: { gizmo: Gizmo }): JSX.Element {
  return gizmo ? (
    <div className="flex flex-col gap-8 justify-center items-center p-16 w-screen h-screen">
      <h3 className="text-2xl text-center">{gizmo.title}</h3>
      <p className="text-base text-center">{gizmo.description}</p>
      <Image
        className="rounded-lg"
        src={`https://el-gizmos.s3.amazonaws.com/img/GizmoSnap/${gizmo.resource}DET.jpg`}
        alt="Gizmo"
        layout="intrinsic"
        width={512}
        height={340}
      />
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
    <ErrorPage statusCode={404} />
  );
}
