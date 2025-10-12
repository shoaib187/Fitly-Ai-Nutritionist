// src/screens/onboarding/SummaryScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const SummaryScreen = ({ userData, onComplete, onBack }) => {
  const getPersonalityName = () => {
    // Simple logic to generate a personality name based on selections
    if (userData.lifestyle === 'meal_prepper' && userData.mindset === 'all_or_nothing') {
      return 'The Prepared Power-User';
    } else if (userData.lifestyle === 'spontaneous_foodie' && userData.mindset === 'healthy_hedonist') {
      return 'The Flexible Foodie';
    } else if (userData.lifestyle === 'busy_bee') {
      return 'The Efficient Eater';
    }
    return 'The Balanced Navigator';
  };

  const personalityName = getPersonalityName();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.stepText}>Step 6 of 6</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarEmoji}>🎉</Text>
          </View>
        </View>

        <Text style={styles.headline}>Welcome, {personalityName}!</Text>
        <Text style={styles.subtext}>Based on your goals and lifestyle, we've built a plan just for you. Ready to see it?</Text>

        <View style={styles.benefitsContainer}>
          <Text style={styles.benefitsTitle}>Your personalized plan includes:</Text>

          <View style={styles.benefitItem}>
            <Text style={styles.benefitEmoji}>🍽️</Text>
            <Text style={styles.benefitText}>Recipes tailored for your schedule and preferences</Text>
          </View>

          <View style={styles.benefitItem}>
            <Text style={styles.benefitEmoji}>💡</Text>
            <Text style={styles.benefitText}>Tips to conquer your specific challenges</Text>
          </View>

          <View style={styles.benefitItem}>
            <Text style={styles.benefitEmoji}>📋</Text>
            <Text style={styles.benefitText}>Smart grocery lists that make sense for you</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={onComplete}>
          <Text style={styles.buttonText}>See My Plan!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Not quite right? Edit Answers</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 16,
    color: '#48BB78',
  },
  stepText: {
    fontSize: 14,
    color: '#A0AEC0',
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#E6FFFA',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#48BB78',
  },
  avatarEmoji: {
    fontSize: 48,
  },
  headline: {
    fontSize: 32,
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
    marginBottom: 40,
  },
  benefitsContainer: {
    width: '100%',
    backgroundColor: '#F7FAFC',
    padding: 20,
    borderRadius: 12,
  },
  benefitsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 16,
    textAlign: 'center',
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  benefitEmoji: {
    fontSize: 20,
    marginRight: 12,
  },
  benefitText: {
    fontSize: 14,
    color: '#4A5568',
    flex: 1,
  },
  footer: {
    width: '100%',
  },
  button: {
    backgroundColor: '#48BB78',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  editButton: {
    alignItems: 'center',
    padding: 8,
  },
  editButtonText: {
    color: '#48BB78',
    fontSize: 16,
  },
});

export default SummaryScreen;