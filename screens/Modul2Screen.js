import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Modul2Screen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.icon}>🎨</Text>

        <Text style={styles.title}>
          Pewarnaan Aplikasi Android
        </Text>

        <Text style={styles.subtitle}>
          Contoh penggunaan warna pada tampilan React Native
        </Text>

        <View style={styles.colorRow}>
          <View style={[styles.colorBox, { backgroundColor: '#3498db' }]} />
          <View style={[styles.colorBox, { backgroundColor: '#2ecc71' }]} />
          <View style={[styles.colorBox, { backgroundColor: '#f39c12' }]} />
          <View style={[styles.colorBox, { backgroundColor: '#e74c3c' }]} />
        </View>

        <Text style={styles.footer}>
          Mobile Programming
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF3FF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    elevation: 6,
  },

  icon: {
    fontSize: 60,
    marginBottom: 15,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2563EB',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 25,
  },

  colorRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 25,
  },

  colorBox: {
    width: 45,
    height: 45,
    borderRadius: 12,
  },

  footer: {
    fontSize: 16,
    color: '#555',
    fontWeight: '600',
  },
});
// update