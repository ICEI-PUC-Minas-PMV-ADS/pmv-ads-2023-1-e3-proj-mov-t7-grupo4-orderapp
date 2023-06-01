import React from 'react';

import { BottomNavigation } from 'react-native-paper';

import Cardapio from './Cardapio';
import Mesa from './Mesas';
import Pedidos from './PedidoMesa';


const Home = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'mesas', title: 'Mesas', icon: 'food-fork-drink' },
    { key: 'pedidos', title: 'Pedidos', icon: 'clipboard-list-outline' },
    { key: 'cardapio', title: 'Cardápio', icon: 'map-outline' }
    { key: 'status', title: 'Status', icon: 'menu' }

  ]);

  const renderScene = BottomNavigation.SceneMap({
    mesas: Mesa,
    pedidos: Pedidos,
    cardapio: Cardapio,
    status: StatusPedidoMesa
  });

  return (
    <BottomNavigation
      screenOptions={{ activeColor: '#ffffff' }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: '#D9D9D9' }}
    />
  );
};

export default Home;
// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// import { Text, BottomNavigation } from 'react-native-paper';

// import Mesa from './Mesas';
// import Pedidos from './PedidoMesa';


// const Home = () => {
//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     { key: 'mesas', title: 'Mesas', icon: 'food-fork-drink'},
//     { key: 'pedidos', title: 'Pedidos', icon: 'clipboard-list-outline'},
//   ]);

//   const renderScene = BottomNavigation.SceneMap({
//     mesas: Mesa,
//     pedidos:Pedidos
//   });

//   return (
//       <BottomNavigation
//         screenOptions={{ activeColor: '#ffffff'}}
//         navigationState={{ index, routes }}
//         onIndexChange={setIndex}
//         renderScene={renderScene}
//         barStyle={{ backgroundColor: '#D9D9D9'}}
//       />
//   );
// };

// export default Home;