import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Cabecalho from './components/Cabecalho';
import Conteudo from './components/Conteudo';
import Rodape from './components/Rodape';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Cabecalho />
      <Conteudo />
      <Rodape />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D09B98',
  },
});