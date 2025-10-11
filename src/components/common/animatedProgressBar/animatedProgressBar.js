import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const AnimatedProgressBar = ({ progress, color, height = 8 }) => {
  const widthAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: progress,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  return (
    <View style={[styles.container, { height }]}>
      <Animated.View
        style={[
          styles.fill,
          {
            backgroundColor: color,
            width: widthAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%'],
            }),
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#334155',
    borderRadius: 10,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: 10,
  },
});

export default AnimatedProgressBar;
