import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {
  RadioButton,
  Text,
  TextInput,
  Button,
  Appbar,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../../components/Header';
import Container from '../../components/Container';
import Body from '../../components/Body';
import Input from '../../components/Input';
import PickerSelect from 'react-native-picker-select';

import {
  insertItem,
  updateItem,
  deleteItem,
} from '../../services/MesasServicesDB';

import { useNavigation } from '@react-navigation/native';

const AdicionaCardapio = ({ route }) => {
  const navigation = useNavigation();
  const { item, sequencia } = route.params ? route.params : {};

  let sequenciaId;
  const [codigo, setCodigo] = useState('');
  const [nomeItem, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [preco, setPreco] = useState('');

  sequenciaId = sequencia - 1;

  useEffect(() => {
    if (item) {
      setCodigo(item.pedidos[sequenciaId].codigo);
      setNome(item.pedidos[sequenciaId].nomeItem);
      setCategoria(item.pedidos[sequenciaId].categoria);
      setPreco(item.pedidos[sequenciaId].preco.toFixed(2));
    }
  }, [item]);

  const handleSalvar = () => {
    // if (item) {
    //   updateItem({
    //     codigo: codigo,
    //     nomeItem: nomeItem,
    //     categoria: categoria,
    //     preco: preco,
    //     id: item.pedidos[0].id,
    //   }).then();
    // } else {
      insertItem({
        nomeItem: nomeItem,
        categoria: categoria,
        preco: preco,
      }).then();
    //}
    navigation.goBack();
  };

  const handleExcluir = () => {
    deleteItem(item.pedidos[0].id).then();
    navigation.goBack();
  };

  return (
    <Container>
      <Header title={'Adicionar Item'} goBack={() => navigation.goBack()}>
        <Appbar.Action icon="check" onPress={handleSalvar} />
        {item && <Appbar.Action icon="trash-can" onPress={handleExcluir} />}
      </Header>

      <Body>
        <View style={styles.container}>
          <Image
            source={require('../../images/Logo_OhChefia.png')}
            style={styles.logo}
          />
          <TextInput
            value={codigo}
            onChangeText={(text) => setCodigo(text)}
            style={styles.input}
            placeholder="Código"
          />
          <TextInput
            value={nomeItem}
            onChangeText={(text) => setNome(text)}
            style={styles.input}
            placeholder="Nome do item"
          />
          <TextInput
            value={categoria}
            onChangeText={(text) => setCategoria(text)}
            style={styles.input}
            placeholder="Categoria"
          />
          <TextInput
            value={preco}
            onChangeText={(text) => setPreco(text)}
            style={styles.input}
            placeholder="Preço"
          />
          <Button
            icon="content-save-outline"
            mode="contained"
            style={styles.saveButton}
            onPress={handleSalvar}>
            SALVAR
          </Button>
        </View>
      </Body>
    </Container>
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
    backgroundColor: '#311433',
  },
});

export default AdicionaCardapio;

// import React, { useState } from 'react';
// import { Image, StyleSheet, View, TextInput } from 'react-native';
// import { Button } from 'react-native-paper';

// const AdicionaCardapio = () => {
//   const [categoria, setCategoria] = useState('');
//   const [nome, setNome] = useState('');
//   const [codigo, setCodigo] = useState('');
//   const [descricao, setDescricao] = useState('');

//   const handleSave = () => {
//     // Lógica para salvar os dados
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../../images/Logo_OhChefia.png')}
//         style={styles.logo}
//       />
//       <TextInput
//         value={categoria}
//         onChangeText={setCategoria}
//         style={styles.input}
//         placeholder="Categoria"
//       />
//       <TextInput
//         value={nome}
//         onChangeText={setNome}
//         style={styles.input}
//         placeholder="Nome do item"
//       />
//       <TextInput
//         value={codigo}
//         onChangeText={setCodigo}
//         style={styles.input}
//         placeholder="Código"
//       />
//       <TextInput
//         value={descricao}
//         onChangeText={setDescricao}
//         style={styles.input}
//         placeholder="Descrição"
//       />
//       <Button
//         icon="content-save-outline"
//         mode="contained"
//         style={styles.saveButton}
//         onPress={handleSave}>
//         SALVAR
//       </Button>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 16,
//   },
//   logo: {
//     width: 200,
//     height: 200,
//     marginBottom: 32,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     marginBottom: 16,
//     paddingHorizontal: 8,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 4,
//   },
//   saveButton: {
//     width: '100%',
//     height: 40,
//     marginTop: 16,
//   },
// });

// export default AdicionaCardapio;
