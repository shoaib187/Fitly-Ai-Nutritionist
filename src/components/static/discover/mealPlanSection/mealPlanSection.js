import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../../constants/theme/theme';
import { Spacing, FontSize, Radius } from '../../../constants/constant/responsive/responsive';
import TitleSection from '../../../common/titleSection/titleSection';
import { Fonts } from '../../../constants/fonts/font';

const mealPlans = [
  {
    id: 1,
    title: 'Mediterranean Week',
    subtitle: '7-day plan • 12 recipes',
    description: 'Heart-healthy meals inspired by Greek and Italian cuisine',
    colors: ['#10B981', '#059669'],
  },
  {
    id: 2,
    title: 'Asian Flavors',
    subtitle: '5-day plan • 8 recipes',
    description: 'Quick & flavorful dishes from Japan, Thailand, and Vietnam',
    colors: ['#F59E0B', '#D97706'],
  },
];

const MealPlanSection = () => (
  <View style={styles.section}>
    {/* Header */}
    <TitleSection title={"AI-Powered Meal Plans"} iconName='chevron-forward' />
    {/* Horizontal Scroll */}
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: Spacing.md }}>
      {mealPlans?.map((plan, index) => (
        <TouchableOpacity key={plan.id} style={[styles.mealPlanCard, { marginRight: mealPlans?.length - 1 !== index ? Spacing.md : 0 }]} activeOpacity={0.85}>
          <LinearGradient colors={plan.colors} style={styles.mealPlanGradient}>
            <Text style={styles.mealPlanTitle}>{plan.title}</Text>
            <Text style={styles.mealPlanSubtitle}>{plan.subtitle}</Text>
            <Text style={styles.mealPlanDescription}>{plan.description}</Text>
          </LinearGradient>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);

export default MealPlanSection;

const styles = StyleSheet.create({
  section: {
    marginTop: Spacing.lg,
  },

  mealPlanCard: {
    width: 280,
    height: 140,
    borderRadius: Radius.lg,
    marginRight: Spacing.md,
    overflow: 'hidden',
  },
  mealPlanGradient: {
    flex: 1,
    padding: Spacing.md,
    justifyContent: 'space-between',
  },
  mealPlanTitle: {
    fontSize: FontSize.md + 2,
    color: colors.white,
    fontFamily: Fonts.RalewaySemiBold
  },
  mealPlanSubtitle: {
    fontSize: FontSize.sm + 1,
    color: 'rgba(255,255,255,0.8)',
    fontFamily: Fonts.RalewayMedium
  },
  mealPlanDescription: {
    fontSize: FontSize.sm,
    color: 'rgba(255,255,255,0.9)',
    marginTop: Spacing.xs,
    fontFamily: Fonts.RalewayRegular
  },
});
