import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../../../constants/theme/theme';
import { FontSize, Radius, Spacing } from '../../../constants/constant/responsive/responsive';
import { Fonts } from '../../../constants/fonts/font';

export default function MoodPill({ emoji, label, color, isSelected, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.moodPill, isSelected && { borderColor: color, borderWidth: 2 }]}
      onPress={onPress}
    >
      <Text style={styles.moodEmoji}>{emoji}</Text>
      <Text style={[styles.moodLabel, isSelected && { color }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  moodPill: {
    width: '30%',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: Spacing.md,
    borderRadius: Radius.lg,
    marginBottom: 12,
  },
  moodEmoji: {
    fontSize: 24,
    marginBottom: 8
  },
  moodLabel: {
    fontSize: FontSize.base,
    color: '#94A3B8',
    fontFamily: Fonts.RalewayMedium
  },
});
