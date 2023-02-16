import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getFormsLocal(keys) {
  let forms = [];
  try {
    for (let el of keys) {
      let jsonValue = await AsyncStorage.getItem(el);
      forms.push(JSON.parse(jsonValue));
    }
    return forms;
  } catch (error) {
    console.log(error);
  }
}
