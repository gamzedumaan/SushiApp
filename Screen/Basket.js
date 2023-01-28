import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import color from './../constant/color';

export default function Basket() {
  const navigation = useNavigation();
  const [deleteProduct, setDeleteProduct] = useState(true);
  const [total, setTotal] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.outerContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.leftIcon}>
            <AntDesign name="left" size={19} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.myCartText}>My Cart</Text>
        {deleteProduct && (
          <TouchableOpacity style={styles.buttonOne}>
            <View style={styles.ImageContainer}>
              <Image style={styles.Image} source={require('./../assets/image/sushiOrder.png')} />
            </View>
            <View style={styles.buttonContainer}>
              <View>
                <Text style={styles.salmanSushiText}>Salmon Sushi</Text>
                <View style={{ marginTop: 4 }}>
                  <Text style={styles.priceText}>$8.10</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignSelf: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View style={styles.iconContainer}>
                    <AntDesign
                      onPress={() => {
                        if (total > 0) {
                          setTotal(total - 1);
                        }
                      }}
                      name="minus"
                      size={24}
                      color="black"
                    />
                  </View>
                  <Text>{total}</Text>
                  <View
                    style={{
                      borderRadius: 10,
                      marginLeft: 20,
                      padding: 4,
                      borderWidth: 1,
                      borderColor: color.primary400,
                    }}>
                    <AntDesign
                      name="plus"
                      size={24}
                      color="black"
                      onPress={() => {
                        setTotal((s) => s + 1);
                      }}
                    />
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setDeleteProduct(false);
                  }}>
                  <AntDesign
                    name="delete"
                    style={{
                      fontSize: 16,
                      color: color.primary100,
                      backgroundColor: color.primary500,
                      borderRadius: 100,
                      padding: 8,
                      marginLeft: 40,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )}
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

  myCartText: {
    fontSize: 20,
    color: color.black,
    fontWeight: '500',
    letterSpacing: 1,
    paddingTop: 20,
    paddingLeft: 16,
    marginBottom: 10,
  },
  buttonOne: {
    width: '100%',
    height: 100,
    marginVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ImageContainer: {
    width: '30%',
    height: 100,
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.primary500,
    borderRadius: 10,
    marginRight: 22,
  },
  Image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  buttonContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-around',
  },
  salmanSushiText: {
    fontSize: 14,
    maxWidth: '100%',
    color: color.black,
    fontWeight: '600',
    letterSpacing: 1,
  },
  priceText: {
    fontSize: 14,
    fontWeight: '400',
    maxWidth: '85%',
    marginRight: 4,
    opacity: 0.6,
  },
  iconContainer: {
    borderRadius: 10,
    marginRight: 20,
    padding: 4,
    borderWidth: 1,
    borderColor: color.primary400,
  },
});
