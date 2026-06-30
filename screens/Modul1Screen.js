import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Modul1Screen() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <Text style={styles.icon}>👋</Text>

        <Text style={styles.title}>
          Selamat Datang
        </Text>

        <Text style={styles.text1}>
          Ini adalah Program Pertama Saya
        </Text>

        <Text style={styles.text2}>
          React Native Mobile Programming
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FC',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    elevation: 6,
  },

  icon: {
    fontSize: 55,
    marginBottom: 15,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 15,
  },

  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    marginBottom: 10,
  },

  text2: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});