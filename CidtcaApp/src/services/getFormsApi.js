import axios from 'axios';

export async function getFormsApi() {
  try {
    const res = await axios.get('/forms');
    return res.data;
  } catch (error) {
    console.error(error);
  }
}
