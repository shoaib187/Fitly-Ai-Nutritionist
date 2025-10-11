import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const MoodTracker = () => (
  <View style={styles.section}>
    <Text style={styles.title}>Current Mood</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {['😊', '😴', '😰', '😡', '😞', '🎯'].map((mood, index) => (
        <TouchableOpacity key={index} style={styles.pill}>
          <Text style={styles.emoji}>{mood}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  section: { marginTop: 24, paddingHorizontal: 24 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#F8FAFC', marginBottom: 12 },
  pill: { paddingHorizontal: 20, paddingVertical: 12, backgroundColor: '#1E293B', borderRadius: 25, marginRight: 12 },
  emoji: { fontSize: 20 },
});

export default MoodTracker;
