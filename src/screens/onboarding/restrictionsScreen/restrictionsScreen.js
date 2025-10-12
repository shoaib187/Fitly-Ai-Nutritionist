// src/screens/onboarding/RestrictionsScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const RestrictionsScreen = ({ onNext, onBack, selectedRestrictions, onSelectRestrictions }) => {
  const restrictions = [
    { id: 'gluten', emoji: '🥖', name: 'Gluten' },
    { id: 'dairy', emoji: '🥛', name: 'Dairy' },
    { id: 'eggs', emoji: '🥚', name: 'Eggs' },
    { id: 'nuts', emoji: '🌰', name: 'Nuts' },
    { id: 'shellfish', emoji: '🐟', name: 'Shellfish' },
    { id: 'vegan', emoji: '🌱', name: 'Vegan' },
    { id: 'pork', emoji: '🐷', name: 'Pork' },
  ];

  const toggleRestriction = (restrictionId) => {
    const newRestrictions = selectedRestrictions.includes(restrictionId)
      ? selectedRestrictions.filter(id => id !== restrictionId)
      : [...selectedRestrictions, restrictionId];

    onSelectRestrictions(newRestrictions);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.stepText}>Step 4 of 6</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.headline}>Any foods to avoid?</Text>
        <Text style={styles.subtext}>This helps us filter every recipe perfectly for you.</Text>

        <ScrollView style={styles.optionsContainer} showsVerticalScrollIndicator={false}>
          {restrictions.map((restriction) => (
            <TouchableOpacity
              key={restriction.id}
              style={[
                styles.restrictionCard,
                selectedRestrictions.includes(restriction.id) && styles.restrictionCardSelected,
              ]}
              onPress={() => toggleRestriction(restriction.id)}
            >
              <Text style={styles.emoji}>{restriction.emoji}</Text>
              <Text style={styles.restrictionName}>{restriction.name}</Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity
            style={[
              styles.restrictionCard,
              selectedRestrictions.length === 0 && styles.restrictionCardSelected,
            ]}
            onPress={() => onSelectRestrictions([])}
          >
            <Text style={styles.emoji}>✅</Text>
            <Text style={styles.restrictionName}>I have no restrictions</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={onNext}
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
    marginBottom: 8,
    color: '#2D3748',
  },
  subtext: {
    fontSize: 16,
    textAlign: 'center',
    color: '#718096',
    marginBottom: 32,
  },
  optionsContainer: {
    flex: 1,
  },
  restrictionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7FAFC',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  restrictionCardSelected: {
    borderColor: '#48BB78',
    backgroundColor: '#F0FFF4',
  },
  emoji: {
    fontSize: 24,
    marginRight: 16,
  },
  restrictionName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
  },
  button: {
    backgroundColor: '#48BB78',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default RestrictionsScreen;