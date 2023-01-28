import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Orders({ text, price, img }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Image style={styles.Image} source={img} />
      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Image: {
    height: 80,
    width: 80,
  },
  text: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
  },
});
