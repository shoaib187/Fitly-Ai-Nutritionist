import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import MoodPill from '../../../components/static/mindful/moodPill/moodPill';
import ExerciseCard from '../../../components/static/mindful/exerciseCard/exerciseCard';
import JournalCard from '../../../components/static/mindful/journalCard/journalCard';
import InsightCard from '../../../components/static/mindful/insightCard/InsightCard';
import ProgressGrid from '../../../components/static/mindful/progressGrid/progressGrid';
import ExerciseModal from '../../../components/static/mindful/exerciseModal/exerciseModal';
import Header from '../../../components/common/header/header';
import Backdrop from '../../../components/common/backdrop/backdrop';
import { FontSize, Spacing } from '../../../components/constants/constant/responsive/responsive';
import { Fonts } from '../../../components/constants/fonts/font';
import { colors } from '../../../components/constants/theme/theme';


export default function MindfulHomePage({ navigation }) {
  const [currentMood, setCurrentMood] = useState(null);
  const [activeExercise, setActiveExercise] = useState(null);

  const moodOptions = [
    { emoji: '😊', label: 'Happy', color: '#10B981' },
    { emoji: '😴', label: 'Tired', color: '#6366F1' },
    { emoji: '😰', label: 'Stressed', color: '#F59E0B' },
    { emoji: '😡', label: 'Angry', color: '#EF4444' },
    { emoji: '😞', label: 'Sad', color: '#8B5CF6' },
    { emoji: '🎯', label: 'Focused', color: '#06B6D4' },
  ];

  const exercises = [
    {
      id: '1',
      title: '5-Minute Mindful Eating',
      duration: '5 min',
      description: 'Learn to savor each bite and recognize hunger cues',
      icon: 'food-apple',
      color: '#10B981',
    },
    {
      id: '2',
      title: 'Breathing for Cravings',
      duration: '3 min',
      description: 'Manage emotional eating with breathwork',
      icon: 'weather-windy',
      color: '#6366F1',
    },
    {
      id: '3',
      title: 'Body Scan Meditation',
      duration: '8 min',
      description: "Connect with your body's signals",
      icon: 'human-handsup',
      color: '#F59E0B',
    },
  ];

  const insights = [
    {
      title: 'Mood & Food Patterns',
      description: 'You tend to eat more sweets when stressed',
      trend: 'up',
      change: '23%',
    },
    {
      title: 'Sleep Quality Impact',
      description: 'Better sleep correlates with healthier choices',
      trend: 'up',
      change: '15%',
    },
    {
      title: 'Hydration & Energy',
      description: 'Increased water intake improves afternoon energy',
      trend: 'up',
      change: '31%',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Backdrop />
      <Header userName={"Mindful Eating"} subtitle={"Nourish your body and mind"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <JournalCard />
        {/* Mood Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How are you feeling right now?</Text>
          <View style={styles.moodContainer}>
            {moodOptions.map((mood, index) => (
              <MoodPill
                key={index}
                emoji={mood.emoji}
                label={mood.label}
                color={mood.color}
                isSelected={currentMood === mood.label}
                onPress={() => setCurrentMood(mood.label)}
              />
            ))}
          </View>

          {currentMood && (
            <TouchableOpacity style={styles.logMoodButton}>
              <Text style={styles.logMoodText}>Log Mood & Continue</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Exercises */}
        <View style={[styles.section, { paddingHorizontal: 0 }]}>
          {/* <SectionHeader title="Mindful Exercises" actionText="View All" /> */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: Spacing.md }}>
            {exercises.map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} onPress={() => setActiveExercise(exercise)} />
            ))}
          </ScrollView>
        </View>

        {/* Journal */}


        {/* Insights */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Wellness Insights</Text>
          <Text style={styles.sectionSubtitle}>AI-powered patterns from your data</Text>
          {insights.map((insight, index) => (
            <InsightCard key={index} insight={insight} />
          ))}
        </View>

        {/* Progress */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Holistic Progress</Text>
          <ProgressGrid />
        </View>
      </ScrollView>

      {activeExercise && (
        <ExerciseModal exercise={activeExercise} onClose={() => setActiveExercise(null)} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16, paddingBottom: 8
  },
  title: { fontSize: 28, fontWeight: 'bold', color: '#F8FAFC', marginBottom: 4 },
  subtitle: { fontSize: 16, color: '#94A3B8' },
  section: {
    marginTop: Spacing.lg,
    paddingHorizontal: Spacing.md
  },
  sectionTitle: {
    fontSize: FontSize.lg,
    fontFamily: Fonts.RalewaySemiBold,
    color: colors.headingColor
  },
  sectionSubtitle: {
    fontSize: FontSize.md,
    color: '#94A3B8',
    marginBottom: Spacing.md
  },
  moodContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 16 },
  logMoodButton: {
    backgroundColor: colors.buttonColor,
    padding: 16, borderRadius: 12, alignItems: 'center', marginTop: 8
  },
  logMoodText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});