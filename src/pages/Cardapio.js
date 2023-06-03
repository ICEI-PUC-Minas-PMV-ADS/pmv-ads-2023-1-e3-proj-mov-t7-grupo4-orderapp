import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, StyleSheet} from 'react-native';
import { List } from 'react-native-paper';
import * as SQLite from 'expo-sqlite';
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';

const db = SQLite.openDatabase('ohchefia.db');


const Cardapio = () => {
  const [categorias, setCategorias] = useState([]);
  const [itens, setItens] = useState([]);
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT DISTINCT categoria FROM itens',
        [],
        (_, { rows }) => {
          const categorias = rows._array.map((item) => item.categoria);
          setCategorias(categorias);
        }
      );
      tx.executeSql('SELECT * FROM itens', [], (_, { rows }) => {
        const itens = rows._array;
        setItens(itens);
      });
    });
  }, [isFocused]);

  const renderCategoria = (categoria) => (
    <List.Accordion
      key={categoria}
      title={categoria}
      id={categoria}
      style={{ backgroundColor: '#fff' }}>
      {itens.map(
        (item) =>
          item.categoria === categoria && (
            <List.Item
              key={item.id}
              title={item.nomeItem}
              description={`Preço: R$ ${item.preco}`}
              onPress={() =>
                navigation.navigate('AdicionaItem', {
                  item: item,
                })
              }
            />
          )
      )}
    </List.Accordion>
  );

  return (
    <Container>
      <Header title={'CARDÁPIO'} />
      <Body>
        <View>{categorias.map((categoria) => renderCategoria(categoria))}</View>
        <Button
          icon="plus"
          mode="contained"
          style={styles.menuButtons}
          onPress={() => navigation.navigate('AdicionaCardapio')}>
          ADICIONAR ITEM
        </Button>
        <Button
          icon="square-edit-outline"
          mode="contained"
          style={styles.menuButtons}
          onPress={() => {
            if (listaCardapio.length > 0) navigation.navigate('EditaCardapio');
          }}>
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