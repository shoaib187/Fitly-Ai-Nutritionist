import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontSize, Radius, Spacing } from '../../../constants/constant/responsive/responsive';
import { Fonts } from '../../../constants/fonts/font';

const CategoryChip = ({ item, activeCategory, setActiveCategory }) => (
  <TouchableOpacity
    style={[
      styles.categoryChip,
      activeCategory === item.name && styles.categoryChipActive
    ]}
    onPress={() => setActiveCategory(item.name)}
  >
    <Text style={styles.categoryIcon}>{item.icon}</Text>
    <Text style={[
      styles.categoryText,
      activeCategory === item.name && styles.categoryTextActive
    ]}>
      {item.name}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: Radius.lg * 2,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  categoryChipActive: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  categoryIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  categoryText: {
    fontSize: FontSize.base,
    fontFamily: Fonts.RalewayMedium,
    color: '#666',
  },
  categoryTextActive: {
    color: '#fff',
  },
});

export default CategoryChip;
