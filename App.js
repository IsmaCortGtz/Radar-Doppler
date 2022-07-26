import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WebView } from 'react-native-webview';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name="Radar Doppler GDL" component={Test}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Test(){

  const webViewRef = useRef();

  return (
    <View style={{flex: 1}}>
      <WebView
        ref={(ref) => webViewRef.current = ref}
        source={{uri: "http://iam.cucei.udg.mx/radar/iam/"}}
        injectedJavaScript={""}
      />
      <Button title='Recargar' onPress={() => webViewRef.current.reload()}/>
    </View>
  );
}