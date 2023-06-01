import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login';
import Home from '../pages/Home';
import AdicionaItem from '../pages/AdicionaItem';
import AdicionaMesa from '../pages/AdicionaMesa';
import AdicionaCardapio from '../pages/cardapio/AdicionaCardapio';
import EditaCardapio from '../pages/cardapio/EditaCardapio';
import Cardapio from '../pages/Cardapio';
import Cadastro from '../pages/Cadastro';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="AdicionaItem"
        component={AdicionaItem}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="AdicionaMesa"
        component={AdicionaMesa}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Cardapio"
        component={Cardapio}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="AdicionaCardapio"
        component={AdicionaCardapio}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="EditaCardapio"
        component={EditaCardapio}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default Main;

// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Login from '../pages/Login';
// import Home from '../pages/Home';
// import AdicionaItem from '../pages/AdicionaItem';
// import AdicionaMesa from '../pages/AdicionaMesa';

// const Stack = createNativeStackNavigator();

// const Main = () => {
//   return (
//     <Stack.Navigator initialRouteName="Login">
//       <Stack.Screen
//         name="Login"
//         component={Login}
//         options={{
//           header: () => null,
//         }}
//       />
//       <Stack.Screen
//         name="Home"
//         component={Home}
//         options={{
//           header: () => null,
//         }}
//       />
//       <Stack.Screen
//         name="AdicionaItem"
//         component={AdicionaItem}
//         options={{
//           header: () => null,
//         }}
//       />
//       <Stack.Screen
//         name="AdicionaMesa"
//         component={AdicionaMesa}
//         options={{
//           header: () => null,
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

// export default Main;
