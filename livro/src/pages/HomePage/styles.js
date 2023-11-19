import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageRow0: {
    margin: 5,
    width: 130,
    height: 170,
  },
  imageRow1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageRow2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  AppTitle: {
    color: '#000',
    fontSize: 30,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  AppSubTitle: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
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
})