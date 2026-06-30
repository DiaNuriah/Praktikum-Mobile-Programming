import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';

export default function Modul5Screen() {
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.icon}>☑️</Text>

        <Text style={styles.title}>
          Simulasi CheckBox
        </Text>

        <Text style={styles.subtitle}>
          Pilih satu atau lebih pilihan di bawah ini
        </Text>

        <View style={styles.checkboxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked1}
            onValueChange={setChecked1}
            color={isChecked1 ? '#3B82F6' : undefined}
          />
          <Text style={styles.label}>Pilihan Pertama</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked2}
            onValueChange={setChecked2}
            color={isChecked2 ? '#3B82F6' : undefined}
          />
          <Text style={styles.label}>Pilihan Kedua</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked3}
            onValueChange={setChecked3}
            color={isChecked3 ? '#3B82F6' : undefined}
          />
          <Text style={styles.label}>Pilihan Ketiga</Text>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            {isChecked1 ? '✅ Pilihan Pertama Dipilih' : '❌ Pilihan Pertama Tidak Dipilih'}
          </Text>

          <Text style={styles.resultText}>
            {isChecked2 ? '✅ Pilihan Kedua Dipilih' : '❌ Pilihan Kedua Tidak Dipilih'}
          </Text>

          <Text style={styles.resultText}>
            {isChecked3 ? '✅ Pilihan Ketiga Dipilih' : '❌ Pilihan Ketiga Tidak Dipilih'}
          </Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F4F7FC',
    justifyContent: 'center',
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
    fontSize: 22,
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

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  checkbox: {
    width: 24,
    height: 24,
    marginRight: 15,
  },

  label: {
    fontSize: 18,
    color: '#333',
  },

  resultContainer: {
    marginTop: 25,
    backgroundColor: '#E8F5E9',
    borderRadius: 12,
    padding: 15,
  },

  resultText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#2E7D32',
    fontWeight: '600',
  },
});