import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ExerciseModal({ exercise, onClose }) {
  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>
        <TouchableOpacity style={styles.close} onPress={onClose}>
          <Ionicons name="close" size={24} color="#64748B" />
        </TouchableOpacity>

        <LinearGradient colors={[exercise.color, `${exercise.color}DD`]} style={styles.gradient}>
          <Text style={styles.title}>{exercise.title}</Text>
          <Text style={styles.duration}>{exercise.duration}</Text>

          <View style={styles.visual}>
            <Ionicons name="play-circle" size={80} color="#fff" />
          </View>

          <Text style={styles.desc}>{exercise.description}</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Start Exercise</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: { position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center', alignItems: 'center' },
  modal: { width: '90%', borderRadius: 20, overflow: 'hidden' },
  close: { position: 'absolute', top: 16, right: 16, zIndex: 1, backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 20, padding: 8 },
  gradient: { padding: 24, alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#fff', textAlign: 'center' },
  duration: { fontSize: 16, color: 'rgba(255,255,255,0.8)', marginTop: 8 },
  visual: { marginVertical: 32 },
  desc: { fontSize: 14, color: 'rgba(255,255,255,0.9)', textAlign: 'center', marginBottom: 24 },
  button: { backgroundColor: '#fff', paddingHorizontal: 32, paddingVertical: 16, borderRadius: 25 },
  buttonText: { color: '#000', fontWeight: 'bold', fontSize: 16 },
});
