import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';

const DailyNutritionStats = () => {
  const macros = [
    { label: 'Protein', value: 70, maxValue: 120 },
    { label: 'Carbs', value: 150, maxValue: 250 },
    { label: 'Fats', value: 45, maxValue: 70 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Nutrition</Text>
      <Text style={styles.calories}>1200 / 2000 kcal</Text>

      <BarChart
        data={macros.map(item => ({
          value: (item.value / item.maxValue) * 100,
          label: item.label,
        }))}
        barWidth={40}
        noOfSections={5}
        frontColor="#4CAF50"
        yAxisThickness={0}
        xAxisLabelTextStyle={styles.label}
      />

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addText}>+ Add Meal</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 16,
    marginVertical: 10,
    elevation: 3,
  },
  title: { fontSize: 18, fontWeight: '600', color: '#222' },
  calories: { fontSize: 16, color: '#4CAF50', marginVertical: 8 },
  label: { fontSize: 12, color: '#666' },
  addButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  addText: { color: '#fff', fontWeight: '600' },
});

export default DailyNutritionStats;
