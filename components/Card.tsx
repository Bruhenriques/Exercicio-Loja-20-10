
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';

type CardProps = {
  busca: string;
};

const produtos = [
  {
    id: 1,
    nome: 'Tênis Esportivo',
    preco: 'R$ 199,90',
    imagem:
      'https://imgnike-a.akamaihd.net/768x768/097460P1A1.jpg',
  },
  {
    id: 2,
    nome: 'Camiseta dos carros',
    preco: 'R$ 59,90',
    imagem:
      'https://cea.vtexassets.com/arquivos/ids/59397782/Foto-0.jpg?v=639235348852470000',
  },
  {
    id: 3,
    nome: 'Relógio',
    preco: 'R$ 149,90',
    imagem:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600',
  },
];

function normalizar(texto: string) {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

export default function Card({ busca }: CardProps) {
  const { width } = useWindowDimensions();

  const colunas = width >= 700 ? 3 : 2;
  const espacamento = 12;
  const padding = 16;

  const larguraCard =
    (width - padding * 2 - espacamento * (colunas - 1)) /
    colunas;

  const produtosFiltrados = produtos.filter((produto) =>
    normalizar(produto.nome).includes(normalizar(busca))
  );

  const comprarProduto = (nome: string) => {
    if (Platform.OS === 'web') {
      window.alert(`Você selecionou: ${nome}`);
    } else {
      Alert.alert(
        'Comprar produto',
        `Você selecionou: ${nome}`
      );
    }
  };

  return (
    <FlatList
      key={colunas}
      data={produtosFiltrados}
      numColumns={colunas}
      keyExtractor={(item) => item.id.toString()}
      style={styles.lista}
      contentContainerStyle={styles.conteudo}
      columnWrapperStyle={styles.linha}
      keyboardShouldPersistTaps="handled"
      renderItem={({ item }) => (
        <View
          style={[
            styles.card,
            { width: larguraCard },
          ]}
        >
          <Image
            source={{ uri: item.imagem }}
            style={styles.imagem}
            resizeMode="cover"
          />

          <Text style={styles.nome}>
            {item.nome}
          </Text>

          <Text style={styles.preco}>
            {item.preco}
          </Text>

          <TouchableOpacity
            style={styles.botaoComprar}
            onPress={() => comprarProduto(item.nome)}
          >
            <Text style={styles.textoBotao}>
              Comprar
            </Text>
          </TouchableOpacity>
        </View>
      )}
      ListEmptyComponent={
        <Text style={styles.aviso}>
          Nenhum produto encontrado.
        </Text>
      }
    />
  );
}

const styles = StyleSheet.create({
  lista: {
    flex: 1,
  },

  conteudo: {
    padding: 16,
    paddingBottom: 30,
    flexGrow: 1,
  },

  linha: {
    justifyContent: 'flex-start',
    gap: 12,
    marginBottom: 12,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  imagem: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 8,
  },

  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#222',
  },

  preco: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#008000',
    marginTop: 6,
  },

  botaoComprar: {
    backgroundColor: '#008000',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 12,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  aviso: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 16,
    color: '#555',
  },
});
