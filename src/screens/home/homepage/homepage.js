import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, StatusBar, StyleSheet, View, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../../components/common/header/header';
import OverviewSection from '../../../components/static/homepage/overviewSection/overviewSection';
import QuickActions from '../../../components/static/homepage/quickActions/quickActions';
import CulturalRecipes from '../../../components/static/homepage/culturalRecipes/culturalRecipes';
import AIInsightCard from '../../../components/static/homepage/aIInsightCard/aIInsightCard';
import { colors, Colors } from '../../../components/constants/theme/theme';
import { useTheme } from '../../../components/context/themeContext/themeContext';

import GradientOffer from '../../../components/common/gradientOffer/gradientOffer';
import Button from '../../../components/common/button/button';

import Backdrop from '../../../components/common/backdrop/backdrop';
import MyBarChart from '../../../components/common/charts/barCharts/barChart';
import TitleSection from '../../../components/common/titleSection/titleSection';
import IconButton from '../../../components/common/iconButton/iconButton';
import { Spacing } from '../../../components/constants/constant/responsive/responsive';
import DailyNutritionStats from '../../../components/static/homepage/dailyNutritionStats/dailyNutritionStats';
import ConsultBanner from '../../../components/static/homepage/consultBanner/consultBanner';
import RecentRecords from '../../../components/static/homepage/recentRecords/recentRecords';


export default function HomePage({ navigation }) {
  const { theme, toggleTheme } = useTheme()
  const [greeting, setGreeting] = useState('');

  const date = new Date()
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);


  const statsData = {
    calories: { consumed: 1240, goal: 1800, color: '#6366F1' },
    protein: { consumed: 128, goal: 142, color: '#10B981' },
    hydration: { consumed: 8, goal: 10, color: '#0EA5E9' },
  };


  const [isFabExpanded, setIsFabExpanded] = useState(false);

  const mainButton = {
    icon: '+',
    backgroundColor: '#007AFF',
    size: 56,
    onPress: () => console.log('Main FAB pressed'),
  };

  const actionButtons = [
    {
      icon: '📷',
      backgroundColor: '#FF3B30',
      onPress: () => Alert.alert('Camera', 'Camera action triggered'),
      size: 44,
    },
    {
      icon: '📝',
      backgroundColor: '#4CD964',
      onPress: () => Alert.alert('Note', 'Create new note'),
      size: 44,
    },
    {
      icon: '📍',
      backgroundColor: '#FF9500',
      onPress: () => Alert.alert('Location', 'Share location'),
      size: 44,
    },
    {
      icon: '📎',
      backgroundColor: '#5856D6',
      onPress: () => Alert.alert('Attachment', 'Add attachment'),
      size: 44,
    },
    {
      icon: '👤',
      backgroundColor: '#FF2D55',
      onPress: () => Alert.alert('Profile', 'View profile'),
      size: 44,
    },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme?.colors?.background }]}>
      <StatusBar animated showHideTransition={"fade"} backgroundColor={colors.backdrop} barStyle={'dark-content'} />
      <Backdrop />
      <Header showDate navigation={navigation} theme={theme} date={formattedDate} userName={"Hi, Shabii"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TitleSection
          title="Burned weekly track"
          showButton
          iconName="ellipsis-horizontal"
        />
        <MyBarChart />

        <RecentRecords />
        {/* <OverviewSection theme={theme} statsData={statsData} /> */}
        <CulturalRecipes theme={theme} />
        {/* <QuickActions theme={theme} navigation={navigation} /> */}
        <AIInsightCard theme={theme} />
      </ScrollView>
      {/* <GradientOffer /> */}
      <IconButton elevation={10} padding={Spacing.md} name={"add"} style={{ position: 'absolute', bottom: Spacing.md, right: Spacing.md }} />
      {/* <Button title={"Toggle theme"} onPress={toggleTheme} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background
  },
  fab: {
    position: 'absolute',
    right: 24, bottom: 24, width: 60, height: 60, borderRadius: 30,
    backgroundColor: '#6366F1', justifyContent: 'center', alignItems: 'center',
  },
});

