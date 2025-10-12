import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../../constants/theme/theme';
import { Spacing, Radius, FontSize } from '../../../constants/constant/responsive/responsive';
import { Fonts } from '../../../constants/fonts/font';

const categories = [
  { id: 'all', name: 'All', icon: 'earth' },
  { id: 'asian', name: 'Asian', icon: 'noodles' },
  { id: 'mediterranean', name: 'Mediterranean', icon: 'food-variant' },
  { id: 'latin', name: 'Latin', icon: 'pepper' },
  { id: 'middleEastern', name: 'Middle East', icon: 'food-kosher' },
  { id: 'african', name: 'African', icon: 'food-drumstick' },
];

const CategoryList = ({ activeCategory, setActiveCategory }) => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.categoriesContainer}
  >
    {categories.map((category) => (
      <TouchableOpacity
        key={category.id}
        style={[
          styles.categoryPill,
          activeCategory === category.id && styles.categoryPillActive,
        ]}
        onPress={() => setActiveCategory(category.id)}
        activeOpacity={0.85}
      >
        <MaterialCommunityIcons
          name={category.icon}
          size={FontSize.md + 2}
          color={
            activeCategory === category.id
              ? colors.white
              : colors.textColor
          }
        />
        <Text
          style={[
            styles.categoryText,
            activeCategory === category.id && styles.categoryTextActive,
          ]}
        >
          {category.name}
        </Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
);

export default CategoryList;

const styles = StyleSheet.create({
  categoriesContainer: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
  },
  categoryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.white,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: Radius.xl,
    marginRight: Spacing.sm,
    shadowColor: colors.textColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  categoryPillActive: {
    backgroundColor: colors.buttonColor,
    borderColor: colors.buttonColor,
    shadowOpacity: 0.25,
  },
  categoryText: {
    color: colors.textColor,
    marginLeft: Spacing.xs,
    fontSize: FontSize.md,
    fontFamily: Fonts.RalewayMedium
  },
  categoryTextActive: {
    color: colors.white,
  },
});
