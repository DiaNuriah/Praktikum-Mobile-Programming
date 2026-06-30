import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  ScrollView,
} from 'react-native';

export default function Modul6Tugas2Screen() {
  const [alas, setAlas] = useState('');
  const [tinggi, setTinggi] = useState('');
  const [sisiMiring, setSisiMiring] = useState('');
  const [luas, setLuas] = useState(null);
  const [keliling, setKeliling] = useState(null);

  const hitung = () => {
    const a = parseFloat(alas);
    const t = parseFloat(tinggi);
    const sm = parseFloat(sisiMiring);

    if (!isNaN(a) && !isNaN(t) && !isNaN(sm)) {
      setLuas(a * t);
      setKeliling(2 * (a + sm));
    } else {
      setLuas('Input tidak valid');
      setKeliling('Input tidak valid');
    }

    Keyboard.dismiss();
  };

  const bersihkanLayar = () => {
    setAlas('');
    setTinggi('');
    setSisiMiring('');
    setLuas(null);
    setKeliling(null);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.icon}>🔷</Text>

        <Text style={styles.title}>
          Luas & Keliling
        </Text>

        <Text style={styles.title}>
          Jajaran Genjang
        </Text>

        <Text style={styles.subtitle}>
          Masukkan semua data yang diperlukan
        </Text>

        <Text style={styles.label}>Alas</Text>

        <TextInput
          style={styles.input}
          value={alas}
          onChangeText={setAlas}
          placeholder="Masukkan panjang alas"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Tinggi</Text>

        <TextInput
          style={styles.input}
          value={tinggi}
          onChangeText={setTinggi}
          placeholder="Masukkan tinggi"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Sisi Miring</Text>

        <TextInput
          style={styles.input}
          value={sisiMiring}
          onChangeText={setSisiMiring}
          placeholder="Masukkan sisi miring"
          keyboardType="numeric"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={hitung}
        >
          <Text style={styles.buttonText}>
            Hitung
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.clearButton}
          onPress={bersihkanLayar}
        >
          <Text style={styles.buttonText}>
            Bersihkan
          </Text>
        </TouchableOpacity>

        {luas !== null && (
          <View style={styles.resultContainer}>

            <Text style={styles.resultTitle}>
              ✅ Hasil Perhitungan
            </Text>

            <Text style={styles.resultText}>
              Luas : {luas}
            </Text>

            <Text style={styles.resultText}>
              Keliling : {keliling}
            </Text>

          </View>
        )}

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F4F7FC',
    padding: 20,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    marginVertical: 30,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },

  icon: {
    fontSize: 60,
    textAlign: 'center',
    marginBottom: 10,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3B5BDB',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 25,
    marginTop: 10,
  },

  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    padding: 14,
    fontSize: 17,
    marginBottom: 18,
    backgroundColor: '#fff',
  },

  button: {
    backgroundColor: '#3B82F6',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },

  clearButton: {
    backgroundColor: '#EF4444',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  resultContainer: {
    marginTop: 25,
    backgroundColor: '#E8F5E9',
    padding: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#81C784',
  },

  resultTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E7D32',
    textAlign: 'center',
    marginBottom: 10,
  },

  resultText: {
    fontSize: 18,
    color: '#2E7D32',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 5,
  },

});