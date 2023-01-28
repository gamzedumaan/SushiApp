import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Orders from '../components/Orders';

export default function MyOrders() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.outerContainer}>
        <View style={styles.tabImageContainer}>
          <AntDesign
            style={styles.icon}
            name="left"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />
          <Image style={styles.Image} source={require('./../assets/image/profile.png')} />
        </View>
        <Text style={styles.myOrdersText}>My Orders</Text>
        <View style={styles.text_icon_Container}>
          <Text style={styles.order_Text}>Order from May 24, 2023</Text>
          <AntDesign name="ellipsis1" size={28} color="black" />
        </View>
        <Orders
          pices="2x"
          price="118$"
          text="Salman Sushi"
          img={require('./../assets/image/sushi.png')}
        />
        <Orders price="105$" text="Rice" img={require('./../assets/image/Rice.png')} />
        <View style={{ justifyContent: 'center ', marginTop: 10 }}>
          <View style={styles.line} />
        </View>
        <View style={styles.Track_Container}>
          <Text>{'Track Shipment'.toUpperCase()}</Text>
          <AntDesign
            style={{ marginRight: '45%', bottom: 5 }}
            name="arrowright"
            size={22}
            color="black"
          />
          <Text style={styles.price}>$ 223</Text>
        </View>
        <View style={styles.text_icon_Container}>
          <Text style={styles.order_Text}>Order from Jun 09, 2020</Text>
          <AntDesign name="ellipsis1" size={28} color="black" />
        </View>
        <Orders price="118$" text="Corrot" img={require('./../assets/image/Corrot.png')} />
        <Orders price="105$" text="Susi Salman" img={require('./../assets/image/Avocado.png')} />
        <View style={{ justifyContent: 'center ', marginTop: 10 }}>
          <View style={styles.line} />
        </View>
        <View style={styles.Track_Container}>
          <Text>{'Track Shipment'.toUpperCase()}</Text>
          <AntDesign
            style={{ marginRight: '45%', bottom: 5 }}
            name="arrowright"
            size={22}
            color="black"
          />
          <Text style={styles.price}>$ 223</Text>
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
  Image: {
    height: 50,
    width: 50,
  },
  tabImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  myOrdersText: {
    fontSize: 40,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 20,
  },
  order_Text: {
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
  },
  text_icon_Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  Track_Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  price: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: 'grey',
  },
});
