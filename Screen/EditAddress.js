import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';

import InputEdit from '../components/InputEdit';
import color from '../constant/color';

export default function EditAddress() {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const [nameValue, setNameValue] = useState('');
  const [surnameValue, setSurnameValue] = useState('');
  const [addressValue, setAddressValue] = useState('');
  const [floorValue, setFlorValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [gsmValue, setGsmValue] = useState('');
  const [tcknValue, setTcknValue] = useState('');

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const Register = () => {
    navigation.navigate('CurrentAdress', {
      nameValue: nameValue,
      surnameValue: surnameValue,
      addressValue: addressValue,
      floorValue: floorValue,
      cityValue: cityValue,
      gsmValue: gsmValue,
      tcknValue: tcknValue
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.outerContainer}>
        <AntDesign
          style={styles.left}
          onPress={() => navigation.goBack()}
          name="left"
          size={24}
          color="black"
        />
        <Text style={styles.addresText}>EDİT ADDRESS</Text>
        <InputEdit name="NAME" text={nameValue} onChangeText={setNameValue} />
        <InputEdit name="SURNAME" text={surnameValue} onChangeText={setSurnameValue} />
        <InputEdit name="ADDRESS" text={addressValue} onChangeText={setAddressValue} />
        <InputEdit name="FLLOR/APARTMENT" text={floorValue} onChangeText={setFlorValue} />
        <InputEdit name="CİTY" text={cityValue} onChangeText={setCityValue} />
        <InputEdit name="GSM" text={gsmValue} onChangeText={setGsmValue} />
        <InputEdit name="TCKN" text={tcknValue} onChangeText={setTcknValue} />
        <View style={styles.iconAndText}>
          <Text style={styles.companyText}>COMPANY</Text>
          <Switch
            trackColor={{ false: 'grey', true: 'green' }}
            thumbColor={isEnabled ? 'grey' : 'green'}
            ios_backgroundColor="white"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{ marginTop: 10 }}
          />
        </View>
        <View style={styles.buttonSaveContainer}>
          <TouchableOpacity onPress={Register} style={styles.buttonSave}>
            <Text style={styles.saveText}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  addresText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    marginTop: 8,
    marginBottom: 10,
  },
  buttonSave: {
    height: 50,
    width: '95%',
    backgroundColor: color.black,
  },
  saveText: {
    color: color.white,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 17,
    textAlign: 'center',
    marginTop: 13,
  },
  buttonSaveContainer: {
    alignItems: 'center',
    marginTop: 35,
  },
  companyText: {
    marginTop: 15,
    fontSize: 16,
  },
  iconAndText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  left:{
    marginTop:20
  }

});
