import axios from 'axios';
import md5 from 'md5';

export const getUser = async (values: any) => {
  try {
    const response = await axios.get(
      `/user?user=${values.user}&password=${md5(values.password)}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
