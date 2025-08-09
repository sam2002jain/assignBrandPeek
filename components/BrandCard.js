import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';

const BrandCard = ({ brand, onPress }) => {
  console.log('Data received by BrandCard:', brand);
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: brand.logo }} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={styles.brandName}>{brand.name}</Text>
        <Text style={styles.description}>{brand.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  brandName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textPrimary,
  },
  description: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 4,
  },
});

export default BrandCard;