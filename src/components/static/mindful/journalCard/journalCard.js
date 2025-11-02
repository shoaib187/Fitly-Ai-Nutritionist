import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Spacing } from '../../../constants/constant/responsive/responsive';

export default function JournalCard() {
  return (
    <TouchableOpacity style={styles.card}>
      <LinearGradient colors={['#8B5CF6', '#7C3AED']} style={styles.gradient}>
        <View style={styles.header}>
          <Ionicons name="book" size={24} color="#fff" />
          <Text style={styles.title}>Food & Mood Journal</Text>
        </View>
        <Text style={styles.prompt}>
          "What emotions influenced your eating choices today?"
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start Journaling</Text>
        </TouchableOpacity>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16, overflow: 'hidden',
    marginHorizontal: Spacing.md,
    marginTop: Spacing.md
  },
  gradient: { padding: 20 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  title: { fontSize: 18, color: '#fff', fontWeight: 'bold', marginLeft: 8 },
  prompt: { fontSize: 14, color: 'rgba(255,255,255,0.9)', marginBottom: 16, fontStyle: 'italic' },
  button: { backgroundColor: 'rgba(255,255,255,0.2)', padding: 12, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '600' },
});
