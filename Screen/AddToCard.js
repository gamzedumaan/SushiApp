import { AntDesign, Ionicons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import color from '../constant/color';

export default function AddToCard() {
  const navigation = useNavigation();

  const [number, setNumber] = useState(0);
  const sauceData = [
    {
      id: 1,
      icon: require('./../assets/image/Avocado.png'),
      txt: 'Avocado',
    },
    {
      id: 1,
      icon: require('./../assets/image/Rice.png'),
      txt: 'Rice',
    },
    {
      id: 1,
      icon: require('./../assets/image/Salmon.png'),
      txt: 'Salmon',
    },
    {
      id: 1,
      icon: require('./../assets/image/Corrot.png'),
      txt: 'Carrot',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.outerContainer}>
        <View style={styles.IconContainers}>
          <AntDesign onPress={() => navigation.goBack()} name="left" size={19} color="black" />
          <Ionicons name="basket-outline" size={24} color="black" />
        </View>
        <View style={styles.ImageConatainer}>
          <Image style={styles.Image} source={require('./../assets/image/orderSushi.png')} />
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'center', margin: 5, padding: 7 }}>
          <TouchableOpacity
            style={{
              height: 20,
              width: 20,
              backgroundColor: color.primary100,
              borderRadius: 5,
              right: 5,
            }}>
            <Entypo
              style={styles.minusIcon}
              onPress={() => {
                if (number > 0) {
                  setNumber(number - 1);
                }
              }}
              name="minus"
              size={17}
              color="white"
            />
          </TouchableOpacity>
          <Text style={styles.numberText}>{number}</Text>
          <TouchableOpacity
            style={{
              height: 20,
              width: 20,
              backgroundColor: color.primary100,
              borderRadius: 5,
              left: 7,
            }}>
            <Entypo
              onPress={() => setNumber(number + 1)}
              style={styles.plusIcon}
              name="plus"
              size={17}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.text}>Salmon Sushi</Text>
          <Text style={styles.text}>$8.10</Text>
        </View>
        <View
          style={{
            marginTop: 15,
          }}>
          <FlatList
            horizontal
            data={sauceData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <View style={{ marginHorizontal: 8, padding: 10 }}>
                  <View
                    style={{
                      height: 55,
                      width: 55,
                      backgroundColor: color.primary500,
                      borderRadius: 5,
                      left: 7,
                    }}>
                    <Image style={styles.Iconimg} source={item.icon} />
                    <Text style={styles.txtTxet}>{item.txt}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View>
          <Text style={{ marginTop: 20, fontSize: 19, fontWeight: 'bold' }}>Details</Text>
        </View>
        <Text>
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English.
        </Text>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '10%' }}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Basket')}>
            <View style={{ margin: 10, padding: 10 }}>
              <Text style={styles.AddToCardText}>Add to Card</Text>
            </View>
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
    alignSelf: 'center',
    width: '95%',
  },
  IconContainers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Image: {
    height: 240,
    width: 300,
  },
  ImageConatainer: {
    alignSelf: 'center',
  },
  numberText: {
    fontSize: 17,
  },
  minusIcon: {
    textAlign: 'center',
    marginTop: 1,
  },
  plusIcon: {
    textAlign: 'center',
    top: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  Iconimg: {
    height: 33,
    width: 33,
    alignSelf: 'center',
    marginTop: 10,
  },
  txtTxet: {
    fontSize: 12,
    textAlign: 'center',
    bottom: 2,
  },
  AddToCardText: {
    fontSize: 24,
    color: color.primary400,
    zIndex: 1,
    position: 'absolute',
    marginLeft: '34%',
    marginTop: 5,
  },
  button: {
    height: 60,
    width: '95%',
    backgroundColor: color.primary100,
    borderRadius: 8,
    shadowRadius: 8,
    fontWeight: '900',
    shadowColor: 'green',
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
