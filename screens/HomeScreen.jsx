import { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { fetchBrands } from '../services/api';
import { Colors } from '../constants/Colors';
import BrandCard from '../components/BrandCard';

const HomeScreen = ({ navigation }) => {
  const [brands, setBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getBrands = async () => {
      const fetchedBrands = await fetchBrands();
      setBrands(fetchedBrands);
      setIsLoading(false);
    };
    getBrands();
  }, []);

  const renderBrandItem = ({ item }) => (
    <BrandCard brand={item} onPress={() => navigation.navigate('BrandDetail', { brandId: item.id })} />
  );

  return (
    <LinearGradient colors={Colors.primaryGradient} style={styles.container}>
      <SafeAreaView style={styles.content}>
        <Text style={styles.headerText}>Top Brands Today</Text>
        {isLoading ? (
          <Text style={styles.loadingText}>Loading brands...</Text>
        ) : (
          <FlatList
            data={brands}
            renderItem={renderBrandItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
          />
        )}
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    color: Colors.textPrimary,
    textAlign: 'center',
    marginBottom: 20,
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: Colors.textSecondary,
  },
  listContainer: {
    paddingHorizontal: 15,
  },
});

export default HomeScreen;