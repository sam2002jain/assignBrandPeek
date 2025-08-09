import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { fetchBrandDetails } from '../services/api';
import { Colors } from '../constants/Colors';

const BrandDetailScreen = ({ route }) => {
  const { brandId } = route.params;
  const [brand, setBrand] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getBrandDetails = async () => {
      const fetchedBrand = await fetchBrandDetails(brandId);
      setBrand(fetchedBrand);
      setIsLoading(false);
    };
    getBrandDetails();
  }, [brandId]);

  const following = () => {
    // Handle follow/unfollow logic here for future use
  };

  if (isLoading) {
    return (
      //for showing loading
      <LinearGradient colors={Colors.secondaryGradient} style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.button} />
      </LinearGradient>
    );
  }

  if (!brand) {
    return (
      <LinearGradient colors={Colors.secondaryGradient} style={styles.loadingContainer}>
        <Text style={styles.errorText}>Brand not found.</Text>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient colors={Colors.secondaryGradient} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content}>
          <Image source={{ uri: brand.logo }} style={styles.logo} />
          <Text style={styles.brandName}>{brand.name}</Text>
          <Text style={styles.description}>{brand.description}</Text>
          <Text style={styles.details}>{brand.details}</Text>
          <TouchableOpacity style={styles.followButton} onPress={following}>
            <Text style={styles.followButtonText}>Follow</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: Colors.textSecondary,
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  brandName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: 15,
  },
  details: {
    fontSize: 16,
    color: Colors.textPrimary,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 30,
  },
  followButton: {
    backgroundColor: Colors.button,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  followButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BrandDetailScreen;