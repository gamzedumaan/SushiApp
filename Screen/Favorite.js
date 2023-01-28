/* eslint-disable prettier/prettier */
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity,FlatList } from 'react-native';

import color from './../constant/color';
export default function Favorite() {
const navigation =useNavigation();
  const favoriteData =[
    {
      id:1,
      img:require('./../assets/image/sushi.png'),
      title:'Salman Sushi'
    },
    {
      id:2,
      img:require('./../assets/image/Salmon.png'),
      title:'Salman Sushi'
    },
    {
      id:3,
      img:require('./../assets/image/Rice.png'),
      title:'Rice'
    },
    {
      id:4,
      img:require('./../assets/image/sushiOrder.png'),
      title:'Rice'
    },
    {
      id:5,
      img:require('./../assets/image/Avocado.png'),
      title:'Rice'
    },
    {
      id:4,
      img:require('./../assets/image/Corrot.png'),
      title:'Rice'
    }
  ]

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.outerContainer}>
        <View style={styles.icon_text_Container}>
          <Text style={styles.account_Text}>Account</Text>
          <Ionicons name="settings-outline" size={24} color="black" />
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
        <View style={{ marginTop: 20 }}>
          <View style={styles.account_Container}>
            <View
              style={styles.IconTextContainer}>
              <Ionicons name="person" size={35} color="black" />
              <AntDesign name="rightcircle" size={35} color="black" />
            </View>
            <View style={styles.TextContainer}>
              <Text style={styles.nameText}>Gamze Duman</Text>
              <Text style={styles.workText}>Sofware Developer</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <View style={styles.myFavoriteContainer}>
        <Text style={styles.myFavoriteText}>My Favorites</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('ViewAll')} />
        </View>
        <View style={{marginTop:20,alignItems:'center'}}>
          <FlatList data={favoriteData}
          keyExtractor={(item)=>item.id}
          numColumns={2}
          renderItem={({item})=>{
            return(
              <View style={styles.viewOuther}>
              <View style={styles.FlatListbackground}>
             <Image style={styles.img} source={item.img}/>
             <Text style={styles.Text}>{item.title}</Text>
              </View>
              <View style={styles.heartContainer}>
              <AntDesign style={styles.heart} name="heart" size={20} color="red"/>
                </View>   
              </View>
            )
          }}
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
    width: '90%',
    alignSelf: 'center',
  },
  icon_text_Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  account_Text: {
    fontSize: 25,
    fontFamily:'Montserrat-Regular'
  },
  account_Container: {
    margin: 5,
    padding: 45,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'grey',
    shadowOffset: {
      height: 0,
      width: 1,
    },
    shadowRadius: 10,
    shadowOpacity: 0.18,
  },
  myFavoriteContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:16
  },
  myFavoriteText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    fontFamily:'Montserrat-SemiBold'
  
  },
  allText:{
    color: color.primary100,
    fontSize: 17,
    opacity: 0.79,
  },
  IconTextContainer:{
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '120%',
  },
  heartContainer:{
    height:30,
    width:30, 
    backgroundColor:'white',
    borderRadius:5,
    zIndex:1,
    position:'absolute',
    marginLeft:120,
     marginTop:10
  },
  heart:{
    marginLeft:5,
    marginTop:5
  },
  FlatListbackground:{
    backgroundColor:'#F9F9F9',
    height:160, 
    width:150, 
    elevation:15,       
    borderRadius:10,
    shadowColor:'#EFEFEF ', 
    shadowOffset:{
    height:0,
   with:2,
     },           
  },
  Text:{
    textAlign:'center', 
    fontSize:16, 
    fontWeight:'400'
  },
  TextContainer:{
    zIndex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop:'14%'
  },
  nameText:{
    fontWeight:'500',
     fontSize:18,
     fontFamily:'Montserrat-Regular'
    
  },
  workText:{
    fontWeight:'200',
     fontSize:15,
     fontFamily:'Montserrat-Regular'
  },
  img:{
    height:120,
    width:140
  },
  viewOuther:{
    margin:10, 
    padding:5
  }
});
