import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import { Picker } from '@react-native-picker/picker';
import FormPart10 from './FormPart10';

export default function FormPart9(props) {
  const { form8 } = props;

  const [form9, setForm9] = useState({});
  const [statePregunta57, setStatePregunta57] = useState([]);
  const [statePregunta60, setStatePregunta60] = useState([]);

  const pregunta_57 = [
    { key: '1', value: 'Empresa transformadora Local' },
    { key: '2', value: 'Empresa transformadora Nacional' },
    { key: '3', value: 'Producto terminado con venta regional' },
    { key: '4', value: 'Producto terminado con venta nacional' },
  ];

  const pregunta_60 = [
    { key: '1', value: 'Calidad Fisico-quimica' },
    { key: '2', value: 'Fijada por el comprador' },
    { key: '3', value: 'De acuerdo a la resolución 017 de 2012' },
    { key: '4', value: 'Calidad Higienica' },
    { key: '5', value: 'Calidad Sanitaria' },
    { key: '6', value: 'Bonificacion por BPO' },
  ];

  const valores = [
    { id: '1', name: 'presentacion' },
    { id: '2', name: 'valor' },
  ];

  const newForm = (form8) => {
    setForm9({
      pregunta_1: form8.pregunta_1,
      pregunta_2: form8.pregunta_2,
      pregunta_2_otro: form8.pregunta_2_otro,
      pregunta_3: form8.pregunta_3,
      pregunta_3_puntaje: form8.pregunta_3_puntaje,
      pregunta_4: form8.pregunta_4,
      pregunta_5_numero: form8.pregunta_5_numero,
      pregunta_5_correo: form8.pregunta_5_correo,
      pregunta_6: form8.pregunta_6,
      pregunta_7: form8.pregunta_7,
      pregunta_7_vereda: form8.pregunta_7_vereda,
      pregunta_8: form8.pregunta_8,
      pregunta_9: form8.pregunta_9,
      pregunta_9_porcentaje_recibe_planta:
        form8.pregunta_9_porcentaje_recibe_planta,
      pregunta_9_porcentaje_recoge_planta:
        form8.pregunta_9_porcentaje_recoge_planta,
      pregunta_9_porcentaje_via_productor_finca:
        form8.pregunta_9_porcentaje_via_productor_finca,
      pregunta_9_otro: form8.pregunta_9_otro,
      pregunta_10: form8.pregunta_10,
      pregunta_10_porcentaje_termo_king:
        form8.pregunta_10_porcentaje_termo_king,
      pregunta_10_porcentaje_carro_particular:
        form8.pregunta_10_porcentaje_carro_particular,
      pregunta_10_porcentaje_moto: form8.pregunta_10_porcentaje_moto,
      pregunta_10_porcentaje_caballo: form8.pregunta_10_porcentaje_caballo,
      pregunta_10_otro: form8.pregunta_10_otro,
      pregunta_11: form8.pregunta_11,
      pregunta_11_otro: form8.pregunta_11_otro,
      pregunta_12: form8.pregunta_12,
      pregunta_12_otro: form8.pregunta_12_otro,
      pregunta_13: form8.pregunta_13,
      pregunta_14: form8.pregunta_14,
      pregunta_15: form8.pregunta_15,
      pregunta_16: form8.pregunta_16,
      pregunta_16_cuantos: form8.pregunta_16_cuantos,
      pregunta_17: form8.pregunta_17,
      pregunta_17_cuantos: form8.pregunta_17_cuantos,
      pregunta_18: form8.pregunta_18,
      pregunta_18_cuantos: form8.pregunta_18_cuantos,
      pregunta_19: form8.pregunta_19,
      pregunta_20: form8.pregunta_20,
      pregunta_21: form8.pregunta_21,
      pregunta_21_porcentaje_pavimentada:
        form8.pregunta_21_porcentaje_pavimentada,
      pregunta_21_porcentaje_placa_huella:
        form8.pregunta_21_porcentaje_placa_huella,
      pregunta_21_porcentaje_via_carreteable:
        form8.pregunta_21_porcentaje_via_carreteable,
      pregunta_21_porcentaje_trocha_a_pie:
        form8.pregunta_21_porcentaje_trocha_a_pie,
      pregunta_22: form8.pregunta_22,
      pregunta_22_porcentaje_pavimentada:
        form8.pregunta_21_porcentaje_pavimentada,
      pregunta_22_porcentaje_placa_huella:
        form8.pregunta_22_porcentaje_placa_huella,
      pregunta_22_porcentaje_via_carreteable:
        form8.pregunta_22_porcentaje_via_carreteable,
      pregunta_22_porcentaje_trocha_a_pie:
        form8.pregunta_22_porcentaje_trocha_a_pie,
      pregunta_23: form8.pregunta_23,
      pregunta_23_gps_n: form8.pregunta_23_gps_n,
      pregunta_23_gps_w: form8.pregunta_23_gps_w,
      pregunta_24: form8.pregunta_24,
      pregunta_25: form8.pregunta_25,
      pregunta_26: form8.pregunta_26,
      pregunta_27: form8.pregunta_27,
      pregunta_28_diaria: form8.pregunta_28_diaria,
      pregunta_28_semanal: form8.pregunta_28_semanal,
      pregunta_28_mensual: form8.pregunta_28_mensual,
      pregunta_29_yogurt_diaria: form8.pregunta_29_yogurt_diaria,
      pregunta_29_yogurt_semanal: form8.pregunta_29_yogurt_semanal,
      pregunta_29_yogurt_mensual: form8.pregunta_29_yogurt_mensual,
      pregunta_29_kumis_diaria: form8.pregunta_29_kumis_diaria,
      pregunta_29_kumis_semanal: form8.pregunta_29_kumis_semanal,
      pregunta_29_kumis_mensual: form8.pregunta_29_kumis_mensual,
      pregunta_29_cuajada_diaria: form8.pregunta_29_cuajada_diaria,
      pregunta_29_cuajada_semanal: form8.pregunta_29_cuajada_semanal,
      pregunta_29_cuajada_mensual: form8.pregunta_29_cuajada_mensual,
      pregunta_29_queso_doble_crema_diaria:
        form8.pregunta_29_queso_doble_crema_diaria,
      pregunta_29_queso_doble_crema_semanal:
        form8.pregunta_29_queso_doble_crema_semanal,
      pregunta_29_queso_doble_crema_mensual:
        form8.pregunta_29_queso_doble_crema_mensual,
      pregunta_29_queso_campesino_diaria:
        form8.pregunta_29_queso_campesino_diaria,
      pregunta_29_queso_campesino_semanal:
        form8.pregunta_29_queso_campesino_semanal,
      pregunta_29_queso_campesino_mensual:
        form8.pregunta_29_queso_campesino_mensual,
      pregunta_29_leche_diaria: form8.pregunta_29_leche_diaria,
      pregunta_29_leche_semanal: form8.pregunta_29_leche_semanal,
      pregunta_29_leche_mensual: form8.pregunta_29_leche_mensual,
      pregunta_29_quesos_madurados_diaria:
        form8.pregunta_29_quesos_madurados_diaria,
      pregunta_29_quesos_madurados_semanal:
        form8.pregunta_29_quesos_madurados_semanal,
      pregunta_29_quesos_madurados_mensual:
        form8.pregunta_29_quesos_madurados_mensual,
      pregunta_29_requeson_diaria: form8.pregunta_29_requeson_diaria,
      pregunta_29_requeson_semanal: form8.pregunta_29_requeson_semanal,
      pregunta_29_requeson_mensual: form8.pregunta_29_requeson_mensual,
      pregunta_29_arequipe_diaria: form8.pregunta_29_arequipe_diaria,
      pregunta_29_arequipe_semanal: form8.pregunta_29_arequipe_semanal,
      pregunta_29_arequipe_mensual: form8.pregunta_29_arequipe_mensual,
      pregunta_29_otros: form8.pregunta_29_otros,
      pregunta_30: form8.pregunta_30,
      pregunta_31: form8.pregunta_31,
      pregunta_32: form8.pregunta_32,
      pregunta_33: form8.pregunta_33,
      pregunta_34: form8.pregunta_34,
      pregunta_35: form8.pregunta_35,
      pregunta_36: form8.pregunta_36,
      pregunta_37: form8.pregunta_37,
      pregunta_37_otro: form8.pregunta_37_otro,
      pregunta_38: form8.pregunta_38,
      pregunta_38_otro: form8.pregunta_38_otro,
      pregunta_39: form8.pregunta_39,
      pregunta_39_otro: form8.pregunta_39_otro,
      pregunta_40: form8.pregunta_40,
      pregunta_40_cuales: form8.pregunta_40_cuales,
      pregunta_41: form8.pregunta_41,
      pregunta_42: form8.pregunta_42,
      pregunta_43: form8.pregunta_43,
      pregunta_43_cuales: form8.pregunta_43_cuales,
      pregunta_44: form8.pregunta_44,
      pregunta_44_como: form8.pregunta_44_como,
      pregunta_45: form8.pregunta_45,
      pregunta_45_como: form8.pregunta_45_como,
      pregunta_46: form8.pregunta_46,
      pregunta_47: form8.pregunta_47,
      pregunta_48: form8.pregunta_48,
      pregunta_48_cual: form8.pregunta_48_cual,
      pregunta_49: form8.pregunta_49,
      pregunta_50: form8.pregunta_50,
      pregunta_51: form8.pregunta_51,
      pregunta_52: form8.pregunta_52,
    });
  };

  useEffect(() => {
    newForm(form8);
  }, [form8]);

  useEffect(() => {
    statePregunta57.length > 0
      ? setForm9({ ...form9, pregunta_57: statePregunta57 })
      : null;
    statePregunta60.length > 0
      ? setForm9({ ...form9, pregunta_60: statePregunta60 })
      : null;
  }, [statePregunta57, statePregunta60]);

  const handleChange = (name, value) => {
    setForm9({ ...form9, [name]: value });
  };

  return (
    <View>
      <View style={styles.container_form}>
        <Text style={styles.textTitle}>
          CRITERIO 9 CONDICIONES ECONÓMICAS Y DE MERCADEO
        </Text>
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          53. ¿Actualmente sus productos tienen un diseño de marca?
        </Text>
        <Picker
          enabled={true}
          mode="dropdown"
          onValueChange={(e) => handleChange('pregunta_53', e)}
          selectedValue={form9.pregunta_53}
        >
          <Picker.Item label="Respuesta..." />
          <Picker.Item label={'Si'} value={'Si'} key={1} />
          <Picker.Item label={'No'} value={'No'} key={2} />
        </Picker>
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          54. ¿Sus productos cuentan con empaque y etiqueta?
        </Text>
        <Picker
          enabled={true}
          mode="dropdown"
          onValueChange={(e) => handleChange('pregunta_54', e)}
          selectedValue={form9.pregunta_54}
        >
          <Picker.Item label="Respuesta..." />
          <Picker.Item label={'Si'} value={'Si'} key={1} />
          <Picker.Item label={'No'} value={'No'} key={2} />
        </Picker>
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          55. ¿Utiliza algún medio de promoción para sus productos?
        </Text>
        <Picker
          enabled={true}
          mode="dropdown"
          onValueChange={(e) => handleChange('pregunta_55', e)}
          selectedValue={form9.pregunta_55}
        >
          <Picker.Item label="Respuesta..." />
          <Picker.Item label={'Si'} value={'Si'} key={1} />
          <Picker.Item label={'No'} value={'No'} key={2} />
        </Picker>
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          56. ¿Considera que tiene algún tipo de competencia directa?
        </Text>
        <Picker
          enabled={true}
          mode="dropdown"
          onValueChange={(e) => handleChange('pregunta_56', e)}
          selectedValue={form9.pregunta_56}
        >
          <Picker.Item label="Respuesta..." />
          <Picker.Item label={'Si'} value={'Si'} key={1} />
          <Picker.Item label={'No'} value={'No'} key={2} />
        </Picker>
        <Text style={styles.text}>Cuales</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_56_cuales', e)}
          placeholder="Respuesta..."
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          57. ¿Dónde esta realizando la venta de sus productos?
        </Text>
        <MultipleSelectList
          setSelected={(e) => setStatePregunta57(e)}
          data={pregunta_57}
          save="value"
          onSelect={() => statePregunta57}
        />
        <Text style={styles.text}>Destino transformadora local</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) =>
            handleChange('pregunta_57_destino_transformadora_local', e)
          }
          placeholder="Respuesta..."
        />
        <Text style={styles.text}>Destino transformadora nacional</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) =>
            handleChange('pregunta_57_destino_transformadora_nacional', e)
          }
          placeholder="Respuesta..."
        />
        <Text style={styles.text}>Destino venta local</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) =>
            handleChange('pregunta_57_destino_venta_local', e)
          }
          placeholder="Respuesta..."
        />
        <Text style={styles.text}>Destino venta nacional</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) =>
            handleChange('pregunta_57_destino_venta_nacional', e)
          }
          placeholder="Respuesta..."
        />
        <Text style={styles.text}>Otros</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_57_otros', e)}
          placeholder="Respuesta..."
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          58. Si usted compra la leche y no la produce responda: ¿A qué precio
          compra el Lt de leche?
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_58', e)}
          placeholder="Respuesta..."
          keyboardType="numeric"
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          59. ¿Maneja bonificaciones por calidad de leche?
        </Text>
        <Picker
          enabled={true}
          mode="dropdown"
          onValueChange={(e) => handleChange('pregunta_59', e)}
          selectedValue={form9.pregunta_59}
        >
          <Picker.Item label="Respuesta..." />
          <Picker.Item label={'Si'} value={'Si'} key={1} />
          <Picker.Item label={'No'} value={'No'} key={2} />
        </Picker>
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          60. Según su experiencia, elija las opciones que generalmente afecta
          el precio de la leche
        </Text>
        <MultipleSelectList
          setSelected={(e) => setStatePregunta60(e)}
          data={pregunta_60}
          save="value"
          onSelect={() => statePregunta60}
        />
        <Text style={styles.text}>Otros</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_60_otros', e)}
          placeholder="Respuesta..."
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          61. ¿Conoce cuales son sus costos de produccion?
        </Text>
        <Picker
          enabled={true}
          mode="dropdown"
          onValueChange={(e) => handleChange('pregunta_61', e)}
          selectedValue={form9.pregunta_61}
        >
          <Picker.Item label="Respuesta..." />
          <Picker.Item label={'Si'} value={'Si'} key={1} />
          <Picker.Item label={'No'} value={'No'} key={2} />
        </Picker>
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          62. ¿Cuáles son sus principales clientes?
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_62', e)}
          placeholder="Respuesta..."
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          63. ¿Estaría dispuesto a comercializar su producto bajo una misma
          marca de forma asociativa?
        </Text>
        <Picker
          enabled={true}
          mode="dropdown"
          onValueChange={(e) => handleChange('pregunta_63', e)}
          selectedValue={form9.pregunta_63}
        >
          <Picker.Item label="Respuesta..." />
          <Picker.Item label={'Si'} value={'Si'} key={1} />
          <Picker.Item label={'No'} value={'No'} key={2} />
        </Picker>
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          64. ¿Cuáles son sus costos aproximados de energia y gas?
        </Text>
        <Text style={styles.text}>Energia</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_64_energia', e)}
          placeholder="Respuesta..."
          keyboardType="numeric"
        />
        <Text style={styles.text}>Gas</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_64_gas', e)}
          placeholder="Respuesta..."
          keyboardType="numeric"
        />
        <Text style={styles.text}>Otros</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_64_otro', e)}
          placeholder="Respuesta..."
        />
        <Text style={styles.text}>Otros valor</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_64_otro_valor', e)}
          placeholder="Respuesta..."
          keyboardType="numeric"
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          65. ¿Estaria dispuesto a comercializar sus productos, con una entidad
          privada departamental que sirva como centro de acopio de productos
          derivados lacteos?
        </Text>
        <Picker
          enabled={true}
          mode="dropdown"
          onValueChange={(e) => handleChange('pregunta_65', e)}
          selectedValue={form9.pregunta_65}
        >
          <Picker.Item label="Respuesta..." />
          <Picker.Item label={'Si'} value={'Si'} key={1} />
          <Picker.Item label={'No'} value={'No'} key={2} />
        </Picker>
        <Text style={styles.text}>¿Por que?</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_65_porque', e)}
          placeholder="Respuesta..."
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          66. ¿Cuáles son los valores unitarios de sus productos?
        </Text>
        {Array.isArray(form9.pregunta_26)
          ? form9.pregunta_26.length > 0
            ? form9.pregunta_26.map((el) => (
                <View key={el}>
                  <Text style={styles.text}>{el}</Text>
                  {valores.map((value) => (
                    <View key={value.id}>
                      <Text style={styles.text}>{value.name}</Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={(e) =>
                          handleChange(`pregunta_66_${el}_${value.name}`, e)
                        }
                        placeholder="Respuesta..."
                      />
                    </View>
                  ))}
                </View>
              ))
            : null
          : null}
        <View>
          <Text style={styles.text}>Otros</Text>
          <TextInput
            style={styles.input}
            onChangeText={(e) => handleChange(`pregunta_66_otros`, e)}
            placeholder="Respuesta..."
          />
        </View>
      </View>
      <FormPart10 form9={form9} />
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
