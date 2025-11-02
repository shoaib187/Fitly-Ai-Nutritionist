import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function InsightCard({ insight }) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{insight.title}</Text>
        <View style={styles.trend}>
          <Ionicons
            name={insight.trend === 'up' ? 'trending-up' : 'trending-down'}
            size={16}
            color={insight.trend === 'up' ? '#10B981' : '#EF4444'}
          />
          <Text
            style={[
              styles.change,
              { color: insight.trend === 'up' ? '#10B981' : '#EF4444' },
            ]}
          >
            {insight.change}
          </Text>
        </View>
      </View>
      <Text style={styles.desc}>{insight.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#1E293B', padding: 16, borderRadius: 12, marginBottom: 12 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  title: { fontSize: 16, color: '#F8FAFC', fontWeight: 'bold' },
  trend: { flexDirection: 'row', alignItems: 'center' },
  change: { fontSize: 12, fontWeight: '600', marginLeft: 4 },
  desc: { fontSize: 14, color: '#94A3B8' },
});
