// screens/MindfulScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const MindfulScreen = ({ navigation }) => {
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
      type: 'audio',
      description: 'Learn to savor each bite and recognize hunger cues',
      icon: 'food-apple',
      color: '#10B981',
    },
    {
      id: '2',
      title: 'Breathing for Cravings',
      duration: '3 min',
      type: 'audio',
      description: 'Manage emotional eating with breathwork',
      icon: 'weather-windy',
      color: '#6366F1',
    },
    {
      id: '3',
      title: 'Body Scan Meditation',
      duration: '8 min',
      type: 'audio',
      description: 'Connect with your body\'s signals',
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

  const MoodPill = ({ emoji, label, color, isSelected, onPress }) => (
    <TouchableOpacity
      style={[
        styles.moodPill,
        isSelected && { borderColor: color, borderWidth: 2 }
      ]}
      onPress={onPress}
    >
      <Text style={styles.moodEmoji}>{emoji}</Text>
      <Text style={[
        styles.moodLabel,
        isSelected && { color }
      ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  const ExerciseCard = ({ exercise }) => (
    <TouchableOpacity
      style={styles.exerciseCard}
      onPress={() => setActiveExercise(exercise)}
    >
      <LinearGradient
        colors={[exercise.color, `${exercise.color}DD`]}
        style={styles.exerciseGradient}
      >
        <View style={styles.exerciseHeader}>
          <MaterialCommunityIcons name={exercise.icon} size={32} color="#fff" />
          <View style={styles.exerciseDuration}>
            <Text style={styles.durationText}>{exercise.duration}</Text>
          </View>
        </View>
        <Text style={styles.exerciseTitle}>{exercise.title}</Text>
        <Text style={styles.exerciseDescription}>{exercise.description}</Text>
        <View style={styles.exerciseFooter}>
          <View style={styles.playButton}>
            <Ionicons name="play" size={20} color={exercise.color} />
          </View>
          <Text style={styles.startText}>Start</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  const InsightCard = ({ insight }) => (
    <View style={styles.insightCard}>
      <View style={styles.insightHeader}>
        <Text style={styles.insightTitle}>{insight.title}</Text>
        <View style={styles.trendIndicator}>
          <Ionicons
            name={insight.trend === 'up' ? 'trending-up' : 'trending-down'}
            size={16}
            color={insight.trend === 'up' ? '#10B981' : '#EF4444'}
          />
          <Text style={[
            styles.trendText,
            { color: insight.trend === 'up' ? '#10B981' : '#EF4444' }
          ]}>
            {insight.change}
          </Text>
        </View>
      </View>
      <Text style={styles.insightDescription}>{insight.description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Mindful Eating</Text>
          <Text style={styles.subtitle}>Nourish your body and mind</Text>
        </View>

        {/* Current Mood Section */}
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

        {/* Quick Exercises */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Mindful Exercises</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.exercisesContainer}>
            {exercises.map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
          </ScrollView>
        </View>

        {/* Food Journal Prompt */}
        <TouchableOpacity style={styles.journalCard}>
          <LinearGradient
            colors={['#8B5CF6', '#7C3AED']}
            style={styles.journalGradient}
          >
            <View style={styles.journalHeader}>
              <Ionicons name="book" size={24} color="#fff" />
              <Text style={styles.journalTitle}>Food & Mood Journal</Text>
            </View>
            <Text style={styles.journalPrompt}>
              "What emotions influenced your eating choices today?"
            </Text>
            <TouchableOpacity style={styles.startJournalButton}>
              <Text style={styles.startJournalText}>Start Journaling</Text>
            </TouchableOpacity>
          </LinearGradient>
        </TouchableOpacity>

        {/* AI Insights */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Wellness Insights</Text>
          <Text style={styles.sectionSubtitle}>AI-powered patterns from your data</Text>
          {insights.map((insight, index) => (
            <InsightCard key={index} insight={insight} />
          ))}
        </View>

        {/* Progress Beyond Weight */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Holistic Progress</Text>
          <View style={styles.progressGrid}>
            <View style={styles.progressItem}>
              <Ionicons name="bed" size={24} color="#6366F1" />
              <Text style={styles.progressValue}>7.2h</Text>
              <Text style={styles.progressLabel}>Sleep Avg</Text>
            </View>
            <View style={styles.progressItem}>
              <Ionicons name="fitness" size={24} color="#10B981" />
              <Text style={styles.progressValue}>84%</Text>
              <Text style={styles.progressLabel}>Energy Level</Text>
            </View>
            <View style={styles.progressItem}>
              <Ionicons name="water" size={24} color="#06B6D4" />
              <Text style={styles.progressValue}>9/10</Text>
              <Text style={styles.progressLabel}>Hydration</Text>
            </View>
            <View style={styles.progressItem}>
              <Ionicons name="happy" size={24} color="#F59E0B" />
              <Text style={styles.progressValue}>78%</Text>
              <Text style={styles.progressLabel}>Mood Score</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Exercise Player Modal */}
      {activeExercise && (
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setActiveExercise(null)}
            >
              <Ionicons name="close" size={24} color="#64748B" />
            </TouchableOpacity>

            <LinearGradient
              colors={[activeExercise.color, `${activeExercise.color}DD`]}
              style={styles.exercisePlayer}
            >
              <Text style={styles.playerTitle}>{activeExercise.title}</Text>
              <Text style={styles.playerDuration}>{activeExercise.duration}</Text>

              <View style={styles.playerVisual}>
                <Ionicons name="play-circle" size={80} color="#fff" />
              </View>

              <Text style={styles.playerDescription}>{activeExercise.description}</Text>

              <TouchableOpacity style={styles.startExerciseButton}>
                <Text style={styles.startExerciseText}>Start Exercise</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      )}
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
  section: {
    marginTop: 32,
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
  sectionSubtitle: {
    fontSize: 14,
    color: '#94A3B8',
    marginBottom: 16,
  },
  seeAllText: {
    fontSize: 14,
    color: '#6366F1',
    fontWeight: '600',
  },
  moodContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  moodPill: {
    width: '30%',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },
  moodEmoji: {
    fontSize: 24,
    marginBottom: 8,
  },
  moodLabel: {
    fontSize: 12,
    color: '#94A3B8',
    fontWeight: '600',
  },
  logMoodButton: {
    backgroundColor: '#6366F1',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  logMoodText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  exercisesContainer: {
    flexDirection: 'row',
  },
  exerciseCard: {
    width: 220,
    height: 200,
    borderRadius: 16,
    marginRight: 16,
    overflow: 'hidden',
  },
  exerciseGradient: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  exerciseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  exerciseDuration: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  durationText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  exerciseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 8,
  },
  exerciseDescription: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 4,
  },
  exerciseFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  playButton: {
    backgroundColor: '#fff',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  startText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  journalCard: {
    margin: 24,
    borderRadius: 16,
    overflow: 'hidden',
  },
  journalGradient: {
    padding: 20,
  },
  journalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  journalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 8,
  },
  journalPrompt: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 16,
    fontStyle: 'italic',
  },
  startJournalButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  startJournalText: {
    color: '#fff',
    fontWeight: '600',
  },
  insightCard: {
    backgroundColor: '#1E293B',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  insightHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  insightTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F8FAFC',
  },
  trendIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trendText: {
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 4,
  },
  insightDescription: {
    fontSize: 14,
    color: '#94A3B8',
  },
  progressGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  progressItem: {
    width: '48%',
    backgroundColor: '#1E293B',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  progressValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginTop: 8,
  },
  progressLabel: {
    fontSize: 12,
    color: '#94A3B8',
    marginTop: 4,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 20,
    padding: 8,
  },
  exercisePlayer: {
    padding: 24,
    alignItems: 'center',
  },
  playerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  playerDuration: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 8,
  },
  playerVisual: {
    marginVertical: 32,
  },
  playerDescription: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    marginBottom: 24,
  },
  startExerciseButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 25,
  },
  startExerciseText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MindfulScreen;