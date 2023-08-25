import axios from 'axios';
import { FormInterface } from '../types/formInterface';

export const getForm = async (id: string): Promise<FormInterface> => {
  try {
    const { data } = await axios.get<FormInterface>(`/forms/${id}`);
    return data;
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      throw new Error(error.message);
    } else {
      throw new Error('Unknown error');
    }
  }
};
