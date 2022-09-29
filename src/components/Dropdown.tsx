import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

interface Props {
  listRender: Array<Object>;
}


export const Dropdown = ({ listRender }: Props) => {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(listRender);

  useEffect(() => {
    setItems(listRender);
  }, [listRender]);



  console.log(value);
  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        theme="LIGHT"
        placeholder="Punto de venta"
        style={{
          borderColor: 'transparent',
          backgroundColor: 'transparent',
        }}
        textStyle={{
          fontSize: 20,
        }}
      />

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
  },
});
