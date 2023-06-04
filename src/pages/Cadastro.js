import React, { useState } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { Button } from 'react-native-paper';

import Header from '../components/Header';
import Body from '../components/Body';
import Container from '../components/Container';
import Input from '../components/Input';

import * as SQLite from 'expo-sqlite';

import { useNavigation } from '@react-navigation/native';
import { Database } from '../services/DbServices';

const db = SQLite.openDatabase('ohchefia.db');

const Cadastro = () => {

  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [RegistroErro, setRegistroErro] = useState(null)

  const handleCadastro = () => {
    const executeQuery = Database.getConnection();

    if(nome && email && senha) {
      executeQuery(
      'INSERT INTO garcom (nome, email, senha) VALUES (?, ?, ?)',
      [nome, email, senha]
    )
      navigation.goBack();
    } 
    else {
      setRegistroErro('Preencha todos os campos!');
    }

  }
  const[value, setValue] = useState('');

  return (
    <Container>
      <Header title={" NOVO GARÇOM "}>
      </Header>
      <Body>


        <View style={styles.inputView}>
          <Input
          placeholder='Nome do garçom'
          value={nome}
          onChangeText={(text) => setNome(text)}
          />
          <Input
          placeholder='Email'
          value={email}
          onChangeText={(text) => setEmail(text)}
          />
          <Input
          placeholder='Senha'
          type='password'
          value={senha}
          onChangeText={(text) => setSenha(text)}
          />
        </View>

      {RegistroErro ? <Text style={styles.errorText}>{RegistroErro}</Text> : null}

        <View style={styles.buttonView}>
        <Button 
          style={styles.button}
          icon = 'account'
          color="#fff"
          labelStyle= {{ fontWeight: 'bold' }}
          onPress={handleCadastro}
         > CADASTRAR 
         </Button>
        <Button 
          style={styles.button}
          icon = 'account-details'
          color="#fff"
          labelStyle= {{ fontWeight: 'bold' }}
          onPress={() => navigation.navigate('FecharPedido')}>
          LISTA DE GARÇONS </Button>
        </View>

      </Body>     
    </Container>
  )

};

const styles = StyleSheet.create ({
/*  div1: {
    position: 'absolute',
    backgroundColor: '#fff',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#D9D9D9',
    borderRadius: 9,
    bottom: -25,
    height: 84,
    width: '85%',
    top: -55,
    left: '8%',
  },*/
  inputView: {
    marginTop: 150,
  },
  buttonView:{
      marginTop: 30,
  },
  button: {
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    marginBottom: 30,
    height: 50,
    backgroundColor: '#311433',
    borderRadius: 20,
  },
    errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },

});
export default Cadastro;

