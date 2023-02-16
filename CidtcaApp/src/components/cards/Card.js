import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';

export default function Card(props) {
  const { form } = props;

  return (
    <TouchableWithoutFeedback>
      <View style={styles.card}>
        <Image
          source={{ uri: form.foto_encuestado }}
          style={{ width: 300, height: 250 }}
        />
        <Text style={styles.text}>{form.nombre_encuestado}</Text>
        <Text style={styles.text}>{form.pregunta_7}</Text>
        <Text style={styles.text}>{form.pregunta_2}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    height: 400,
    width: 300,
    padding: 20,
    margin: 15,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#ffffff',
  },
  text: {
    alignSelf: 'flex-start',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
  },
});
