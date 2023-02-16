import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import { Picker } from '@react-native-picker/picker';
import FormPart5 from './FormPart5';

export default function FormPart4(props) {
  const { form3 } = props;

  const [form4, setForm4] = useState({});
  const [statePregunta26, setStatePregunta26] = useState([]);

  const productosLacteos = [
    { key: '1', value: 'cuajada' },
    { key: '2', value: 'yogurt' },
    { key: '3', value: 'queso_doble_crema' },
    { key: '4', value: 'wuesos_madurados' },
    { key: '5', value: 'kumis' },
    { key: '6', value: 'requeson' },
    { key: '7', value: 'queso_mozzarella' },
    { key: '8', value: 'queso_campesino' },
    { key: '9', value: 'arequipe' },
  ];

  const valoresTiempo = [
    { id: '1', name: 'diaria' },
    { id: '2', name: 'semanal' },
    { id: '3', name: 'mensual' },
  ];

  const newForm = (form3) => {
    setForm4({
      pregunta_1: form3.pregunta_1,
      pregunta_2: form3.pregunta_2,
      pregunta_2_otro: form3.pregunta_2_otro,
      pregunta_3: form3.pregunta_3,
      pregunta_3_puntaje: form3.pregunta_3_puntaje,
      pregunta_4: form3.pregunta_4,
      pregunta_5_numero: form3.pregunta_5_numero,
      pregunta_5_correo: form3.pregunta_5_correo,
      pregunta_6: form3.pregunta_6,
      pregunta_7: form3.pregunta_7,
      pregunta_7_vereda: form3.pregunta_7_vereda,
      pregunta_8: form3.pregunta_8,
      pregunta_9: form3.pregunta_9,
      pregunta_9_porcentaje_recibe_planta:
        form3.pregunta_9_porcentaje_recibe_planta,
      pregunta_9_porcentaje_recoge_planta:
        form3.pregunta_9_porcentaje_recoge_planta,
      pregunta_9_porcentaje_via_productor_finca:
        form3.pregunta_9_porcentaje_via_productor_finca,
      pregunta_9_otro: form3.pregunta_9_otro,
      pregunta_10: form3.pregunta_10,
      pregunta_10_porcentaje_termo_king:
        form3.pregunta_10_porcentaje_termo_king,
      pregunta_10_porcentaje_carro_particular:
        form3.pregunta_10_porcentaje_carro_particular,
      pregunta_10_porcentaje_moto: form3.pregunta_10_porcentaje_moto,
      pregunta_10_porcentaje_caballo: form3.pregunta_10_porcentaje_caballo,
      pregunta_10_otro: form3.pregunta_10_otro,
      pregunta_11: form3.pregunta_11,
      pregunta_11_otro: form3.pregunta_11_otro,
      pregunta_12: form3.pregunta_12,
      pregunta_12_otro: form3.pregunta_12_otro,
      pregunta_13: form3.pregunta_13,
      pregunta_14: form3.pregunta_14,
      pregunta_15: form3.pregunta_15,
      pregunta_16: form3.pregunta_16,
      pregunta_16_cuantos: form3.pregunta_16_cuantos,
      pregunta_17: form3.pregunta_17,
      pregunta_17_cuantos: form3.pregunta_17_cuantos,
      pregunta_18: form3.pregunta_18,
      pregunta_18_cuantos: form3.pregunta_18_cuantos,
      pregunta_19: form3.pregunta_19,
      pregunta_20: form3.pregunta_20,
      pregunta_21: form3.pregunta_21,
      pregunta_21_porcentaje_pavimentada:
        form3.pregunta_21_porcentaje_pavimentada,
      pregunta_21_porcentaje_placa_huella:
        form3.pregunta_21_porcentaje_placa_huella,
      pregunta_21_porcentaje_via_carreteable:
        form3.pregunta_21_porcentaje_via_carreteable,
      pregunta_21_porcentaje_trocha_a_pie:
        form3.pregunta_21_porcentaje_trocha_a_pie,
      pregunta_22: form3.pregunta_22,
      pregunta_22_porcentaje_pavimentada:
        form3.pregunta_21_porcentaje_pavimentada,
      pregunta_22_porcentaje_placa_huella:
        form3.pregunta_22_porcentaje_placa_huella,
      pregunta_22_porcentaje_via_carreteable:
        form3.pregunta_22_porcentaje_via_carreteable,
      pregunta_22_porcentaje_trocha_a_pie:
        form3.pregunta_22_porcentaje_trocha_a_pie,
      pregunta_23: form3.pregunta_23,
      pregunta_23_gps_n: form3.pregunta_23_gps_n,
      pregunta_23_gps_w: form3.pregunta_23_gps_w,
      pregunta_24: form3.pregunta_24,
    });
  };

  useEffect(() => {
    newForm(form3);
  }, [form3]);

  useEffect(() => {
    statePregunta26.length > 0
      ? setForm4({ ...form4, pregunta_26: statePregunta26 })
      : null;
  }, [statePregunta26]);

  const handleChange = (name, value) => {
    setForm4({ ...form4, [name]: value });
  };

  return (
    <View>
      <View style={styles.container_form}>
        <Text style={styles.textTitle}>
          CRITERIO 4 VOLÚMENES DE PRODUCCIÓN Y/O TRANSFORMACIÓN
        </Text>
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          25. ¿Actualmente realiza procesos de transformación de la leche?
        </Text>
        <Picker
          enabled={true}
          mode="dropdown"
          onValueChange={(e) => handleChange('pregunta_25', e)}
          selectedValue={form4.pregunta_25}
        >
          <Picker.Item label="Respuesta..." />
          <Picker.Item label={'Si'} value={'Si'} key={1} />
          <Picker.Item label={'No'} value={'No'} key={2} />
        </Picker>
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          26. ¿Qué tipo de productos lácteos elabora?
        </Text>
        <MultipleSelectList
          setSelected={(e) => setStatePregunta26(e)}
          data={productosLacteos}
          save="value"
          onSelect={() => statePregunta26}
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          27. ¿Qué Otro tipo de derivados produce?
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_27', e)}
          placeholder="Respuesta..."
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          28. ¿Qué cantidad en litros Lt de leche utiliza, para todos los
          procesos que realiza?
        </Text>
        {valoresTiempo.map((el) => (
          <View key={el.id}>
            <Text style={styles.text}>{el.name}</Text>
            <TextInput
              style={styles.input}
              onChangeText={(e) => handleChange(`pregunta_28_${el.name}`, e)}
              placeholder="Respuesta..."
              keyboardType="numeric"
            />
          </View>
        ))}
        <Text style={styles.text}>
          29. ¿Qué cantidad, (ya sea litros Lt si es liquido o Kilos Kg si es
          peso) puede producir?
        </Text>
        {statePregunta26.length > 0
          ? statePregunta26.map((el) => (
              <View key={el}>
                <Text style={styles.text}>{el}</Text>
                {valoresTiempo.map((value) => (
                  <View key={value.id}>
                    <Text style={styles.text}>{value.name}:</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={(e) =>
                        handleChange(`pregunta_29_${el}_${value.name}`, e)
                      }
                      placeholder="Respuesta..."
                      keyboardType="numeric"
                    />
                  </View>
                ))}
              </View>
            ))
          : null}
        <View>
          <Text style={styles.text}>Otros</Text>
          <TextInput
            style={styles.input}
            onChangeText={(e) => handleChange('pregunta_29_otros', e)}
            placeholder="Respuesta..."
          />
        </View>
      </View>
      <FormPart5 form4={form4} />
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
