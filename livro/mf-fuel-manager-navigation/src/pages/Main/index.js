import React from 'react';
import { View, Text, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export default function Main() {
  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  const navigateToCreateUser = () => {
    navigation.navigate('CreateUser');
  };

  return (
    <View style={styles.Container}>
      <View style={styles.Header}>
        <Image source={require('../../../assets/icon.png')} style={styles.Image} />
        <Text style={styles.AppTitle}>Livro vai{'\n'} Livro vem</Text>
      </View>
      <View style={styles.Social}>
        <Image source={require('../../../assets/icon.png')} style={styles.ImageSocial} />
        <Text style={styles.SocialTitle}>Lvai Lvem{'\n'} @lvai_lvem</Text>
      </View>
      <View style={styles.Footer}>
        <View style={styles.Buttons}>
          <TouchableHighlight
            style={[styles.Button, styles.ButtonWhite]}
            underlayColor="black" 
            onPress={navigateToLogin}
          >
            <Text style={[styles.ButtonText, styles.ButtonTextBlack]}>Login</Text>
          </TouchableHighlight>            
          <View style={{ marginRight: 10 }} />
          <TouchableHighlight
            style={[styles.Button, styles.ButtonWhite]}
            underlayColor="black" 
            onPress={navigateToCreateUser}
          >
            <Text style={[styles.ButtonText, styles.ButtonTextBlack]}>Cadastro</Text>
          </TouchableHighlight>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
          <Text style={styles.ButtonCreate}>Acessar sem cadastro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
