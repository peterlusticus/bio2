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

export function Organe() {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.title}>
        titel
      </Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Sinne')}>
        <Text>Sinne</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Energie')}>
        <Text>Energie</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Schutz')}>
        <Text>Schutz</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Fortpflanzung')}>
        <Text>Fortpflanzung</Text>
      </TouchableOpacity>
    </View>
  );
};
