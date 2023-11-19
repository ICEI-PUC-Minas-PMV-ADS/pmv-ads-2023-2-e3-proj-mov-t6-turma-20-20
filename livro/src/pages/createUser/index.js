import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles'

export default function CreateUser({navigation}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    function handleCreateUser(){
        if(name && email && password !== '' && password === passwordConfirm){
            alert('Cadastro criado com sucesso')
            navigation.navigate('login')
        }else {
            alert('Ops! algo errado')
        }
    }
    return(
        <View style={styles.Container}>
            <View style={styles.Social}>
              <Text style={styles.AppTitle}>Sign in</Text>
            </View>
            <View style={styles.UserImage} >
                <Image source={require('../../../assets/icon.png')}
                style={styles.Image}  />
            </View>
            <View style={styles.form} >
                <TextInput style={styles.inputUserName} placeholder='Nome'
                autoCompleteType='username' autoCapitalize='none'
                placeholderTextColor='#000' autoCorrect={false}
                onChangeText={(event) => setName(event)}
                 />
                <TextInput style={styles.inputForm} placeholder='Email'
                autoCompleteType='email' autoCapitalize='none' autoCorrect={false}
                placeholderTextColor='#000'
                onChangeText={(event) => setEmail(event)}
                 />
                <TextInput style={styles.inputForm} placeholder='Senha'
                autoCompleteType='password' autoCapitalize='none'
                placeholderTextColor='#000' autoCorrect={false}
                onChangeText={(event) => setPassword(event)}
                 />
                <TextInput style={styles.inputForm} placeholder='Confirmar senha'
                autoCompleteType='password' autoCapitalize='none' autoCorrect={false}
                placeholderTextColor='#000'
                onChangeText={(event) => setPasswordConfirm(event)}
                 />
                <TouchableOpacity style={styles.buttonForm}
                onPress={handleCreateUser} >
                    <Text style={styles.textButton}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.ButtonCreate}>Possui uma conta!</Text>
                </TouchableOpacity> 
            </View>
        </View>
    );
}