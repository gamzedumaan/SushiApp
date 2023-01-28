import { AntDesign } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';

import ChangeText from '../components/ChangeText';

export default function CurrentAdress() {
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route);
  const Save = () => {
    Alert.alert('Recorded');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="black" />
      <View style={styles.outerContainer}>
        <AntDesign
          style={styles.left}
          onPress={() => navigation.goBack()}
          name="left"
          size={24}
          color="black"
        />
        <Text style={styles.informationText}>{'current address information'.toUpperCase()}</Text>
        <View style={styles.result_Container}>
          <ChangeText>{route.params.nameValue}</ChangeText>
          <ChangeText>{route.params.surnameValue}</ChangeText>
          <ChangeText>{route.params.addressValue}</ChangeText>
          <ChangeText>{route.params.floorValue}</ChangeText>
          <ChangeText> {route.params.cityValue} </ChangeText>
          <ChangeText>{route.params.gsmValue}</ChangeText>
          <ChangeText>{route.params.tcknValue}</ChangeText>
        </View>

        <View style={styles.buttonSaveContainer}>
          <TouchableOpacity onPress={Save} style={styles.buttonSave}>
            <Text style={styles.saveText}>SAVE</Text>
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
    width: '95%',
    alignSelf: 'center',
  },
  informationText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    marginTop: 30,
    marginBottom: 10,
  },
  resultText: {
    borderBottomWidth: 0.5,
    borderColor: 'black',
  },
  buttonSave: {
    height: 50,
    width: '95%',
    backgroundColor: 'black',
  },
  saveText: {
    color: 'white',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 17,
    textAlign: 'center',
    marginTop: 13,
  },
  buttonSaveContainer: {
    alignItems: 'center',
    marginTop: '30%',
  },
  result_Container: {
    marginTop: 20,
  },
  left:{
    marginTop:20

  }
});
