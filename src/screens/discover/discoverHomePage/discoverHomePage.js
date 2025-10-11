// screens/DiscoverScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function DiscoverHomePage({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: 'earth' },
    { id: 'asian', name: 'Asian', icon: 'noodles' },
    { id: 'mediterranean', name: 'Mediterranean', icon: 'food-variant' },
    { id: 'latin', name: 'Latin', icon: 'pepper' },
    { id: 'middleEastern', name: 'Middle East', icon: 'food-kosher' },
    { id: 'african', name: 'African', icon: 'food-drumstick' },
  ];

  const featuredRecipes = [
    {
      id: '1',
      title: 'Japanese Bento Bowl',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300',
      region: 'Japan',
      calories: 420,
      time: 25,
      difficulty: 'Easy',
    },
    {
      id: '2',
      title: 'Mexican Quinoa Bowl',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300',
      region: 'Mexico',
      calories: 380,
      time: 20,
      difficulty: 'Easy',
    },
    {
      id: '3',
      title: 'Greek Salad Platter',
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300',
      region: 'Greece',
      calories: 320,
      time: 15,
      difficulty: 'Easy',
    },
    {
      id: '4',
      title: 'Indian Curry Bowl',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300',
      region: 'India',
      calories: 450,
      time: 35,
      difficulty: 'Medium',
    },
  ];

  const RecipeCard = ({ item }) => (
    <TouchableOpacity style={styles.recipeCard}>
      <Image source={{ uri: item.image }} style={styles.recipeImage} />
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
            <Ionicons name="flame" size={12} color="#fff" />
            <Text style={styles.recipeInfoText}>{item.calories} cal</Text>
          </View>
          <View style={styles.recipeInfoItem}>
            <Ionicons name="time" size={12} color="#fff" />
            <Text style={styles.recipeInfoText}>{item.time} min</Text>
          </View>
          <View style={styles.recipeInfoItem}>
            <Ionicons name="speedometer" size={12} color="#fff" />
            <Text style={styles.recipeInfoText}>{item.difficulty}</Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Discover World Cuisines</Text>
          <Text style={styles.subtitle}>Explore recipes from 50+ cultures</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#64748B" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search recipes, ingredients..."
            placeholderTextColor="#64748B"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryPill,
                  activeCategory === category.id && styles.categoryPillActive
                ]}
                onPress={() => setActiveCategory(category.id)}
              >
                <MaterialCommunityIcons
                  name={category.icon}
                  size={20}
                  color={activeCategory === category.id ? '#6366F1' : '#64748B'}
                />
                <Text style={[
                  styles.categoryText,
                  activeCategory === category.id && styles.categoryTextActive
                ]}>
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* AI Meal Plans */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>AI-Powered Meal Plans</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.mealPlanCard}>
              <LinearGradient
                colors={['#10B981', '#059669']}
                style={styles.mealPlanGradient}
              >
                <Text style={styles.mealPlanTitle}>Mediterranean Week</Text>
                <Text style={styles.mealPlanSubtitle}>7-day plan • 12 recipes</Text>
                <Text style={styles.mealPlanDescription}>
                  Heart-healthy meals inspired by Greek and Italian cuisine
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mealPlanCard}>
              <LinearGradient
                colors={['#F59E0B', '#D97706']}
                style={styles.mealPlanGradient}
              >
                <Text style={styles.mealPlanTitle}>Asian Flavors</Text>
                <Text style={styles.mealPlanSubtitle}>5-day plan • 8 recipes</Text>
                <Text style={styles.mealPlanDescription}>
                  Quick & flavorful dishes from Japan, Thailand, and Vietnam
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Featured Recipes */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Recipes</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={featuredRecipes}
            renderItem={({ item }) => <RecipeCard item={item} />}
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle={styles.recipesGrid}
            scrollEnabled={false}
          />
        </View>

        {/* Cultural Challenges */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cultural Challenges</Text>
          <TouchableOpacity style={styles.challengeCard}>
            <LinearGradient
              colors={['#6366F1', '#4F46E5']}
              style={styles.challengeGradient}
            >
              <View style={styles.challengeBadge}>
                <Text style={styles.challengeBadgeText}>New</Text>
              </View>
              <Text style={styles.challengeTitle}>7 Days of Mediterranean</Text>
              <Text style={styles.challengeDescription}>
                Discover the health benefits of Mediterranean cuisine
              </Text>
              <View style={styles.challengeStats}>
                <Text style={styles.challengeStat}>2.4k participants</Text>
                <Text style={styles.challengeStat}>Starts tomorrow</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#94A3B8',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    marginHorizontal: 24,
    marginVertical: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    color: '#F8FAFC',
    fontSize: 16,
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F8FAFC',
  },
  seeAllText: {
    fontSize: 14,
    color: '#6366F1',
    fontWeight: '600',
  },
  categoriesContainer: {
    flexDirection: 'row',
  },
  categoryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
    marginRight: 12,
  },
  categoryPillActive: {
    backgroundColor: 'rgba(99, 102, 241, 0.2)',
    borderColor: '#6366F1',
    borderWidth: 1,
  },
  categoryText: {
    color: '#64748B',
    fontWeight: '600',
    marginLeft: 8,
  },
  categoryTextActive: {
    color: '#6366F1',
  },
  mealPlanCard: {
    width: 280,
    height: 140,
    borderRadius: 16,
    marginRight: 16,
    overflow: 'hidden',
  },
  mealPlanGradient: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  mealPlanTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  mealPlanSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
  },
  mealPlanDescription: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.9)',
    marginTop: 8,
  },
  recipesGrid: {
    justifyContent: 'space-between',
  },
  recipeCard: {
    width: '48%',
    height: 180,
    borderRadius: 16,
    marginBottom: 16,
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
    padding: 12,
  },
  recipeBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#6366F1',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 8,
  },
  recipeRegion: {
    fontSize: 10,
    color: '#fff',
    fontWeight: '600',
  },
  recipeTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
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
    fontSize: 10,
    color: '#fff',
    marginLeft: 4,
  },
  challengeCard: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  challengeGradient: {
    padding: 20,
  },
  challengeBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFD700',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 12,
  },
  challengeBadgeText: {
    fontSize: 10,
    color: '#000',
    fontWeight: 'bold',
  },
  challengeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  challengeDescription: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    marginBottom: 16,
  },
  challengeStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  challengeStat: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
  },
});
