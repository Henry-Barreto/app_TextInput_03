import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableHighlight } from 'react-native';

const personagens = [
  { id: 1, nome: 'Sonic', img: require('../assets/sonic.png') },
  { id: 2, nome: 'Mario', img: require('../assets/mario.png') },
  { id: 3, nome: 'Pikachu', img: require('../assets/pikachu.png') }
];

export default function Conteudo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [guess, setGuess] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * personagens.length);
    setCurrentIndex(randomIndex);
  }, []);

  const verificar = () => {
    if (guess.trim().toLowerCase() === personagens[currentIndex].nome.toLowerCase()) {
      alert('Parabéns! Você acertou!');
    } else {
      alert('Ops! Tente novamente.');
    }
  };

  const proximo = () => {
    const nextIndex = (currentIndex + 1) % personagens.length;
    setCurrentIndex(nextIndex);
    setGuess('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acerte o Personagem</Text>
      
      <View style={styles.imageContainer}>
        <Image 
          source={personagens[currentIndex].img} 
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <TextInput 
        style={styles.input}
        placeholder="Digite o nome do personagem"
        value={guess}
        onChangeText={setGuess}
        onSubmitEditing={verificar} /* <-- Esta é a propriedade que faz o ENTER funcionar */
      />

      <TouchableHighlight 
        style={[styles.button, { backgroundColor: '#4CAF50' }]} 
        onPress={verificar}
        underlayColor="#45a049"
      >
        <Text style={styles.buttonText}>Verificar</Text>
      </TouchableHighlight>

      <TouchableHighlight 
        style={[styles.button, { backgroundColor: '#2196F3' }]} 
        onPress={proximo}
        underlayColor="#1e88e5"
      >
        <Text style={styles.buttonText}>Próximo</Text>
      </TouchableHighlight>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  imageContainer: {
    borderWidth: 2,
    borderColor: '#000',
    padding: 10,
    marginBottom: 20,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
  },
  image: {
    width: '100%',
    height: '100%',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    width: 150,
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
});