import { EvilIcons, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, TextInput } from 'react-native';

import PopularChefs from '../components/PopularChefs';
import { CATEGORIES } from '../data/dummy-data';
import color from './../constant/color';
export default function ViewAll() {
  const Categori = ({ item }) => {
    console.log(item.img);
    return (
      <View style={styles.flatList_Menu}>
        <View style={{ marginLeft: '50%' }}>
          <View style={styles.iconAndtText}>
            <EvilIcons name="star" size={21} color="white" style={styles.starIcon} />
            <Text style={styles.point}>0.5</Text>
          </View>
        </View>
        <Image style={styles.flatList_image} source={item.img} />
        <Text style={styles.name_Text}>{item.title}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.outerContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput style={styles.Input}>
            <EvilIcons name="search" size={30} color="black" />
          </TextInput>
          <View style={styles.Input2}>
            <Ionicons style={{ left: 15, top: 7 }} name="filter" size={24} color="black" />
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.popular_Text}>
            <Text style={styles.popular_Sushi_Text}>Popular Sushi</Text>
          </View>
          <Image
            style={styles.menu_sushi_image}
            source={require('./../assets/image/menuSushi.jpeg')}
          />
        </View>
        <Text style={styles.popular_Chefs}>Popular Chefs</Text>
        <View style={styles.popular_Chef_Container}>
          <PopularChefs
            title="Kate Parker"
            followers="2000 Followers"
            img={require('./../assets/image/chefMen.png')}
          />
          <PopularChefs
            title="Jhone Tom"
            followers="2000 Followers"
            img={require('./../assets/image/chefMen.png')}
          />
          <PopularChefs
            title="Kate Parker"
            followers="2000 Followers"
            img={require('./../assets/image/chefMen.png')}
          />
          <PopularChefs
            title="Kate Parker"
            followers="2000 Followers"
            img={require('./../assets/image/chefMen.png')}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: 'black', fontSize: 16 }}>#fridaynight</Text>
          <Text style={{ color: 'grey', fontSize: 16 }}>3578 recipes</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={Categori}
            horizontal
          />
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
  iconAndtText: {
    height: 22,
    width: 65,
    backgroundColor: color.primary100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  point: {
    fontSize: 16,
    color: color.white,
    right: 5,
    top: 1,
  },
  starIcon: {
    left: 2,
    top: 3,
  },
  Input: {
    height: 45,
    width: '80%',
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    elevation: 15,
    shadowColor: '#EFEFEF ',
    shadowOffset: {
      height: 0,
      with: 2,
    },
  },
  Input2: {
    height: 45,
    width: 50,
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    elevation: 15,
    shadowColor: '#EFEFEF ',
    shadowOffset: {
      height: 0,
      with: 2,
    },
  },
  popular_Text: {
    height: 30,
    width: '30%',
    backgroundColor: color.primary100,
    borderRadius: 40,
    zIndex: 2,
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  popular_Chef_Container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    left: 5,
  },
  flatList_Menu: {
    margin: 20,
    padding: 10,
    backgroundColor: color.white,
    height: 160,
    width: 150,
    elevation: 15,
    shadowColor: '#EFEFEF ',
    shadowOffset: {
      height: 0,
      with: 2,
    },
    borderRadius: 10,
  },
  popular_Sushi_Text: {
    color: color.white,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 3,
  },
  popular_Chefs: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    left: 5,
  },
  menu_sushi_image: {
    height: 280,
    width: '100%',
    borderRadius: 10,
    marginTop: 10,
  },
  name_Text: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 5,
  },
  flatList_image: {
    height: 120,
    width: 140,
  },
});
