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

type ApiDataType = {
  message: string;
  status: string;
  gizmos?: IGizmo[];
  gizmo?: IGizmo;
};
