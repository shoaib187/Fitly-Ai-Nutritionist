import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ExerciseCard({ exercise, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <LinearGradient colors={[exercise.color, `${exercise.color}DD`]} style={styles.gradient}>
        <View style={styles.header}>
          <MaterialCommunityIcons name={exercise.icon} size={32} color="#fff" />
          <View style={styles.durationBox}>
            <Text style={styles.durationText}>{exercise.duration}</Text>
          </View>
        </View>

        <Text style={styles.title}>{exercise.title}</Text>
        <Text style={styles.desc}>{exercise.description}</Text>

        <View style={styles.footer}>
          <View style={styles.playBtn}>
            <Ionicons name="play" size={20} color={exercise.color} />
          </View>
          <Text style={styles.startText}>Start</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { width: 220, height: 200, borderRadius: 16, marginRight: 16, overflow: 'hidden' },
  gradient: { flex: 1, padding: 16, justifyContent: 'space-between' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  durationBox: { backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 8, borderRadius: 8 },
  durationText: { color: '#fff', fontSize: 12, fontWeight: '600' },
  title: { color: '#fff', fontWeight: 'bold', fontSize: 16, marginTop: 8 },
  desc: { fontSize: 12, color: 'rgba(255,255,255,0.8)', marginTop: 4 },
  footer: { flexDirection: 'row', alignItems: 'center', marginTop: 16 },
  playBtn: { backgroundColor: '#fff', width: 32, height: 32, borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginRight: 8 },
  startText: { color: '#fff', fontWeight: '600' },
});
