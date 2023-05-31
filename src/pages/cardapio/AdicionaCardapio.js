import React, { useState } from 'react';
import { Image, StyleSheet, View, TextInput } from 'react-native';
import { Button } from 'react-native-paper';

const AdicionaCardapio = () => {
  const [categoria, setCategoria] = useState('');
  const [nome, setNome] = useState('');
  const [codigo, setCodigo] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSave = () => {
    // Lógica para salvar os dados
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../images/Logo_OhChefia.png')}
        style={styles.logo}
      />
      <TextInput
        value={categoria}
        onChangeText={setCategoria}
        style={styles.input}
        placeholder="Categoria"
      />
      <TextInput
        value={nome}
        onChangeText={setNome}
        style={styles.input}
        placeholder="Nome do item"
      />
      <TextInput
        value={codigo}
        onChangeText={setCodigo}
        style={styles.input}
        placeholder="Código"
      />
      <TextInput
        value={descricao}
        onChangeText={setDescricao}
        style={styles.input}
        placeholder="Descrição"
      />
      <Button
        icon="content-save-outline"
        mode="contained"
        style={styles.saveButton}
        onPress={handleSave}>
        SALVAR
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 32,
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
  },
  saveButton: {
    width: '100%',
    height: 40,
    marginTop: 16,
  },
});

export default AdicionaCardapio;
