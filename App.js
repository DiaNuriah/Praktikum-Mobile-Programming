import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import Modul1Screen from './screens/Modul1Screen';
import Modul2Screen from './screens/Modul2Screen';
import Modul3Screen from './screens/Modul3Screen';
import Modul3TugasScreen from './screens/Modul3TugasScreen';
import Modul4Screen from './screens/Modul4Screen';
import Modul5Screen from './screens/Modul5Screen';
import Modul5TugasScreen from './screens/Modul5TugasScreen';
import Modul6Screen from './screens/Modul6Screen';
import Modul6Tugas1Screen from './screens/Modul6Tugas1Screen';
import Modul6Tugas2Screen from './screens/Modul6Tugas2Screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Praktikum Mobile Programming' }} />
        <Stack.Screen name="Modul1" component={Modul1Screen} options={{ title: 'Modul 1: Teks Dasar' }} />
        <Stack.Screen name="Modul2" component={Modul2Screen} options={{ title: 'Modul 2: Pewarnaan' }} />
        <Stack.Screen name="Modul3" component={Modul3Screen} options={{ title: 'Modul 3: Input & Tombol' }} />
        <Stack.Screen name="Modul3Tugas" component={Modul3TugasScreen} options={{ title: 'Modul 3: Tugas' }} />
        <Stack.Screen name="Modul4" component={Modul4Screen} options={{ title: 'Modul 4: RadioButton' }} />
        <Stack.Screen name="Modul5" component={Modul5Screen} options={{ title: 'Modul 5: CheckBox' }} />
        <Stack.Screen name="Modul5Tugas" component={Modul5TugasScreen} options={{ title: 'Modul 5: Tugas' }} />
        <Stack.Screen name="Modul6" component={Modul6Screen} options={{ title: 'Modul 6: Kalkulator Persegi Panjang' }} />
        <Stack.Screen name="Modul6Tugas1" component={Modul6Tugas1Screen} options={{ title: 'Modul 6: Tugas Persegi' }} />
        <Stack.Screen name="Modul6Tugas2" component={Modul6Tugas2Screen} options={{ title: 'Modul 6: Tugas Jajaran Genjang' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
