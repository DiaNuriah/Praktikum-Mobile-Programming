import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Modul4Screen() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: 1, label: 'Pilihan Pertama' },
    { id: 2, label: 'Pilihan Kedua' },
    { id: 3, label: 'Pilihan Ketiga' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.icon}>📻</Text>

        <Text style={styles.title}>
          Simulasi RadioButton
        </Text>

        <Text style={styles.subtitle}>
          Pilih salah satu pilihan di bawah ini
        </Text>

        <View style={styles.radioGroup}>
          {options.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={styles.radioButtonContainer}
              onPress={() => setSelectedOption(option.id)}
            >
              <View style={styles.radioCircle}>
                {selectedOption === option.id && (
                  <View style={styles.selectedRb} />
                )}
              </View>

              <Text style={styles.radioText}>
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.resultBox}>
          <Text style={styles.resultText}>
            {selectedOption
              ? `✅ Hasil Pilihan RadioButton ${selectedOption}`
              : 'Belum ada pilihan'}
          </Text>
        </View>

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
    backgroundColor: '#FFFFFF',
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
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 25,
  },

  radioGroup: {
    marginBottom: 20,
  },

  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },

  radioCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  selectedRb: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#2563EB',
  },

  radioText: {
    fontSize: 17,
    color: '#333',
  },

  resultBox: {
    backgroundColor: '#E8F5E9',
    borderRadius: 12,
    padding: 15,
    marginTop: 20,
  },

  resultText: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2E7D32',
  },
});