import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Cabecalho() {
  return (
    <View style={styles.header}>
      <Text style={styles.subtitle}>Capitulo 06 - Componentes UI</Text>
      <Text style={styles.title}>TouchableHighlight || TextInput</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#8B0000',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  subtitle: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});