import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { AppNavigator } from './routes/Drawer';
// we use { } while importing named imports  a named import/ export is a file or module that was exported from a file without the “default” keyword. This, therefore, means that it is not a default export but a named export

const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});


export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);


  if(fontsLoaded){
    return (
      <AppNavigator />
    )
  } else {
    return (
      <AppLoading
      startAsync={getFonts}
      onFinish={()=> setFontsLoaded(true)} 
      onError={() => console.log('error')}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});