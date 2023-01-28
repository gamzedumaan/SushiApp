/* eslint-disable prettier/prettier */
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Modal,
  View,
  TextInput,
  Alert
} from 'react-native';

import color from '../constant/color';

function EditProfile() {
const navigation=useNavigation();
const Edit =[
 {
  id:1,
  text:'gamze',
 },
 {
  id:2,
  text:'Duman',
 },
 {
  id:3,
  text:'Yayla mah Özgürlük cad',
 }

]
const [data, setData]=useState(Edit);
const [isRender,setIsRender]=useState(false);
const [visibleModal,setVisibleModal]=useState(false);
const [inpuText,setInputText]=useState();
const [editItem,setEditItem]=useState();

const onPressItem=(item)=>{
  setVisibleModal(true);
  setInputText(item.text)
  setEditItem(item.id)
}

  const renderItem = ({ item, index }) => {
    return (
  <TouchableOpacity
    onPress={()=>onPressItem(item)}style={styles.Item}>
    <Text style={styles.textProfile}>{item.text}</Text>
    <AntDesign style={{zIndex:1, position:'absolute',marginLeft:'93%',top:'40%'}} name="right" size={24} color="black" />
  </TouchableOpacity>
      )
  }
 const handleEditItem=(editItem)=>{
const newData =data.map(item=>{
  if(item.id==editItem){
    item.text=inpuText;
    return item;
  }
  return item;
})
setData(newData);
setIsRender(!renderItem);
 };
 const onPressSaveEdit=()=>{
  handleEditItem(editItem);
  setVisibleModal(false)
 }

 const buttonAlert = () =>
 Alert.alert('Are you sure ?', '', [
   {
     text: 'Cancel',
     onPress: () => console.log('Cancel Pressed'),
     style: 'cancel',
   },
   {text: 'OK', onPress: () => console.log('OK Pressed')},
 ]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.outerContainer}>
     <AntDesign style={styles.left} onPress={()=>navigation.goBack()} name="left" size={19} color="black" />

     <Text style={styles.Account_Text}>Account</Text>
      <FlatList data={data} keyExtractor={(item)=>item.id.toString}
      renderItem={renderItem}
      extraData={isRender} />
      <Modal
      animationType='fade'
      visible={visibleModal}
      onRequestClose={()=>setVisibleModal(false)}>
        <View style={styles.modalView}>
          <Text style={styles.text}>Edit Text</Text>
          <TextInput style={styles.textInput}
          onChangeText={(text)=>setInputText(text)}
          defaultValue={inpuText}
          editable
          multiline={false}
          maxLength={100}/>
          <TouchableOpacity onPress={()=>onPressSaveEdit()}
          style={styles.touchableSave}>
            <Text style={styles.text}>Save</Text>
           </TouchableOpacity>
        </View>
      </Modal>
      <TouchableOpacity onPress={buttonAlert}>
        <Text style={styles.delete_Text}>Delete your account ?</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export default EditProfile; 
const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: 'white',
  },
  outerContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  Item:{
  alignItems:'flex-start'
  },
  text:{
  fontSize:20,
  fontWeight:'600',
  color:'black',
  },
  textProfile:{
    fontSize:20,
    fontWeight:'600',
    color:'black',
    marginTop:20,
    fontFamily:'Montserrat-Bold',
    },
  textInput:{
    fontSize:20,
    height:60,
    width:'80%',
    borderColor:'grey',
    borderWidth:1
  },
  modalView:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  touchableSave:{
    backgroundColor:color.primary100,
    padding:15,
    paddingHorizontal:40,
    borderRadius:5,
    alignItems:'center',
    marginTop:10,
    justifyContent:'center',
  },
  delete_Text:{
    fontSize:19,
    color:'orange',
     marginTop:'8%',
      fontWeight:'400'
  },
  left:{
    marginTop:20
  },
Account_Text:{
  fontSize:23,
  color:color.primary100,
  fontFamily:'Montserrat-Bold',
  marginTop:10
}
});
