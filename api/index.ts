import axios, { AxiosResponse } from "axios";

const baseUrl = "http://localhost:8000/gizmos";

export async function getGizmos(): Promise<AxiosResponse<GizmosResponse>> {
  try {
    const gizmos: AxiosResponse<GizmosResponse> = await axios.get(`${baseUrl}`);
    return gizmos;
  } catch (error) {
    throw error;
  }
}

export async function getGizmo(
  resource: number
): Promise<AxiosResponse<GizmoResponse>> {
  try {
    const gizmo: AxiosResponse<GizmoResponse> = await axios.get(
      `${baseUrl}/${resource}`
    );
    console.log(gizmo);
    return gizmo;
  } catch (error) {
    throw error;
  }
}

export async function createGizmo(
  gizmo: Gizmo
): Promise<AxiosResponse<GizmoResponse>> {
  try {
    const createdGizmo = {
      title: gizmo.title,
      materials: gizmo.materials,
      description: gizmo.description,
      resource: gizmo.resource,
      answers: gizmo.answers,
    };
    const createGizmo: AxiosResponse<GizmoResponse> = await axios.post(
      `${baseUrl}`,
      gizmo
    );
    return createGizmo;
  } catch (error) {
    throw error;
  }
}

export async function editGizmo(
  resource: number,
  gizmo: Gizmo
): Promise<AxiosResponse<GizmoResponse>> {
  try {
    const updatedGizmo: AxiosResponse<GizmoResponse> = await axios.put(
      `${baseUrl}/${resource}`,
      gizmo
    );
    return updatedGizmo;
  } catch (error) {
    throw error;
  }
}

export async function deleteGizmo(
  resource: number
): Promise<AxiosResponse<GizmoResponse>> {
  try {
    const deletedGizmo: AxiosResponse<GizmoResponse> = await axios.delete(
      `${baseUrl}/${resource}`
    );
    return deletedGizmo;
  } catch (error) {
    throw error;
  }
}
