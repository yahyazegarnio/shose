
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import products from './src/data/products';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Ma boutique de chaussures
      </Text>

      <FlatList
        key="two-columns"
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 35,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 15,
  },
  itemContainer: {
    width: '50%',
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});
