import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Checkbox from 'expo-checkbox';

export default function Modul5TugasScreen() {
  const [selectedRadio, setSelectedRadio] = useState(null);

  const [isCheckA, setCheckA] = useState(false);
  const [isCheckB, setCheckB] = useState(false);

  const radioOptions = [
    { id: 'R1', label: 'Opsi Radio 1' },
    { id: 'R2', label: 'Opsi Radio 2' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.icon}>📋</Text>

        <Text style={styles.title}>
          RadioButton & CheckBox
        </Text>

        <Text style={styles.subtitle}>
          Pilih salah satu RadioButton dan beberapa CheckBox
        </Text>

        <Text style={styles.sectionTitle}>
          RadioButton
        </Text>

        {radioOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={styles.radioContainer}
            onPress={() => setSelectedRadio(option.id)}
          >
            <View style={styles.radioCircle}>
              {selectedRadio === option.id && (
                <View style={styles.selectedRb} />
              )}
            </View>

            <Text style={styles.optionText}>
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}

        <View style={styles.resultBox}>
          <Text style={styles.resultTitle}>
            Radio Terpilih
          </Text>

          <Text style={styles.resultText}>
            {selectedRadio
              ? `✅ ${selectedRadio}`
              : '❌ Belum memilih'}
          </Text>
        </View>

        <Text style={[styles.sectionTitle, { marginTop: 25 }]}>
          CheckBox
        </Text>

        <View style={styles.checkboxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={isCheckA}
            onValueChange={setCheckA}
            color={isCheckA ? '#3B82F6' : undefined}
          />
          <Text style={styles.optionText}>
            Opsi CheckBox A
          </Text>
        </View>

        <View style={styles.checkboxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={isCheckB}
            onValueChange={setCheckB}
            color={isCheckB ? '#3B82F6' : undefined}
          />
          <Text style={styles.optionText}>
            Opsi CheckBox B
          </Text>
        </View>

        <View style={styles.resultBox}>
          <Text style={styles.resultTitle}>
            Status CheckBox
          </Text>

          <Text style={styles.resultText}>
            {isCheckA
              ? '✅ A Dipilih'
              : '❌ A Tidak Dipilih'}
          </Text>

          <Text style={styles.resultText}>
            {isCheckB
              ? '✅ B Dipilih'
              : '❌ B Tidak Dipilih'}
          </Text>
        </View>

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

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 15,
  },

  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  radioCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  selectedRb: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#3B82F6',
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  checkbox: {
    width: 24,
    height: 24,
    marginRight: 12,
  },

  optionText: {
    fontSize: 17,
    color: '#333',
  },

  resultBox: {
    backgroundColor: '#E8F5E9',
    borderRadius: 12,
    padding: 15,
    marginTop: 15,
  },

  resultTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 8,
  },

  resultText: {
    fontSize: 16,
    color: '#2E7D32',
    marginBottom: 5,
  },
});