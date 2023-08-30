import axios from 'axios';

export const deleteForm = async (id: string): Promise<void> => {
  try {
    await axios.delete(`/forms/${id}`);
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      throw new Error(error.message);
    } else {
      throw new Error('Unknown error');
    }
  }
};
