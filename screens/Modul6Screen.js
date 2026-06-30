import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Keyboard,
} from 'react-native';

export default function Modul6Screen() {
  const [panjang, setPanjang] = useState('');
  const [lebar, setLebar] = useState('');
  const [luas, setLuas] = useState(null);

  const hitungLuas = () => {
    const p = parseFloat(panjang);
    const l = parseFloat(lebar);

    if (!isNaN(p) && !isNaN(l)) {
      setLuas(p * l);
    } else {
      setLuas('Input tidak valid');
    }

    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.icon}>📐</Text>

        <Text style={styles.title}>
          Luas Persegi Panjang
        </Text>

        <Text style={styles.subtitle}>
          Masukkan panjang dan lebar
        </Text>

        <Text style={styles.label}>Panjang</Text>

        <TextInput
          style={styles.input}
          value={panjang}
          onChangeText={setPanjang}
          placeholder="Masukkan panjang"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Lebar</Text>

        <TextInput
          style={styles.input}
          value={lebar}
          onChangeText={setLebar}
          placeholder="Masukkan lebar"
          keyboardType="numeric"
        />

        <Button
          title="Hitung Luas"
          onPress={hitungLuas}
        />

        {luas !== null && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultTitle}>
              Hasil Perhitungan
            </Text>

            <Text style={styles.resultText}>
              {luas === 'Input tidak valid'
                ? '❌ Input tidak valid'
                : `✅ Luas = ${luas}`}
            </Text>
          </View>
        )}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FC',
    justifyContent: 'center',
    padding: 20,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    elevation: 6,
  },

  icon: {
    fontSize: 55,
    textAlign: 'center',
    marginBottom: 10,
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

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 18,
    backgroundColor: '#fff',
    fontSize: 16,
  },

  resultContainer: {
    marginTop: 25,
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#E8F5E9',
  },

  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 8,
    textAlign: 'center',
  },

  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E7D32',
    textAlign: 'center',
  },
});