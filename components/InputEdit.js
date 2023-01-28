import React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';

import color from '../constant/color';
export default function InputEdit({ name, text, onChangeText }) {
  return (
    <>
      <Text style={styles.name}>{name}</Text>
      <TextInput value={text} onChangeText={onChangeText} style={styles.Input} />
    </>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 13,
    fontFamily: 'Montserrat-Regular',
    color: '#B4A5A5',
    marginTop: 10,
  },
  Input: {
    borderBottomColor: color.black,
    borderBottomWidth: 0.5,
    height: 42,
    backgroundColor: 'white',
    marginTop: 10,
  },
});
