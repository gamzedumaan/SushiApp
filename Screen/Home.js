import { AntDesign, Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import Pruduct from '../components/Pruduct.js';
import color from '../constant/color';
export default function Home() {
  const sushiData = [
    {
      id: 1,
      title: 'Salman Sushi',
      price: '$8.10',
      img: require('./../assets/image/sushi.png'),
    },
    {
      id: 2,
      title: 'Salman Sushi',
      price: '$9.10',
      img: require('./../assets/image/sushi.png'),
    },
    {
      id: 2,
      title: 'Salman Sushi',
      price: '$9.10',
      img: require('./../assets/image/sushi.png'),
    },
    {
      id: 2,
      title: 'Salman Sushi',
      price: '$9.10',
      img: require('./../assets/image/sushi.png'),
    },
  ];

  const navigation = useNavigation();
  const AddToCard = () => {
    navigation.navigate('AddToCard');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.outerContainer}>
        <View style={styles.orderTextContainer}>
          <Text style={styles.orderText}>What would you like</Text>
          <Text style={styles.orderText}>o order today ?</Text>
        </View>
        <View style={styles.startArea}>
          <Image style={styles.Image} source={require('./../assets/image/courier.png')} />
          <View style={{ marginLeft: '55%' }}>
            <Text style={styles.freeText}>Free Delivery</Text>
            <Text style={styles.dateText}>Dec 10 - Jan 10</Text>
            <TouchableOpacity onPress={AddToCard} style={styles.button}>
              <Text style={styles.buttonText}>You can order ?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerTextPopular}>
          <Text style={styles.popularText}>Popular</Text>
          <TouchableOpacity onPress={() => navigation.navigate('ViewAll')}>
            <Text style={styles.viewText}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignSelf: 'center', width: '95%' }}>
          <FlatList
            data={sushiData}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={() => navigation.navigate('ProductsInfo')}>
                  <View style={{ padding: 5, margin: 5, marginLeft: 20 }}>
                    <Pruduct img={item.img} title={item.title} price={item.price} />
                    <View style={{ flexDirection: 'row', marginLeft: '40%' }}>
                      <AntDesign name="star" size={15} color="#FF8C00" />
                      <Text style={{ fontFamily: 'Montserrat-Regular' }}>4.9</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={styles.containerTextPopular}>
          <Text style={styles.popularText}>Recommended</Text>
          <Text style={styles.viewText}>View All</Text>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <View style={styles.recommendedArea}>
            <Image style={styles.sushiRollsImage} source={require('./../assets/image/sushi.png')} />
            <View style={styles.info}>
              <Text style={styles.californiaText}>California Roll</Text>
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <AntDesign name="star" size={15} color="#FF8C00" />
                <Text style={styles.reviewsText}>4.9 reviews</Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Fontisto name="hourglass-start" size={15} color="#FF8C00" />
                <Text style={styles.minutesText}>20 minutes</Text>
              </View>
            </View>
          </View>
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
    width: '90%',
    alignSelf: 'center',
  },
  orderText: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Regular',
  },
  orderTextContainer: {
    marginTop: 25,
    width: '95%',
    alignSelf: 'center',
    left: 10,
  },
  startArea: {
    alignSelf: 'center',
    marginTop: 17,
    height: 130,
    width: '90%',
    padding: 16,
    marginHorizontal: 25,
    borderRadius: 10,
    elevation: 4,
    backgroundColor: color.primary400,
    shadowColor: color.primary200,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 0.25,
  },
  Image: {
    height: 70,
    width: 70,
    zIndex: 2,
    position: 'absolute',
    marginTop: 20,
    elevation: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 10,
    marginLeft: 40,
  },
  button: {
    height: 30,
    width: 105,
    backgroundColor: color.primary100,
    borderRadius: 7,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    marginTop: 6,
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Montserrat-Regular',
  },
  freeText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Regular',
  },
  dateText: {
    opacity: 0.4,
    marginTop: 10,
    fontFamily: 'Montserrat-Regular',
  },
  containerTextPopular: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '95%',
  },
  popularText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 20,
    fontFamily: 'Montserrat-Regular',
  },
  viewText: {
    color: color.primary100,
    fontSize: 17,
    opacity: 0.79,
    fontFamily: 'Montserrat-Regular',
  },
  recommendedArea: {
    alignSelf: 'center',
    marginTop: 17,
    height: 130,
    width: '90%',
    padding: 16,
    marginHorizontal: 25,
    borderRadius: 10,
    elevation: 4,
    backgroundColor: color.primary500,
    shadowColor: color.primary200,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 0.25,
  },
  sushiRollsImage: {
    height: 100,
    width: 100,
  },
  californiaText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    fontFamily: 'Montserrat-Regular',
  },
  minutesText: {
    left: 5,
    fontFamily: 'Montserrat-Regular',
  },
  reviewsText: {
    left: 5,
    fontFamily: 'Montserrat-Regular',
  },
  info:{
    zIndex: 1,
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop: '10%',
    marginLeft: '15%',
  }
});
