import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection, getDocs } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAD7g8LrEy0c39J8oKq30c4b_GP9nUPlqo",
  authDomain: "banco-b5e47.firebaseapp.com",
  projectId: "banco-b5e47",
  storageBucket: "banco-b5e47.appspot.com",
  messagingSenderId: "1079292778861",
  appId: "1:1079292778861:web:ead310fc093b5d2a706264",
  measurementId: "G-2EP2KG3B14"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const App = () => {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [dadosUsuarios, setDadosUsuarios] = useState([]);

  const testFirestoreConnection = async () => {
    try {
      if (nomeUsuario.trim() === '') {
        console.error('O nome do usuário não pode estar vazio.');
        return;
      }

      const docRef = await addDoc(collection(db, 'Usuários'), {
        nome: nomeUsuario,
      });
      console.log('Documento adicionado com ID:', docRef.id);

      setNomeUsuario('');

      lerDadosUsuarios();
    } catch (error) {
      console.error('Erro ao adicionar documento:', error);
    }
  };

  const lerDadosUsuarios = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Usuários'));
      const dados = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setDadosUsuarios(dados);
    } catch (error) {
      console.error('Erro ao ler dados da coleção "Usuários":', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>POST-IT Online</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Insira a nota"
            value={nomeUsuario}
            onChangeText={(text) => setNomeUsuario(text)}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Button
              color="#3f3454"
              title="Gravar nota"
              onPress={testFirestoreConnection}
              style={styles.button}
            />
            <View style={{ width: 10 }} /> <Button
              color="#3f3454"
              title="Exibir notas"
              onPress={lerDadosUsuarios}
              style={styles.button}
            />
          </View>
        </View>
      </View>
      
      <Text style={styles.subtitle}>Suas notas:</Text>
      <View>
        {dadosUsuarios.map((usuario) => (
          <Text key={usuario.id} style={styles.userText}>{usuario.nome}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 16,
    backgroundColor: '#bf9fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginRight: 10,
  },
  userText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default App;