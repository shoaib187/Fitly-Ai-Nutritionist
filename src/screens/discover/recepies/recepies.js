const categories = [
  { id: '1', name: 'All', icon: '🍳' },
  { id: '2', name: 'Breakfast', icon: '🥞' },
  { id: '3', name: 'Lunch', icon: '🥗' },
  { id: '4', name: 'Dinner', icon: '🍝' },
  { id: '5', name: 'Snacks', icon: '🍎' },
  { id: '6', name: 'Smoothies', icon: '🥤' },
  { id: '7', name: 'Vegetarian', icon: '🥬' },
  { id: '8', name: 'High-Protein', icon: '💪' },
  { id: '9', name: 'Low-Carb', icon: '🥑' },
];

// Sample Recipes Data
const recipes = [
  {
    id: '1',
    title: 'Avocado Toast with Poached Eggs',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400',
    calories: 320,
    protein: 18,
    carbs: 25,
    fat: 18,
    time: 15,
    difficulty: 'Easy',
    category: 'Breakfast',
    rating: 4.8,
    reviews: 124,
    ingredients: [
      '2 slices whole grain bread',
      '1 ripe avocado',
      '2 eggs',
      '1 tbsp lemon juice',
      'Salt and pepper to taste',
      'Red pepper flakes (optional)'
    ],
    instructions: [
      'Toast bread until golden and crisp',
      'Mash avocado with lemon juice, salt, and pepper',
      'Poach eggs to your preference',
      'Spread avocado mixture on toast',
      'Top with poached eggs and seasoning'
    ],
    isFavorite: true,
    tags: ['Vegetarian', 'High-Protein', 'Quick']
  },
  {
    id: '2',
    title: 'Quinoa Buddha Bowl',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400',
    calories: 420,
    protein: 22,
    carbs: 58,
    fat: 12,
    time: 25,
    difficulty: 'Medium',
    category: 'Lunch',
    rating: 4.6,
    reviews: 89,
    ingredients: [
      '1 cup cooked quinoa',
      '1 cup chickpeas',
      '2 cups mixed greens',
      '1 avocado',
      '1/2 cup cherry tomatoes',
      '2 tbsp tahini dressing'
    ],
    instructions: [
      'Cook quinoa according to package instructions',
      'Roast chickpeas with spices until crispy',
      'Chop vegetables and prepare dressing',
      'Arrange all ingredients in a bowl',
      'Drizzle with tahini dressing'
    ],
    isFavorite: false,
    tags: ['Vegetarian', 'High-Fiber', 'Gluten-Free']
  },
  {
    id: '3',
    title: 'Grilled Salmon with Asparagus',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400',
    calories: 380,
    protein: 35,
    carbs: 12,
    fat: 22,
    time: 20,
    difficulty: 'Easy',
    category: 'Dinner',
    rating: 4.9,
    reviews: 156,
    ingredients: [
      '2 salmon fillets (6oz each)',
      '1 bunch asparagus',
      '2 tbsp olive oil',
      '2 cloves garlic',
      '1 lemon',
      'Fresh dill'
    ],
    instructions: [
      'Preheat grill to medium-high heat',
      'Season salmon with salt, pepper, and olive oil',
      'Grill salmon for 4-6 minutes per side',
      'Grill asparagus until tender-crisp',
      'Serve with lemon wedges and fresh dill'
    ],
    isFavorite: true,
    tags: ['High-Protein', 'Low-Carb', 'Omega-3']
  },
  {
    id: '4',
    title: 'Berry Protein Smoothie',
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400',
    calories: 280,
    protein: 25,
    carbs: 32,
    fat: 6,
    time: 5,
    difficulty: 'Easy',
    category: 'Smoothies',
    rating: 4.7,
    reviews: 203,
    ingredients: [
      '1 cup mixed berries',
      '1 scoop vanilla protein powder',
      '1 cup almond milk',
      '1/2 banana',
      '1 tbsp chia seeds',
      'Ice cubes'
    ],
    instructions: [
      'Add all ingredients to blender',
      'Blend until smooth and creamy',
      'Add more liquid if needed',
      'Pour into glass and enjoy immediately'
    ],
    isFavorite: false,
    tags: ['High-Protein', 'Quick', 'Antioxidants']
  },
  {
    id: '5',
    title: 'Mediterranean Chicken Bowl',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400',
    calories: 450,
    protein: 38,
    carbs: 35,
    fat: 18,
    time: 30,
    difficulty: 'Medium',
    category: 'Lunch',
    rating: 4.8,
    reviews: 167,
    ingredients: [
      '1 chicken breast',
      '1 cup cooked couscous',
      '1/2 cup cucumber',
      '1/4 cup feta cheese',
      '2 tbsp tzatziki sauce',
      'Kalamata olives'
    ],
    instructions: [
      'Grill chicken breast until cooked through',
      'Prepare couscous according to package',
      'Chop vegetables and assemble bowl',
      'Top with feta cheese and olives',
      'Drizzle with tzatziki sauce'
    ],
    isFavorite: true,
    tags: ['High-Protein', 'Mediterranean', 'Balanced']
  },
  {
    id: '6',
    title: 'Vegan Chocolate Avocado Mousse',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400',
    calories: 210,
    protein: 8,
    carbs: 18,
    fat: 14,
    time: 10,
    difficulty: 'Easy',
    category: 'Snacks',
    rating: 4.5,
    reviews: 98,
    ingredients: [
      '2 ripe avocados',
      '1/4 cup cocoa powder',
      '1/4 cup maple syrup',
      '1 tsp vanilla extract',
      'Pinch of salt',
      'Fresh berries for topping'
    ],
    instructions: [
      'Scoop avocado flesh into food processor',
      'Add cocoa powder, maple syrup, and vanilla',
      'Blend until completely smooth',
      'Chill for 30 minutes before serving',
      'Top with fresh berries'
    ],
    isFavorite: false,
    tags: ['Vegan', 'Dessert', 'Healthy Fats']
  }
];


import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SubHeader from '../../../components/common/subHeader/subHeader';
import FilterSearchBar from '../../../components/common/filterSearchBar/filterSearchBar';
import CategoryChip from '../../../components/static/recepies/categoryChip/categoryChip';
import RecipeCard from '../../../components/static/recepies/recipeCard/recipeCard';
import RecipeDetailModal from '../../../components/static/recepies/recipeDetailModal/recipeDetailModal';
import { FontSize, Spacing } from '../../../components/constants/constant/responsive/responsive';
import { colors } from '../../../components/constants/theme/theme';
import { Fonts } from '../../../components/constants/fonts/font';


const RecipesScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const scrollY = useRef(new Animated.Value(0)).current;


  return (
    <SafeAreaView style={styles.container}>
      <SubHeader leftTitle='Discover recepies' />
      <ScrollView showsVerticalScrollIndicator={false} scrollEventThrottle={16}>
        <View style={styles.mainHeader}>
          <Text style={styles.greeting}>Discover Healthy Recipes</Text>
          <Text style={styles.subtitle}>Find perfect meals for your diet goals</Text>
        </View>

        <FilterSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <View style={styles.categoriesSection}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <FlatList
            data={categories}
            renderItem={({ item }) => (
              <CategoryChip item={item} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            )}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
          />
        </View>

        <View style={styles.recipesSection}>
          <FlatList
            data={recipes}
            renderItem={({ item, index }) => (
              <RecipeCard onPress={() => {
                setSelectedRecipe(item)
                navigation.navigate("RecepieDetails", { selectedRecipe })
              }
              } item={item} index={index} scrollY={scrollY} setSelectedRecipe={setSelectedRecipe} />
            )}
            keyExtractor={item => item.id}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
      {/* <RecipeDetailModal selectedRecipe={selectedRecipe} setSelectedRecipe={setSelectedRecipe} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  mainHeader: { paddingHorizontal: 20, paddingBottom: 16 },
  greeting: { fontSize: FontSize.lg, color: colors.titleColor, marginBottom: 4, fontFamily: Fonts.RalewayBold },
  subtitle: { fontSize: FontSize.base, color: colors.timeColor, fontFamily: Fonts.RalewayMedium },
  categoriesSection: { marginBottom: Spacing.md },
  sectionTitle: { fontSize: FontSize.lg, color: colors.titleColor, marginBottom: Spacing.md, paddingHorizontal: Spacing.md, fontFamily: Fonts.RalewaySemiBold },
  recipesSection: { marginBottom: Spacing.md },
});

export default RecipesScreen;
