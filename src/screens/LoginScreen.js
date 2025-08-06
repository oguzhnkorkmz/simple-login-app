import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import LoginButton from '../components/LoginButton';

// LoginScreen bileşeni: kullanıcı giriş ekranı
const LoginScreen = ({ navigation }) => {
  // username ve password state'leri
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Hata mesajı durumu

  // Giriş butonuna basıldığında çağrılır
  const handleLogin = () => {
    // Boş olmayan kullanıcı adı ve şifre kontrolü
    if (username.trim() === 'admin' && password.trim() === '123') {
      // Doğru ise UserList ekranına geçiş
      navigation.navigate('UserList', { username });
      setError(''); // Hata mesajını sıfırlama
    } else {
      // Yanlışsa hata mesajı göster
      setError('Kullanıcı adı veya şifre yanlış');
    }
  };

  return (
    // Klavye dışına tıklandığında klavyeyi kapat
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* iOS’ta klavyeye göre taşıma davranışı */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.inner}
        >
          {/* Ekran başlığı */}
          <Text style={styles.title}>Hoş Geldiniz</Text>
          {/* Alt başlık */}
          <Text style={styles.subtitle}>Lütfen giriş bilgilerinizi girin</Text>

          {/* Kullanıcı adı girişi */}
          <TextInput
            style={styles.input}
            placeholder="Kullanıcı Adı"
            placeholderTextColor="#888"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />

          {/* Şifre girişi */}
          <TextInput
            style={styles.input}
            placeholder="Şifre"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {/* Hata mesajı */}
          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          {/* Giriş Yap butonu */}
          <LoginButton onPress={handleLogin} />
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

// Stil tanımları
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0077CC', // Açık mavi arka plan
    justifyContent: 'center', // Dikeyde ortala
    paddingHorizontal: 20, // Yatayda kenarlardan boşluk
  },
  inner: {
    flex: 0.65, // Ekranın %40'ını kapla
    backgroundColor: '#fff', // Beyaz kart arkası
    borderRadius: 12, // Yuvarlak köşeler
    paddingVertical: 30, // İç dikey boşluk
    paddingHorizontal: 20, // İç yatay boşluk

    // Gölge efekti (iOS)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    // Gölge efekti (Android)
    elevation: 4,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#0055AA', // Başlık rengi mavi ton
    textAlign: 'center', // Ortala
    marginBottom: 8, // Alt boşluk
  },
  subtitle: {
    fontSize: 14,
    color: '#555', // Alt başlık rengi gri ton
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    height: 48,
    backgroundColor: '#F2F2F2', // Input arkası açık gri
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 12, // Alt boşluk
    borderWidth: 1,
    borderColor: '#ddd', // İnce gri border
  },
  errorText: {
    color: 'red', // Hata mesajı rengi kırmızı
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default LoginScreen;
