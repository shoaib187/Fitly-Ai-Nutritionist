import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Spacing, FontSize, Radius } from '../../../constants/constant/responsive/responsive';
import { colors } from '../../../constants/theme/theme';
import { Fonts } from '../../../constants/fonts/font';

const QuickActions = ({ navigation, theme }) => {
  const actions = [
    { icon: 'camera', title: 'Scan Food', subtitle: 'AI recognition', color: '#6366F1', screen: 'FoodScan' },
    { icon: 'chef-hat', title: 'Meal Plan', subtitle: 'AI generated', color: '#10B981', screen: 'MealPlan' },
    { icon: 'earth', title: 'Global Recipes', subtitle: '50+ cuisines', color: '#F59E0B', screen: 'Recipes' },
    { icon: 'brain', title: 'Mindful Eat', subtitle: '5min exercise', color: '#EC4899', screen: 'Mindful' },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.grid}>
        {actions.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.cardWrapper}
            onPress={() => navigation.navigate(item.screen)}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={[item.color, `${item.color}`]}
              style={styles.cardGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              {/* Icon Circle */}
              <View style={[styles.iconCircle, { backgroundColor: `${item.color}` }]}>
                <MaterialCommunityIcons name={item.icon} size={32} color="#fff" />
              </View>

              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginTop: Spacing.lg,
    paddingHorizontal: Spacing.md,
  },
  sectionTitle: {
    fontSize: FontSize.lg + 2,
    color: colors.titleColor,
    marginBottom: Spacing.sm,
    fontFamily: Fonts.RalewayBold
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardWrapper: {
    width: '48%',
    marginBottom: Spacing.md,
    borderRadius: Radius.md + 6,
    overflow: 'hidden',
    // elevation: 6, // shadow for Android
    // shadowColor: '#000', // shadow for iOS

    // shadowOffset: {
    //   width: 0,
    //   height: 4
    // },

    // shadowOpacity: 0.3,
    // shadowRadius: 6,
  },
  cardGradient: {
    padding: Spacing.md,
    minHeight: 100,
    justifyContent: 'flex-start',
    borderRadius: Radius.md + 6,
  },
  iconCircle: {
    width: 38,
    height: 38,
    backgroundColor: 'red',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  cardTitle: {
    fontSize: FontSize.md,
    color: '#fff',
    fontFamily: Fonts.RalewaySemiBold,
    marginBottom: 2,
  },
  cardSubtitle: {
    fontSize: FontSize.sm,
    color: 'rgba(255,255,255,0.85)',
    fontFamily: Fonts.RalewayMedium
  },
});

export default QuickActions;
