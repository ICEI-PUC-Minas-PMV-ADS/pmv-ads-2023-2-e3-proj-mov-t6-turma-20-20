import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../componets/Header/index';
import Menu from '../../componets/Menu/index';
import { styles } from './styles';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header toggleMenu={toggleMenu} />
      <Menu isOpen={isMenuOpen} closeMenu={closeMenu} />

      <Text style={styles.AppTitle}>Destaque do dia</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Imagem01')}>
        <Image source={require('../../../assets/50.png')} />
      </TouchableOpacity>

      <Text style={styles.AppSubTitle}>Recomendações de Livros</Text>
      <View style={styles.imageRow1}>
        <TouchableOpacity onPress={() => navigation.navigate('Imagem02')}>
          <Image source={require('../../../assets/50.png')} style={styles.imageRow0} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Imagem03')}>
          <Image source={require('../../../assets/codigo-da-vinc.png')} style={styles.imageRow0} />
        </TouchableOpacity>
      </View>

      <View style={styles.imageRow2}>
        <TouchableOpacity onPress={() => navigation.navigate('Imagem04')}>
          <Image source={require('../../../assets/got.png')} style={styles.imageRow0} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Imagem05')}>
          <Image source={require('../../../assets/harrypotter1.png')} style={styles.imageRow0} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonForm}>
          <Text style={styles.textButton}>Veja mais</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
