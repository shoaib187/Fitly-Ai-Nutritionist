import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CircularProgress = ({ progress, color, size = 60, value, label }) => {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <View
        style={[
          styles.background,
          { width: size, height: size, borderRadius: size / 2 },
        ]}
      />
      <View
        style={[
          styles.fill,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            borderColor: color,
            transform: [{ rotate: `${-45 + progress * 360}deg` }],
          },
        ]}
      />
      <View style={styles.textContainer}>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center', position: 'relative' },
  background: { position: 'absolute', backgroundColor: '#334155', borderWidth: 6, borderColor: '#334155' },
  fill: { position: 'absolute', borderWidth: 6, borderLeftColor: 'transparent', borderBottomColor: 'transparent', borderRightColor: 'transparent' },
  textContainer: { alignItems: 'center', justifyContent: 'center' },
  value: { fontSize: 14, fontWeight: 'bold', color: '#F8FAFC' },
  label: { fontSize: 10, color: '#94A3B8', marginTop: 2 },
});

export default CircularProgress;
