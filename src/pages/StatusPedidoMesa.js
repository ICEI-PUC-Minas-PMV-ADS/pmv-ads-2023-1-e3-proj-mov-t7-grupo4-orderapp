import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { faUnlock } from '@fortawesome/free-solid-svg-icons/faUnlock';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { DataTable, List } from 'react-native-paper';

import Body from '../components/Body';
import Container from '../components/Container';
import Header from '../components/Header';

import { useIsFocused } from '@react-navigation/native';

import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('ohchefia.db');

const StatusPedidoMesa = () => {

  const isFocused = useIsFocused();

  const [mesas, setMesas] = useState([]);


  useEffect(() => {
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

  return (
    <Container>
      <Header title={'PEDIDOS'} />
      <Body>
        <SafeAreaView style={styles.container}>
          <List.Section>
            {mesas.map((item) => (
              <List.Accordion title={`Pedidos - Mesa  ${item.nummesa}`}>
                <View>
                  <DataTable>
                    <DataTable.Header>
                      <DataTable.Title>Pedido</DataTable.Title>
                      <DataTable.Title numeric>Status</DataTable.Title>
                      <DataTable.Title numeric></DataTable.Title>
                    </DataTable.Header>
                    {item.pedidos.map((p) => (
                      <DataTable.Row>
                        <DataTable.Cell>{`P0${p.nummesa}-00${p.id}`}</DataTable.Cell>
                        <DataTable.Cell numeric>{p.status === null ? 'Aberto' : p.status}</DataTable.Cell>
                        <DataTable.Cell numeric>
                          {p.status === 'Fechado' ? (
                            <FontAwesomeIcon icon={faLock} />
                          ) : (
                            <FontAwesomeIcon icon={faUnlock} />
                          )}
                        </DataTable.Cell>
                      </DataTable.Row>
                    ))}
                  </DataTable>
                </View>
              </List.Accordion>
            ))}
          </List.Section>
        </SafeAreaView>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default StatusPedidoMesa;
