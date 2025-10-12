// components/notifications/NotificationItem.js
import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const NotificationItem = ({ title, description, value, onToggle }) => (
  <View style={styles.notificationItem}>
    <View style={styles.notificationInfo}>
      <Text style={styles.notificationTitle}>{title}</Text>
      <Text style={styles.notificationDescription}>{description}</Text>
    </View>
    <Switch
      value={value}
      onValueChange={onToggle}
      trackColor={{ false: '#767577', true: '#81b0ff' }}
      thumbColor={value ? '#4CAF50' : '#f4f3f4'}
    />
  </View>
);

const styles = StyleSheet.create({
  notificationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f2f6',
  },
  notificationInfo: {
    flex: 1,
    marginRight: 16,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 4,
  },
  notificationDescription: {
    fontSize: 14,
    color: '#7f8c8d',
  },
});

export default NotificationItem;
