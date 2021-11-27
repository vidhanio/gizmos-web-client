import axios, { AxiosResponse } from "axios";

const baseUrl = "http://localhost:8000";

export async function getGizmo(
  resource: number
): Promise<AxiosResponse<ApiDataType>> {
  try {
    const gizmo: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/gizmo/" + resource.toString()
    );
    return gizmo;
  } catch (error) {
    throw error;
  }
}

export async function getGizmos(): Promise<AxiosResponse<ApiDataType>> {
  try {
    const gizmos: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/gizmos"
    );
    return gizmos;
  } catch (error) {
    throw error;
  }
}

export async function addGizmo(
  gizmo: IGizmo
): Promise<AxiosResponse<ApiDataType>> {
  try {
    const addedGizmo = {
      title: gizmo.title,
      materials: gizmo.materials,
      description: gizmo.description,
      resource: gizmo.resource,
      answers: gizmo.answers,
    };
    const addGizmo: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/add-gizmo",
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
): Promise<AxiosResponse<ApiDataType>> {
  try {
    const updatedGizmo: AxiosResponse<ApiDataType> = await axios.put(
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
): Promise<AxiosResponse<ApiDataType>> {
  try {
    const deletedGizmo: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/delete-gizmo/${resource}`
    );
    return deletedGizmo;
  } catch (error) {
    throw error;
  }
}
