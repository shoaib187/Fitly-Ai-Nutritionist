import React from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Spacing, Radius, FontSize } from '../../../constants/constant/responsive/responsive';
import { colors } from '../../../constants/theme/theme';

const RecipeCard = ({ item }) => (
  <TouchableOpacity style={styles.recipeCard}>
    <Image source={{ uri: item.image }} style={styles.recipeImage} />

    {/* Premium Lock Icon */}
    {item.isPremium && (
      <MaterialCommunityIcons
        name="lock"
        size={18}
        color={colors.white}
        style={styles.lockIcon}
      />
    )}

    <LinearGradient
      colors={['transparent', 'rgba(0,0,0,0.8)']}
      style={styles.recipeGradient}
    >
      <View style={styles.recipeBadge}>
        <Text style={styles.recipeRegion}>{item.region}</Text>
      </View>
      <Text style={styles.recipeTitle}>{item.title}</Text>
      <View style={styles.recipeInfo}>
        <View style={styles.recipeInfoItem}>
          <Ionicons name="flame" size={12} color={colors.white} />
          <Text style={styles.recipeInfoText}>{item.calories} cal</Text>
        </View>
        <View style={styles.recipeInfoItem}>
          <Ionicons name="time" size={12} color={colors.white} />
          <Text style={styles.recipeInfoText}>{item.time} min</Text>
        </View>
        <View style={styles.recipeInfoItem}>
          <Ionicons name="speedometer" size={12} color={colors.white} />
          <Text style={styles.recipeInfoText}>{item.difficulty}</Text>
        </View>
      </View>
    </LinearGradient>
  </TouchableOpacity>
);

export default RecipeCard;

const styles = StyleSheet.create({
  recipeCard: {
    width: '48%',
    height: 180,
    borderRadius: Radius.lg,
    marginBottom: Spacing.md,
    overflow: 'hidden',
  },
  recipeImage: {
    width: '100%',
    height: '100%',
  },
  recipeGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: Spacing.sm,
  },
  recipeBadge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.buttonColor,
    paddingHorizontal: Spacing.xs,
    paddingVertical: Spacing.xs / 2,
    borderRadius: Radius.sm,
    marginBottom: Spacing.xs,
  },
  recipeRegion: {
    fontSize: FontSize.xs,
    color: colors.white,
    fontWeight: '600',
  },
  recipeTitle: {
    fontSize: FontSize.sm + 2,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: Spacing.xs,
  },
  recipeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recipeInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recipeInfoText: {
    fontSize: FontSize.xs,
    color: colors.white,
    marginLeft: Spacing.xs / 2,
  },
  lockIcon: {
    position: 'absolute',
    top: Spacing.xs,
    right: Spacing.xs,
    zIndex: 1,
  },
});
