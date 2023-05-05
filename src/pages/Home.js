import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Text, BottomNavigation } from 'react-native-paper';

import Mesa from './Mesas';
import Pedidos from './PedidoMesa';


const Home = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'mesas', title: 'Mesas', icon: 'food-fork-drink'},
    { key: 'pedidos', title: 'Pedidos', icon: 'clipboard-list-outline'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    mesas: Mesa,
    pedidos:Pedidos
  });

  return (
      <BottomNavigation
        screenOptions={{ activeColor: '#ffffff'}}
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene} 
        barStyle={{ backgroundColor: '#D9D9D9'}}
      />
  );
};

export default Home;