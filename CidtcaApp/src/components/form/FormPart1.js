import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  RefreshControl,
  StyleSheet,
  Image,
} from 'react-native';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import { Picker } from '@react-native-picker/picker';
import FormPart2 from './FormPart2';

export default function FormPart1() {
  const [form1, setForm1] = useState({});
  const [statePregunta3, setStatePregunta3] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const pregunta_3 = [
    { key: '1', value: 'rut' },
    { key: '2', value: 'camara de comercio' },
    { key: '3', value: 'registro sanitario' },
    { key: '4', value: 'concepto sanitario' },
    { key: '5', value: 'ninguno' },
  ];

  const municipios = [
    { name: 'Guachucal', id: 1 },
    { name: 'Aldana', id: 2 },
    { name: 'Cuaspud', id: 3 },
    { name: 'Cumbal', id: 4 },
    { name: 'Contadero', id: 5 },
    { name: 'Cordoba', id: 6 },
    { name: 'Gualmatan', id: 7 },
    { name: 'Iles', id: 8 },
    { name: 'Ipiales', id: 9 },
    { name: 'Potosi', id: 10 },
    { name: 'Puerres', id: 11 },
    { name: 'Pupiales', id: 12 },
    { name: 'Pasto', id: 13 },
    { name: 'Tangua', id: 14 },
    { name: 'Nariño', id: 15 },
    { name: 'La Florida', id: 16 },
    { name: 'Mallama', id: 17 },
    { name: 'Buesaco', id: 18 },
    { name: 'Guaitarilla', id: 19 },
    { name: 'Tuquerres', id: 20 },
    { name: 'Ospina', id: 21 },
    { name: 'Sapuyes', id: 22 },
  ];

  useEffect(() => {
    statePregunta3.length > 0
      ? setForm1({ ...form1, pregunta_3: statePregunta3 })
      : null;
  }, [statePregunta3]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setForm1({});
      setRefreshing(false);
    }, 2000);
  }, []);

  const handleChange = (name, value) => {
    setForm1({ ...form1, [name]: value });
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={{ backgroundColor: '#E7F1F1' }}>
        <View style={{ width: '90%', alignSelf: 'center' }}>
          <Image
            source={require('../../assets/logo2.jpg')}
            style={styles.image}
          />
        </View>
        <View style={styles.container_form}>
          <Text style={styles.textTitle}>
            CRITERIO 1 NIVEL DE FORMALIDAD DE LA ORGANIZACIÓN O EMPRESA
          </Text>
        </View>
        <View style={styles.container_form}>
          <Text style={styles.text}>1. Tipo de personeria: </Text>
          <Picker
            enabled={true}
            mode="dropdown"
            onValueChange={(e) => handleChange('pregunta_1', e)}
            selectedValue={form1.pregunta_1}
          >
            <Picker.Item label="Respuesta..." />
            <Picker.Item label={'Juridica'} value={'Juridica'} key={1} />
            <Picker.Item label={'Natural'} value={'Natural'} key={2} />
          </Picker>
        </View>
        <View style={styles.container_form}>
          <Text style={styles.text}>2. Tipo de organizacion: </Text>
          <Picker
            enabled={true}
            mode="dropdown"
            onValueChange={(e) => handleChange('pregunta_2', e)}
            selectedValue={form1.pregunta_2}
          >
            <Picker.Item label="Respuesta..." />
            <Picker.Item label={'Cooperativa'} value={'Cooperativa'} key={1} />
            <Picker.Item label={'Asociacion'} value={'Asociacion'} key={2} />
            <Picker.Item label={'SAS'} value={'SAS'} key={3} />
          </Picker>
          <Text style={styles.text}>Otro:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(e) => handleChange('pregunta_2_otro', e)}
            placeholder="Respuesta..."
          />
        </View>
        <View style={styles.container_form}>
          <Text style={styles.text}>3. Su organización cuenta con: </Text>
          <MultipleSelectList
            setSelected={(e) => setStatePregunta3(e)}
            data={pregunta_3}
            save="value"
            onSelect={() => statePregunta3}
          />
          <Text style={styles.text}>Concepto sanitario porcentaje:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(e) => handleChange('pregunta_3_puntaje', e)}
            placeholder="Respuesta..."
          />
        </View>
        <View style={styles.container_form}>
          <Text style={styles.text}>
            4. Representante legal o propietario:{' '}
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(e) => handleChange('pregunta_4', e)}
            placeholder="Respuesta..."
          />
        </View>
        <View style={styles.container_form}>
          <Text style={styles.text}>5. Información de Contacto: </Text>
          <Text style={styles.text}>Numero: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(e) => handleChange('pregunta_5_numero', e)}
            placeholder="Respuesta..."
            keyboardType="numeric"
          />
          <Text style={styles.text}>Correo: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(e) => handleChange('pregunta_5_correo', e)}
            placeholder="Respuesta..."
            keyboardType="email-address"
          />
        </View>
        <View style={styles.container_form}>
          <Text style={styles.text}>6. Actividad principal: </Text>
          <Picker
            enabled={true}
            mode="dropdown"
            onValueChange={(e) => handleChange('pregunta_6', e)}
            selectedValue={form1.pregunta_6}
          >
            <Picker.Item label="Respuesta..." />
            <Picker.Item
              label={'Transformacion'}
              value={'Transformacion'}
              key={1}
            />
            <Picker.Item
              label={'Acopio y venta de leche'}
              value={'Acopio y venta de leche'}
              key={2}
            />
          </Picker>
        </View>
        <View style={styles.container_form}>
          <Text style={styles.text}>7. Municipio:</Text>
          <Picker
            enabled={true}
            mode="dropdown"
            onValueChange={(e) => handleChange('pregunta_7', e)}
            selectedValue={form1.pregunta_7}
          >
            <Picker.Item label="Respuesta..." />
            {municipios.map((el) => (
              <Picker.Item
                label={el.name.toString()}
                value={el.name.toString()}
                key={el.id.toString()}
              />
            ))}
          </Picker>
          <Text style={styles.text}>Vereda: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(e) => handleChange('pregunta_7_vereda', e)}
            placeholder="Respuesta..."
          />
        </View>
        <View style={styles.container_form}>
          <Text style={styles.text}>
            8. ¿realiza el aporte al fondo nacional del ganado?
          </Text>
          <Picker
            enabled={true}
            mode="dropdown"
            onValueChange={(e) => handleChange('pregunta_8', e)}
            selectedValue={form1.pregunta_8}
          >
            <Picker.Item label="Respuesta..." />
            <Picker.Item label={'Si'} value={'Si'} key={1} />
            <Picker.Item label={'No'} value={'No'} key={2} />
          </Picker>
        </View>
        <FormPart2 form1={form1} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container_form: {
    flex: 1,
    alignSelf: 'center',
    width: '90%',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  textTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
  },
  input: {
    height: 40,
    marginTop: 5,
    marginBottom: 5,
  },
  image: {
    width: 'auto',
    height: 230,
    resizeMode: 'contain',
  },
});
