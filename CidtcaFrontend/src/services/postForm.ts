import axios from 'axios';
import type { FormInterface } from '../interfaces/form';
import type { InitialValuesFormType } from '../types/initialValuesForm';

export const postForm = async (
  values: InitialValuesFormType
): Promise<FormInterface> => {
  try {
    const { data } = await axios.post<FormInterface>('/forms', values);
    return data;
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      throw new Error(error.message);
    } else {
      throw new Error('Unknown error');
    }
  }
};
