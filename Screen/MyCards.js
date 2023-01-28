import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import BottomCards from '../components/BottomCards';

export default function MyCards() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.outerContainer}>
        <View style={styles.IconTextContainer}>
          <AntDesign
            style={styles.icon}
            onPress={() => navigation.goBack()}
            name="left"
            size={24}
            color="black"
          />
          <Text style={styles.cards_Text}>Cards</Text>
        </View>

        <ScrollView style={{ marginTop: 20 }} horizontal>
          <View style={styles.addCard}>
            <TouchableOpacity>
              <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
          </View>
          <Image
            style={{ height: 200, width: 350, padding: 10, margin: 10, borderRadius: 10 }}
            source={require('./../assets/image/OneCard.png')}
          />
          <Image
            style={{ height: 200, width: 350, padding: 10, margin: 10, borderRadius: 10 }}
            source={require('./../assets/image/TwoCard.png')}
          />
        </ScrollView>
        <View style={{ marginTop: 50 }}>
          <BottomCards iconText="pin" />
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
  cards_Text: {
    fontSize: 30,
    color: 'black',
    marginTop: 10,
    fontFamily: 'Montserrat-SemiBold',
  },
  addCard: {
    height: 200,
    width: 60,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 20,
    borderStyle: 'dashed',
    marginTop: 10,
  },
  plus: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    marginTop: 80,
  },
  bottomInfo: {
    height: 250,
    width: '100%',
    backgroundColor: 'black',
    borderRadius: 10,
  },
  IconTextContainer: {
    flexDirection: 'row',
    marginTop:5,
  },
  icon:{
    marginTop:16
  }
});
