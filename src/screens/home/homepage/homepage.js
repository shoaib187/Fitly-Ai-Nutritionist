import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../../components/common/header/header';
import MoodTracker from '../../../components/static/homepage/moodTracker/moodTracker';
import OverviewSection from '../../../components/static/homepage/overviewSection/overviewSection';
import QuickActions from '../../../components/static/homepage/quickActions/quickActions';
import CulturalRecipes from '../../../components/static/homepage/culturalRecipes/culturalRecipes';
import AIInsightCard from '../../../components/static/homepage/aIInsightCard/aIInsightCard';
import DonutChart from '../../../components/common/donutChart/donutChart';

export default function HomePage({ navigation }) {
  const [greeting, setGreeting] = useState('');
  const [userName, setUserName] = useState('Alex');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, []);

  const statsData = {
    calories: { consumed: 1240, goal: 1800, color: '#6366F1' },
    protein: { consumed: 128, goal: 142, color: '#10B981' },
    hydration: { consumed: 8, goal: 10, color: '#0EA5E9' },
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header greeting={greeting} userName={userName} />
        <MoodTracker />
        <DonutChart
          percentage={(statsData.calories.consumed / statsData.calories.goal) * 100}
          value={`${statsData.calories.consumed}`}
          goal={statsData.calories.goal}
          label="Calories"
          color={statsData.calories.color}
        />
        <DonutChart
          percentage={(statsData.protein.consumed / statsData.protein.goal) * 100}
          value={`${statsData.protein.consumed}g`}
          goal={statsData.protein.goal}
          label="Protein"
          color={statsData.protein.color}
        />
        <OverviewSection statsData={statsData} />
        <QuickActions navigation={navigation} />
        <CulturalRecipes />
        <AIInsightCard />
      </ScrollView>
      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('FoodLog')}>
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A' },
  fab: {
    position: 'absolute', right: 24, bottom: 24, width: 60, height: 60, borderRadius: 30,
    backgroundColor: '#6366F1', justifyContent: 'center', alignItems: 'center',
  },
});
