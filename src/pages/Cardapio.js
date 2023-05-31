import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';
import CardapioList from '../components/CardapioList';

import { useNavigation } from '@react-navigation/native';

const Cardapio = () => {
  const navigation = useNavigation();

  const listaCardapio = [
    {
      title: 'Bebidas',
      data: [
        {
          name: 'coquinha gelada',
          price: 'R$8,80',
          index: '01',
          id: 'coquinhaGeladaId',
        },
        {
          name: 'whisky com agua de coco',
          price: 'R$19,99',
          index: '02',
          id: 'whiskyComAguaDeCocoId',
        },
      ],
    },
    {
      title: 'Comida',
      data: [
        {
          name: 'espetinho de carne',
          price: 'R$3,50',
          index: '01',
          id: 'EspetinhoDeCarneId',
        },
        {
          name: 'feijão tropeiro',
          price: 'R$10,25',
          index: '02',
          id: 'feijãoTropeiroId',
        },
      ],
    },
  ];

  return (
    <Container>
      <Header title={'CARDÁPIO'} />
      <Body>
        <CardapioList listaCardapio={listaCardapio} />
        <Button
          icon="plus"
          mode="contained"
          style={styles.menuButtons}
          onPress={() => navigation.navigate('AdicionaCardapio')}
        >
          ADICIONAR ITEM
        </Button>
        <Button
          icon="square-edit-outline"
          mode="contained"
          style={styles.menuButtons}
          onPress={() => {
            if (listaCardapio.length > 0) navigation.navigate('EditaCardapio');
          }}
        >
          EDITAR
        </Button>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  menuButtons: {
    backgroundColor: '#311433',
    marginHorizontal: 12,
    marginVertical: 5,
    height: '10%',
    justifyContent: 'center',
    borderRadius: 100,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19,
  },
});

export default Cardapio;
