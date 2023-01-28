import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Pruduct({ title, price, img }) {
  return (
    <View style={{ backgroundColor: 'white', paddingLeft: 10 }}>
      <Image style={{ width: 110, height: 110 }} source={img} />
      <Text style={{ fontFamily: 'Montserrat-Regular' }}>{title}</Text>
      <Text style={{ fontFamily: 'Montserrat-Regular' }}>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
