import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import UserDetailCard from '../components/UserDetailCard';

// UserDetailScreen bileşeni: Seçilen kullanıcının detaylarını gösterir
const UserDetailScreen = ({ route }) => {
  // navigation’dan gelen parametrelerden user objesini al
  const { user } = route.params;

  return (
    <View style={styles.container}>
      {/* Sayfa başlığı */}
      <Header title="Kullanıcı Detayları" />
      {/* Kaydırılabilir içerik */}
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Kullanıcı detaylarını gösteren kart */}
        <UserDetailCard user={user} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F7FF', // Açık mavi arka plan
  },
  scroll: {
    padding: 20, // İçerik çevresi boşluk
  },
});

export default UserDetailScreen;
