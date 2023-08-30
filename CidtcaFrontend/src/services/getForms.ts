import axios from 'axios';
import type { FormInterface } from '../interfaces/form';

export const getForms = async (): Promise<FormInterface[]> => {
  try {
    const { data } = await axios.get<FormInterface[]>('/forms');
    return data;
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      throw new Error(error.message);
    } else {
      throw new Error('Unknown error');
    }
  }
};
