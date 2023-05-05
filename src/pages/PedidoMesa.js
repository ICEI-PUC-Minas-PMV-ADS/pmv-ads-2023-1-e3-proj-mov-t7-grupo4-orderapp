import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { List, Text, FAB, Button } from 'react-native-paper';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';

import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('ohchefia.db');

import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';

const MenuMesa = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [mesas, setMesas] = useState([]);
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   // Consulta todos os tipos de gastos do banco de dados e atualiza o estado dos tipos
  //   db.transaction((tx) => {
  //     tx.executeSql('SELECT DISTINCT nummesa FROM mesas', [], (_, { rows }) => {
  //       const mesas = rows._array.map((item) => ({
  //         nummesa: item.nummesa,
  //         pedidos: [],
  //       }));
  //       setMesas(mesas);
  //     });
  //     tx.executeSql('SELECT * FROM pedidos', [], (_, { rows }) => {
  //       const pedidos = rows._array;
  //       setMesas((prevMesas) =>
  //         prevMesas.map((mesa) =>
  //           Object.assign({}, mesa, {
  //             pedidos: pedidos.filter(
  //               (pedido) => pedido.nummesa === mesa.nummesa
  //             ),
  //           })
  //         )
  //       );
  //     });
  //   });
  // }, [isFocused]);
  useEffect(() => {
    // Consulta todos os tipos de gastos do banco de dados e atualiza o estado dos tipos
    db.transaction((tx) => {
      tx.executeSql('SELECT DISTINCT nummesa FROM mesas', [], (_, { rows }) => {
        const mesas = rows._array.map((item) => ({
          nummesa: item.nummesa,
          pedidos: [],
        }));
        setMesas(mesas);
      });
      tx.executeSql('SELECT * FROM pedidos', [], (_, { rows }) => {
        const pedidos = rows._array;
        setMesas((prevMesas) =>
          prevMesas.map((mesa) =>
            Object.assign({}, mesa, {
              pedidos: pedidos
                .filter((pedido) => pedido.nummesa === mesa.nummesa)
                .map((pedido, index) =>
                  Object.assign({}, pedido, { sequencia: index + 1 })
                ),
            })
          )
        );
      });
    });
  }, [isFocused]);

  const renderItem = ({ item }) => (
    <List.Accordion
      title={`Mesa ${item.nummesa}`}
      id={item.nummesa}
      style={{ backgroundColor: '#fff' }}
      left={(props) => <List.Icon {...props} icon="food-outline" />}>
      {item.pedidos.map((pedidos) => (
        <List.Item
          key={pedidos.id}
          title={`${pedidos.itemMesa}`}
          description={`Preço: R$ ${pedidos.preco}  Qtd: ${pedidos.quantidade}`}
          onPress={() =>
            navigation.navigate('AdicionaItem', {
              item: item,
              sequencia: pedidos.sequencia,
            })
          }
        />
      ))}
    </List.Accordion>
  );

  return (
    <Container>
      <Header title={'PEDIDOS'} />
      <Body>
        <Button
          icon="plus"
          mode="contained"
          style={{ backgroundColor: '#311433' }}
          onPress={() => navigation.navigate('AdicionaItem')}>
          Novo Pedido
        </Button>
        <FlatList
          data={mesas}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Body>
    </Container>
  );
};

export default MenuMesa;
