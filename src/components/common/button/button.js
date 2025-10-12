import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontSize, Layout, Radius, Spacing } from '../../constants/constant/responsive/responsive';
import { colors } from '../../constants/theme/theme';


const Button = ({
  title,
  onPress,
  backgroundColor = colors.buttonColor,
  textColor = '#fff',
  borderRadius = Radius.md,
  width = Layout.fullWidth,  // responsive width (50% of screen width by default)
  height = 50,               // can also use Layout.hp('6%') if you want
  style,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor, borderRadius, width, height }, style]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor, fontSize: FontSize.md }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: Spacing.sm,
    shadowColor: '#444',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontWeight: 'bold',
  },
});

export default Button;
