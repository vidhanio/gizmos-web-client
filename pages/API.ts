import axios, { AxiosResponse } from "axios";

const baseUrl = "http://localhost:8000";

export async function getGizmos(): Promise<AxiosResponse<GizmosResponse>> {
  try {
    const gizmos: AxiosResponse<GizmosResponse> = await axios.get(
      `${baseUrl}/gizmos`
    );
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
      `${baseUrl}/gizmo/${resource.toString()}`
    );
    return gizmo;
  } catch (error) {
    throw error;
  }
}

export async function addGizmo(
  gizmo: IGizmo
): Promise<AxiosResponse<GizmoResponse>> {
  try {
    const addedGizmo = {
      title: gizmo.title,
      materials: gizmo.materials,
      description: gizmo.description,
      resource: gizmo.resource,
      answers: gizmo.answers,
    };
    const addGizmo: AxiosResponse<GizmoResponse> = await axios.post(
      `${baseUrl}/add-gizmo`,
      addedGizmo
    );
    return addGizmo;
  } catch (error) {
    throw error;
  }
}

export async function updateGizmo(
  resource: number,
  gizmo: IGizmo
): Promise<AxiosResponse<GizmoResponse>> {
  try {
    const updatedGizmo: AxiosResponse<GizmoResponse> = await axios.put(
      `${baseUrl}/edit-gizmo/${resource}`,
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
      `${baseUrl}/delete-gizmo/${resource}`
    );
    return deletedGizmo;
  } catch (error) {
    throw error;
  }
}
