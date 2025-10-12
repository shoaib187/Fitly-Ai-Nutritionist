// src/screens/onboarding/StruggleScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const StruggleScreen = ({ onNext, onBack, selectedStruggle, onSelectStruggle }) => {
  const struggles = [
    { id: 'lack_of_time', emoji: '⏰', title: 'Lack of Time', description: 'I\'m too busy to plan and cook healthy meals.' },
    { id: 'grocery_confusion', emoji: '🛒', title: 'Grocery Confusion', description: 'I don\'t even know what to buy at the store.' },
    { id: 'decision_overload', emoji: '🤔', title: 'Decision Overload', description: 'There\'s too much info. I don\'t know what\'s right for ME.' },
    { id: 'cravings', emoji: '🍟', title: 'Cravings', description: 'I can\'t resist unhealthy snacks and takeout.' },
    { id: 'social_situations', emoji: '🍽️', title: 'Social Situations', description: 'It\'s hard to stick to my goals when eating with friends.' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.stepText}>Step 5 of 6</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.headline}>What's your #1 challenge?</Text>

        <ScrollView style={styles.optionsContainer} showsVerticalScrollIndicator={false}>
          {struggles.map((struggle) => (
            <TouchableOpacity
              key={struggle.id}
              style={[
                styles.optionCard,
                selectedStruggle === struggle.id && styles.optionCardSelected,
              ]}
              onPress={() => onSelectStruggle(struggle.id)}
            >
              <Text style={styles.emoji}>{struggle.emoji}</Text>
              <View style={styles.optionText}>
                <Text style={styles.optionTitle}>{struggle.title}</Text>
                <Text style={styles.optionDescription}>{struggle.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <TouchableOpacity
        style={[styles.button, !selectedStruggle && styles.buttonDisabled]}
        onPress={onNext}
        disabled={!selectedStruggle}
      >
        <Text style={styles.buttonText}>Almost There!</Text>
      </TouchableOpacity>
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
export default StruggleScreen;