import AsyncStorage from '@react-native-async-storage/async-storage';
import { postFormApi } from './postFormApi';

export async function postFormLocal(keys) {
  let values = await AsyncStorage.multiGet(keys);
  try {
    for (let el of values) {
      await postFormApi(JSON.parse(el[1]));
    }
    await AsyncStorage.clear();
    return 'success';
  } catch (error) {
    console.log(error);
  }
}
