import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  btn: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 10
  },
});

export function Krankheiten() {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.title}>
        titel
      </Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Auslöser')}>
        <Text>Auslöser</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Behandlung')}>
        <Text>Behandlung</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Covid')}>
        <Text>Covid</Text>
      </TouchableOpacity>
    </View>
  );
};
