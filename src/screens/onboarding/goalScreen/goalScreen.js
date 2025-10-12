// src/screens/onboarding/GoalScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const GoalScreen = ({ onNext, onBack, selectedGoal, onSelectGoal }) => {
  const goals = [
    { id: 'lose_weight', emoji: '🏃‍♂️', title: 'Lose Weight', description: 'Feel lighter and more confident' },
    { id: 'build_muscle', emoji: '💪', title: 'Build Muscle', description: 'Gain strength and definition' },
    { id: 'eat_healthier', emoji: '🌱', title: 'Eat Healthier', description: 'Boost energy and feel better overall' },
    { id: 'manage_diet', emoji: '🍽️', title: 'Manage a Diet', description: 'Follow specific dietary plans' },
    { id: 'identify_sensitivities', emoji: '🔍', title: 'Identify Food Sensitivities', description: 'Understand how food affects you' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.stepText}>Step 1 of 6</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.headline}>What's your main mission?</Text>

        <ScrollView style={styles.optionsContainer} showsVerticalScrollIndicator={false}>
          {goals.map((goal) => (
            <TouchableOpacity
              key={goal.id}
              style={[
                styles.optionCard,
                selectedGoal === goal.id && styles.optionCardSelected,
              ]}
              onPress={() => onSelectGoal(goal.id)}
            >
              <Text style={styles.emoji}>{goal.emoji}</Text>
              <View style={styles.optionText}>
                <Text style={styles.optionTitle}>{goal.title}</Text>
                <Text style={styles.optionDescription}>{goal.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <TouchableOpacity
        style={[styles.button, !selectedGoal && styles.buttonDisabled]}
        onPress={onNext}
        disabled={!selectedGoal}
      >
        <Text style={styles.buttonText}>Continue</Text>
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

export default GoalScreen;