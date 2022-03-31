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

export function Wo() {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.title}>
        titel
      </Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Mensch')}>
        <Text>Mensch</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Tier')}>
        <Text>Tier</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Pflanze')}>
        <Text>Pflanze</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Zelle')}>
        <Text>Zelle</Text>
      </TouchableOpacity>
    </View>
  );
};
