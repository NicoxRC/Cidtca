import axios from 'axios';

export async function patchForms(id: string, values: any) {
  try {
    const response = await axios.patch(`/forms/${id}`, values);
    return response.data;
  } catch (error) {
    return error;
  }
}
