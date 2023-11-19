import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    Container: {
      flex: 1,      
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    Social: {
      marginLeft: -200, 
      backgroundColor: '#fff',     
    },
    AppTitle: {
      color: '#000',
      fontSize: 20,
      fontFamily: 'Arial',
    },
    UserImage: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#000',
        width: 130,
        height: 130,
        borderRadius: 80,
        marginBottom: 54,
        marginTop: 60,
    },
    Image: {
        width: 80,
        height: 80,
    },
    form: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputEmail: {
        backgroundColor: '#d3d3d3',
        width: 250,
        height: 35,
        borderRadius: 5,
        padding: 5,       
    },
    inputPassword: {
        backgroundColor: '#d3d3d3',
        marginTop: 13,
        width: 250,
        height: 35,
        borderRadius: 5,
        padding: 5,
    },
    buttonForm: {
        backgroundColor: '#000',
        width: 100,
        height: 30,
        borderRadius: 5,
        marginTop: 13,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    ButtonCreate: {
        color: '#000',
        fontWeight: 'bold',
        marginTop: 18,
    }
})