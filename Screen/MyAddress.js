import { AntDesign, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

import color from '../constant/color';
export default function MyAddress() {
  const navigation = useNavigation();

  const Edit = () => {
    navigation.navigate('EditAddress');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.outerContainer}>
        <AntDesign
          style={styles.icon}
          onPress={() => navigation.goBack()}
          name="left"
          size={24}
          color="black"
        />
        <Text style={styles.addresText}>ADDRESS</Text>
        <View style={styles.buttonBox1}>
          <TouchableOpacity onPress={Edit}>
            <Text style={styles.name}>GAMZE DUMAN</Text>
            <Text>{'It is a long established fact.mah'.toUpperCase()}</Text>
            <Text>{'tuzla'.toUpperCase()}</Text>
            <View style={styles.iconAndText}>
              <Text>34346</Text>
              <Feather name="more-horizontal" size={24} color="black" />
            </View>
            <Text>{'istanbul'.toUpperCase()}</Text>
            <Text>{'türkiye'.toUpperCase()}</Text>
            <Text>{'+90 5637379889'.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonBox2}>
          <TouchableOpacity onPress={Edit}>
            <Text style={styles.name}>COMPANY</Text>
            <Text>{'It is a long established fact.mah'.toUpperCase()}</Text>
            <Text>{'tuzla'.toUpperCase()}</Text>
            <View style={styles.iconAndText}>
              <Text>34346</Text>
              <Feather name="more-horizontal" size={24} color="black" />
            </View>
            <Text>{'istanbul'.toUpperCase()}</Text>
            <Text>{'türkiye'.toUpperCase()}</Text>
            <Text>{'+90 5637379889'.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  outerContainer: {
    width: '95%',
    alignSelf: 'center',
  },
  buttonBox1: {
    marginTop: 30,
  },
  addresText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    marginTop: 8,
  },
  name: {
    fontSize: 17,
    color: color.black,
    fontWeight: '700',
    fontFamily: 'Montserrat-SemiBold',
    bottom: 10,
  },
  iconAndText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 4,
  },
  buttonBox2: {
    marginTop: 30,
  },
  icon:{
    marginTop:20
  }
});
