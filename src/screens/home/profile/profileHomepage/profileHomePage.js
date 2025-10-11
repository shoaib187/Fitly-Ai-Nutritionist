// screens/ProfileScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Switch,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"


export default function ProfileHomePage({ navigation }) {
  const [notifications, setNotifications] = useState(true);
  const [aiInsights, setAiInsights] = useState(true);
  const [culturalRecipes, setCulturalRecipes] = useState(true);

  const profileStats = [
    { label: 'Days Streak', value: '12', icon: 'flame' },
    { label: 'Recipes Tried', value: '28', icon: 'book' },
    { label: 'Cultures Explored', value: '8', icon: 'earth' },
    { label: 'Mindful Minutes', value: '245', icon: 'heart' },
  ];

  const settingsSections = [
    {
      title: 'Preferences',
      icon: 'tune',
      items: [
        { icon: 'food-apple', label: 'Dietary Preferences', value: 'Vegetarian' },
        { icon: 'allergy', label: 'Allergies', value: 'None set' },
        { icon: 'silverware-fork-knife', label: 'Cuisine Preferences', value: 'Global' },
      ],
    },
    {
      title: 'App Settings',
      icon: 'cog',
      items: [
        { icon: 'bell', label: 'Notifications', type: 'switch', value: notifications, onValueChange: setNotifications },
        { icon: 'robot', label: 'AI Insights', type: 'switch', value: aiInsights, onValueChange: setAiInsights },
        { icon: 'chef-hat', label: 'Cultural Recipes', type: 'switch', value: culturalRecipes, onValueChange: setCulturalRecipes },
      ],
    },
  ];

  const SettingItem = ({ icon, label, value, type, onValueChange }) => (
    <TouchableOpacity style={styles.settingItem}>
      <View style={styles.settingLeft}>
        <MaterialCommunityIcons name={icon} size={24} color="#6366F1" />
        <Text style={styles.settingLabel}>{label}</Text>
      </View>
      <View style={styles.settingRight}>
        {type === 'switch' ? (
          <Switch
            value={value}
            onValueChange={onValueChange}
            trackColor={{ false: '#334155', true: '#6366F1' }}
            thumbColor={value ? '#fff' : '#f4f3f4'}
          />
        ) : (
          <>
            <Text style={styles.settingValue}>{value}</Text>
            <Ionicons name="chevron-forward" size={20} color="#64748B" />
          </>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200' }}
            style={styles.avatar}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Alex Johnson</Text>
            <Text style={styles.profileBio}>Exploring global cuisines 🌍</Text>
            <View style={styles.profileStats}>
              {profileStats.map((stat, index) => (
                <View key={index} style={styles.statItem}>
                  <Ionicons name={stat.icon} size={16} color="#6366F1" />
                  <Text style={styles.statValue}>{stat.value}</Text>
                  <Text style={styles.statLabel}>{stat.label}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Metabolic Fingerprint */}
        <TouchableOpacity style={styles.fingerprintCard}>
          <LinearGradient
            colors={['#6366F1', '#4F46E5']}
            style={styles.fingerprintGradient}
          >
            <View style={styles.fingerprintHeader}>
              <MaterialCommunityIcons name="fingerprint" size={24} color="#fff" />
              <Text style={styles.fingerprintTitle}>Metabolic Fingerprint</Text>
            </View>
            <Text style={styles.fingerprintDescription}>
              Complete your profile for personalized AI recommendations
            </Text>
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '65%' }]} />
              </View>
              <Text style={styles.progressText}>65% complete</Text>
            </View>
            <TouchableOpacity style={styles.completeButton}>
              <Text style={styles.completeButtonText}>Complete Profile</Text>
            </TouchableOpacity>
          </LinearGradient>
        </TouchableOpacity>

        {/* Cultural Preferences */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cultural Preferences</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.culturesContainer}>
            {['Japanese', 'Italian', 'Mexican', 'Indian', 'Thai', 'Mediterranean'].map((culture, index) => (
              <View key={index} style={styles.culturePill}>
                <Text style={styles.cultureText}>{culture}</Text>
              </View>
            ))}
            <TouchableOpacity style={styles.addCulturePill}>
              <Ionicons name="add" size={20} color="#6366F1" />
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Settings Sections */}
        {settingsSections.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <View style={styles.sectionHeader}>
              <MaterialCommunityIcons name={section.icon} size={20} color="#F8FAFC" />
              <Text style={styles.sectionTitle}>{section.title}</Text>
            </View>
            <View style={styles.settingsList}>
              {section.items.map((item, itemIndex) => (
                <SettingItem
                  key={itemIndex}
                  icon={item.icon}
                  label={item.label}
                  value={item.value}
                  type={item.type}
                  onValueChange={item.onValueChange}
                />
              ))}
            </View>
          </View>
        ))}

        {/* My Squads */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>My Squads</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.squadsContainer}>
            <TouchableOpacity style={styles.squadCard}>
              <LinearGradient
                colors={['#10B981', '#059669']}
                style={styles.squadGradient}
              >
                <Text style={styles.squadName}>Mediterranean Lovers</Text>
                <Text style={styles.squadMembers}>12 members</Text>
                <View style={styles.squadAvatars}>
                  <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100' }}
                    style={styles.squadAvatar}
                  />
                  <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' }}
                    style={styles.squadAvatar}
                  />
                  <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' }}
                    style={styles.squadAvatar}
                  />
                  <View style={styles.moreMembers}>
                    <Text style={styles.moreMembersText}>+9</Text>
                  </View>
                </View>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.createSquadCard}>
              <Ionicons name="add-circle" size={40} color="#6366F1" />
              <Text style={styles.createSquadText}>Create Squad</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* App Version & Support */}
        <View style={styles.footer}>
          <Text style={styles.versionText}>NourishApp v1.0.0</Text>
          <TouchableOpacity style={styles.supportButton}>
            <Text style={styles.supportText}>Get Help & Support</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  profileHeader: {
    flexDirection: 'row',
    padding: 24,
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 16,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginBottom: 4,
  },
  profileBio: {
    fontSize: 16,
    color: '#94A3B8',
    marginBottom: 16,
  },
  profileStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginTop: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
  fingerprintCard: {
    marginHorizontal: 24,
    marginBottom: 24,
    borderRadius: 16,
    overflow: 'hidden',
  },
  fingerprintGradient: {
    padding: 20,
  },
  fingerprintHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  fingerprintTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 8,
  },
  fingerprintDescription: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    marginBottom: 16,
  },
  progressContainer: {
    marginBottom: 16,
  },
  progressBar: {
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 3,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FFD700',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
  },
  completeButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  completeButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  section: {
    marginBottom: 32,
    paddingHorizontal: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginLeft: 8,
  },
  seeAllText: {
    fontSize: 14,
    color: '#6366F1',
    fontWeight: '600',
  },
  culturesContainer: {
    flexDirection: 'row',
  },
  culturePill: {
    backgroundColor: '#1E293B',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  cultureText: {
    color: '#F8FAFC',
    fontSize: 14,
    fontWeight: '600',
  },
  addCulturePill: {
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#6366F1',
    borderStyle: 'dashed',
  },
  settingsList: {
    backgroundColor: '#1E293B',
    borderRadius: 12,
    overflow: 'hidden',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingLabel: {
    fontSize: 16,
    color: '#F8FAFC',
    marginLeft: 12,
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingValue: {
    fontSize: 14,
    color: '#64748B',
    marginRight: 8,
  },
  squadsContainer: {
    flexDirection: 'row',
  },
  squadCard: {
    width: 200,
    height: 120,
    borderRadius: 12,
    marginRight: 12,
    overflow: 'hidden',
  },
  squadGradient: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  squadName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  squadMembers: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
  },
  squadAvatars: {
    flexDirection: 'row',
  },
  squadAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: -8,
    borderWidth: 2,
    borderColor: '#10B981',
  },
  moreMembers: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreMembersText: {
    fontSize: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  createSquadCard: {
    width: 120,
    height: 120,
    backgroundColor: '#1E293B',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#334155',
    borderStyle: 'dashed',
  },
  createSquadText: {
    color: '#6366F1',
    fontWeight: '600',
    marginTop: 8,
  },
  footer: {
    alignItems: 'center',
    padding: 24,
  },
  versionText: {
    color: '#64748B',
    fontSize: 12,
    marginBottom: 16,
  },
  supportButton: {
    padding: 12,
  },
  supportText: {
    color: '#6366F1',
    fontWeight: '600',
  },
});
