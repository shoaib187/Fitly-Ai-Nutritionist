import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ConsultBanner = () => {
  return (
    <LinearGradient colors={['#6EE7B7', '#3B82F6']} style={styles.container}>
      <Text style={styles.title}>Consult with a Nutritionist 👨‍⚕️</Text>
      <Text style={styles.subtitle}>Get a personalized diet plan for your body type</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Book Consultation</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 20,
    marginVertical: 10,
  },
  title: { fontSize: 18, fontWeight: '700', color: '#fff' },
  subtitle: { color: '#f0f0f0', marginVertical: 5 },
  button: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  buttonText: { color: '#2563EB', fontWeight: '600' },
});

export default ConsultBanner;
