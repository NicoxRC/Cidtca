import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import FormPart9 from './FormPart9';

export default function FormPart8(props) {
  const { form7 } = props;

  const [form8, setForm8] = useState({});

  const newForm = (form7) => {
    setForm8({
      pregunta_1: form7.pregunta_1,
      pregunta_2: form7.pregunta_2,
      pregunta_2_otro: form7.pregunta_2_otro,
      pregunta_3: form7.pregunta_3,
      pregunta_3_puntaje: form7.pregunta_3_puntaje,
      pregunta_4: form7.pregunta_4,
      pregunta_5_numero: form7.pregunta_5_numero,
      pregunta_5_correo: form7.pregunta_5_correo,
      pregunta_6: form7.pregunta_6,
      pregunta_7: form7.pregunta_7,
      pregunta_7_vereda: form7.pregunta_7_vereda,
      pregunta_8: form7.pregunta_8,
      pregunta_9: form7.pregunta_9,
      pregunta_9_porcentaje_recibe_planta:
        form7.pregunta_9_porcentaje_recibe_planta,
      pregunta_9_porcentaje_recoge_planta:
        form7.pregunta_9_porcentaje_recoge_planta,
      pregunta_9_porcentaje_via_productor_finca:
        form7.pregunta_9_porcentaje_via_productor_finca,
      pregunta_9_otro: form7.pregunta_9_otro,
      pregunta_10: form7.pregunta_10,
      pregunta_10_porcentaje_termo_king:
        form7.pregunta_10_porcentaje_termo_king,
      pregunta_10_porcentaje_carro_particular:
        form7.pregunta_10_porcentaje_carro_particular,
      pregunta_10_porcentaje_moto: form7.pregunta_10_porcentaje_moto,
      pregunta_10_porcentaje_caballo: form7.pregunta_10_porcentaje_caballo,
      pregunta_10_otro: form7.pregunta_10_otro,
      pregunta_11: form7.pregunta_11,
      pregunta_11_otro: form7.pregunta_11_otro,
      pregunta_12: form7.pregunta_12,
      pregunta_12_otro: form7.pregunta_12_otro,
      pregunta_13: form7.pregunta_13,
      pregunta_14: form7.pregunta_14,
      pregunta_15: form7.pregunta_15,
      pregunta_16: form7.pregunta_16,
      pregunta_16_cuantos: form7.pregunta_16_cuantos,
      pregunta_17: form7.pregunta_17,
      pregunta_17_cuantos: form7.pregunta_17_cuantos,
      pregunta_18: form7.pregunta_18,
      pregunta_18_cuantos: form7.pregunta_18_cuantos,
      pregunta_19: form7.pregunta_19,
      pregunta_20: form7.pregunta_20,
      pregunta_21: form7.pregunta_21,
      pregunta_21_porcentaje_pavimentada:
        form7.pregunta_21_porcentaje_pavimentada,
      pregunta_21_porcentaje_placa_huella:
        form7.pregunta_21_porcentaje_placa_huella,
      pregunta_21_porcentaje_via_carreteable:
        form7.pregunta_21_porcentaje_via_carreteable,
      pregunta_21_porcentaje_trocha_a_pie:
        form7.pregunta_21_porcentaje_trocha_a_pie,
      pregunta_22: form7.pregunta_22,
      pregunta_22_porcentaje_pavimentada:
        form7.pregunta_21_porcentaje_pavimentada,
      pregunta_22_porcentaje_placa_huella:
        form7.pregunta_22_porcentaje_placa_huella,
      pregunta_22_porcentaje_via_carreteable:
        form7.pregunta_22_porcentaje_via_carreteable,
      pregunta_22_porcentaje_trocha_a_pie:
        form7.pregunta_22_porcentaje_trocha_a_pie,
      pregunta_23: form7.pregunta_23,
      pregunta_23_gps_n: form7.pregunta_23_gps_n,
      pregunta_23_gps_w: form7.pregunta_23_gps_w,
      pregunta_24: form7.pregunta_24,
      pregunta_25: form7.pregunta_25,
      pregunta_26: form7.pregunta_26,
      pregunta_27: form7.pregunta_27,
      pregunta_28_diaria: form7.pregunta_28_diaria,
      pregunta_28_semanal: form7.pregunta_28_semanal,
      pregunta_28_mensual: form7.pregunta_28_mensual,
      pregunta_29_yogurt_diaria: form7.pregunta_29_yogurt_diaria,
      pregunta_29_yogurt_semanal: form7.pregunta_29_yogurt_semanal,
      pregunta_29_yogurt_mensual: form7.pregunta_29_yogurt_mensual,
      pregunta_29_kumis_diaria: form7.pregunta_29_kumis_diaria,
      pregunta_29_kumis_semanal: form7.pregunta_29_kumis_semanal,
      pregunta_29_kumis_mensual: form7.pregunta_29_kumis_mensual,
      pregunta_29_cuajada_diaria: form7.pregunta_29_cuajada_diaria,
      pregunta_29_cuajada_semanal: form7.pregunta_29_cuajada_semanal,
      pregunta_29_cuajada_mensual: form7.pregunta_29_cuajada_mensual,
      pregunta_29_queso_doble_crema_diaria:
        form7.pregunta_29_queso_doble_crema_diaria,
      pregunta_29_queso_doble_crema_semanal:
        form7.pregunta_29_queso_doble_crema_semanal,
      pregunta_29_queso_doble_crema_mensual:
        form7.pregunta_29_queso_doble_crema_mensual,
      pregunta_29_queso_campesino_diaria:
        form7.pregunta_29_queso_campesino_diaria,
      pregunta_29_queso_campesino_semanal:
        form7.pregunta_29_queso_campesino_semanal,
      pregunta_29_queso_campesino_mensual:
        form7.pregunta_29_queso_campesino_mensual,
      pregunta_29_leche_diaria: form7.pregunta_29_leche_diaria,
      pregunta_29_leche_semanal: form7.pregunta_29_leche_semanal,
      pregunta_29_leche_mensual: form7.pregunta_29_leche_mensual,
      pregunta_29_quesos_madurados_diaria:
        form7.pregunta_29_quesos_madurados_diaria,
      pregunta_29_quesos_madurados_semanal:
        form7.pregunta_29_quesos_madurados_semanal,
      pregunta_29_quesos_madurados_mensual:
        form7.pregunta_29_quesos_madurados_mensual,
      pregunta_29_requeson_diaria: form7.pregunta_29_requeson_diaria,
      pregunta_29_requeson_semanal: form7.pregunta_29_requeson_semanal,
      pregunta_29_requeson_mensual: form7.pregunta_29_requeson_mensual,
      pregunta_29_arequipe_diaria: form7.pregunta_29_arequipe_diaria,
      pregunta_29_arequipe_semanal: form7.pregunta_29_arequipe_semanal,
      pregunta_29_arequipe_mensual: form7.pregunta_29_arequipe_mensual,
      pregunta_29_otros: form7.pregunta_29_otros,
      pregunta_30: form7.pregunta_30,
      pregunta_31: form7.pregunta_31,
      pregunta_32: form7.pregunta_32,
      pregunta_33: form7.pregunta_33,
      pregunta_34: form7.pregunta_34,
      pregunta_35: form7.pregunta_35,
      pregunta_36: form7.pregunta_36,
      pregunta_37: form7.pregunta_37,
      pregunta_37_otro: form7.pregunta_37_otro,
      pregunta_38: form7.pregunta_38,
      pregunta_38_otro: form7.pregunta_38_otro,
      pregunta_39: form7.pregunta_39,
      pregunta_39_otro: form7.pregunta_39_otro,
      pregunta_40: form7.pregunta_40,
      pregunta_40_cuales: form7.pregunta_40_cuales,
      pregunta_41: form7.pregunta_41,
      pregunta_42: form7.pregunta_42,
      pregunta_43: form7.pregunta_43,
      pregunta_43_cuales: form7.pregunta_43_cuales,
      pregunta_44: form7.pregunta_44,
      pregunta_44_como: form7.pregunta_44_como,
      pregunta_45: form7.pregunta_45,
      pregunta_45_como: form7.pregunta_45_como,
      pregunta_46: form7.pregunta_46,
      pregunta_47: form7.pregunta_47,
      pregunta_48: form7.pregunta_48,
      pregunta_48_cual: form7.pregunta_48_cual,
      pregunta_49: form7.pregunta_49,
    });
  };

  useEffect(() => {
    newForm(form7);
  }, [form7]);

  const handleChange = (name, value) => {
    setForm8({ ...form8, [name]: value });
  };

  return (
    <View>
      <View style={styles.container_form}>
        <Text style={styles.textTitle}>
          CRITERIO 8 INTERÉS Y DISPOSICIÓN DE PARTICIPAR EN EL PROYECTO
        </Text>
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          50. ¿Ha recibido o participado en algún proyecto para el
          fortalecimiento o el mejoramiento del proceso productivo de su
          organización?
        </Text>
        <Picker
          enabled={true}
          mode="dropdown"
          onValueChange={(e) => handleChange('pregunta_50', e)}
          selectedValue={form8.pregunta_50}
        >
          <Picker.Item label="Respuesta..." />
          <Picker.Item label={'Si'} value={'Si'} key={1} />
          <Picker.Item label={'No'} value={'No'} key={2} />
        </Picker>
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          51. ¿Desearía participar en un proyecto de investigación y desarrollo
          que mejore y fomente la creación de nuevos productos derivados de la
          leche?
        </Text>
        <Picker
          enabled={true}
          mode="dropdown"
          onValueChange={(e) => handleChange('pregunta_51', e)}
          selectedValue={form8.pregunta_51}
        >
          <Picker.Item label="Respuesta..." />
          <Picker.Item label={'Si'} value={'Si'} key={1} />
          <Picker.Item label={'No'} value={'No'} key={2} />
        </Picker>
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          52. ¿Desearía participar activamente en el proyecto "DESARROLLO DE UN
          CULTIVO BIOPROTECTOR PARA EL MEJORAMIENTO DE LA INOCUIDAD DE LA
          PRODUCCIÓN QUESERA ARTESANAL DEL DEPARTAMENTO DE NARIÑO"?
        </Text>
        <Picker
          enabled={true}
          mode="dropdown"
          onValueChange={(e) => handleChange('pregunta_52', e)}
          selectedValue={form8.pregunta_52}
        >
          <Picker.Item label="Respuesta..." />
          <Picker.Item label={'Si'} value={'Si'} key={1} />
          <Picker.Item label={'No'} value={'No'} key={2} />
        </Picker>
      </View>
      <FormPart9 form8={form8} />
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
