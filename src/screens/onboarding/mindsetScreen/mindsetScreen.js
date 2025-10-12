// src/screens/onboarding/MindsetScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const MindsetScreen = ({ onNext, onBack, selectedMindset, onSelectMindset }) => {
  const mindsets = [
    { id: 'healthy_hedonist', emoji: '😋', title: 'The Healthy Hedonist', description: 'I won\'t give up flavor. I want healthy food that feels indulgent.' },
    { id: 'all_or_nothing', emoji: '⚡', title: 'The All-or-Nothing', description: 'I need clear rules. If I slip up, I feel like the whole day is ruined.' },
    { id: 'balanced_moderator', emoji: '⚖️', title: 'The Balanced Moderator', description: 'I believe in the 80/20 rule. Mostly healthy, with room for treats.' },
    { id: 'restrictive_dieter', emoji: '📋', title: 'The Restrictive Dieter', description: 'I have specific rules I follow (Keto, Vegan, etc.).' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.stepText}>Step 3 of 6</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.headline}>What's your food philosophy?</Text>

        <ScrollView style={styles.optionsContainer} showsVerticalScrollIndicator={false}>
          {mindsets.map((mindset) => (
            <TouchableOpacity
              key={mindset.id}
              style={[
                styles.optionCard,
                selectedMindset === mindset.id && styles.optionCardSelected,
              ]}
              onPress={() => onSelectMindset(mindset.id)}
            >
              <Text style={styles.emoji}>{mindset.emoji}</Text>
              <View style={styles.optionText}>
                <Text style={styles.optionTitle}>{mindset.title}</Text>
                <Text style={styles.optionDescription}>{mindset.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <TouchableOpacity
        style={[styles.button, !selectedMindset && styles.buttonDisabled]}
        onPress={onNext}
        disabled={!selectedMindset}
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

export default MindsetScreen;