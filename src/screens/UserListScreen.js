import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header';
import UserCard from '../components/UserCard';

// UserListScreen bileşeni: Kullanıcı listesine erişim sağlanır ve her kullanıcı kart olarak listelenir
const UserListScreen = ({ navigation }) => {
  // users state'i, kullanıcıları saklamak için
  const [users, setUsers] = useState([]);

  // API'den kullanıcı verilerini almak için useEffect kullanılır
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json()) // JSON verisini al
      .then(setUsers) // Kullanıcı verilerini state'e aktar
      .catch(console.error); // Hata durumunda konsola yazdır
  }, []);

  // Her bir kullanıcı kartı için renderItem fonksiyonu
  const renderItem = ({ item }) => (
    <UserCard
      user={item} // Kullanıcı verisini gönder
      onPress={user => navigation.navigate('UserDetail', { user })} // Kullanıcı kartına tıklanınca detay ekranına git
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Sayfa başlığı */}
      <Header title="Kullanıcı Listesi" />
      {/* Kullanıcı listesi */}
      <FlatList
        contentContainerStyle={styles.list} // Listeyi güzelleştirmek için stil
        data={users} // Alınan kullanıcı verisi
        keyExtractor={item => item.id.toString()} // Her öğe için benzersiz anahtar
        renderItem={renderItem} // Her öğe için renderItem fonksiyonunu çağır
        showsVerticalScrollIndicator={false} // Dikey kaydırıcıyı gizle
      />
    </SafeAreaView>
  );
};

// Stil tanımları
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F7FF', // Açık mavi tonunda arka plan
  },
  list: {
    padding: 20, // Kartlar arasında ve kenarlarda boşluk bırak
  },
});

export default UserListScreen;
