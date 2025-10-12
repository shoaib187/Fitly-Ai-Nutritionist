import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NotificationCard from '../../components/static/notification/notificationCard/notificationCard';
import NotificationItem from '../../components/static/notification/notificationItem/notificationItem';
import ScheduleItem from '../../components/static/notification/scheduleItem/scheduleItem';
import { Spacing } from '../../components/constants/constant/responsive/responsive';
import SubHeader from '../../components/common/subHeader/subHeader';

const Notification = ({ navigation }) => {
  const [notifications, setNotifications] = useState({
    mealReminders: true,
    waterReminders: true,
    workoutReminders: false,
    progressUpdates: true,
    motivationalMessages: true,
    newRecipes: false,
    subscriptionAlerts: true,
    systemUpdates: false,
  });

  const [scheduledTime, setScheduledTime] = useState('08:00 AM');

  useEffect(() => {
    loadNotificationPreferences();
  }, []);

  const loadNotificationPreferences = async () => {
    try {
      const savedPreferences = await AsyncStorage.getItem('notificationPreferences');
      if (savedPreferences) setNotifications(JSON.parse(savedPreferences));
      const savedTime = await AsyncStorage.getItem('notificationTime');
      if (savedTime) setScheduledTime(savedTime);
    } catch (error) {
      console.log('Error loading preferences:', error);
    }
  };

  const saveNotificationPreferences = async (newPreferences) => {
    try {
      await AsyncStorage.setItem('notificationPreferences', JSON.stringify(newPreferences));
    } catch (error) {
      console.log('Error saving preferences:', error);
    }
  };

  const handleToggle = (key) => {
    const newNotifications = { ...notifications, [key]: !notifications[key] };
    setNotifications(newNotifications);
    saveNotificationPreferences(newNotifications);
  };

  const handleClearAll = () => {
    Alert.alert(
      'Clear All Notifications',
      'Are you sure you want to clear all notifications?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Clear All', style: 'destructive', onPress: () => Alert.alert('Success', 'All notifications cleared') },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
      {/* Header */}
      <SubHeader
        leftTitle="Notifications"
        showRight
        onLeftPress={() => navigation.goBack()}
      />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Recent Notifications */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Notifications</Text>
          <NotificationCard title="Meal Reminder" message="Time for your breakfast! Don't forget to log your meal." time="2 hours ago" type="meal" />
          <NotificationCard title="Water Reminder" message="Stay hydrated! You haven't logged water in 2 hours." time="4 hours ago" type="water" />
          <NotificationCard title="Weekly Progress" message="Great job! You've lost 1.2kg this week. Keep it up!" time="1 day ago" type="progress" />
        </View>

        {/* Notification Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notification Settings</Text>
          <NotificationItem title="Meal Reminders" description="Reminders for breakfast, lunch, and dinner" value={notifications.mealReminders} onToggle={() => handleToggle('mealReminders')} />
          <NotificationItem title="Water Reminders" description="Reminders to drink water every 2 hours" value={notifications.waterReminders} onToggle={() => handleToggle('waterReminders')} />
          <NotificationItem title="Workout Reminders" description="Reminders for scheduled workouts" value={notifications.workoutReminders} onToggle={() => handleToggle('workoutReminders')} />
          <NotificationItem title="Progress Updates" description="Weekly progress reports and achievements" value={notifications.progressUpdates} onToggle={() => handleToggle('progressUpdates')} />
          <NotificationItem title="Motivational Messages" description="Daily tips and motivational quotes" value={notifications.motivationalMessages} onToggle={() => handleToggle('motivationalMessages')} />
          <NotificationItem title="New Recipes" description="Notifications when new recipes are available" value={notifications.newRecipes} onToggle={() => handleToggle('newRecipes')} />
        </View>

        {/* Schedule Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Schedule</Text>
          <ScheduleItem title="Daily Reminder Time" description="Set preferred time for daily notifications" time={scheduledTime} onPress={() => console.log('Select time')} />
        </View>

        {/* System Notifications */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>System</Text>
          <NotificationItem title="Subscription Alerts" description="Notifications about your subscription status" value={notifications.subscriptionAlerts} onToggle={() => handleToggle('subscriptionAlerts')} />
          <NotificationItem title="App Updates" description="Notifications about new features and updates" value={notifications.systemUpdates} onToggle={() => handleToggle('systemUpdates')} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderBottomWidth: 1, borderBottomColor: '#e9ecef',
  },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#2c3e50' },
  clearButton: { fontSize: 16, color: '#e74c3c', fontWeight: '600' },
  scrollView: { flex: 1 },
  section: {
    marginHorizontal: Spacing.md,
    marginVertical: 8,
    borderRadius: 12,
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#2c3e50', marginBottom: 16 },
});

export default Notification;
