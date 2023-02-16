import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import { Picker } from '@react-native-picker/picker';
import FormPart7 from './FormPart7';

export default function FormPart6(props) {
  const { form5 } = props;

  const [form6, setForm6] = useState({});
  const [statePregunta38, setStatePregunta38] = useState([]);
  const [statePregunta39, setStatePregunta39] = useState([]);

  const pregunta_38 = [
    { key: '1', value: 'zona de recepcion de producto' },
    { key: '2', value: 'zona de procesamiento' },
    { key: '3', value: 'zona de pesaje y empaque' },
    { key: '4', value: 'zona de descanso y cafetería' },
    { key: '5', value: 'zona de muestreo y pruebas de laboratorio' },
    { key: '6', value: 'zona de bodega e insumos' },
    { key: '7', value: 'zona de cuartos frios' },
    { key: '8', value: 'punto de venta' },
    { key: '9', value: 'zona de pasteurización' },
    { key: '10', value: 'zona de herramientas' },
    { key: '11', value: 'oficinas administrativas' },
    { key: '12', value: 'zona de tratamiento de residuos' },
  ];

  const pregunta_39 = [
    { key: '1', value: 'marmita' },
    { key: '2', value: 'hiladora' },
    { key: '3', value: 'generador electrico' },
    { key: '4', value: 'descremadora' },
    { key: '5', value: 'mesas en acero inoxidable para queso' },
    { key: '6', value: 'prensas' },
    { key: '7', value: 'mantequeras' },
    { key: '8', value: 'separadores de nata y leche' },
    { key: '9', value: 'mesa de escurrido' },
    { key: '10', value: 'tanque de enfriamiento' },
    { key: '11', value: 'empacadora al vacio' },
    { key: '12', value: 'tina de coagulación' },
    { key: '13', value: 'caldera' },
    { key: '14', value: 'estantes de transporte o almacenamiento' },
    { key: '15', value: 'motobomba' },
    { key: '16', value: 'tanque de almacenamiento' },
    { key: '17', value: 'refrigeración' },
    { key: '18', value: 'ninguna' },
  ];

  const newForm = (form5) => {
    setForm6({
      pregunta_1: form5.pregunta_1,
      pregunta_2: form5.pregunta_2,
      pregunta_2_otro: form5.pregunta_2_otro,
      pregunta_3: form5.pregunta_3,
      pregunta_3_puntaje: form5.pregunta_3_puntaje,
      pregunta_4: form5.pregunta_4,
      pregunta_5_numero: form5.pregunta_5_numero,
      pregunta_5_correo: form5.pregunta_5_correo,
      pregunta_6: form5.pregunta_6,
      pregunta_7: form5.pregunta_7,
      pregunta_7_vereda: form5.pregunta_7_vereda,
      pregunta_8: form5.pregunta_8,
      pregunta_9: form5.pregunta_9,
      pregunta_9_porcentaje_recibe_planta:
        form5.pregunta_9_porcentaje_recibe_planta,
      pregunta_9_porcentaje_recoge_planta:
        form5.pregunta_9_porcentaje_recoge_planta,
      pregunta_9_porcentaje_via_productor_finca:
        form5.pregunta_9_porcentaje_via_productor_finca,
      pregunta_9_otro: form5.pregunta_9_otro,
      pregunta_10: form5.pregunta_10,
      pregunta_10_porcentaje_termo_king:
        form5.pregunta_10_porcentaje_termo_king,
      pregunta_10_porcentaje_carro_particular:
        form5.pregunta_10_porcentaje_carro_particular,
      pregunta_10_porcentaje_moto: form5.pregunta_10_porcentaje_moto,
      pregunta_10_porcentaje_caballo: form5.pregunta_10_porcentaje_caballo,
      pregunta_10_otro: form5.pregunta_10_otro,
      pregunta_11: form5.pregunta_11,
      pregunta_11_otro: form5.pregunta_11_otro,
      pregunta_12: form5.pregunta_12,
      pregunta_12_otro: form5.pregunta_12_otro,
      pregunta_13: form5.pregunta_13,
      pregunta_14: form5.pregunta_14,
      pregunta_15: form5.pregunta_15,
      pregunta_16: form5.pregunta_16,
      pregunta_16_cuantos: form5.pregunta_16_cuantos,
      pregunta_17: form5.pregunta_17,
      pregunta_17_cuantos: form5.pregunta_17_cuantos,
      pregunta_18: form5.pregunta_18,
      pregunta_18_cuantos: form5.pregunta_18_cuantos,
      pregunta_19: form5.pregunta_19,
      pregunta_20: form5.pregunta_20,
      pregunta_21: form5.pregunta_21,
      pregunta_21_porcentaje_pavimentada:
        form5.pregunta_21_porcentaje_pavimentada,
      pregunta_21_porcentaje_placa_huella:
        form5.pregunta_21_porcentaje_placa_huella,
      pregunta_21_porcentaje_via_carreteable:
        form5.pregunta_21_porcentaje_via_carreteable,
      pregunta_21_porcentaje_trocha_a_pie:
        form5.pregunta_21_porcentaje_trocha_a_pie,
      pregunta_22: form5.pregunta_22,
      pregunta_22_porcentaje_pavimentada:
        form5.pregunta_21_porcentaje_pavimentada,
      pregunta_22_porcentaje_placa_huella:
        form5.pregunta_22_porcentaje_placa_huella,
      pregunta_22_porcentaje_via_carreteable:
        form5.pregunta_22_porcentaje_via_carreteable,
      pregunta_22_porcentaje_trocha_a_pie:
        form5.pregunta_22_porcentaje_trocha_a_pie,
      pregunta_23: form5.pregunta_23,
      pregunta_23_gps_n: form5.pregunta_23_gps_n,
      pregunta_23_gps_w: form5.pregunta_23_gps_w,
      pregunta_24: form5.pregunta_24,
      pregunta_25: form5.pregunta_25,
      pregunta_26: form5.pregunta_26,
      pregunta_27: form5.pregunta_27,
      pregunta_28_diaria: form5.pregunta_28_diaria,
      pregunta_28_semanal: form5.pregunta_28_semanal,
      pregunta_28_mensual: form5.pregunta_28_mensual,
      pregunta_29_yogurt_diaria: form5.pregunta_29_yogurt_diaria,
      pregunta_29_yogurt_semanal: form5.pregunta_29_yogurt_semanal,
      pregunta_29_yogurt_mensual: form5.pregunta_29_yogurt_mensual,
      pregunta_29_kumis_diaria: form5.pregunta_29_kumis_diaria,
      pregunta_29_kumis_semanal: form5.pregunta_29_kumis_semanal,
      pregunta_29_kumis_mensual: form5.pregunta_29_kumis_mensual,
      pregunta_29_cuajada_diaria: form5.pregunta_29_cuajada_diaria,
      pregunta_29_cuajada_semanal: form5.pregunta_29_cuajada_semanal,
      pregunta_29_cuajada_mensual: form5.pregunta_29_cuajada_mensual,
      pregunta_29_queso_doble_crema_diaria:
        form5.pregunta_29_queso_doble_crema_diaria,
      pregunta_29_queso_doble_crema_semanal:
        form5.pregunta_29_queso_doble_crema_semanal,
      pregunta_29_queso_doble_crema_mensual:
        form5.pregunta_29_queso_doble_crema_mensual,
      pregunta_29_queso_campesino_diaria:
        form5.pregunta_29_queso_campesino_diaria,
      pregunta_29_queso_campesino_semanal:
        form5.pregunta_29_queso_campesino_semanal,
      pregunta_29_queso_campesino_mensual:
        form5.pregunta_29_queso_campesino_mensual,
      pregunta_29_leche_diaria: form5.pregunta_29_leche_diaria,
      pregunta_29_leche_semanal: form5.pregunta_29_leche_semanal,
      pregunta_29_leche_mensual: form5.pregunta_29_leche_mensual,
      pregunta_29_quesos_madurados_diaria:
        form5.pregunta_29_quesos_madurados_diaria,
      pregunta_29_quesos_madurados_semanal:
        form5.pregunta_29_quesos_madurados_semanal,
      pregunta_29_quesos_madurados_mensual:
        form5.pregunta_29_quesos_madurados_mensual,
      pregunta_29_requeson_diaria: form5.pregunta_29_requeson_diaria,
      pregunta_29_requeson_semanal: form5.pregunta_29_requeson_semanal,
      pregunta_29_requeson_mensual: form5.pregunta_29_requeson_mensual,
      pregunta_29_arequipe_diaria: form5.pregunta_29_arequipe_diaria,
      pregunta_29_arequipe_semanal: form5.pregunta_29_arequipe_semanal,
      pregunta_29_arequipe_mensual: form5.pregunta_29_arequipe_mensual,
      pregunta_29_otros: form5.pregunta_29_otros,
      pregunta_30: form5.pregunta_30,
      pregunta_31: form5.pregunta_31,
      pregunta_32: form5.pregunta_32,
      pregunta_33: form5.pregunta_33,
      pregunta_34: form5.pregunta_34,
      pregunta_35: form5.pregunta_35,
      pregunta_36: form5.pregunta_36,
    });
  };

  useEffect(() => {
    newForm(form5);
  }, [form5]);

  useEffect(() => {
    statePregunta38.length > 0
      ? setForm6({ ...form6, pregunta_38: statePregunta38 })
      : null;
    statePregunta39.length > 0
      ? setForm6({ ...form6, pregunta_39: statePregunta39 })
      : null;
  }, [statePregunta38, statePregunta39]);

  const handleChange = (name, value) => {
    setForm6({ ...form6, [name]: value });
  };

  return (
    <View>
      <View style={styles.container_form}>
        <Text style={styles.textTitle}>
          CRITERIO 6 CAPACIDAD DE INFRAESTRUCTURA FISICA Y EQUIPOS INSTALADA EN
          LA PLANTA DE TRANSFORMACION
        </Text>
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          37. ¿Qué tipo de tenencia tiene sobre el predio donde desarrolla la
          actividad económica?
        </Text>
        <Picker
          enabled={true}
          mode="dropdown"
          onValueChange={(e) => handleChange('pregunta_37', e)}
          selectedValue={form6.pregunta_37}
        >
          <Picker.Item label="Respuesta..." />
          <Picker.Item label={'Propio'} value={'Propio'} key={1} />
          <Picker.Item label={'Arrendado'} value={'Arrendado'} key={2} />
        </Picker>
        <Text style={styles.text}>Otro</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_37_otro', e)}
          placeholder="Respuesta..."
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          38. seleccione las zonas de la planta de producción con las que cuenta
        </Text>
        <MultipleSelectList
          setSelected={(e) => setStatePregunta38(e)}
          data={pregunta_38}
          save="value"
          onSelect={() => statePregunta38}
        />
        <Text style={styles.text}>Otro</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_38_otro', e)}
          placeholder="Respuesta..."
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          39. Seleccione la maquinaria con la que cuenta
        </Text>
        <MultipleSelectList
          setSelected={(e) => setStatePregunta39(e)}
          data={pregunta_39}
          save="value"
          onSelect={() => statePregunta39}
        />
        <Text style={styles.text}>Otro</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_39_otro', e)}
          placeholder="Respuesta..."
        />
      </View>
      <FormPart7 form6={form6} />
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
