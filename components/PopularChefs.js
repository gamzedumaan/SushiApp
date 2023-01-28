import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function PopularChefs({ title, followers, img }) {
  return (
    <View style={{ margin: 10, padding: 5 }}>
      <View style={{ alignItems: 'center' }}>
        <Image style={{ height: 60, width: 60, borderRadius: 10 }} source={img} />
      </View>
      <Text style={{ fontSize: 16, fontWeight: '600', color: 'black', marginTop: 5 }}>{title}</Text>
      <Text style={{ fontSize: 12, fontWeight: '400', color: 'grey', marginTop: 5 }}>
        {followers}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
