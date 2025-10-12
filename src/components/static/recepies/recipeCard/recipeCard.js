import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Animated, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FontSize, Radius, Spacing } from '../../../constants/constant/responsive/responsive';
import { Colors, colors } from '../../../constants/theme/theme';
import { Fonts } from '../../../constants/fonts/font';

const RecipeCard = ({ item, index, scrollY, setSelectedRecipe, onPress }) => {
  return (
    <Animated.View style={styles.recipeCard}>
      <TouchableOpacity activeOpacity={0.9}
        onPress={onPress}
      // onPress={() => setSelectedRecipe(item)}
      >
        <Image source={{ uri: item.image }} style={styles.recipeImage} />
        {/* <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} style={styles.imageGradient} /> */}

        {/* Favorite Button */}
        <TouchableOpacity style={styles.favoriteButton}>
          <Ionicons
            name={item.isFavorite ? "heart" : "heart-outline"}
            size={24}
            color={item.isFavorite ? colors.buttonColor : "#fff"}
          />
        </TouchableOpacity>

        {/* Quick Info Overlay */}
        <View style={styles.quickInfo}>
          <View style={styles.timeBadge}>
            <Ionicons name="time-outline" size={12} color="#fff" />
            <Text style={styles.timeText}>{item.time}m</Text>
          </View>
          <View style={styles.difficultyBadge}>
            <Text style={styles.difficultyText}>{item.difficulty}</Text>
          </View>
        </View>

        {/* Recipe Info */}
        <View style={styles.recipeInfo}>
          <Text style={styles.recipeTitle}>{item.title}</Text>

          {/* Nutrition Info */}
          <View style={styles.nutritionInfo}>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionValue}>{item.calories}</Text>
              <Text style={styles.nutritionLabel}>cal</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionValue}>{item.protein}g</Text>
              <Text style={styles.nutritionLabel}>protein</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionValue}>{item.carbs}g</Text>
              <Text style={styles.nutritionLabel}>carbs</Text>
            </View>
          </View>

          {/* Rating and Tags */}
          <View style={styles.recipeMeta}>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={14} color="#FFD700" />
              <Text style={styles.ratingText}>{item.rating}</Text>
              <Text style={styles.reviewsText}>({item.reviews})</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tagsContainer}>
              {item.tags.map((tag, tagIndex) => (
                <View key={tagIndex} style={styles.tag}>
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  recipeCard: {
    marginHorizontal: Spacing.md,
    marginBottom: Spacing.md,
    borderRadius: Radius.lg,
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.light.borderColor,
    elevation: 10,
    shadowColor: colors.backdrop
  },
  recipeImage: { width: '100%', height: 200 },
  imageGradient: { position: 'absolute', left: 0, right: 0, bottom: 0, height: 120 },
  favoriteButton: {
    position: 'absolute', top: 12,
    right: 12, backgroundColor: `#00000010`, borderRadius: 20, padding: 6
  },
  quickInfo: { position: 'absolute', top: 12, left: 12, flexDirection: 'row', gap: 8 },
  timeBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.7)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8, },
  timeText: { color: '#fff', fontSize: 12, fontFamily: Fonts.RalewayMedium, marginLeft: 4 },
  difficultyBadge: { backgroundColor: 'rgba(76, 175, 80, 0.9)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 },
  difficultyText: { color: '#fff', fontSize: 12, fontFamily: Fonts.RalewayMedium },
  recipeInfo: { padding: 12 },
  recipeTitle: {
    fontSize: FontSize.md,
    fontFamily: Fonts.RalewayMedium, color: '#333', marginBottom: 12
  },
  nutritionInfo: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: Spacing.md, paddingVertical: Spacing.md, backgroundColor: "rgba(105,157,126,.1)", borderRadius: 12 },
  nutritionItem: { alignItems: 'center' },
  nutritionValue: { fontSize: FontSize.md, fontFamily: Fonts.RalewayMedium, color: colors.buttonColor },
  nutritionLabel: { fontSize: FontSize.base, color: '#666', marginTop: 2, textTransform: 'capitalize', fontFamily: Fonts.RalewayMedium },
  recipeMeta: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  ratingContainer: { flexDirection: 'row', alignItems: 'center', },
  ratingText: { fontSize: FontSize.base, fontFamily: Fonts.RalewayMedium, color: '#333', marginLeft: 4, marginRight: 2 },
  reviewsText: { fontSize: 12, color: '#666', fontFamily: Fonts.RalewayMedium },
  tagsContainer: { flex: 1, marginLeft: 12 },
  tag: { backgroundColor: '#E8F5E8', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6, marginLeft: 6 },
  tagText: { fontSize: 10, color: '#4CAF50', fontFamily: Fonts.RalewayMedium },
});

export default RecipeCard;
