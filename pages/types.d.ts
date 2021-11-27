interface IGizmo {
  _id: string;
  title: string;
  materials: string;
  description: string;
  resource: number;
  answers: string[];
}

type GizmoProps = {
  gizmo: IGizmo;
};

type GizmoResponse = {
  message: string;
  status: string;
  gizmo: IGizmo;
};

type GizmosResponse = {
  message: string;
  status: string;
  gizmos: IGizmo[];
};
