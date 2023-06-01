import * as React from 'react';
import { List, DataTable } from 'react-native-paper';
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { faUnlock } from '@fortawesome/free-solid-svg-icons/faUnlock';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';





const statusPedido = [
  {
    mesa: 1,
    pedidos: [
      { id: 1, mesa: 1, pedido: 'P01-001', status: 'Fechado' },
      { id: 2, mesa: 1, pedido: 'P01-002', status: 'Fechado' },
      { id: 3, mesa: 1, pedido: 'P01-003', status: 'Fechado' },
      { id: 4, mesa: 1, pedido: 'P01-004', status: 'Fechado' },
      { id: 5, mesa: 1, pedido: 'P01-005', status: 'Fechado' },
      { id: 6, mesa: 1, pedido: 'P01-006', status: 'Aberto' },
    ],
  },
  {
    mesa: 2,
    pedidos: [
      { id: 1, mesa: 2, pedido: 'P02-001', status: 'Fechado' },
      { id: 2, mesa: 2, pedido: 'P02-002', status: 'Fechado' },
      { id: 3, mesa: 2, pedido: 'P02-003', status: 'Fechado' },
      { id: 4, mesa: 2, pedido: 'P02-004', status: 'Fechado' },
      { id: 5, mesa: 2, pedido: 'P02-005', status: 'Fechado' },
      { id: 6, mesa: 2, pedido: 'P02-006', status: 'Aberto' },
    ],
  },
  {
    mesa: 3,
    pedidos: [
      { id: 1, mesa: 3, pedido: 'P03-001', status: 'Fechado' },
      { id: 2, mesa: 3, pedido: 'P03-002', status: 'Fechado' },
      { id: 3, mesa: 3, pedido: 'P03-003', status: 'Fechado' },
      { id: 4, mesa: 3, pedido: 'P03-004', status: 'Fechado' },
      { id: 5, mesa: 3, pedido: 'P03-005', status: 'Fechado' },
      { id: 6, mesa: 3, pedido: 'P03-006', status: 'Aberto' },
    ],
  },
];

const StatusPedidoMesa = () => {
  return (
    <Container>
    <Header title={'PEDIDOS'} />
    <Body>
    <SafeAreaView style={styles.container}>
    <List.Section>
      {statusPedido.map((item) => (
        <List.Accordion title={`Pedidos - Mesa  ${item.mesa}`}>
          <View>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Pedido</DataTable.Title>
                <DataTable.Title numeric>Status</DataTable.Title>
                <DataTable.Title numeric></DataTable.Title>
              </DataTable.Header>
              {item.pedidos.map((p) => (
                <DataTable.Row>
                  <DataTable.Cell>{p.pedido}</DataTable.Cell>
                  <DataTable.Cell numeric>{p.status}</DataTable.Cell>
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
