import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import FormPart6 from './FormPart6';

export default function FormPart5(props) {
  const { form4 } = props;

  const [form5, setForm5] = useState({});

  const newForm = (form4) => {
    setForm5({
      pregunta_1: form4.pregunta_1,
      pregunta_2: form4.pregunta_2,
      pregunta_2_otro: form4.pregunta_2_otro,
      pregunta_3: form4.pregunta_3,
      pregunta_3_puntaje: form4.pregunta_3_puntaje,
      pregunta_4: form4.pregunta_4,
      pregunta_5_numero: form4.pregunta_5_numero,
      pregunta_5_correo: form4.pregunta_5_correo,
      pregunta_6: form4.pregunta_6,
      pregunta_7: form4.pregunta_7,
      pregunta_7_vereda: form4.pregunta_7_vereda,
      pregunta_8: form4.pregunta_8,
      pregunta_9: form4.pregunta_9,
      pregunta_9_porcentaje_recibe_planta:
        form4.pregunta_9_porcentaje_recibe_planta,
      pregunta_9_porcentaje_recoge_planta:
        form4.pregunta_9_porcentaje_recoge_planta,
      pregunta_9_porcentaje_via_productor_finca:
        form4.pregunta_9_porcentaje_via_productor_finca,
      pregunta_9_otro: form4.pregunta_9_otro,
      pregunta_10: form4.pregunta_10,
      pregunta_10_porcentaje_termo_king:
        form4.pregunta_10_porcentaje_termo_king,
      pregunta_10_porcentaje_carro_particular:
        form4.pregunta_10_porcentaje_carro_particular,
      pregunta_10_porcentaje_moto: form4.pregunta_10_porcentaje_moto,
      pregunta_10_porcentaje_caballo: form4.pregunta_10_porcentaje_caballo,
      pregunta_10_otro: form4.pregunta_10_otro,
      pregunta_11: form4.pregunta_11,
      pregunta_11_otro: form4.pregunta_11_otro,
      pregunta_12: form4.pregunta_12,
      pregunta_12_otro: form4.pregunta_12_otro,
      pregunta_13: form4.pregunta_13,
      pregunta_14: form4.pregunta_14,
      pregunta_15: form4.pregunta_15,
      pregunta_16: form4.pregunta_16,
      pregunta_16_cuantos: form4.pregunta_16_cuantos,
      pregunta_17: form4.pregunta_17,
      pregunta_17_cuantos: form4.pregunta_17_cuantos,
      pregunta_18: form4.pregunta_18,
      pregunta_18_cuantos: form4.pregunta_18_cuantos,
      pregunta_19: form4.pregunta_19,
      pregunta_20: form4.pregunta_20,
      pregunta_21: form4.pregunta_21,
      pregunta_21_porcentaje_pavimentada:
        form4.pregunta_21_porcentaje_pavimentada,
      pregunta_21_porcentaje_placa_huella:
        form4.pregunta_21_porcentaje_placa_huella,
      pregunta_21_porcentaje_via_carreteable:
        form4.pregunta_21_porcentaje_via_carreteable,
      pregunta_21_porcentaje_trocha_a_pie:
        form4.pregunta_21_porcentaje_trocha_a_pie,
      pregunta_22: form4.pregunta_22,
      pregunta_22_porcentaje_pavimentada:
        form4.pregunta_21_porcentaje_pavimentada,
      pregunta_22_porcentaje_placa_huella:
        form4.pregunta_22_porcentaje_placa_huella,
      pregunta_22_porcentaje_via_carreteable:
        form4.pregunta_22_porcentaje_via_carreteable,
      pregunta_22_porcentaje_trocha_a_pie:
        form4.pregunta_22_porcentaje_trocha_a_pie,
      pregunta_23: form4.pregunta_23,
      pregunta_23_gps_n: form4.pregunta_23_gps_n,
      pregunta_23_gps_w: form4.pregunta_23_gps_w,
      pregunta_24: form4.pregunta_24,
      pregunta_25: form4.pregunta_25,
      pregunta_26: form4.pregunta_26,
      pregunta_27: form4.pregunta_27,
      pregunta_28_diaria: form4.pregunta_28_diaria,
      pregunta_28_semanal: form4.pregunta_28_semanal,
      pregunta_28_mensual: form4.pregunta_28_mensual,
      pregunta_29_yogurt_diaria: form4.pregunta_29_yogurt_diaria,
      pregunta_29_yogurt_semanal: form4.pregunta_29_yogurt_semanal,
      pregunta_29_yogurt_mensual: form4.pregunta_29_yogurt_mensual,
      pregunta_29_kumis_diaria: form4.pregunta_29_kumis_diaria,
      pregunta_29_kumis_semanal: form4.pregunta_29_kumis_semanal,
      pregunta_29_kumis_mensual: form4.pregunta_29_kumis_mensual,
      pregunta_29_cuajada_diaria: form4.pregunta_29_cuajada_diaria,
      pregunta_29_cuajada_semanal: form4.pregunta_29_cuajada_semanal,
      pregunta_29_cuajada_mensual: form4.pregunta_29_cuajada_mensual,
      pregunta_29_queso_doble_crema_diaria:
        form4.pregunta_29_queso_doble_crema_diaria,
      pregunta_29_queso_doble_crema_semanal:
        form4.pregunta_29_queso_doble_crema_semanal,
      pregunta_29_queso_doble_crema_mensual:
        form4.pregunta_29_queso_doble_crema_mensual,
      pregunta_29_queso_campesino_diaria:
        form4.pregunta_29_queso_campesino_diaria,
      pregunta_29_queso_campesino_semanal:
        form4.pregunta_29_queso_campesino_semanal,
      pregunta_29_queso_campesino_mensual:
        form4.pregunta_29_queso_campesino_mensual,
      pregunta_29_leche_diaria: form4.pregunta_29_leche_diaria,
      pregunta_29_leche_semanal: form4.pregunta_29_leche_semanal,
      pregunta_29_leche_mensual: form4.pregunta_29_leche_mensual,
      pregunta_29_quesos_madurados_diaria:
        form4.pregunta_29_quesos_madurados_diaria,
      pregunta_29_quesos_madurados_semanal:
        form4.pregunta_29_quesos_madurados_semanal,
      pregunta_29_quesos_madurados_mensual:
        form4.pregunta_29_quesos_madurados_mensual,
      pregunta_29_requeson_diaria: form4.pregunta_29_requeson_diaria,
      pregunta_29_requeson_semanal: form4.pregunta_29_requeson_semanal,
      pregunta_29_requeson_mensual: form4.pregunta_29_requeson_mensual,
      pregunta_29_arequipe_diaria: form4.pregunta_29_arequipe_diaria,
      pregunta_29_arequipe_semanal: form4.pregunta_29_arequipe_semanal,
      pregunta_29_arequipe_mensual: form4.pregunta_29_arequipe_mensual,
      pregunta_29_otros: form4.pregunta_29_otros,
    });
  };

  useEffect(() => {
    newForm(form4);
  }, [form4]);

  const handleChange = (name, value) => {
    setForm5({ ...form5, [name]: value });
  };

  return (
    <View>
      <View style={styles.container_form}>
        <Text style={styles.textTitle}>
          CRITERIO 5 NUMERO DE EMPLEADOS O PERSONAS QUE DERIVAN SU SUSTENTO DE
          LA EMPRESA
        </Text>
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          30. ¿Cuantos años de experiencia tiene en el sector lácteo?
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_30', e)}
          placeholder="Respuesta..."
          keyboardType="numeric"
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          31. ¿Cuál es el número de personal fijo que trabaja en la planta y/o
          centro acopio?
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_31', e)}
          placeholder="Respuesta..."
          keyboardType="numeric"
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          32. ¿Cuál es el número de personal OCASIONAL que trabaja en la planta
          y/o centro acopio?
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_32', e)}
          placeholder="Respuesta..."
          keyboardType="numeric"
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          33. ¿Cuantas familias se ven favorecidas por la planta de
          procesamiento o centro de acopio, la venta y la elaboración de
          productos derivados de leche?
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_33', e)}
          placeholder="Respuesta..."
          keyboardType="numeric"
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          34. ¿Pertenece a algún grupo, asociación, organismo o queseros
          reconocido de segundo nivel?
        </Text>
        <Picker
          enabled={true}
          mode="dropdown"
          onValueChange={(e) => handleChange('pregunta_34', e)}
          selectedValue={form5.pregunta_34}
        >
          <Picker.Item label="Respuesta..." />
          <Picker.Item label={'Si'} value={'Si'} key={1} />
          <Picker.Item label={'No'} value={'No'} key={2} />
        </Picker>
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          35. Si su respuesta anterior es afirmativa, responda las siguientes
          preguntas, ¿ Conoce cuantas organizaiones ademas de la suya pertenecen
          al grupo, asociación u organismo de segundo nivel?
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_35', e)}
          placeholder="Respuesta..."
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          36. Cual es el nombre del grupo, asociación o organismo
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_36', e)}
          placeholder="Respuesta..."
        />
      </View>
      <FormPart6 form5={form5} />
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
