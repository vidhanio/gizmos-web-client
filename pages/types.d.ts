type Gizmo = {
  title: string;
  materials: string;
  description: string;
  resource: number;
  answers: string[];
};

type GizmoProps = {
  gizmo: Gizmo;
};

type GizmoResponse = {
  message: string;
  gizmo: Gizmo;
};

type GizmosResponse = {
  message: string;
  gizmos: Gizmo[];
};
