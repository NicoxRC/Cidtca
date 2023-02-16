import React from 'react';
import { FlatList } from 'react-native';
import Card from './Card';

export default function Cards(props) {
  const { forms } = props;

  return (
    <FlatList
      data={forms}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(form) => String(form.id)}
      renderItem={({ item }) => <Card form={item} />}
    />
  );
}
