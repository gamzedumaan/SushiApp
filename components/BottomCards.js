import { Ionicons, Entypo } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
export default function BottomCards({ text, iconText }) {
  return (
    <View style={styles.bottomInfo}>
      <TouchableOpacity style={{ margin: 10, padding: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <Ionicons name={iconText} size={20} color="black" />
          <Text style={styles.text}>Change PIN{text}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.line} />
      <TouchableOpacity style={{ margin: 10, padding: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <Entypo name="block" size={20} color="black" />
          <Text style={styles.text}>Block Card{text}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.line} />
      <TouchableOpacity style={{ margin: 10, padding: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <Ionicons name="logo-euro" size={18} color="black" />
          <Text style={styles.text}>Change Limits {text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomInfo: {
    height: 220,
    width: '100%',
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    elevation: 8,
    shadowColor: 'grey',
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  text: {
    color: 'black',
    fontSize: 18,
    marginLeft: 20,
    textAlign: 'center',
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: 'white',
  },
});
