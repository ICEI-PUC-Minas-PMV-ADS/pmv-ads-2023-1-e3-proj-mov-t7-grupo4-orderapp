import React, { useState } from 'react'
import {StyleSheet, View, Text} from 'react-native'
import { Button } from 'react-native-paper'

import Header from '../components/Header'
import Body from '../components/Body'
import Container from '../components/Container'
import Input from '../components/Input'

import { useNavigation } from '@react-navigation/native';

const Cadastro = () => {

  const navigation = useNavigation();

  const[value, setValue] = useState('');

  return (
    <Container>
      <Header title={" NOVO GARÇOM "}>
      </Header>
      <Body>


        <View style={styles.inputView}>
          <Input
          placeholder='Nome do garçom'
          />
          <Input
          placeholder='Matrícula'
          />
          <Input
          placeholder='Email'
          />
          <Input
          placeholder='Senha'
          />
          <Input
          placeholder='Confirme a Senha'
          />
        </View>

        <View style={styles.buttonView}>
        <Button 
          style={styles.button}
          icon = 'account'
          color="#fff"
          labelStyle= {{ fontWeight: 'bold' }}
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

}

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
    top: 75,
    
  },
  buttonView:{
      top: 130,
  },
  button: {
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    marginBottom: 25,
    height: 50,
    backgroundColor: '#311433',
    borderRadius: 20,
  }

})

export default Cadastro;
