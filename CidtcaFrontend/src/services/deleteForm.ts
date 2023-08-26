import axios from 'axios';

export async function deleteForm(id: string) {
  try {
    const response = await axios.delete(`/forms/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
}
