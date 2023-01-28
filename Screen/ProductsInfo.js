import { AntDesign, Ionicons, EvilIcons, Entypo, } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  Animated,
  StyleSheet
} from 'react-native';

import color from './../constant/color';

export default function ProductsInfo() {
  const scrollX = new Animated.Value(0);
  const product = [
    {
      id: 1,
      img: require('./../assets/image/sushi.png'),
    },
    {
      id: 2,
      img: require('./../assets/image/Salmon.png'),
    },
    {
      id: 3,
      img: require('./../assets/image/sushi.png'),
    },
    {
      id: 3,
      img: require('./../assets/image/Salmon.png'),
    },
  ];

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
      <ScrollView>
        <View
          style={{
            width: '100%',
            backgroundColor: color.primary500,
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 4,
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              paddingTop: 16,
              marginLeft: 16,
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign
                name="left"
                style={{
                  fontSize: 18,
                  color: color.black,
                  padding: 12,
                }}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.8}
            snapToInterval={false}
            bounces={false}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
              useNativeDriver: false,
            })}
            data={product}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <View>
                  <Image style={{ height: 200, width: 200 }} source={item.img} />
                </View>
              );
            }}
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 14, left: 8 }}>
          <Ionicons
            name="basket-outline"
            style={{
              fontSize: 17,
              color: color.primary100,
              marginRight: 6,
            }}
          />
          <Text style={{ fontWeight: '200' }}>Shopping</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 18, fontWeight: '600', paddingHorizontal: 10 }}>
            Salman Sushi
          </Text>
          <Ionicons
            name="link-outline"
            style={{
              fontSize: 24,
              color: color.black,
              borderRadius: 50,
              paddingRight: 10,
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 12,
            color: color.black,
            fontWeight: '400',
            letterSpacing: 1,
            opacity: 0.5,
            lineHeight: 22,
            maxWidth: '85%',
            marginBottom: 20,
            textAlign: 'center',
            marginLeft: 25,
            marginTop: 20,
          }}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC, making it over 2000 years old.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Map')}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 14,
              borderBottomColor: color.primary500,
              borderBottomWidth: 1,
              paddingBottom: 20,
            }}>
            <View style={{ flexDirection: 'row', width: '80%', alignItems: 'center' }}>
              <View
                style={{
                  backgroundColor: color.primary400,
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 12,
                  margin: 12,
                  borderRadius: 100,
                  marginRight: 10,
                }}>
                <EvilIcons
                  name="location"
                  style={{
                    fontSize: 18,
                    color: color.primary100,
                  }}
                />
              </View>
              <Text>Country in East Asia</Text>
            </View>
            <Entypo
              name="chevron-right"
              style={{
                fontSize: 22,
              }}
            />
          </View>
        </TouchableOpacity>

        <View style={{ marginHorizontal: 18 }}>
          <Text style={styles.price}>$8.96</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
