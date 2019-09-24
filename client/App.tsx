import React, {useEffect, useState} from 'react';
import { AppLoading } from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  // Equivalent to this.state
  const [isReady, setReady] = useState(false);

  // Equivalent to componentDidMount()
  useEffect(() => {
    // Load Fonts used for NativeBase
    Font.loadAsync({
      Roboto: require('./resources/Fonts/Roboto.ttf'),
      Roboto_medium: require('./resources/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });

    // App is ready to initialize
    setReady(true);
  });

  if(isReady){
    return (
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    );
  } else{
    return (
      <View style={styles.container}>

      </View>
    );
  }
  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.tsx to start working on your app!</Text>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
