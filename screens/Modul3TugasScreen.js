import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function Modul3TugasScreen({ navigation }) {
  const [nim, setNim] = useState('');
  const [nama, setNama] = useState('');
  const [alamat, setAlamat] = useState('');
  
  const [submittedData, setSubmittedData] = useState(null);

  const handleOk = () => {
    setSubmittedData({ nim, nama, alamat });
  };

  const handleHapus = () => {
    setNim('');
    setNama('');
    setAlamat('');
    setSubmittedData(null);
  };

  const handleKeluar = () => {
    navigation.goBack();
  };

  return (
  <ScrollView style={styles.container}>
    <View style={styles.card}>

      <Text style={styles.icon}>📝</Text>

      <Text style={styles.title}>
        Form Pendaftaran
      </Text>

      <Text style={styles.subtitle}>
        Lengkapi data di bawah ini
      </Text>
      
      <Text style={styles.label}>NIM</Text>
      <TextInput
        style={styles.input}
        value={nim}
        onChangeText={setNim}
        placeholder="Masukkan NIM"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Nama</Text>
      <TextInput
        style={styles.input}
        value={nama}
        onChangeText={setNama}
        placeholder="Masukkan Nama"
      />

      <Text style={styles.label}>Alamat</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={alamat}
        onChangeText={setAlamat}
        placeholder="Masukkan Alamat"
        multiline
        numberOfLines={4}
      />

      <View style={styles.buttonContainer}>
        <Button title="OK" onPress={handleOk} />
        <Button title="Hapus" onPress={handleHapus} color="#f39c12" />
        <Button title="Keluar" onPress={handleKeluar} color="#e74c3c" />
      </View>

      {submittedData && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Data Pendaftaran:</Text>
          <Text style={styles.resultText}>NIM: {submittedData.nim}</Text>
          <Text style={styles.resultText}>Nama: {submittedData.nama}</Text>
          <Text style={styles.resultText}>Alamat: {submittedData.alamat}</Text>
        </View>
      )}

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F4F7FC',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    marginVertical: 25,
    elevation: 6,
  },

  icon: {
    fontSize: 55,
    textAlign: 'center',
    marginBottom: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2563EB',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
  },

  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
    marginTop: 10,
  },

  resultContainer: {
    padding: 15,
    backgroundColor: '#E8F5E9',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#4CAF50',
  },

  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2E7D32',
  },

  resultText: {
    fontSize: 16,
    marginBottom: 5,
  },
});