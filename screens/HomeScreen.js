import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  const modules = [
  { name: 'Modul 1 (Latihan)', route: 'Modul1', color: '#4F46E5', icon: '📘' },
  { name: 'Modul 2 (Latihan)', route: 'Modul2', color: '#10B981', icon: '📝' },
  { name: 'Modul 3 (Latihan)', route: 'Modul3', color: '#8B5CF6', icon: '💻' },
  { name: 'Modul 3 (Tugas)', route: 'Modul3Tugas', color: '#F59E0B', icon: '📋' },
  { name: 'Modul 4 (Latihan)', route: 'Modul4', color: '#EF4444', icon: '🚀' },
  { name: 'Modul 5 (Latihan)', route: 'Modul5', color: '#06B6D4', icon: '💡' },
  { name: 'Modul 5 (Tugas)', route: 'Modul5Tugas', color: '#EC4899', icon: '📂' },
  { name: 'Modul 6 (Latihan)', route: 'Modul6', color: '#22C55E', icon: '🎓' },
  { name: 'Modul 6 (Tugas 1)', route: 'Modul6Tugas1', color: '#6366F1', icon: '🏆' },
  { name: 'Modul 6 (Tugas 2)', route: 'Modul6Tugas2', color: '#14B8A6', icon: '✅' },
];

  return (
    <ScrollView style={styles.container}>
  <Text style={styles.header}>📱 Praktikum Mobile Programming</Text>

  <Text style={styles.subtitle}>
    Pilih modul yang ingin dipelajari
  </Text>

  {modules.map((mod, index) => (
    <TouchableOpacity
      key={index}
      style={styles.card}
      onPress={() => navigation.navigate(mod.route)}
    >
      <View
        style={[
          styles.iconBox,
          { backgroundColor: mod.color },
        ]}
      >
        <Text style={styles.icon}>
          {mod.icon}
        </Text>
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.cardTitle}>
          {mod.name}
        </Text>

        <Text style={styles.cardSubtitle}>
          Tekan untuk membuka modul
        </Text>
      </View>

      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  ))}
</ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FC',
    padding: 20,
  },

  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginTop: 30,
  },

  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 25,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 15,
    marginBottom: 15,
    elevation: 4,
  },

  iconBox: {
    width: 55,
    height: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  icon: {
    fontSize: 24,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },

  cardSubtitle: {
    fontSize: 13,
    color: '#777',
    marginTop: 4,
  },

  arrow: {
    fontSize: 28,
    color: '#999',
  },
});
