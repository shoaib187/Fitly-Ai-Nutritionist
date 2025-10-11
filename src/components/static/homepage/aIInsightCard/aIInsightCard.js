import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AIInsightCard = () => (
  <TouchableOpacity style={styles.card}>
    <LinearGradient colors={['#667eea', '#764ba2']} style={styles.gradient}>
      <View style={styles.header}>
        <Ionicons name="sparkles" size={24} color="#FFD700" />
        <Text style={styles.title}>AI Nutrition Insight</Text>
      </View>
      <Text style={styles.message}>
        "Based on your mood and activity, I recommend adding more omega-3 rich foods today. How about some salmon for dinner?"
      </Text>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Your Personal Nutrition Coach</Text>
        <Ionicons name="chevron-forward" size={16} color="#fff" />
      </View>
    </LinearGradient>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: { margin: 24, borderRadius: 20, overflow: 'hidden', elevation: 10 },
  gradient: { padding: 20 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#fff', marginLeft: 8 },
  message: { fontSize: 14, color: 'rgba(255,255,255,0.9)', lineHeight: 20, marginBottom: 16 },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  footerText: { fontSize: 12, color: 'rgba(255,255,255,0.7)' },
});

export default AIInsightCard;
