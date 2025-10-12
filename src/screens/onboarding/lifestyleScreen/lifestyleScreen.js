// src/screens/onboarding/LifestyleScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const LifestyleScreen = ({ onNext, onBack, selectedLifestyle, onSelectLifestyle }) => {
  const lifestyles = [
    { id: 'meal_prepper', emoji: '🥘', title: 'The Meal Prepper', description: 'I love a good plan. I cook on Sundays and have my lunches ready to go.' },
    { id: 'spontaneous_foodie', emoji: '🎉', title: 'The Spontaneous Foodie', description: 'I hate routine! I decide what I want for dinner an hour before I eat.' },
    { id: 'busy_bee', emoji: '🐝', title: 'The Busy Bee', description: 'I need food to be FAST and easy. If it takes more than 15 minutes, I\'m out.' },
    { id: 'curious_cook', emoji: '👨‍🍳', title: 'The Curious Cook', description: 'I love trying new recipes and don\'t mind spending time in the kitchen.' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.stepText}>Step 2 of 6</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.headline}>Which sounds most like you?</Text>

        <ScrollView style={styles.optionsContainer} showsVerticalScrollIndicator={false}>
          {lifestyles.map((lifestyle) => (
            <TouchableOpacity
              key={lifestyle.id}
              style={[
                styles.optionCard,
                selectedLifestyle === lifestyle.id && styles.optionCardSelected,
              ]}
              onPress={() => onSelectLifestyle(lifestyle.id)}
            >
              <Text style={styles.emoji}>{lifestyle.emoji}</Text>
              <View style={styles.optionText}>
                <Text style={styles.optionTitle}>{lifestyle.title}</Text>
                <Text style={styles.optionDescription}>{lifestyle.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <TouchableOpacity
        style={[styles.button, !selectedLifestyle && styles.buttonDisabled]}
        onPress={onNext}
        disabled={!selectedLifestyle}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

// Reuse the styles from GoalScreen or create similar ones
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
  },
  headline: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
    color: '#2D3748',
  },
  optionsContainer: {
    flex: 1,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7FAFC',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  optionCardSelected: {
    borderColor: '#48BB78',
    backgroundColor: '#F0FFF4',
  },
  emoji: {
    fontSize: 24,
    marginRight: 16,
  },
  optionText: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 4,
  },
  optionDescription: {
    fontSize: 14,
    color: '#718096',
  },
  button: {
    backgroundColor: '#48BB78',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonDisabled: {
    backgroundColor: '#CBD5E0',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default LifestyleScreen;