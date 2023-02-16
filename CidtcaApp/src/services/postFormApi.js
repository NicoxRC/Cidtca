import axios from 'axios';

export async function postFormApi(values) {
  try {
    const res = await axios.post('/forms', values);
    return res.data;
  } catch (error) {
    return console.log(error);
  }
}
