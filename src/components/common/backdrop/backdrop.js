import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../constants/theme/theme'; // adjust path if needed

export default function Backdrop() {
  return (
    <View style={StyleSheet.absoluteFill}>
      <LinearGradient
        colors={[colors.backdrop, 'transparent']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.3 }} // only top 30% colored
        locations={[0, 1]}
        style={styles.gradient}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
});
