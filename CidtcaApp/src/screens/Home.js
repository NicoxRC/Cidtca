import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Alert, Button, Image, StyleSheet, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import { getFormsApi } from '../services/getFormsApi';
import { getFormsLocal } from '../services/getFormsLocal';
import { postFormLocal } from '../services/postFormLocal';
import Cards from '../components/cards/Cards';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
  const [forms, setForms] = useState([]);
  const navigation = useNavigation();
  const netInfo = useNetInfo();

  useEffect(() => {
    if (netInfo.isConnected) {
      formsApi();
    } else {
      formsLocal();
    }
  }, [netInfo]);

  const formsApi = async () => {
    const response = await getFormsApi();
    setForms(response);
  };

  const formsLocal = async () => {
    let keys = await AsyncStorage.getAllKeys();
    const response = await getFormsLocal(keys);
    setForms(response);
  };

  const uploadLocal = async () => {
    if (netInfo.isConnected) {
      let keys = await AsyncStorage.getAllKeys();
      if (keys.length > 0) {
        const res = await postFormLocal(keys);
        res === 'success'
          ? Alert.alert('Los formularios se subieron correctamente')
          : Alert.alert('Los formularios no se pudieron subir');
      } else {
        Alert.alert('No hay formularios pendientes para subir');
      }
    } else {
      Alert.alert('Se necesita internet');
    }
  };

  const refresh = async () => {
    if (netInfo.isConnected) {
      formsApi();
    } else {
      formsLocal();
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.header}>
        <Image source={require('../assets/logo2.jpg')} style={styles.image} />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="Crear Formulario"
              color={'#5EA2A2'}
              onPress={() => navigation.navigate('CreateForm')}
            />
            <View style={styles.button}>
              <Button
                title="Subir formularios a la nube"
                color={'#5EA2A2'}
                onPress={uploadLocal}
              />
            </View>
            <View style={styles.button}>
              <Button title="Refrescar" color={'#5EA2A2'} onPress={refresh} />
            </View>
          </View>
        </View>
      </View>
      <Cards forms={forms} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#E7F1F1',
  },
  header: {
    width: '90%',
    alignSelf: 'center',
  },
  image: {
    width: 'auto',
    height: 230,
    resizeMode: 'contain',
  },
  button: {
    width: 150,
    marginTop: 2,
    marginBottom: 3,
  },
  buttons: {
    alignSelf: 'flex-start',
  },
});
