import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { colors } from '../../../constants/theme/theme';
import { Spacing, FontSize } from '../../../constants/constant/responsive/responsive';
import RecipeCard from '../recipeCard/recipeCard';
import TitleSection from '../../../common/titleSection/titleSection';

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

const RecipeGrid = ({ navigation }) => (
  <View style={styles.section}>
    {/* Header */}
    <TitleSection onPress={() => navigation.navigate("Recepies")} title={"Featured Recipes"} iconName='chevron-forward' />
    {/* Recipe Grid */}
    <FlatList
      data={featuredRecipes}
      renderItem={({ item }) => <RecipeCard item={item} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingHorizontal: Spacing.md, }}
      numColumns={2}
      columnWrapperStyle={styles.recipesGrid}
      scrollEnabled={false}
    />
  </View>
);

export default RecipeGrid;

const styles = StyleSheet.create({
  section: {
    marginTop: Spacing.md
  },
  recipesGrid: {
    justifyContent: 'space-between',
  },
});
