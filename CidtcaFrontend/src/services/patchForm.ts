import axios from 'axios';
import type { EditaValuesInterface } from '../interfaces/editaValues';
import type { FormInterface } from '../interfaces/form';

export async function patchForms(
  id: string,
  values: EditaValuesInterface
): Promise<FormInterface> {
  try {
    const { data } = await axios.patch<FormInterface>(`/forms/${id}`, values);
    return data;
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      throw new Error(error.message);
    } else {
      throw new Error('Unknown error');
    }
  }
}
