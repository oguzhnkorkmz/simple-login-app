import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Kullanıcı detay kartı: Kullanıcı hakkında daha fazla bilgi gösteren bileşen
const UserDetailCard = ({ user }) => {
  const { name, email, phone, address, company, website } = user;

  // Adresi, birleştirerek tam adresi oluşturuyoruz
  const fullAddress = `${address.suite}, ${address.street}, ${address.city} (${address.zipcode})`;

  return (
    <View style={styles.card}>
      {/* Kişisel bilgiler bölümü */}
      <Text style={styles.sectionTitle}>Kişisel Bilgiler</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Ad:</Text>
        <Text style={styles.value}>{name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{email}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Telefon:</Text>
        <Text style={styles.value}>{phone}</Text>
      </View>

      {/* Adres bölümü */}
      <Text style={styles.sectionTitle}>Adres</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Adres:</Text>
        <Text style={styles.value}>{fullAddress}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Website:</Text>
        <Text style={styles.value}>{website}</Text>
      </View>

      {/* Şirket bilgisi */}
      <Text style={styles.sectionTitle}>Şirket</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Şirket:</Text>
        <Text style={styles.value}>{company.name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Slogan:</Text>
        <Text style={styles.value}>{company.catchPhrase}</Text>
      </View>
    </View>
  );
};

// Stil tanımlamaları
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff', // Kartın arka plan rengi (Beyaz)
    borderRadius: 12, // Kartın yuvarlatılmış köşeleri
    padding: 20, // Kart içindeki boşluk
    marginTop: 20, // Üst taraftan boşluk

    // Gölgelendirme (iOS ve Android için)
    shadowColor: '#000', // Gölge rengi
    shadowOffset: { width: 0, height: 3 }, // Gölge ofseti
    shadowOpacity: 0.1, // Gölgenin şeffaflık seviyesi
    shadowRadius: 5, // Gölge yayılma çapı
    elevation: 4, // Android için gölge seviyesi
  },
  sectionTitle: {
    fontSize: 18, // Başlık font boyutu
    fontWeight: '700', // Başlık kalınlık seviyesi
    color: '#0055AA', // Başlık rengi (Mavi)
    marginTop: 16, // Başlık üst margin
    marginBottom: 8, // Başlık alt margin
    borderBottomWidth: 1, // Alt çizgi
    borderBottomColor: '#eee', // Alt çizgi rengi
    paddingBottom: 4, // Alt çizgi ile içerik arasındaki boşluk
  },
  row: {
    flexDirection: 'row', // Etiket ve değeri yatayda yerleştirir
    marginBottom: 8, // Satırlar arasındaki boşluk
  },
  label: {
    width: 80, // Etiket genişliği (Ad, Email vs.)
    fontWeight: '600', // Etiket kalınlık seviyesi
    color: '#0077CC', // Etiket rengi (Mavi ton)
  },
  value: {
    flex: 1, // Değerin esnek olması için
    color: '#333', // Değerin rengi (Koyu gri)
  },
});

export default UserDetailCard;
