import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet, Alert } from 'react-native';
import { Avatar, Card, Button, FAB } from 'react-native-paper';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';

import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('ohchefia.db');

import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';

import {
  deleteMesa,
  deleteAllPedido,
} from '../services/MesasServicesDB';

const Mesas = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [mesas, setMesas] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM mesas', [], (_, { rows }) => {
        const mesas = rows._array.map((item) => ({
          nummesa: item.nummesa,
          total: 0,
        }));
        setMesas(mesas);
      });
      tx.executeSql(
        'SELECT nummesa, SUM(preco * quantidade) as total FROM pedidos GROUP BY nummesa',
        [],
        (_, { rows }) => {
          const totais = rows._array.map((item) => ({
            nummesa: item.nummesa,
            total: item.total,
          }));
          setMesas((prevMesas) =>
            prevMesas.map((mesa) =>
              Object.assign({}, mesa, {
                total:
                  totais.find((item) => item.nummesa === mesa.nummesa)?.total ||
                  0,
              })
            )
          );
        }
      );
    });
  }, [isFocused]);

  const handleExcluir = (idMesa) => {
    deleteMesa(idMesa).then();
    deleteAllPedido(idMesa).then();
    navigation.goBack();
  };

  const renderItem = ({ item }) => (
    <Card.Title
      title={`MESA ${item.nummesa}`}
      left={(props) => <Avatar.Icon {...props} icon="table-furniture" style={{backgroundColor:'#311433'}}/>}
      right={(props) => (
          <Button
            {...props}
            mode="contained"
            style={{backgroundColor:'#311433'}}
            onPress={() => {
              Alert.alert(
                'Fechar conta',
                `O valor total da MESA ${item.nummesa} é R$ ${item.total.toFixed(2)}. Deseja confirmar o fechamento da conta?`,
                [
                  {
                    text: 'Cancelar',
                    style: 'cancel',
                  },
                  {
                    text: 'Confirmar',
                    onPress: () => {handleExcluir(item.nummesa)}
                  },
                ]
              );
            }}>
            Fechar Conta
          </Button>
        )
      }
    />
  );

  return (
    <Container>
      <Header title={'OH CHEFIA'} />
      <Body>
        <FlatList
          data={mesas}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <FAB
          style={styles.fab}
          small
          icon="plus"
          color="#FFF"
          onPress={() => navigation.navigate('AdicionaMesa')}
        />
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#311433',
  },
});

export default Mesas;
