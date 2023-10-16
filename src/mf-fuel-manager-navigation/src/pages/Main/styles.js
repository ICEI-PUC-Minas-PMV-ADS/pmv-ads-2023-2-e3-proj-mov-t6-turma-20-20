import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  Header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 6,
  },
  Social: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 20,
    flex: 1,
  },
  Footer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  Image: {
    width: 50,
    height: 50,
  },
  ImageSocial: {
    width: 20,
    height: 20,
  },
  ButtonCreate: {
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  AppTitle: {
    color: '#000',
    fontSize: 50,
    marginTop: 18,
    fontFamily: 'Arial',
  },
  SocialTitle: {
    color: '#000',
    fontSize: 10,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  Button: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  ButtonText: {
    color: 'black',
    textAlign: 'center',
  },
});
