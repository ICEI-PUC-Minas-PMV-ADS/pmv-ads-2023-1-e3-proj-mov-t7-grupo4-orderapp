import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  RadioButton,
  Text,
  TextInput,
  Button,
  Appbar,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import PickerSelect from 'react-native-picker-select';

import {
  insertPedido,
  updatePedido,
  deletePedido,
} from '../services/MesasServicesDB';

import { useNavigation } from '@react-navigation/native';

const AdicionaItem = ({ route }) => {
  const navigation = useNavigation();
  const { item, sequencia } = route.params ? route.params : {};

  let sequenciaId;
  const [nummesa, setMesa] = useState(null);
  const [itemMesa, setItem] = useState(null);
  const [preco, setPreco] = useState(null);
  const [quantidade, setQuant] = useState(null);

  sequenciaId = sequencia - 1;

  useEffect(() => {
    if (item) {
      setMesa(item.pedidos[sequenciaId].nummesa.toFixed());
      setItem(item.pedidos[sequenciaId].itemMesa);
      setPreco(item.pedidos[sequenciaId].preco.toFixed(2));
      setQuant(item.pedidos[sequenciaId].quantidade.toFixed());
    }
  }, [item]);

  const handleSalvar = () => {
    if (item) {
      updatePedido({
        nummesa: nummesa,
        itemMesa: itemMesa,
        preco: preco,
        quantidade: quantidade,
        id: item.pedidos[0].id,
      }).then();
    } else {
      insertPedido({
        nummesa: nummesa,
        itemMesa: itemMesa,
        preco: preco,
        quantidade: quantidade,
      }).then();
    }

    navigation.goBack();
  };

  const handleExcluir = () => {
    deletePedido(item.pedidos[0].id).then();
    navigation.goBack();
  };

  const itemsList = [
    { nome: 'Pizza' },
    { nome: 'Coca-Cola' },
    { nome: 'Mousse' },
    // ... outros itens
  ];

  const itemOptions = itemsList.map((item) => ({
    label: item.nome, // Supondo que o objeto do item tenha uma propriedade "nome"
    value: item.nome, // Supondo que o objeto do item tenha uma propriedade "id"
  }));

  return (
    <Container>
      <Header title={'Adicionar Item'} goBack={() => navigation.goBack()}>
        <Appbar.Action icon="check" onPress={handleSalvar} />
        {item && <Appbar.Action icon="trash-can" onPress={handleExcluir} />}
      </Header>

      <Body>
        <Input
          label="Mesa"
          style={{ backgroundColor: '#D9D9D9' }}
          value={nummesa}
          onChangeText={(text) => setMesa(text)}
          keyboardType="decimal-pad"
          left={<TextInput.Icon name="table-furniture" />}
        />

        <View style={styles.inputContainer}>
          <Icon name="food-outline" size={25} style={styles.icon} />
          <PickerSelect
            placeholder={{
              label: 'Selecione um item...',
              value: null,
            }}
            value={itemMesa}
            onValueChange={(value) => setItem(value)}
            items={itemOptions}
            style={{
              ...pickerSelectStyles,
              inputIOS: {
                ...pickerSelectStyles.inputIOS,
              },
              inputAndroid: {
                ...pickerSelectStyles.inputAndroid,
              },
            }}
          />
        </View>

        <Input
          label="Preço"
          style={{ backgroundColor: '#D9D9D9' }}
          value={preco}
          keyboardType="decimal-pad"
          onChangeText={(text) => setPreco(text)}
          left={<TextInput.Icon name="currency-brl" />}
        />

        <Input
          label="Quantidade"
          style={{ backgroundColor: '#D9D9D9' }}
          value={quantidade}
          keyboardType="decimal-pad"
          onChangeText={(text) => setQuant(text)}
          left={<TextInput.Icon name="numeric-2-box-multiple-outline" />}
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
    backgroundColor: '#311433',
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
  },
  icon: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingRight: 5,
    paddingLeft: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    //fontSize: 16,
    paddingHorizontal: 8,
    paddingVertical: 12,
    //borderWidth: 1,
    //borderColor: 'gray',
    color: 'black',
    paddingRight: 120,
    paddingLeft: 8, // Ajuste o espaçamento à esquerda conforme necessário
    //backgroundColor: '#D9D9D9',
  },
  inputAndroid: {
    //fontSize: 16,
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: 'gray',
    color: 'black',
    paddingRight: 170,
    paddingLeft: 170, // Ajuste o espaçamento à esquerda conforme necessário
    //backgroundColor: '#D9D9D9',
  },
});

export default AdicionaItem;
// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, TouchableOpacity } from 'react-native';
// import {
//   RadioButton,
//   Text,
//   TextInput,
//   Button,
//   Appbar,
// } from 'react-native-paper';

// import Header from '../components/Header';
// import Container from '../components/Container';
// import Body from '../components/Body';
// import Input from '../components/Input';

// import {
//   insertPedido,
//   updatePedido,
//   deletePedido,
// } from '../services/MesasServicesDB';

// import { useNavigation } from '@react-navigation/native';

// const AdicionaItem = ({ route }) => {
//   const navigation = useNavigation();
//   const { item, sequencia } = route.params ? route.params : {};

//   let sequenciaId;
//   const [nummesa, setMesa] = useState(null);
//   const [itemMesa, setItem] = useState(null);
//   const [preco, setPreco] = useState(null);
//   const [quantidade, setQuant] = useState(null);

//   sequenciaId = sequencia - 1;

//   useEffect(() => {
//     if (item) {
//       setMesa(item.pedidos[sequenciaId].nummesa.toFixed());
//       setItem(item.pedidos[sequenciaId].itemMesa);
//       setPreco(item.pedidos[sequenciaId].preco.toFixed(2));
//       setQuant(item.pedidos[sequenciaId].quantidade.toFixed());
//     }
//   },[item]);

//   const handleSalvar = () => {
//     if (item) {
//       updatePedido({
//         nummesa: nummesa,
//         itemMesa: itemMesa,
//         preco: preco,
//         quantidade: quantidade,
//         id: item.pedidos[0].id,
//       }).then();
//     } else {
//       insertPedido({
//         nummesa: nummesa,
//         itemMesa: itemMesa,
//         preco: preco,
//         quantidade: quantidade,
//       }).then();
//     }

//     navigation.goBack();
//   };

//   const handleExcluir = () => {
//     deletePedido(item.pedidos[0].id).then();
//     navigation.goBack();
//   };

//   return (
//     <Container>
//       <Header title={'Adiciona Item'} goBack={() => navigation.goBack()}>
//         <Appbar.Action icon="check" onPress={handleSalvar} />
//         {item && <Appbar.Action icon="trash-can" onPress={handleExcluir} />}
//       </Header>

//       <Body>
//         <Input
//           label="Mesa"
//           style={{backgroundColor:'#D9D9D9'}}
//           value={nummesa}
//           onChangeText={(text) => setMesa(text)}
//           keyboardType='decimal-pad'
//           left={<TextInput.Icon name="table-furniture" />}
//         />

//         <Input
//           label="Item"
//           style={{backgroundColor:'#D9D9D9'}}
//           value={itemMesa}
//           onChangeText={(text) => setItem(text)}
//           left={<TextInput.Icon name="food-outline" />}
//         />

//         <Input
//           label="Preço"
//           style={{backgroundColor:'#D9D9D9'}}
//           value={preco}
//           keyboardType='decimal-pad'
//           onChangeText={(text) => setPreco(text)}
//           left={<TextInput.Icon name="currency-brl" />}
//         />

//         <Input
//           label="Quantidade"
//           style={{backgroundColor:'#D9D9D9'}}
//           value={quantidade}
//           keyboardType='decimal-pad'
//           onChangeText={(text) => setQuant(text)}
//           left={<TextInput.Icon name="numeric-2-box-multiple-outline" />}
//         />

//         <Button mode="contained" style={styles.button} onPress={handleSalvar}>
//           Salvar
//         </Button>

//         {item && (
//           <Button
//             mode="contained"
//             color={'red'}
//             style={styles.button}
//             onPress={handleExcluir}>
//             Excluir
//           </Button>
//         )}
//       </Body>
//     </Container>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     marginBottom: 8,
//     backgroundColor:'#311433'
//   },
// });

// export default AdicionaItem;
