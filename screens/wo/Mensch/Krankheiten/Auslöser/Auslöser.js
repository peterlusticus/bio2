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

export function Auslöser() {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.title}>
        titel
      </Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Bakterien')}>
        <Text>Bakterien</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Viren')}>
        <Text>Viren</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Gene')}>
        <Text>Gene</Text>
      </TouchableOpacity>
    </View>
  );
};
