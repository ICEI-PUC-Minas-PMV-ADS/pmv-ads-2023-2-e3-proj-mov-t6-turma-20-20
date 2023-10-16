import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
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
    Social: {
      marginLeft: -200, 
      marginTop: 50,
      backgroundColor: '#fff',     
    },
    AppTitle: {
      color: '#000',
      fontSize: 20,
      fontFamily: 'Arial',
    },
    Image: {
        width: 80,
        height: 80,
    },
    form: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputUserName: {
        backgroundColor: '#d3d3d3',
        width: 250,
        height: 35,
        borderRadius: 5,
        padding: 5,        
    },
    inputForm: {
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