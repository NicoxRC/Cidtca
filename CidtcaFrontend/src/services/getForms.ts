import axios from "axios";

export const getForms = async () => {
  try {
    const response = await axios.get("/forms");
    return response.data;
  } catch (error) {
    return console.log(error);
  }
};
