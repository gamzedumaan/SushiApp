import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';

import color from '../constant/color';

export default function HomePage(props) {
  const _clikbtn = () => {
    props.setHomePage(false);
  };

  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('./../assets/fonts/Montserrat-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.Image} source={require('./../assets/image/sushiWomen.png')} />
      </View>
      <View style={styles.favoriteTextContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.favoriteText}>Find Your </Text>
          <Text style={styles.favoriteText2}>Favorite</Text>
        </View>

        <Text style={{ fontSize: 30, fontFamily: 'Montserrat-Regular' }}>Sushi</Text>
      </View>
      <View style={{ alignItems: 'center', marginTop: '15%' }}>
        <View style={styles.borderRadius}>
          <TouchableOpacity style={styles.button} onPress={_clikbtn}>
            <FontAwesome style={styles.rightIcon} name="angle-right" size={30} color="white" />
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
  imageContainer: {
    alignSelf: 'center',
    marginTop: '18%',
  },
  favoriteTextContainer: {
    alignSelf: 'center',
    marginTop: '20%',
  },
  favoriteText: {
    fontSize: 30,
    fontFamily: 'Montserrat-Regular',
  },
  button: {
    height: 47,
    width: 47,
    borderRadius: 30,
    backgroundColor: color.primary100,
    left: 2.5,
    top: 2.5,
  },
  borderRadius: {
    borderRadius: 30,
    borderWidth: 4,
    height: 60,
    width: 60,
    backgroundColor: 'white',
    borderColor: color.primary100,
  },
  rightIcon: {
    marginTop: 7,
    marginLeft: '45%',
  },
  Image: {
    height: 300,
    width: 250,
  },
  favoriteText2: {
    color: color.primary100,
    fontSize: 30,
    fontFamily: 'Montserrat-Regular',
  },
});
