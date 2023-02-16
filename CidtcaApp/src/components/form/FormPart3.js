import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import { Picker } from '@react-native-picker/picker';
import FormPart4 from './FormPart4';

export default function FormPart3(props) {
  const { form2 } = props;

  const [form3, setForm3] = useState({});
  const [statePregunta21, setStatePregunta21] = useState([]);
  const [statePregunta22, setStatePregunta22] = useState([]);

  const pregunta_21 = [
    { key: '1', value: 'pavimentada' },
    { key: '2', value: 'placa_huella' },
    { key: '3', value: 'via_carreteable' },
    { key: '4', value: 'trocha_a_pie' },
  ];
  const pregunta_22 = [
    { key: '1', value: 'pavimentada' },
    { key: '2', value: 'placa_huella' },
    { key: '3', value: 'via_carreteable' },
    { key: '4', value: 'trocha_a_pie' },
  ];

  const newForm = (form2) => {
    setForm3({
      pregunta_1: form2.pregunta_1,
      pregunta_2: form2.pregunta_2,
      pregunta_2_otro: form2.pregunta_2_otro,
      pregunta_3: form2.pregunta_3,
      pregunta_3_puntaje: form2.pregunta_3_puntaje,
      pregunta_4: form2.pregunta_4,
      pregunta_5_numero: form2.pregunta_5_numero,
      pregunta_5_correo: form2.pregunta_5_correo,
      pregunta_6: form2.pregunta_6,
      pregunta_7: form2.pregunta_7,
      pregunta_7_vereda: form2.pregunta_7_vereda,
      pregunta_8: form2.pregunta_8,
      pregunta_9: form2.pregunta_9,
      pregunta_9_porcentaje_recibe_planta:
        form2.pregunta_9_porcentaje_recibe_planta,
      pregunta_9_porcentaje_recoge_planta:
        form2.pregunta_9_porcentaje_recoge_planta,
      pregunta_9_porcentaje_via_productor_finca:
        form2.pregunta_9_porcentaje_via_productor_finca,
      pregunta_9_otro: form2.pregunta_9_otro,
      pregunta_10: form2.pregunta_10,
      pregunta_10_porcentaje_termo_king:
        form2.pregunta_10_porcentaje_termo_king,
      pregunta_10_porcentaje_carro_particular:
        form2.pregunta_10_porcentaje_carro_particular,
      pregunta_10_porcentaje_moto: form2.pregunta_10_porcentaje_moto,
      pregunta_10_porcentaje_caballo: form2.pregunta_10_porcentaje_caballo,
      pregunta_10_otro: form2.pregunta_10_otro,
      pregunta_11: form2.pregunta_11,
      pregunta_11_otro: form2.pregunta_11_otro,
      pregunta_12: form2.pregunta_12,
      pregunta_12_otro: form2.pregunta_12_otro,
      pregunta_13: form2.pregunta_13,
      pregunta_14: form2.pregunta_14,
      pregunta_15: form2.pregunta_15,
      pregunta_16: form2.pregunta_16,
      pregunta_16_cuantos: form2.pregunta_16_cuantos,
      pregunta_17: form2.pregunta_17,
      pregunta_17_cuantos: form2.pregunta_17_cuantos,
      pregunta_18: form2.pregunta_18,
      pregunta_18_cuantos: form2.pregunta_18_cuantos,
    });
  };

  useEffect(() => {
    newForm(form2);
  }, [form2]);

  useEffect(() => {
    statePregunta21.length > 0
      ? setForm3({ ...form3, pregunta_21: statePregunta21 })
      : null;
    statePregunta22.length > 0
      ? setForm3({ ...form3, pregunta_22: statePregunta22 })
      : null;
  }, [statePregunta21, statePregunta22]);

  const handleChange = (name, value) => {
    setForm3({ ...form3, [name]: value });
  };

  return (
    <View>
      <View style={styles.container_form}>
        <Text style={styles.textTitle}>
          CRITERIO 3 UBICACIÓN Y ACCESIBILIDAD A LA PLANTA DE PROCESAMIENTO y/o
          CENTRO DE ACOPIO
        </Text>
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          19. ¿Cuenta con planta de proces y/o acopio?
        </Text>
        <Picker
          enabled={true}
          mode="dropdown"
          onValueChange={(e) => handleChange('pregunta_19', e)}
          selectedValue={form3.pregunta_19}
        >
          <Picker.Item label="Respuesta..." />
          <Picker.Item label={'Si'} value={'Si'} key={1} />
          <Picker.Item label={'No'} value={'No'} key={2} />
        </Picker>
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          20. ¿Dónde se ubica su planta de proceso y/o acopio (vereda,
          direccion)
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_20', e)}
          placeholder="Respuesta..."
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          21. En lo que respecta a vías, que tipo de acceso predomina para el
          transporte de leche a la planta
        </Text>
        <MultipleSelectList
          setSelected={(e) => setStatePregunta21(e)}
          data={pregunta_21}
          save="value"
          onSelect={() => statePregunta21}
        />
        {form3.hasOwnProperty('pregunta_21')
          ? form3.pregunta_21.length > 0
            ? form3.pregunta_21.map((el) => (
                <View key={el}>
                  <Text style={styles.text}>Porcentaje {el}:</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={(e) =>
                      handleChange(`pregunta_21_porcentaje_${el}`, e)
                    }
                    placeholder="Respuesta..."
                    keyboardType="numeric"
                  />
                </View>
              ))
            : null
          : null}
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          22. En lo que respecta a vías, que tipo de acceso predomina para
          comercializar sus productos
        </Text>
        <MultipleSelectList
          setSelected={(e) => setStatePregunta22(e)}
          data={pregunta_22}
          save="value"
          onSelect={() => statePregunta22}
        />
        {form3.hasOwnProperty('pregunta_22')
          ? form3.pregunta_22.length > 0
            ? form3.pregunta_22.map((el) => (
                <View key={el}>
                  <Text style={styles.text}>Porcentaje {el}:</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={(e) =>
                      handleChange(`pregunta_22_porcentaje_${el}`, e)
                    }
                    placeholder="Respuesta..."
                    keyboardType="numeric"
                  />
                </View>
              ))
            : null
          : null}
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          23. ¿Cuál es la temperatura ambiente aprox. donde se ubica la planta?
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_23', e)}
          placeholder="Respuesta..."
          keyboardType="numeric"
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>23.1 GPS</Text>
        <Text style={styles.text}>Coordenada N</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_23_gps_n', e)}
          placeholder="Respuesta..."
          keyboardType="numeric"
        />
        <Text style={styles.text}>Coordenada W</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_23_gps_w', e)}
          placeholder="Respuesta..."
          keyboardType="numeric"
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          24. ¿Cuál es la altura sobre el nivel del mar en la que se ubica la
          planta?
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_24', e)}
          placeholder="Respuesta..."
          keyboardType="numeric"
        />
      </View>
      <FormPart4 form3={form3} />
    </View>
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
});
