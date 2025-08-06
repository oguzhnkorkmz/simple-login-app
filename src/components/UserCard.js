import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Kullanıcı kartı bileşeni: Her bir kullanıcıyı listede göstermek için kullanılır
const UserCard = ({ user, onPress }) => {
  return (
    <View style={styles.card}>
      {/* Kullanıcı bilgilerini gösteren alan */}
      <View style={styles.info}>
        <Text style={styles.label}>Ad</Text>
        <Text style={styles.value}>{user.name}</Text>
      </View>

      {/* Kullanıcı email bilgisi */}
      <View style={styles.info}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{user.email}</Text>
      </View>

      {/* Detay ekranına gitmek için buton */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => onPress(user)} // Butona tıklanırsa, kullanıcıyı detay sayfasına yönlendir
        activeOpacity={0.8} // Buton tıklama animasyonu
      >
        <Text style={styles.buttonText}>Detay</Text>
      </TouchableOpacity>
    </View>
  );
};

// Stil tanımlamaları
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff', // Kartın arka plan rengi (Beyaz)
    borderRadius: 12, // Kartın yuvarlatılmış köşeleri
    padding: 16, // Kart içindeki boşluk
    marginBottom: 16, // Kartlar arasındaki boşluk

    // Gölgelendirme (iOS ve Android için)
    shadowColor: '#000', // Gölge rengi
    shadowOffset: { width: 0, height: 3 }, // Gölge ofseti
    shadowOpacity: 0.1, // Gölgenin şeffaflık seviyesi
    shadowRadius: 5, // Gölge yayılma çapı
    elevation: 3, // Android için gölge seviyesi
  },
  info: {
    flexDirection: 'row', // Etiket ve değeri yatayda yerleştirir
    marginBottom: 8, // Bilgiler arasında boşluk
  },
  label: {
    width: 60, // Etiketin genişliği (Ad, Email)
    fontWeight: '600', // Etiketin kalınlığı
    color: '#0077CC', // Etiket rengi (Mavi ton)
  },
  value: {
    flex: 1, // Değerin esnek olması için
    color: '#333', // Değerin rengi (Koyu gri)
  },
  button: {
    marginTop: 12, // Butonun üst kısmındaki boşluk
    backgroundColor: '#0055AA', // Buton arka planı (Derin mavi)
    paddingVertical: 10, // Butonun dikey iç boşluğu
    borderRadius: 12, // Butonun yuvarlatılmış köşeleri
    alignItems: 'center', // Buton metnini ortalamak
  },
  buttonText: {
    color: '#fff', // Buton metni rengi (Beyaz)
    fontWeight: '600', // Buton metni kalınlığı
  },
});

export default UserCard;
