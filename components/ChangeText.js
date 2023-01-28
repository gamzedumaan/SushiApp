import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ChangeText({ children }) {
  return (
    <>
      <View style={{ borderBottomWidth: 1, margin: 5, padding: 5 }}>
        <Text>{children}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
