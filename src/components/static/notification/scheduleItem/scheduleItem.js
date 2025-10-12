// components/notifications/ScheduleItem.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ScheduleItem = ({ title, description, time, onPress }) => (
  <View style={styles.scheduleItem}>
    <View>
      <Text style={styles.scheduleTitle}>{title}</Text>
      <Text style={styles.scheduleDescription}>{description}</Text>
    </View>
    <TouchableOpacity style={styles.timeButton} onPress={onPress}>
      <Text style={styles.timeText}>{time}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  scheduleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  scheduleTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 4,
  },
  scheduleDescription: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  timeButton: {
    backgroundColor: '#3498db',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  timeText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default ScheduleItem;
