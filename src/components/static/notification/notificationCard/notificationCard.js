// components/notifications/NotificationCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontSize, Spacing } from '../../../constants/constant/responsive/responsive';
import { Fonts } from '../../../constants/fonts/font';
import { colors } from '../../../constants/theme/theme';

const NotificationCard = ({ title, message, time, type }) => (
  <View style={[styles.notificationCard, styles[type]]}>
    <View style={styles.cardHeader}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardTime}>{time}</Text>
    </View>
    <Text style={styles.cardMessage}>{message}</Text>
  </View>
);

const styles = StyleSheet.create({
  notificationCard: {
    padding: Spacing.md,
    borderRadius: 8,
    marginBottom: 12,
    borderLeftWidth: 4,
  },
  meal: {
    backgroundColor: '#e8f5e8',
    borderLeftColor: '#4CAF50',
  },
  water: {
    backgroundColor: '#e3f2fd',
    borderLeftColor: '#2196F3',
  },
  progress: {
    backgroundColor: '#fff3e0',
    borderLeftColor: '#FF9800',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: FontSize.md,
    fontFamily: Fonts.RalewaySemiBold,
    color: '#2c3e50',
  },
  cardTime: {
    fontSize: FontSize.xs,
    color: colors.timeColor,
  },
  cardMessage: {
    fontSize: FontSize.base,
    color: '#5d6d7e',
    lineHeight: 20,
    fontFamily: Fonts.RalewayMedium
  },
});

export default NotificationCard;
