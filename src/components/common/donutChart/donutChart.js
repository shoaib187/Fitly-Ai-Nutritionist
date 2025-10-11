import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

/**
 * DonutChart Component
 * Displays animated circular progress for metrics like calories, hydration, etc.
 *
 * Props:
 * - percentage: current progress percentage (0–100)
 * - radius: outer circle radius
 * - strokeWidth: thickness of the ring
 * - color: active stroke color
 * - label: label text (e.g., "Calories")
 * - value: numeric value (e.g., "1240 kcal")
 * - goal: goal number (optional)
 */

const DonutChart = ({ percentage = 75, radius = 50, strokeWidth = 12, color = '#6366F1', label, value, goal }) => {
  const animated = useRef(new Animated.Value(0)).current;
  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;

  useEffect(() => {
    Animated.timing(animated, {
      toValue: percentage,
      duration: 1200,
      useNativeDriver: false,
    }).start();
  }, [percentage]);

  const strokeDashoffset = animated.interpolate({
    inputRange: [0, 100],
    outputRange: [circumference, 0],
  });

  return (
    <View style={styles.container}>
      <Svg width={radius * 2} height={radius * 2} viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
        <Circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="#E2E8F0"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <AnimatedCircle
          cx="50%"
          cy="50%"
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="none"
        />
      </Svg>

      <View style={styles.textContainer}>
        <Text style={styles.value}>{value}</Text>
        {goal && <Text style={styles.goal}>/ {goal}</Text>}
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
};

// Animated version of SVG Circle
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
  },
  textContainer: {
    position: 'absolute',
    alignItems: 'center',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F8FAFC',
  },
  goal: {
    fontSize: 12,
    color: '#94A3B8',
  },
  label: {
    fontSize: 14,
    color: '#CBD5E1',
    marginTop: 2,
  },
});

export default DonutChart;
