import { TextInput, StyleSheet } from 'react-native';

type BuscaProps = {
  busca: string;
  setBusca: (texto: string) => void;
};

export default function Busca({ busca, setBusca }: BuscaProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Buscar produto..."
      value={busca}
      onChangeText={setBusca}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    margin: 16,
    fontSize: 16,
  },
});