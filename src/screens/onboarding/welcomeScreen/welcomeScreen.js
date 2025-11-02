// src/screens/onboarding/WelcomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Spacing } from '../../../components/constants/constant/responsive/responsive';

const WelcomeScreen = ({ onNext }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400' }}
          style={styles.image}
        />
        <Text style={styles.headline}>Find Your Food Personality</Text>
        <Text style={styles.subtext}>
          Let's build a nutrition plan that actually fits your life, likes, and goals.
          No more one-size-fits-all rules.
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={onNext}>
        <Text style={styles.buttonText}>Let's Go!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.lg,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 40,
  },
  headline: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#2D3748',
  },
  subtext: {
    fontSize: 16,
    textAlign: 'center',
    color: '#718096',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#48BB78',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default WelcomeScreen;