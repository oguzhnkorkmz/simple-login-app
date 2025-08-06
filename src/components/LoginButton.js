import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// LoginButton bileşeni: Kullanıcının giriş yapmasını sağlamak için kullanılan buton
const LoginButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles.button}>
    {/* Buton içindeki metni göster */}
    <Text style={styles.text}>Giriş Yap</Text>
  </TouchableOpacity>
);

// Stil tanımları
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0055AA', // Butonun arka plan rengi (Mavi)
    paddingVertical: 14, // Butonun dikeydeki iç boşluğu
    borderRadius: 12, // Butonun yuvarlatılmış köşeleri
    alignItems: 'center', // Butonun içeriğini yatayda ortalama
    marginTop: 20, // Üstten boşluk
    width: '100%', // Butonun genişliği ekranın tamamı kadar
    // Buton gölgelendirmesi (iOS ve Android için)
    shadowColor: '#000', // Gölge rengi
    shadowOffset: { width: 0, height: 3 }, // Gölge ofseti
    shadowOpacity: 0.2, // Gölgenin şeffaflık seviyesi
    shadowRadius: 4, // Gölge yayılma çapı
    elevation: 3, // Android için gölge seviyesi
  },
  text: {
    color: '#fff', // Metin rengi (Beyaz)
    fontSize: 16, // Yazı boyutu
    fontWeight: '600', // Yazı kalınlığı
  },
});

export default LoginButton;
