import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  RadioButton,
  Text,
  TextInput,
  Button,
  Appbar,
} from 'react-native-paper';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';

import {
  insertMesa,
  deleteMesa,
} from '../services/MesasServicesDB';

import { useNavigation } from '@react-navigation/native';

const AdicionaMesa = ({ route }) => {
  const navigation = useNavigation();
  const { item, sequencia } = route.params ? route.params : {};

  const [nummesa, setMesa] = useState(null);

  const handleSalvar = () => {
    insertMesa({
      nummesa: nummesa
    }).then();

    navigation.goBack();
  };

  const handleExcluir = () => {
    deleteMesa(item.pedidos[0].id).then();
    navigation.goBack();
  };

  return (
    <Container>
      <Header title={'ADICIONA MESA'} goBack={() => navigation.goBack()}>
        <Appbar.Action icon="check" onPress={handleSalvar} />
        {item && <Appbar.Action icon="trash-can" onPress={handleExcluir} />}
      </Header>

      <Body>
        <Input
          label="Mesa"
          value={nummesa}
          onChangeText={(text) => setMesa(text)}
          keyboardType="decimal-pad"
          left={<TextInput.Icon name="table-furniture" />}
        />

        <Button mode="contained" style={styles.button} onPress={handleSalvar}>
          Salvar
        </Button>

        {item && (
          <Button
            mode="contained"
            color={'red'}
            style={styles.button}
            onPress={handleExcluir}>
            Excluir
          </Button>
        )}
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 8,
    backgroundColor:'#311433'
  },
});

export default AdicionaMesa;
