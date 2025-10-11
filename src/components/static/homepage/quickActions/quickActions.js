import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const QuickActions = ({ navigation }) => {
  const actions = [
    { icon: 'camera', title: 'Scan Food', subtitle: 'AI recognition', color: '#6366F1', screen: 'FoodScan' },
    { icon: 'chef-hat', title: 'Meal Plan', subtitle: 'AI generated', color: '#10B981', screen: 'MealPlan' },
    { icon: 'earth', title: 'Global Recipes', subtitle: '50+ cuisines', color: '#F59E0B', screen: 'Recipes' },
    { icon: 'brain', title: 'Mindful Eat', subtitle: '5min exercise', color: '#EC4899', screen: 'Mindful' },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.title}>Quick Actions</Text>
      <View style={styles.grid}>
        {actions.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card} onPress={() => navigation.navigate(item.screen)}>
            <LinearGradient colors={[item.color, `${item.color}DD`]} style={styles.gradient}>
              <MaterialCommunityIcons name={item.icon} size={28} color="#fff" />
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: { marginTop: 24, paddingHorizontal: 24 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#F8FAFC', marginBottom: 12 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: { width: '48%', marginBottom: 12, borderRadius: 16, overflow: 'hidden' },
  gradient: { padding: 16, borderRadius: 16, minHeight: 120, justifyContent: 'space-between' },
  titleText: { fontSize: 16, fontWeight: 'bold', color: '#fff', marginTop: 8 },
  subtitle: { fontSize: 12, color: 'rgba(255,255,255,0.8)', marginTop: 4 },
});

export default QuickActions;
