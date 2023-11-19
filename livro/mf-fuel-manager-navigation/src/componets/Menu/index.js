import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Menu = ({ isOpen, closeMenu }) => {
  const navigation = useNavigation(); 

  if (!isOpen) return null;

  const navigateToHomePage = () => {
    navigation.navigate('HomePage'); 
    closeMenu(); 
  };

  const navigateToProfile = () => {
    navigation.navigate('Perfil'); 
    closeMenu(); 
  };

  const navigateToMyBooks = () => {
    navigation.navigate('MeusLivros'); 
    closeMenu(); 
  };

  const navigateToSearch = () => {
    navigation.navigate('Pesquisar'); 
    closeMenu(); 
  };

  const handleLogout = () => {
    closeMenu(); 
  };

  return (
    <View style={styles.menu}>
      <TouchableOpacity onPress={navigateToHomePage}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToProfile}>
        <Text>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToMyBooks}>
        <Text>Meus Livros</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToSearch}>
        <Text>Pesquisa</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 250,
    height: '100%',
    backgroundColor: 'white',
    padding: 50,
  },
});

export default Menu;
