import React from 'react';
import { FlatList, View } from 'react-native';
import { Text } from 'react-native-paper';

interface Data {
  id: number;
  name: string;

}

const dataPDVs: Array<Data> = [
  {
    id: 1,
    name: 'Circunvalar',
  },
  {
    id: 2,
    name: 'Arboleda',
  },
  {
    id: 3,
    name: 'Pereira Plaza',
  },
];

const NamesPDVs = ({ name }) => (
  <View>
    <Text>{name}</Text>
  </View>
);

export const RenderList = () => {

  const renderItem = ({ item }) => (
    <NamesPDVs name={item.name} />
  );


  return (
    <View>
      <FlatList
        data={dataPDVs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}

      />
    </View>
  );
};
