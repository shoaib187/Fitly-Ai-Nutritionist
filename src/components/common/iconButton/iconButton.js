import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../constants/theme/theme';
import { Spacing } from '../../constants/constant/responsive/responsive';

const IconButton = ({
  name,
  size = 24,
  color = colors.white,
  backgroundColor = colors.buttonColor,
  onPress = () => { },
  style = {},
  borderRadius = Spacing.xl,
  padding = Spacing.sm,
  elevation
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,

        { backgroundColor, borderRadius, padding, elevation },
        style
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Ionicons name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IconButton;
