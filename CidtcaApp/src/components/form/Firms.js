import React, { useState } from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import { postFormApi } from '../../services/postFormApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Signature from 'react-native-signature-canvas';

export default function Firms(props) {
  const {
    navigation,
    route: { params },
  } = props;

  const netInfo = useNetInfo();
  const [form, setForm] = useState(params);

  const firmaEncuestado = (img) => {
    setForm({ ...form, firma_encuestado: img });
  };

  const firmaEncuestador = (img) => {
    setForm({ ...form, firma_encuestador: img });
  };

  const style = `
  .m-signature -pad--footer
    .button.clear {
      background-color: red;
      color: #FFF;
    }
    .button.save {
      background-color: green;
      color: #FFF;
    }
  `;

  const submit = async () => {
    if (netInfo.isConnected) {
      connectOn();
    } else {
      connectOff();
    }
  };

  const connectOn = async () => {
    const res = await postFormApi(form);
    if (res) {
      Alert.alert('Creado');
      navigation.navigate('Inicio');
    } else {
      Alert.alert('No se pudo crear');
    }
  };

  const connectOff = async () => {
    try {
      await AsyncStorage.setItem(
        `${form.nombre_encuestado}_${form.cedula_encuestado}`,
        JSON.stringify(form)
      );
      Alert.alert('Creado');
      navigation.navigate('Inicio');
    } catch (e) {
      Alert.alert('No se pudo crear');
      console.log(e);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: '45%', width: '100%', marginBottom: 25 }}>
        <Signature
          onOK={(img) => firmaEncuestado(img)}
          descriptionText="Firma Encuestado"
          clearText="Borrar"
          confirmText="Guardar"
          imageType="image/png"
          style={{ flex: 1, width: '100%', height: '100%' }}
          webStyle={style}
        />
      </View>
      <View style={{ height: '45%', width: '100%', marginBottom: 20 }}>
        <Signature
          onOK={(img) => firmaEncuestador(img)}
          descriptionText="Firma Encuestador"
          clearText="Borrar"
          confirmText="Guardar"
          imageType="image/png"
          style={{ flex: 1, width: '100%', height: '100%' }}
          webStyle={style}
        />
      </View>
      <View style={styles.buttonSub}>
        <Button title="Crear Formulario" onPress={submit} color={'#5EA2A2'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonSub: {
    width: 200,
    alignSelf: 'center',
    marginBottom: 10,
  },
});
