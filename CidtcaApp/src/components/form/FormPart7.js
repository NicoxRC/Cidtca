import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import { Picker } from '@react-native-picker/picker';
import FormPart8 from './FormPart8';

export default function FormPart7(props) {
  const { form6 } = props;

  const [form7, setForm7] = useState({});
  const [statePregunta49, setStatePregunta49] = useState([]);

  const pregunta_49 = [
    { key: '1', value: 'Manejo y abastecimiento de agua potable' },
    { key: '2', value: 'Limpieza y desinfección' },
    { key: '3', value: 'Manejo de residuos solidos y liquidos' },
    { key: '4', value: 'Control integrado de plagas' },
  ];

  const newForm = (form6) => {
    setForm7({
      pregunta_1: form6.pregunta_1,
      pregunta_2: form6.pregunta_2,
      pregunta_2_otro: form6.pregunta_2_otro,
      pregunta_3: form6.pregunta_3,
      pregunta_3_puntaje: form6.pregunta_3_puntaje,
      pregunta_4: form6.pregunta_4,
      pregunta_5_numero: form6.pregunta_5_numero,
      pregunta_5_correo: form6.pregunta_5_correo,
      pregunta_6: form6.pregunta_6,
      pregunta_7: form6.pregunta_7,
      pregunta_7_vereda: form6.pregunta_7_vereda,
      pregunta_8: form6.pregunta_8,
      pregunta_9: form6.pregunta_9,
      pregunta_9_porcentaje_recibe_planta:
        form6.pregunta_9_porcentaje_recibe_planta,
      pregunta_9_porcentaje_recoge_planta:
        form6.pregunta_9_porcentaje_recoge_planta,
      pregunta_9_porcentaje_via_productor_finca:
        form6.pregunta_9_porcentaje_via_productor_finca,
      pregunta_9_otro: form6.pregunta_9_otro,
      pregunta_10: form6.pregunta_10,
      pregunta_10_porcentaje_termo_king:
        form6.pregunta_10_porcentaje_termo_king,
      pregunta_10_porcentaje_carro_particular:
        form6.pregunta_10_porcentaje_carro_particular,
      pregunta_10_porcentaje_moto: form6.pregunta_10_porcentaje_moto,
      pregunta_10_porcentaje_caballo: form6.pregunta_10_porcentaje_caballo,
      pregunta_10_otro: form6.pregunta_10_otro,
      pregunta_11: form6.pregunta_11,
      pregunta_11_otro: form6.pregunta_11_otro,
      pregunta_12: form6.pregunta_12,
      pregunta_12_otro: form6.pregunta_12_otro,
      pregunta_13: form6.pregunta_13,
      pregunta_14: form6.pregunta_14,
      pregunta_15: form6.pregunta_15,
      pregunta_16: form6.pregunta_16,
      pregunta_16_cuantos: form6.pregunta_16_cuantos,
      pregunta_17: form6.pregunta_17,
      pregunta_17_cuantos: form6.pregunta_17_cuantos,
      pregunta_18: form6.pregunta_18,
      pregunta_18_cuantos: form6.pregunta_18_cuantos,
      pregunta_19: form6.pregunta_19,
      pregunta_20: form6.pregunta_20,
      pregunta_21: form6.pregunta_21,
      pregunta_21_porcentaje_pavimentada:
        form6.pregunta_21_porcentaje_pavimentada,
      pregunta_21_porcentaje_placa_huella:
        form6.pregunta_21_porcentaje_placa_huella,
      pregunta_21_porcentaje_via_carreteable:
        form6.pregunta_21_porcentaje_via_carreteable,
      pregunta_21_porcentaje_trocha_a_pie:
        form6.pregunta_21_porcentaje_trocha_a_pie,
      pregunta_22: form6.pregunta_22,
      pregunta_22_porcentaje_pavimentada:
        form6.pregunta_21_porcentaje_pavimentada,
      pregunta_22_porcentaje_placa_huella:
        form6.pregunta_22_porcentaje_placa_huella,
      pregunta_22_porcentaje_via_carreteable:
        form6.pregunta_22_porcentaje_via_carreteable,
      pregunta_22_porcentaje_trocha_a_pie:
        form6.pregunta_22_porcentaje_trocha_a_pie,
      pregunta_23: form6.pregunta_23,
      pregunta_23_gps_n: form6.pregunta_23_gps_n,
      pregunta_23_gps_w: form6.pregunta_23_gps_w,
      pregunta_24: form6.pregunta_24,
      pregunta_25: form6.pregunta_25,
      pregunta_26: form6.pregunta_26,
      pregunta_27: form6.pregunta_27,
      pregunta_28_diaria: form6.pregunta_28_diaria,
      pregunta_28_semanal: form6.pregunta_28_semanal,
      pregunta_28_mensual: form6.pregunta_28_mensual,
      pregunta_29_yogurt_diaria: form6.pregunta_29_yogurt_diaria,
      pregunta_29_yogurt_semanal: form6.pregunta_29_yogurt_semanal,
      pregunta_29_yogurt_mensual: form6.pregunta_29_yogurt_mensual,
      pregunta_29_kumis_diaria: form6.pregunta_29_kumis_diaria,
      pregunta_29_kumis_semanal: form6.pregunta_29_kumis_semanal,
      pregunta_29_kumis_mensual: form6.pregunta_29_kumis_mensual,
      pregunta_29_cuajada_diaria: form6.pregunta_29_cuajada_diaria,
      pregunta_29_cuajada_semanal: form6.pregunta_29_cuajada_semanal,
      pregunta_29_cuajada_mensual: form6.pregunta_29_cuajada_mensual,
      pregunta_29_queso_doble_crema_diaria:
        form6.pregunta_29_queso_doble_crema_diaria,
      pregunta_29_queso_doble_crema_semanal:
        form6.pregunta_29_queso_doble_crema_semanal,
      pregunta_29_queso_doble_crema_mensual:
        form6.pregunta_29_queso_doble_crema_mensual,
      pregunta_29_queso_campesino_diaria:
        form6.pregunta_29_queso_campesino_diaria,
      pregunta_29_queso_campesino_semanal:
        form6.pregunta_29_queso_campesino_semanal,
      pregunta_29_queso_campesino_mensual:
        form6.pregunta_29_queso_campesino_mensual,
      pregunta_29_leche_diaria: form6.pregunta_29_leche_diaria,
      pregunta_29_leche_semanal: form6.pregunta_29_leche_semanal,
      pregunta_29_leche_mensual: form6.pregunta_29_leche_mensual,
      pregunta_29_quesos_madurados_diaria:
        form6.pregunta_29_quesos_madurados_diaria,
      pregunta_29_quesos_madurados_semanal:
        form6.pregunta_29_quesos_madurados_semanal,
      pregunta_29_quesos_madurados_mensual:
        form6.pregunta_29_quesos_madurados_mensual,
      pregunta_29_requeson_diaria: form6.pregunta_29_requeson_diaria,
      pregunta_29_requeson_semanal: form6.pregunta_29_requeson_semanal,
      pregunta_29_requeson_mensual: form6.pregunta_29_requeson_mensual,
      pregunta_29_arequipe_diaria: form6.pregunta_29_arequipe_diaria,
      pregunta_29_arequipe_semanal: form6.pregunta_29_arequipe_semanal,
      pregunta_29_arequipe_mensual: form6.pregunta_29_arequipe_mensual,
      pregunta_29_otros: form6.pregunta_29_otros,
      pregunta_30: form6.pregunta_30,
      pregunta_31: form6.pregunta_31,
      pregunta_32: form6.pregunta_32,
      pregunta_33: form6.pregunta_33,
      pregunta_34: form6.pregunta_34,
      pregunta_35: form6.pregunta_35,
      pregunta_36: form6.pregunta_36,
      pregunta_37: form6.pregunta_37,
      pregunta_37_otro: form6.pregunta_37_otro,
      pregunta_38: form6.pregunta_38,
      pregunta_38_otro: form6.pregunta_38_otro,
      pregunta_39: form6.pregunta_39,
      pregunta_39_otro: form6.pregunta_39_otro,
    });
  };

  useEffect(() => {
    newForm(form6);
  }, [form6]);

  useEffect(() => {
    statePregunta49.length > 0
      ? setForm7({ ...form7, pregunta_49: statePregunta49 })
      : null;
  }, [statePregunta49]);

  const handleChange = (name, value) => {
    setForm7({ ...form7, [name]: value });
  };

  return (
    <View>
      <View style={styles.container_form}>
        <Text style={styles.textTitle}>
          CRITERIO 7 CONDICIONES ACTUALES DE APLICACIÓN DE CALIDAD EN LA
          TRANSFORMACION
        </Text>
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          40. Actualmente ¿Tiene registros INVIMA?
        </Text>
        <Picker
          enabled={true}
          mode="dropdown"
          onValueChange={(e) => handleChange('pregunta_40', e)}
          selectedValue={form7.pregunta_40}
        >
          <Picker.Item label="Respuesta..." />
          <Picker.Item label={'Si'} value={'Si'} key={1} />
          <Picker.Item label={'No'} value={'No'} key={2} />
        </Picker>
        <Text style={styles.text}>Cuales</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_40_cuales', e)}
          placeholder="Respuesta..."
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          41. ¿Cuentan con documentos y registros de Buenas Prácticas de
          Manufactura (BPM)?
        </Text>
        <Picker
          enabled={true}
          mode="dropdown"
          onValueChange={(e) => handleChange('pregunta_41', e)}
          selectedValue={form7.pregunta_41}
        >
          <Picker.Item label="Respuesta..." />
          <Picker.Item label={'Si'} value={'Si'} key={1} />
          <Picker.Item label={'No'} value={'No'} key={2} />
        </Picker>
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          42. ¿Dispone de agua potable para la transformación del producto?
        </Text>
        <Picker
          enabled={true}
          mode="dropdown"
          onValueChange={(e) => handleChange('pregunta_42', e)}
          selectedValue={form7.pregunta_42}
        >
          <Picker.Item label="Respuesta..." />
          <Picker.Item label={'Si'} value={'Si'} key={1} />
          <Picker.Item label={'No'} value={'No'} key={2} />
        </Picker>
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>43. ¿Realiza pruebas de plataforma?</Text>
        <Picker
          enabled={true}
          mode="dropdown"
          onValueChange={(e) => handleChange('pregunta_43', e)}
          selectedValue={form7.pregunta_43}
        >
          <Picker.Item label="Respuesta..." />
          <Picker.Item label={'Si'} value={'Si'} key={1} />
          <Picker.Item label={'No'} value={'No'} key={2} />
        </Picker>
        <Text style={styles.text}>Cuales</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_43_cuales', e)}
          placeholder="Respuesta..."
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          44. ¿Registra la información obtenida de pruebas o muestras de la
          leche o productos derivados?
        </Text>
        <Picker
          enabled={true}
          mode="dropdown"
          onValueChange={(e) => handleChange('pregunta_44', e)}
          selectedValue={form7.pregunta_44}
        >
          <Picker.Item label="Respuesta..." />
          <Picker.Item label={'Si'} value={'Si'} key={1} />
          <Picker.Item label={'No'} value={'No'} key={2} />
        </Picker>
        <Text style={styles.text}>Como</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_44_como', e)}
          placeholder="Respuesta..."
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          45. ¿Realiza análisis de la información obtenida?
        </Text>
        <Picker
          enabled={true}
          mode="dropdown"
          onValueChange={(e) => handleChange('pregunta_45', e)}
          selectedValue={form7.pregunta_45}
        >
          <Picker.Item label="Respuesta..." />
          <Picker.Item label={'Si'} value={'Si'} key={1} />
          <Picker.Item label={'No'} value={'No'} key={2} />
        </Picker>
        <Text style={styles.text}>Como</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_45_como', e)}
          placeholder="Respuesta..."
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          46. ¿Utiliza indumentaria adecuada para los procesos?
        </Text>
        <Picker
          enabled={true}
          mode="dropdown"
          onValueChange={(e) => handleChange('pregunta_46', e)}
          selectedValue={form7.pregunta_46}
        >
          <Picker.Item label="Respuesta..." />
          <Picker.Item label={'Si'} value={'Si'} key={1} />
          <Picker.Item label={'No'} value={'No'} key={2} />
        </Picker>
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          47. ¿Usa desinfectantes autorizados e implementa rotación de estos?
        </Text>
        <Picker
          enabled={true}
          mode="dropdown"
          onValueChange={(e) => handleChange('pregunta_47', e)}
          selectedValue={form7.pregunta_47}
        >
          <Picker.Item label="Respuesta..." />
          <Picker.Item label={'Si'} value={'Si'} key={1} />
          <Picker.Item label={'No'} value={'No'} key={2} />
        </Picker>
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          48. ¿Aplica algun manejo o tratamiento de residuos sólidos y líquidos?
        </Text>
        <Picker
          enabled={true}
          mode="dropdown"
          onValueChange={(e) => handleChange('pregunta_48', e)}
          selectedValue={form7.pregunta_48}
        >
          <Picker.Item label="Respuesta..." />
          <Picker.Item label={'Si'} value={'Si'} key={1} />
          <Picker.Item label={'No'} value={'No'} key={2} />
        </Picker>
        <Text style={styles.text}>Cual</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_48_cual', e)}
          placeholder="Respuesta..."
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          49. ¿Cuenta con programas de gestión de buenas prácticas de
          manufactura documentando e implementando?
        </Text>
        <MultipleSelectList
          setSelected={(e) => setStatePregunta49(e)}
          data={pregunta_49}
          save="value"
          onSelect={() => statePregunta49}
        />
      </View>
      <FormPart8 form7={form7} />
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
