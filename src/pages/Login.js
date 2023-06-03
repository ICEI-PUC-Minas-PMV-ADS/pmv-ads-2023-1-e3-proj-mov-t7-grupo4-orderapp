import React from 'react'
import {View, Text, Image, StyleSheet, TextInput, Button, Pressab} from 'react-native'

import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  
  return(

    <View style={{ flexDirection: 'column'}}>
      <View style={styles.css}>
        <Text>Seja Bem-Vindo ao</Text>
      </View>
      
      <View style={styles.image}> 
        <Image source={require('../images/Logo_OhChefia.png')} 
        style={{width: 155, height: 100}}
        />
      </View>

      <View style={styles.inputs}>
        <TextInput
          style={styles.input_login}
          placeholder="Login"
        />
        <TextInput
          style={styles.input_password}
          placeholder="Password"
        />
      </View>

      <View style={styles.buttonlogin}>
      <Button
        title="ENTRAR"
        color="#6c0a74"
        onPress={() => navigation.navigate('Home')}
      />
      </View>
      <View style={styles.forgotpassword}>
        <Button
        title="Cadastrar Garçom"
        onPress={() => navigation.navigate('Cadastro')}
        />
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  css: {
    alignItems:'center',
    padding: 100,
  },
  image:{
    alignItems:'center',
    paddingBottom: 20,
  },
  input_login:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  input_password:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonlogin:{
    padding: 30,
  },
  forgotpassword:{
    
  },
});

export default Login;