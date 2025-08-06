import React from 'react';
// React Navigation ana kapsayıcı
import { NavigationContainer } from '@react-navigation/native';
// Native Stack Navigator oluşturmak için
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Ekran bileşenleri
import LoginScreen from './src/screens/LoginScreen';
import UserListScreen from './src/screens/UserListScreen';
import UserDetailScreen from './src/screens/UserDetailScreen';

// Stack navigator örneği oluşturuluyor
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // Uygulamanın tüm navigasyonunu sarmalayacak konteyner
    <NavigationContainer>
      {/* Navigator tanımlamaları */}
      <Stack.Navigator
        initialRouteName="Login" // Uygulama ilk açıldığında gösterilecek ekran
      >
        {/* Her bir ekranı Stack’e ekliyoruz */}
        <Stack.Screen
          name="Login" // Ekranın route adı
          component={LoginScreen} // Render edilecek bileşen
          options={{ title: 'Giriş' }} // Header kısmındaki başlık
        />
        <Stack.Screen
          name="UserList"
          component={UserListScreen}
          options={{ title: 'Kullanıcı Listesi' }}
        />
        <Stack.Screen
          name="UserDetail"
          component={UserDetailScreen}
          options={{ title: 'Kullanıcı Detayları' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
