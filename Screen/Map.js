import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Map() {
  const [mapRegion, setMapRegion] = useState({
    latitude: 32.169,
    longitud: 119.014,
  });
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const userLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    const location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    setLocation({
      latitude: location.coords.latitude,
      longitud: location.coords.longitude,
      latitudeDelta: 0.0922,
    });
    console.log(location);
  };
  useEffect(() => {
    userLocation();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <MapView style={styles.map} region={mapRegion}>
        <Marker coordinate={mapRegion} title="Marker" />
      </MapView>
      <Button title="Get Location" onPress={userLocation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  map: {
    width: '100%',
    height: '100%',
  },
});
