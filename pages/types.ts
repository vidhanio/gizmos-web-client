export type Gizmo = {
  title: string;
  materials: string;
  description: string;
  resource: number;
  answers: string[];
};

export type GizmoProps = {
  gizmo: Gizmo;
};

export type GizmoResponse = {
  message: string;
  gizmo: Gizmo;
};

export type GizmosResponse = {
  message: string;
  gizmos: Gizmo[];
};
