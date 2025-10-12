import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { FontSize, Layout, Spacing } from '../../constants/constant/responsive/responsive';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../button/button';

export default function GradientOffer({ title = "Premium Access", description = "Unlock exclusive features", onPress }) {
  return (

    <LinearGradient
      style={styles.wrapper}
      colors={['transparent', '#FFFFFF']} // gold to orange gradient
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <View style={styles.inner}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Button title={"Unlock Premium"} width={"100%"} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    width: Layout.fullWidth,
    padding: Spacing.md,
    paddingVertical: Spacing.sm,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: FontSize.lg,
    fontWeight: 'bold',
    // color: '#fff',
    marginBottom: Spacing.xs,
  },
  description: {
    fontSize: FontSize.md,
    // color: '#fff',
  },
});
