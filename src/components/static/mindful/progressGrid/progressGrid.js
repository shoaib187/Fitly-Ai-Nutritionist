import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ProgressGrid() {
  const progressData = [
    { icon: 'bed', color: '#6366F1', value: '7.2h', label: 'Sleep Avg' },
    { icon: 'fitness', color: '#10B981', value: '84%', label: 'Energy Level' },
    { icon: 'water', color: '#06B6D4', value: '9/10', label: 'Hydration' },
    { icon: 'happy', color: '#F59E0B', value: '78%', label: 'Mood Score' },
  ];

  return (
    <View style={styles.grid}>
      {progressData.map((item, i) => (
        <View key={i} style={styles.item}>
          <Ionicons name={item.icon} size={24} color={item.color} />
          <Text style={styles.value}>{item.value}</Text>
          <Text style={styles.label}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  item: { width: '48%', backgroundColor: '#1E293B', padding: 16, borderRadius: 12, alignItems: 'center', marginBottom: 12 },
  value: { color: '#F8FAFC', fontWeight: 'bold', fontSize: 20, marginTop: 8 },
  label: { color: '#94A3B8', fontSize: 12, marginTop: 4 },
});
