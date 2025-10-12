import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
// import { styles } from '../../../../styles';
import SearchBar from '../../../components/common/searchBar/searchBar';
import CategoryList from '../../../components/static/discover/categoryList/categoryList';
import MealPlanSection from '../../../components/static/discover/mealPlanSection/mealPlanSection';
import RecipeGrid from '../../../components/static/discover/recipeGrid/recipeGrid';
import CulturalChallenge from '../../../components/static/discover/culturalChallenge/culturalChallenge';
import Header from '../../../components/common/header/header';
import Backdrop from '../../../components/common/backdrop/backdrop';
import { useTheme } from '../../../components/context/themeContext/themeContext';


export default function DiscoverHomePage({ navigation }) {
  const { theme } = useTheme()
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <SafeAreaView style={styles.container}>
      <Backdrop />
      <Header userName={"Discover"} theme={theme} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <CategoryList
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <MealPlanSection />
        <RecipeGrid navigation={navigation} />
        <CulturalChallenge />
      </ScrollView>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})