import { FlatList, Text, View, StyleSheet } from 'react-native'

interface Produto {
  id: string;
  titulo: string;
  preco: number;
}

const produtos: Produto[] = [
  { id: '1', titulo: 'Tênis Runner', preco: 299 },
  { id: '2', titulo: 'Mochila Trail', preco: 189 },
  { id: '3', titulo: 'Garrafa Térmica', preco: 79 },
]

const ListaProdutos = () => {
  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.linha}>
          <Text style={styles.titulo}>{item.titulo}</Text>
          <Text>R$ {item.preco}</Text>
        </View>
      )}
    />
  )
}

export default ListaProdutos

const styles = StyleSheet.create({
  linha: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  titulo: { fontWeight: 'bold' },
})