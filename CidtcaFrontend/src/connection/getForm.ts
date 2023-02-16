import axios from "axios";

export const getForm = async (id: number) => {
  try {
    const response = await axios.get(`/forms/${id}`);
    return response.data;
  } catch (error) {
    return console.log(error);
  }
};
