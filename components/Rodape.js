import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Rodape() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Henrique Barreto</Text>
      <Text style={styles.text}>01/05/2026</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#fff',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
  },
});