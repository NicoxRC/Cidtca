import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import { Picker } from '@react-native-picker/picker';
import FormPart3 from './FormPart3';

export default function FormPart2(props) {
  const { form1 } = props;

  const [form2, setForm2] = useState({});
  const [statePregunta9, setStatePregunta9] = useState([]);
  const [statePregunta10, setStatePregunta10] = useState([]);
  const [statePregunta11, setStatePregunta11] = useState([]);
  const [statePregunta12, setStatePregunta12] = useState([]);
  const [statePregunta13, setStatePregunta13] = useState([]);

  const pregunta_9 = [
    { key: '1', value: 'Se reibe en planta/centro de acopio' },
    { key: '2', value: 'La recoge en el centro de acopio' },
    { key: '3', value: 'Recibe al productor en finca' },
  ];

  const pregunta_10 = [
    { key: '1', value: 'Termo King' },
    { key: '2', value: 'Carro Particular' },
    { key: '3', value: 'Moto' },
    { key: '4', value: 'Caballo' },
  ];

  const pregunta_11 = [
    { key: '1', value: 'cantinas de aluminio' },
    { key: '2', value: 'tanques plasticos' },
    { key: '3', value: 'motobomba' },
  ];

  const pregunta_12 = [
    { key: '1', value: 'pasa directo a proceso' },
    { key: '2', value: 'tanque temporal' },
    { key: '3', value: 'tanque frio' },
  ];

  const pregunta_13 = [
    { key: '1', value: 'Asociados' },
    { key: '2', value: 'Externos' },
  ];

  const newForm = (form1) => {
    setForm2({
      pregunta_1: form1.pregunta_1,
      pregunta_2: form1.pregunta_2,
      pregunta_2_otro: form1.pregunta_2_otro,
      pregunta_3: form1.pregunta_3,
      pregunta_3_puntaje: form1.pregunta_3_puntaje,
      pregunta_4: form1.pregunta_4,
      pregunta_5_numero: form1.pregunta_5_numero,
      pregunta_5_correo: form1.pregunta_5_correo,
      pregunta_6: form1.pregunta_6,
      pregunta_7: form1.pregunta_7,
      pregunta_7_vereda: form1.pregunta_7_vereda,
      pregunta_8: form1.pregunta_8,
    });
  };

  useEffect(() => {
    newForm(form1);
  }, [form1]);

  useEffect(() => {
    statePregunta9.length > 0
      ? setForm2({ ...form2, pregunta_9: statePregunta9 })
      : null;
    statePregunta10.length > 0
      ? setForm2({ ...form2, pregunta_10: statePregunta10 })
      : null;
    statePregunta11.length > 0
      ? setForm2({ ...form2, pregunta_11: statePregunta11 })
      : null;
    statePregunta12.length > 0
      ? setForm2({ ...form2, pregunta_12: statePregunta12 })
      : null;
    statePregunta13.length > 0
      ? setForm2({ ...form2, pregunta_13: statePregunta13 })
      : null;
  }, [
    statePregunta9,
    statePregunta10,
    statePregunta11,
    statePregunta12,
    statePregunta13,
  ]);

  const handleChange = (name, value) => {
    setForm2({ ...form2, [name]: value });
  };

  return (
    <View>
      <View style={styles.container_form}>
        <Text style={styles.textTitle}>
          CRITERIO 2 CARACTERISTICAS DE ACOPIO Y TRANSPORTE DE LECHE
        </Text>
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          9. ¿Qué métodos de acopio de leche utiliza?
        </Text>
        <MultipleSelectList
          setSelected={(e) => setStatePregunta9(e)}
          data={pregunta_9}
          save="value"
          onSelect={() => statePregunta9}
        />
        <Text style={styles.text}>
          Se recibe en planta/centro de acopio porcentaje:
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) =>
            handleChange('pregunta_9_porcentaje_recibe_planta', e)
          }
          placeholder="Respuesta..."
          keyboardType="numeric"
        />
        <Text style={styles.text}>
          La recoge en el centro de acopio porcentaje:
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) =>
            handleChange('pregunta_9_porcentaje_recoge_planta', e)
          }
          placeholder="Respuesta..."
          keyboardType="numeric"
        />
        <Text style={styles.text}>
          Recibe al productor en finca porcentaje:
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) =>
            handleChange('pregunta_9_porcentaje_via_productor_finca', e)
          }
          placeholder="Respuesta..."
          keyboardType="numeric"
        />
        <Text style={styles.text}>Otro:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_9_otro', e)}
          placeholder="Respuesta..."
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          10. ¿De qué manera se transporta la leche hasta la planta/centro de
          acopio?
        </Text>
        <MultipleSelectList
          setSelected={(e) => setStatePregunta10(e)}
          data={pregunta_10}
          save="value"
          onSelect={() => statePregunta10}
        />
        <Text style={styles.text}>Termo King porcentaje:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) =>
            handleChange('pregunta_10_porcentaje_termo_king', e)
          }
          placeholder="Respuesta..."
          keyboardType="numeric"
        />
        <Text style={styles.text}>Carro Particular porcentaje:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) =>
            handleChange('pregunta_10_porcentaje_carro_particular', e)
          }
          placeholder="Respuesta..."
          keyboardType="numeric"
        />
        <Text style={styles.text}>Moto porcentaje:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_10_porcentaje_moto', e)}
          placeholder="Respuesta..."
          keyboardType="numeric"
        />
        <Text style={styles.text}>Caballo porcentaje:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) =>
            handleChange('pregunta_10_porcentaje_caballo', e)
          }
          placeholder="Respuesta..."
          keyboardType="numeric"
        />
        <Text style={styles.text}>Otro:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_10_otro', e)}
          placeholder="Respuesta..."
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          11. ¿De qué manera Transporta la leche desde plataforma a areas de
          proceso?
        </Text>
        <MultipleSelectList
          setSelected={(e) => setStatePregunta11(e)}
          data={pregunta_11}
          save="value"
          onSelect={() => statePregunta11}
        />
        <Text style={styles.text}>Otro:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_11_otro', e)}
          placeholder="Respuesta..."
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          12. ¿De qué manera realiza el almacenamiento de la leche?
        </Text>
        <MultipleSelectList
          setSelected={(e) => setStatePregunta12(e)}
          data={pregunta_12}
          save="value"
          onSelect={() => statePregunta12}
        />
        <Text style={styles.text}>Otro:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_12_otro', e)}
          placeholder="Respuesta..."
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.textTitle}>CONOCIMIENTO DE SUS PROVEEDORES</Text>
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>13. ¿Sus proveedores de leche son?</Text>
        <MultipleSelectList
          setSelected={(e) => setStatePregunta13(e)}
          data={pregunta_13}
          save="value"
          onSelect={() => statePregunta13}
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          14. ¿Cuantos Proveedores de leche tiene?
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_14', e)}
          placeholder="Respuesta..."
          keyboardType="numeric"
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          15. Si son externos nombre sus principales proveedores, si son
          asociados anexe listado de socios.
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_15', e)}
          placeholder="Respuesta..."
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          16. ¿Sus proveedores cuentan con certificado de Buenas Prácticas
          Ganaderas BPG?
        </Text>
        <Picker
          enabled={true}
          mode="dropdown"
          onValueChange={(e) => handleChange('pregunta_16', e)}
          selectedValue={form2.pregunta_16}
        >
          <Picker.Item label="Respuesta..." />
          <Picker.Item label={'Si'} value={'Si'} key={1} />
          <Picker.Item label={'No'} value={'No'} key={2} />
          <Picker.Item label={'No sabe'} value={'No sabe'} key={3} />
        </Picker>
        <Text style={styles.text}>Cuantos</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_16_cuantos', e)}
          placeholder="Respuesta..."
          keyboardType="numeric"
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          17. ¿Si su proveedor es un centro de acopio, cuentan con certificado
          de Buenas Prácticas de Manufactura BPM?
        </Text>
        <Picker
          enabled={true}
          mode="dropdown"
          onValueChange={(e) => handleChange('pregunta_17', e)}
          selectedValue={form2.pregunta_17}
        >
          <Picker.Item label="Respuesta..." />
          <Picker.Item label={'Si'} value={'Si'} key={1} />
          <Picker.Item label={'No'} value={'No'} key={2} />
          <Picker.Item label={'No sabe'} value={'No sabe'} key={3} />
        </Picker>
        <Text style={styles.text}>Cuantos</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_17_cuantos', e)}
          placeholder="Respuesta..."
          keyboardType="numeric"
        />
      </View>
      <View style={styles.container_form}>
        <Text style={styles.text}>
          18 ¿Sus proveedores cuentan con certificado de Buenas Prácticas de
          Ordeño BPO?
        </Text>
        <Picker
          enabled={true}
          mode="dropdown"
          onValueChange={(e) => handleChange('pregunta_18', e)}
          selectedValue={form2.pregunta_18}
        >
          <Picker.Item label="Respuesta..." />
          <Picker.Item label={'Si'} value={'Si'} key={1} />
          <Picker.Item label={'No'} value={'No'} key={2} />
          <Picker.Item label={'No sabe'} value={'No sabe'} key={3} />
        </Picker>
        <Text style={styles.text}>Cuantos</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleChange('pregunta_18_cuantos', e)}
          placeholder="Respuesta..."
          keyboardType="numeric"
        />
      </View>
      <FormPart3 form2={form2} />
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
