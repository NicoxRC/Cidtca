import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

export default function FormPart10(props) {
  const { form9 } = props;
  const navigation = useNavigation();
  const [form10, setForm10] = useState({});
  const [image, setImage] = useState(null);

  const newForm = (form9) => {
    setForm10({
      pregunta_1: form9.pregunta_1 ? form9.pregunta_1 : '',
      pregunta_2: form9.pregunta_2 ? form9.pregunta_2 : '',
      pregunta_2_otro: form9.pregunta_2_otro ? form9.pregunta_2_otro : '',
      pregunta_3: form9.pregunta_3 ? form9.pregunta_3 : [],
      pregunta_3_puntaje: form9.pregunta_3_puntaje
        ? form9.pregunta_3_puntaje
        : '',
      pregunta_4: form9.pregunta_4 ? form9.pregunta_4 : '',
      pregunta_5_numero: form9.pregunta_5_numero ? form9.pregunta_5_numero : '',
      pregunta_5_correo: form9.pregunta_5_correo ? form9.pregunta_5_correo : '',
      pregunta_6: form9.pregunta_6 ? form9.pregunta_6 : '',
      pregunta_7: form9.pregunta_7 ? form9.pregunta_7 : '',
      pregunta_7_vereda: form9.pregunta_7_vereda ? form9.pregunta_7_vereda : '',
      pregunta_8: form9.pregunta_8 ? form9.pregunta_8 : '',
      pregunta_9: form9.pregunta_9 ? form9.pregunta_9 : [],
      pregunta_9_porcentaje_recibe_planta:
        form9.pregunta_9_porcentaje_recibe_planta
          ? form9.pregunta_9_porcentaje_recibe_planta
          : '',
      pregunta_9_porcentaje_recoge_planta:
        form9.pregunta_9_porcentaje_recoge_planta
          ? form9.pregunta_9_porcentaje_recoge_planta
          : '',
      pregunta_9_porcentaje_via_productor_finca:
        form9.pregunta_9_porcentaje_via_productor_finca
          ? form9.pregunta_9_porcentaje_via_productor_finca
          : '',
      pregunta_9_otro: form9.pregunta_9_otro ? form9.pregunta_9_otro : '',
      pregunta_10: form9.pregunta_10 ? form9.pregunta_10 : [],
      pregunta_10_porcentaje_termo_king: form9.pregunta_10_porcentaje_termo_king
        ? form9.pregunta_10_porcentaje_termo_king
        : '',
      pregunta_10_porcentaje_carro_particular:
        form9.pregunta_10_porcentaje_carro_particular
          ? form9.pregunta_10_porcentaje_carro_particular
          : '',
      pregunta_10_porcentaje_moto: form9.pregunta_10_porcentaje_moto
        ? form9.pregunta_10_porcentaje_moto
        : '',
      pregunta_10_porcentaje_caballo: form9.pregunta_10_porcentaje_caballo
        ? form9.pregunta_10_porcentaje_caballo
        : '',
      pregunta_10_otro: form9.pregunta_10_otro ? form9.pregunta_10_otro : '',
      pregunta_11: form9.pregunta_11 ? form9.pregunta_11 : [],
      pregunta_11_otro: form9.pregunta_11_otro ? form9.pregunta_11_otro : '',
      pregunta_12: form9.pregunta_12 ? form9.pregunta_12 : [],
      pregunta_12_otro: form9.pregunta_12_otro ? form9.pregunta_12_otro : '',
      pregunta_13: form9.pregunta_13 ? form9.pregunta_13 : [],
      pregunta_14: form9.pregunta_14 ? form9.pregunta_14 : '',
      pregunta_15: form9.pregunta_15 ? form9.pregunta_15 : '',
      pregunta_16: form9.pregunta_16 ? form9.pregunta_16 : '',
      pregunta_16_cuantos: form9.pregunta_16_cuantos
        ? form9.pregunta_16_cuantos
        : '',
      pregunta_17: form9.pregunta_17 ? form9.pregunta_17 : '',
      pregunta_17_cuantos: form9.pregunta_17_cuantos
        ? form9.pregunta_17_cuantos
        : '',
      pregunta_18: form9.pregunta_18 ? form9.pregunta_18 : '',
      pregunta_18_cuantos: form9.pregunta_18_cuantos
        ? form9.pregunta_18_cuantos
        : '',
      pregunta_19: form9.pregunta_19 ? form9.pregunta_19 : '',
      pregunta_20: form9.pregunta_20 ? form9.pregunta_20 : '',
      pregunta_21: form9.pregunta_21 ? form9.pregunta_21 : [],
      pregunta_21_porcentaje_pavimentada:
        form9.pregunta_21_porcentaje_pavimentada
          ? form9.pregunta_21_porcentaje_pavimentada
          : '',
      pregunta_21_porcentaje_placa_huella:
        form9.pregunta_21_porcentaje_placa_huella
          ? form9.pregunta_21_porcentaje_placa_huella
          : '',
      pregunta_21_porcentaje_via_carreteable:
        form9.pregunta_21_porcentaje_via_carreteable
          ? form9.pregunta_21_porcentaje_via_carreteable
          : '',
      pregunta_21_porcentaje_trocha_a_pie:
        form9.pregunta_21_porcentaje_trocha_a_pie
          ? form9.pregunta_21_porcentaje_trocha_a_pie
          : '',
      pregunta_22: form9.pregunta_22 ? form9.pregunta_22 : [],
      pregunta_22_porcentaje_pavimentada:
        form9.pregunta_21_porcentaje_pavimentada
          ? form9.pregunta_21_porcentaje_pavimentada
          : '',
      pregunta_22_porcentaje_placa_huella:
        form9.pregunta_22_porcentaje_placa_huella
          ? form9.pregunta_22_porcentaje_placa_huella
          : '',
      pregunta_22_porcentaje_via_carreteable:
        form9.pregunta_22_porcentaje_via_carreteable
          ? form9.pregunta_22_porcentaje_via_carreteable
          : '',
      pregunta_22_porcentaje_trocha_a_pie:
        form9.pregunta_22_porcentaje_trocha_a_pie
          ? form9.pregunta_22_porcentaje_trocha_a_pie
          : '',
      pregunta_23: form9.pregunta_23 ? form9.pregunta_23 : '',
      pregunta_23_gps_n: form9.pregunta_23_gps_n ? form9.pregunta_23_gps_n : '',
      pregunta_23_gps_w: form9.pregunta_23_gps_w ? form9.pregunta_23_gps_w : '',
      pregunta_24: form9.pregunta_24 ? form9.pregunta_24 : '',
      pregunta_25: form9.pregunta_25 ? form9.pregunta_25 : '',
      pregunta_26: form9.pregunta_26 ? form9.pregunta_26 : [],
      pregunta_27: form9.pregunta_27 ? form9.pregunta_27 : '',
      pregunta_28_diaria: form9.pregunta_28_diaria
        ? form9.pregunta_28_diaria
        : '',
      pregunta_28_semanal: form9.pregunta_28_semanal
        ? form9.pregunta_28_semanal
        : '',
      pregunta_28_mensual: form9.pregunta_28_mensual
        ? form9.pregunta_28_mensual
        : '',
      pregunta_29_yogurt_diaria: form9.pregunta_29_yogurt_diaria
        ? form9.pregunta_29_yogurt_diaria
        : '',
      pregunta_29_yogurt_semanal: form9.pregunta_29_yogurt_semanal
        ? form9.pregunta_29_yogurt_semanal
        : '',
      pregunta_29_yogurt_mensual: form9.pregunta_29_yogurt_mensual
        ? form9.pregunta_29_yogurt_mensual
        : '',
      pregunta_29_kumis_diaria: form9.pregunta_29_kumis_diaria
        ? form9.pregunta_29_kumis_diaria
        : '',
      pregunta_29_kumis_semanal: form9.pregunta_29_kumis_semanal
        ? form9.pregunta_29_kumis_semanal
        : '',
      pregunta_29_kumis_mensual: form9.pregunta_29_kumis_mensual
        ? form9.pregunta_29_kumis_mensual
        : '',
      pregunta_29_cuajada_diaria: form9.pregunta_29_cuajada_diaria
        ? form9.pregunta_29_cuajada_diaria
        : '',
      pregunta_29_cuajada_semanal: form9.pregunta_29_cuajada_semanal
        ? form9.pregunta_29_cuajada_semanal
        : '',
      pregunta_29_cuajada_mensual: form9.pregunta_29_cuajada_mensual
        ? form9.pregunta_29_cuajada_mensual
        : '',
      pregunta_29_queso_doble_crema_diaria:
        form9.pregunta_29_queso_doble_crema_diaria
          ? form9.pregunta_29_queso_doble_crema_diaria
          : '',
      pregunta_29_queso_doble_crema_semanal:
        form9.pregunta_29_queso_doble_crema_semanal
          ? form9.pregunta_29_queso_doble_crema_semanal
          : '',
      pregunta_29_queso_doble_crema_mensual:
        form9.pregunta_29_queso_doble_crema_mensual
          ? form9.pregunta_29_queso_doble_crema_mensual
          : '',
      pregunta_29_queso_campesino_diaria:
        form9.pregunta_29_queso_campesino_diaria
          ? form9.pregunta_29_queso_campesino_diaria
          : '',
      pregunta_29_queso_campesino_semanal:
        form9.pregunta_29_queso_campesino_semanal
          ? form9.pregunta_29_queso_campesino_semanal
          : '',
      pregunta_29_queso_campesino_mensual:
        form9.pregunta_29_queso_campesino_mensual
          ? form9.pregunta_29_queso_campesino_mensual
          : '',
      pregunta_29_leche_diaria: form9.pregunta_29_leche_diaria
        ? form9.pregunta_29_leche_diaria
        : '',
      pregunta_29_leche_semanal: form9.pregunta_29_leche_semanal
        ? form9.pregunta_29_leche_semanal
        : '',
      pregunta_29_leche_mensual: form9.pregunta_29_leche_mensual
        ? form9.pregunta_29_leche_mensual
        : '',
      pregunta_29_quesos_madurados_diaria:
        form9.pregunta_29_quesos_madurados_diaria
          ? form9.pregunta_29_quesos_madurados_diaria
          : '',
      pregunta_29_quesos_madurados_semanal:
        form9.pregunta_29_quesos_madurados_semanal
          ? form9.pregunta_29_quesos_madurados_semanal
          : '',
      pregunta_29_quesos_madurados_mensual:
        form9.pregunta_29_quesos_madurados_mensual
          ? form9.pregunta_29_quesos_madurados_mensual
          : '',
      pregunta_29_requeson_diaria: form9.pregunta_29_requeson_diaria
        ? form9.pregunta_29_requeson_diaria
        : '',
      pregunta_29_requeson_semanal: form9.pregunta_29_requeson_semanal
        ? form9.pregunta_29_requeson_semanal
        : '',
      pregunta_29_requeson_mensual: form9.pregunta_29_requeson_mensual
        ? form9.pregunta_29_requeson_mensual
        : '',
      pregunta_29_arequipe_diaria: form9.pregunta_29_arequipe_diaria
        ? form9.pregunta_29_arequipe_diaria
        : '',
      pregunta_29_arequipe_semanal: form9.pregunta_29_arequipe_semanal
        ? form9.pregunta_29_arequipe_semanal
        : '',
      pregunta_29_arequipe_mensual: form9.pregunta_29_arequipe_mensual
        ? form9.pregunta_29_arequipe_mensual
        : '',
      pregunta_29_otros: form9.pregunta_29_otros ? form9.pregunta_29_otros : '',
      pregunta_30: form9.pregunta_30 ? form9.pregunta_30 : '',
      pregunta_31: form9.pregunta_31 ? form9.pregunta_31 : '',
      pregunta_32: form9.pregunta_32 ? form9.pregunta_32 : '',
      pregunta_33: form9.pregunta_33 ? form9.pregunta_33 : '',
      pregunta_34: form9.pregunta_34 ? form9.pregunta_34 : '',
      pregunta_35: form9.pregunta_35 ? form9.pregunta_35 : '',
      pregunta_36: form9.pregunta_36 ? form9.pregunta_36 : '',
      pregunta_37: form9.pregunta_37 ? form9.pregunta_37 : '',
      pregunta_37_otro: form9.pregunta_37_otro ? form9.pregunta_37_otro : '',
      pregunta_38: form9.pregunta_38 ? form9.pregunta_38 : [],
      pregunta_38_otro: form9.pregunta_38_otro ? form9.pregunta_38_otro : '',
      pregunta_39: form9.pregunta_39 ? form9.pregunta_39 : [],
      pregunta_39_otro: form9.pregunta_39_otro ? form9.pregunta_39_otro : '',
      pregunta_40: form9.pregunta_40 ? form9.pregunta_40 : '',
      pregunta_40_cuales: form9.pregunta_40_cuales
        ? form9.pregunta_40_cuales
        : '',
      pregunta_41: form9.pregunta_41 ? form9.pregunta_41 : '',
      pregunta_42: form9.pregunta_42 ? form9.pregunta_42 : '',
      pregunta_43: form9.pregunta_43 ? form9.pregunta_43 : '',
      pregunta_43_cuales: form9.pregunta_43_cuales
        ? form9.pregunta_43_cuales
        : '',
      pregunta_44: form9.pregunta_44 ? form9.pregunta_44 : '',
      pregunta_44_como: form9.pregunta_44_como ? form9.pregunta_44_como : '',
      pregunta_45: form9.pregunta_45 ? form9.pregunta_45 : '',
      pregunta_45_como: form9.pregunta_45_como ? form9.pregunta_45_como : '',
      pregunta_46: form9.pregunta_46 ? form9.pregunta_46 : '',
      pregunta_47: form9.pregunta_47 ? form9.pregunta_47 : '',
      pregunta_48: form9.pregunta_48 ? form9.pregunta_48 : '',
      pregunta_48_cual: form9.pregunta_48_cual ? form9.pregunta_48_cual : '',
      pregunta_49: form9.pregunta_49 ? form9.pregunta_49 : [],
      pregunta_50: form9.pregunta_50 ? form9.pregunta_50 : '',
      pregunta_51: form9.pregunta_51 ? form9.pregunta_51 : '',
      pregunta_52: form9.pregunta_52 ? form9.pregunta_52 : '',
      pregunta_53: form9.hasOwnProperty('pregunta_53') ? form9.pregunta_53 : '',
      pregunta_54: form9.hasOwnProperty('pregunta_54') ? form9.pregunta_54 : '',
      pregunta_55: form9.hasOwnProperty('pregunta_55') ? form9.pregunta_55 : '',
      pregunta_56: form9.hasOwnProperty('pregunta_56') ? form9.pregunta_56 : '',
      pregunta_56_cuales: form9.hasOwnProperty('pregunta_56_cuales')
        ? form9.pregunta_56_cuales
        : '',
      pregunta_57: form9.hasOwnProperty('pregunta_57') ? form9.pregunta_57 : [],
      pregunta_57_destino_transformadora_local: form9.hasOwnProperty(
        'pregunta_57_destino_transformadora_local'
      )
        ? form9.pregunta_57_destino_transformadora_local
        : '',
      pregunta_57_destino_transformadora_nacional: form9.hasOwnProperty(
        'pregunta_57_destino_transformadora_nacional'
      )
        ? form9.pregunta_57_destino_transformadora_nacional
        : '',
      pregunta_57_destino_venta_local: form9.hasOwnProperty(
        'pregunta_57_destino_venta_local'
      )
        ? form9.pregunta_57_destino_venta_local
        : '',
      pregunta_57_destino_venta_nacional: form9.hasOwnProperty(
        'pregunta_57_destino_venta_nacional'
      )
        ? form9.pregunta_57_destino_venta_nacional
        : '',
      pregunta_57_otros: form9.hasOwnProperty('pregunta_57_otros')
        ? form9.pregunta_57_otros
        : '',
      pregunta_58: form9.hasOwnProperty('pregunta_58') ? form9.pregunta_58 : '',
      pregunta_59: form9.hasOwnProperty('pregunta_59') ? form9.pregunta_59 : '',
      pregunta_60: form9.hasOwnProperty('pregunta_60') ? form9.pregunta_60 : [],
      pregunta_60_otros: form9.hasOwnProperty('pregunta_60_otros')
        ? form9.pregunta_60_otros
        : '',
      pregunta_61: form9.hasOwnProperty('pregunta_61') ? form9.pregunta_61 : '',
      pregunta_62: form9.hasOwnProperty('pregunta_62') ? form9.pregunta_62 : '',
      pregunta_63: form9.hasOwnProperty('pregunta_63') ? form9.pregunta_63 : '',
      pregunta_64_energia: form9.hasOwnProperty('pregunta_64_energia')
        ? form9.pregunta_64_energia
        : '',
      pregunta_64_gas: form9.hasOwnProperty('pregunta_64_gas')
        ? form9.pregunta_64_gas
        : '',
      pregunta_64_otro: form9.hasOwnProperty('pregunta_64_otro')
        ? form9.pregunta_64_otro
        : '',
      pregunta_64_otro_valor: form9.hasOwnProperty('pregunta_64_otro_valor')
        ? form9.pregunta_64_otro_valor
        : '',
      pregunta_65: form9.hasOwnProperty('pregunta_65') ? form9.pregunta_65 : '',
      pregunta_65_porque: form9.hasOwnProperty('pregunta_65_porque')
        ? form9.pregunta_65_porque
        : '',
      pregunta_66_yogurt_presentacion: form9.hasOwnProperty(
        'pregunta_66_yogurt_presentacion'
      )
        ? form9.pregunta_66_yogurt_presentacion
        : '',
      pregunta_66_yogurt_valor: form9.hasOwnProperty('pregunta_66_yogurt_valor')
        ? form9.pregunta_66_yogurt_valor
        : '',
      pregunta_66_kumis_presentacion: form9.hasOwnProperty(
        'pregunta_66_kumis_presentacion'
      )
        ? form9.pregunta_66_kumis_presentacion
        : '',
      pregunta_66_kumis_valor: form9.hasOwnProperty('pregunta_66_kumis_valor')
        ? form9.pregunta_66_kumis_valor
        : '',
      pregunta_66_cuajada_presentacion: form9.hasOwnProperty(
        'pregunta_66_cuajada_presentacion'
      )
        ? form9.pregunta_66_cuajada_presentacion
        : '',
      pregunta_66_cuajada_valor: form9.hasOwnProperty(
        'pregunta_66_cuajada_valor'
      )
        ? form9.pregunta_66_cuajada_valor
        : '',
      pregunta_66_queso_doble_crema_presentacion: form9.hasOwnProperty(
        'pregunta_66_queso_doble_crema_presentacion'
      )
        ? form9.pregunta_66_queso_doble_crema_presentacion
        : '',
      pregunta_66_queso_doble_crema_valor: form9.hasOwnProperty(
        'pregunta_66_queso_doble_crema_valor'
      )
        ? form9.pregunta_66_queso_doble_crema_valor
        : '',
      pregunta_66_queso_campesino_presentacion: form9.hasOwnProperty(
        'pregunta_66_queso_campesino_presentacion'
      )
        ? form9.pregunta_66_queso_campesino_presentacion
        : '',
      pregunta_66_queso_campesino_valor: form9.hasOwnProperty(
        'pregunta_66_queso_campesino_valor'
      )
        ? form9.pregunta_66_queso_campesino_valor
        : '',
      pregunta_66_leche_presentacion: form9.hasOwnProperty(
        'pregunta_66_leche_presentacion'
      )
        ? form9.pregunta_66_leche_presentacion
        : '',
      pregunta_66_leche_valor: form9.hasOwnProperty('pregunta_66_leche_valor')
        ? form9.pregunta_66_leche_valor
        : '',
      pregunta_66_quesos_madurados_presentacion: form9.hasOwnProperty(
        'pregunta_66_quesos_madurados_presentacion'
      )
        ? form9.pregunta_66_quesos_madurados_presentacion
        : '',
      pregunta_66_quesos_madurados_valor: form9.hasOwnProperty(
        'pregunta_66_quesos_madurados_valor'
      )
        ? form9.pregunta_66_quesos_madurados_valor
        : '',
      pregunta_66_requeson_presentacion: form9.hasOwnProperty(
        'pregunta_66_requeson_presentacion'
      )
        ? form9.pregunta_66_requeson_presentacion
        : '',
      pregunta_66_requeson_valor: form9.hasOwnProperty(
        'pregunta_66_arequipe_valor'
      )
        ? form9.pregunta_66_arequipe_valor
        : '',
      pregunta_66_arequipe_presentacion: form9.hasOwnProperty(
        'pregunta_66_arequipe_presentacion'
      )
        ? form9.pregunta_66_arequipe_presentacion
        : '',
      pregunta_66_arequipe_valor: form9.hasOwnProperty(
        'pregunta_66_arequipe_valor'
      )
        ? form9.pregunta_66_arequipe_valor
        : '',
      pregunta_66_otros: form9.hasOwnProperty('pregunta_66_otros')
        ? form9.pregunta_66_otros
        : '',
      observaciones: '',
      fecha: '',
      nombre_encuestado: '',
      cedula_encuestado: '',
      firma_encuestado: '',
      nombre_encuestador: '',
      cedula_encuestador: '',
      firma_encuestador: '',
      foto_encuestado: '',
    });
  };

  useEffect(() => {
    newForm(form9);
  }, [form9]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setForm10({
        ...form10,
        foto_encuestado: `data:image/png;base64,${result.assets[0].base64}`,
      });
    }
  };

  const handleChange = (name, value) => {
    setForm10({ ...form10, [name]: value });
  };

  const goToFirm = () => {
    navigation.navigate('Firmas', form10);
  };

  return (
    <View>
      <View style={styles.container_form}>
        <Text style={styles.text}>Observaciones</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('observaciones', e)}
          placeholder="Respuesta..."
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>Fecha</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('fecha', e)}
          placeholder="dd/mm/aaaa"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>Nombre encuestado</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('nombre_encuestado', e)}
          placeholder="Respuesta..."
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>Cedula encuestado</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('cedula_encuestado', e)}
          placeholder="Respuesta..."
          keyboardType="numeric"
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>Nombre encuestador</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('nombre_encuestador', e)}
          placeholder="Respuesta..."
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>Cedula encuestador</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('cedula_encuestador', e)}
          placeholder="Respuesta..."
          keyboardType="numeric"
        />
      </View>
      <View style={styles.container_form}>
        <View style={styles.button}>
          <Button
            title="Subir foto encuestado"
            onPress={pickImage}
            color={'#5EA2A2'}
          />
        </View>
        {image && (
          <Image
            source={{ uri: image }}
            style={{ width: 200, height: 200, margin: 5, alignSelf: 'center' }}
          />
        )}
      </View>
      <View style={styles.buttonSub}>
        <Button title="Firmar" onPress={goToFirm} color={'#5EA2A2'} />
      </View>
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
  button: {
    width: 150,
    alignSelf: 'center',
  },
  buttonSub: {
    width: 200,
    alignSelf: 'center',
    marginBottom: 10,
  },
});
