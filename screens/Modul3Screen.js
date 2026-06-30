import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function Modul3Screen({ navigation }) {
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Text style={styles.icon}>⌨️</Text>

        <Text style={styles.title}>
          Text Input & Button
        </Text>

        <Text style={styles.subtitle}>
          Masukkan satu kata
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ketik di sini..."
          value={inputText}
          onChangeText={setInputText}
        />

        <TouchableOpacity
          style={[styles.button,{backgroundColor:'#3B82F6'}]}
          onPress={()=>setDisplayText(inputText)}
        >
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button,{backgroundColor:'#F59E0B'}]}
          onPress={()=>{
            setInputText('');
            setDisplayText('');
          }}
        >
          <Text style={styles.buttonText}>Hapus</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button,{backgroundColor:'#EF4444'}]}
          onPress={()=>navigation.goBack()}
        >
          <Text style={styles.buttonText}>Keluar</Text>
        </TouchableOpacity>

        {displayText !== '' && (
          <View style={styles.result}>
            <Text style={styles.resultText}>
              Hasil : {displayText}
            </Text>
          </View>
        )}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F4F7FC',
    justifyContent:'center',
    padding:20,
  },

  card:{
    backgroundColor:'#fff',
    borderRadius:20,
    padding:25,
    elevation:6,
  },

  icon:{
    fontSize:55,
    textAlign:'center',
    marginBottom:10,
  },

  title:{
    fontSize:26,
    fontWeight:'bold',
    color:'#2563EB',
    textAlign:'center',
  },

  subtitle:{
    textAlign:'center',
    color:'#666',
    marginBottom:20,
    marginTop:5,
  },

  input:{
    borderWidth:1,
    borderColor:'#DDD',
    borderRadius:12,
    padding:15,
    fontSize:16,
    marginBottom:15,
  },

  button:{
    padding:15,
    borderRadius:12,
    marginBottom:12,
  },

  buttonText:{
    color:'#fff',
    fontWeight:'bold',
    textAlign:'center',
    fontSize:16,
  },

  result:{
    marginTop:20,
    backgroundColor:'#E8F5E9',
    padding:15,
    borderRadius:12,
  },

  resultText:{
    textAlign:'center',
    fontSize:18,
    fontWeight:'bold',
    color:'#16A34A',
  },
});