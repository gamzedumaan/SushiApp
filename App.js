import { AntDesign, Ionicons, Octicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import AddToCard from './Screen/AddToCard';
import Basket from './Screen/Basket';
import CurrentAdress from './Screen/CurrentAdress';
import EditAddress from './Screen/EditAddress';
import EditProfile from './Screen/EditProfile';
import Favorite from './Screen/Favorite';
import Home from './Screen/Home';
import HomePage from './Screen/HomePage';
import Map from './Screen/Map';
import MyAddress from './Screen/MyAddress';
import MyCards from './Screen/MyCards';
import MyOrders from './Screen/MyOrders';
import ProductsInfo from './Screen/ProductsInfo';
import Profile from './Screen/Profile';
import ViewAll from './Screen/ViewAll';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [homePage, setHomePage] = useState(true);

  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }

  if (homePage) {
    return (
      <NavigationContainer>
        <HomePage setHomePage={setHomePage} />
      </NavigationContainer>
    );
  }
  const Area = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddToCard" component={AddToCard} />
        <Stack.Screen name="ProductsInfo" component={ProductsInfo} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="ViewAll" component={ViewAll} />
        <Stack.Screen name="MyAddress" component={MyAddress} />
        <Stack.Screen name="MyCards" component={MyCards} />
        <Stack.Screen name="MyOrders" component={MyOrders} />
        <Stack.Screen name="EditAddress" component={EditAddress} />
        <Stack.Screen name="CurrentAdress" component={CurrentAdress} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={Area}
          options={{
            tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
            title: '',
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={Favorite}
          options={{
            tabBarIcon: () => <Ionicons name="heart-outline" size={24} color="black" />,
            title: '',
          }}
        />
        <Tab.Screen
          name="Basket"
          component={Basket}
          options={{
            tabBarIcon: () => <Ionicons name="basket-outline" size={24} color="black" />,
            title: '',
          }}
        />
        <Tab.Screen
          name="Map"
          component={Map}
          options={{
            tabBarIcon: () => <Octicons name="location" size={24} color="black" />,
            title: '',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({});
