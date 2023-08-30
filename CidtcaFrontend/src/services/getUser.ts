import axios from 'axios';
import md5 from 'md5';
import type { UserInterface } from '../interfaces/User';
import type { InitialValuesLoginType } from '../types/initialValuesLogin';

export const getUser = async (
  values: InitialValuesLoginType
): Promise<UserInterface[]> => {
  try {
    const { data } = await axios.get<UserInterface[]>(
      `/user?user=${values.user}&password=${md5(values.password)}`
    );
    return data;
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      throw new Error(error.message);
    } else {
      throw new Error('Unknown error');
    }
  }
};
