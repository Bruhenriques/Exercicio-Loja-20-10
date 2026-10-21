
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Card from './components/Card';
import Busca from './components/Busca';

export default function App() {
  const [busca, setBusca] = useState('');

  return (
    <View style={styles.container}>
      <Busca busca={busca} setBusca={setBusca} />

      <Card busca={busca} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: 40,
  },
});
