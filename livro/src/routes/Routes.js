import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../pages/Main';
import Login from '../pages/Login';
import CreateUser from '../pages/createUser';
import HomePage from '../pages/HomePage';
import Perfil from '../componets/HelloWorld/index';
import MeusLivros from '../componets/HelloWorld/index';
import Pesquisar from '../componets/HelloWorld/index';
import Imagem01 from '../componets/HelloWorld/index';
import Imagem02 from '../componets/HelloWorld/index';
import Imagem03 from '../componets/HelloWorld/index';
import Imagem04 from '../componets/HelloWorld/index';
import Imagem05 from '../componets/HelloWorld/index';


const Stack = createStackNavigator();

export default function Rotas() {
  return (
    <Stack.Navigator initialRouteName='Main'>
      <Stack.Screen
        name='Main'
        component={Main}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Login'
        component={Login}
        options={{                
          title: '',
          headerTintColor: '#000',
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name='CreateUser'
        component={CreateUser}
        options={{                
          title: '',
          headerTintColor: '#000',
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name='HomePage'
        component={HomePage}
        options={{                
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Pesquisar'
        component={Pesquisar}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='MeusLivros'
        component={MeusLivros}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Perfil'
        component={Perfil}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Imagem01'
        component={Imagem01}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Imagem02'
        component={Imagem02}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Imagem03'
        component={Imagem03}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Imagem04'
        component={Imagem04}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Imagem05'
        component={Imagem05}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
