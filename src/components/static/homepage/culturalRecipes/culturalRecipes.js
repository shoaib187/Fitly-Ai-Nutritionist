import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../../constants/theme/theme';
import { FontSize, Layout, Radius, Spacing } from '../../../constants/constant/responsive/responsive';
import { Fonts } from '../../../constants/fonts/font';

const CulturalRecipes = ({ theme }) => {
  const recipes = [
    { title: 'Japanese Bento Bowl', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300', region: 'Japan', calories: 420 },
    { title: 'Mexican Quinoa Bowl', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300', region: 'Mexico', calories: 380 },
    { title: 'Mediterranean Platter', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300', region: 'Greece', calories: 320 },
  ];

  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <Text style={styles.title}>Global Taste Journey</Text>
        <TouchableOpacity>
          <Text style={styles.link}>Explore</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: Spacing.md }}>
        {recipes.map((item, index) => (
          <TouchableOpacity activeOpacity={.7} key={index} style={[styles.card, { marginRight: recipes?.length - 1 === index ? 0 : Spacing.md }]}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} style={styles.gradient}>
              <Text style={styles.recipeTitle}>{item.title}</Text>
              <Text style={styles.calories}>{item.calories} cal</Text>
            </LinearGradient>
            <View style={styles.badge}>
              <Text style={styles.region}>{item.region}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginTop: Spacing.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
    paddingHorizontal: Spacing.md
  },
  title: {
    fontSize: FontSize.md,
    fontFamily: Fonts.RalewayBold,
    color: colors.headingColor
  },
  link: {
    fontSize: FontSize.base,
    color: colors.buttonColor,
    fontFamily: Fonts.RalewayMedium
  },
  card: {
    width: Layout.halfWidth,
    height: Layout.halfWidth / 1.5,
    borderRadius: Radius.lg,
    // marginRight: Spacing.md,
    overflow: 'hidden',
    position: 'relative',
  },
  image: { width: '100%', height: '100%' },
  gradient: {
    position: 'absolute',
    bottom: 0, left: 0, right: 0, padding: Spacing.sm + 2
  },
  badge: {
    backgroundColor: colors.buttonColor,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: Radius.xl,
    marginBottom: 8,
    position: 'absolute',
    top: 6, right: 6
  },
  region: {
    fontSize: FontSize.xs,
    color: colors.white,
    fontFamily: Fonts.RalewayMedium
  },
  recipeTitle: {
    fontSize: FontSize.sm,
    color: '#fff',
    marginBottom: 2,
  },
  calories: {
    fontSize: FontSize.base,
    color: 'rgba(255,255,255,0.8)',
    fontFamily: Fonts.RalewayMedium
  },
});

export default CulturalRecipes;
