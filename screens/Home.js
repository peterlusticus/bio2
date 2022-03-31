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

export function Home() {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.title}>
        titel
      </Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Wo')}>
        <Text>Wo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Wo')}>
        <Text>A-Z</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Wo')}>
        <Text>Suche</Text>
      </TouchableOpacity>
    </View>
  );
};
