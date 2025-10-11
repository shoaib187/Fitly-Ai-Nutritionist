import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CircularProgress from '../../../common/circularProgress/circularProgress';
import AnimatedProgressBar from '../../../common/animatedProgressBar/animatedProgressBar';


const OverviewSection = ({ statsData }) => (
  <View style={styles.section}>
    <View style={styles.header}>
      <Text style={styles.title}>Today's Overview</Text>
      <TouchableOpacity>
        <Text style={styles.link}>Details</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.container}>
      <View style={styles.row}>
        {Object.entries(statsData).map(([key, stat]) => (
          <CircularProgress
            key={key}
            progress={stat.consumed / stat.goal}
            color={stat.color}
            value={`${stat.consumed}${key === 'protein' ? 'g' : key === 'hydration' ? '/10' : ''}`}
            label={key.charAt(0).toUpperCase() + key.slice(1)}
          />
        ))}
      </View>

      {Object.entries(statsData).map(([key, stat]) => (
        <View key={key} style={styles.progressItem}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressLabel}>{key.charAt(0).toUpperCase() + key.slice(1)}</Text>
            <Text style={styles.progressValue}>{stat.consumed} / {stat.goal}</Text>
          </View>
          <AnimatedProgressBar progress={stat.consumed / stat.goal} color={stat.color} />
        </View>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  section: { marginTop: 24, paddingHorizontal: 24 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#F8FAFC' },
  link: { fontSize: 14, color: '#6366F1', fontWeight: '600' },
  container: { backgroundColor: '#1E293B', borderRadius: 20, padding: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 24 },
  progressItem: { marginBottom: 16 },
  progressHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  progressLabel: { fontSize: 14, color: '#F8FAFC', fontWeight: '600' },
  progressValue: { fontSize: 12, color: '#94A3B8' },
});

export default OverviewSection;
