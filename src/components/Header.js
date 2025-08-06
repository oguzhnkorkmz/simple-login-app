import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Header bileşeni: Sayfa başlıklarını göstermek için kullanılır
const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      {/* Başlık metnini görüntüle */}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

// Stil tanımları
const styles = StyleSheet.create({
  header: {
    padding: 15, // Başlık etrafındaki boşluk
    backgroundColor: '#0055AA', // Arka plan rengi (Mavi)
  },
  title: {
    fontSize: 20, // Başlık yazı boyutu
    color: '#fff', // Yazı rengi (Beyaz)
    textAlign: 'center', // Başlık yazısının ortalanması
    fontWeight: '600', // Başlık yazısının kalınlığı
  },
});

export default Header;
