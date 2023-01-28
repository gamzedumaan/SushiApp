import { AntDesign, Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';

import color from './../constant/color';

export default function Profile() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.ImageBackground}
      source={require('./../assets/image/backgroundImage.jpeg')}
      resizeMode="cover">
      <Image style={styles.Image} source={require('./../assets/image/profile.png')} />
      <View style={styles.are_Container}>
        <View style={styles.area}>
          <View style={styles.text_Container}>
            <Text style={styles.name_Text}>Gamze Duman</Text>
            <Text style={styles.email_Text}>xxxxxxxxxx@email.com</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('EditProfile')}
              style={styles.button}>
              <Text style={styles.editProfile_Text}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: 'white', height: '100%' }}>
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <View style={styles.button_Container}>
            <TouchableOpacity onPress={() => navigation.navigate('MyAddress')}>
              <View style={styles.button1}>
                <Entypo style={styles.Icon_Left} name="address" size={24} color="black" />
                <Text style={styles.profile_Text}>My Adress</Text>
                <AntDesign style={styles.Icon_right} name="right" size={24} color="black" />
              </View>
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity onPress={() => navigation.navigate('MyCards')}>
              <View style={styles.button2}>
                <FontAwesome style={styles.Icon_Left} name="credit-card" size={24} color="black" />
                <Text style={styles.profile_Text}>My Cards</Text>
                <AntDesign style={styles.Icon_right} name="right" size={24} color="black" />
              </View>
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity onPress={() => navigation.navigate('MyOrders')}>
              <View style={styles.button3}>
                <Ionicons style={styles.Icon_Left} name="basket-outline" size={27} color="black" />
                <Text style={styles.profile_Text}>My Orders</Text>
                <AntDesign style={styles.Icon_right} name="right" size={24} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
  },
  name_Text: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 5,
  },
  email_Text: {
    fontSize: 16,
    marginTop: 5,
  },
  editProfile_Text: {
    fontSize: 16,
    textAlign: 'center',
    margin: 8,
  },
  button: {
    height: 40,
    width: '45%',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: color.primary100,
    marginTop: 15,
  },
  Image: {
    height: 70,
    width: 60,
    zIndex: 2,
    position: 'absolute',
    marginLeft: '30%',
    marginTop: '25%',
    borderWidth: 3,
    borderRadius: 100,
    borderColor: color.primary100,
  },
  area: {
    height: 200,
    width: '100%',
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    elevation: 15,
    shadowColor: 'grey',
    shadowOffset: {
      height: 5,
      width: 0,
    },
    shadowRadius: 5,
    shadowOpacity: 0.25,
  },
  are_Container: {
    marginTop: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_Container: {
    alignItems: 'center',
    marginTop: '20%',
  },
  profile_Text: {
    fontWeight: '600',
    fontSize: 16,
  },
  Icon_Left: {
    marginLeft: 10,
  },
  Icon_right: {
    marginRight: 10,
  },
  button_Container: {
    height: 150,
    width: '95%',
    borderRadius: 10,
    borderWidth: 0.5,
    elevation: 1,
    shadowColor: 'black',
    borderColor: color.primary500,
    shadowOpacity: 0.5,
    backgroundColor: 'white',
  },
  button1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  line: {
    borderBottomColor: 'grey',
    borderWidth: 0.5,
    marginTop: 15,
  },
});
