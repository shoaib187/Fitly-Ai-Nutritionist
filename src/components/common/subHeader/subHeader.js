import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FontSize, Spacing } from '../../constants/constant/responsive/responsive';
import { Colors, colors } from '../../constants/theme/theme';
import { Fonts } from '../../constants/fonts/font';

const SubHeader = ({
  title = '',
  leftIcon = 'chevron-back',
  leftTitle = '',
  onLeftPress = null,
  showLeft = true,
  rightIcon = null,
  rightTitle = 'Clear all',
  onRightPress = null,
  showRight = false,
}) => {
  return (
    <View style={styles.container}>
      {/* Left Side */}
      {showLeft ? (
        <TouchableOpacity style={styles.left} onPress={onLeftPress}>
          {leftIcon && <Ionicons name={leftIcon} size={24} color="#2c3e50" />}
          {leftTitle ? <Text style={styles.leftTitle}>{leftTitle}</Text> : null}
        </TouchableOpacity>
      ) : <View style={styles.left} />}
      {/* Right Side */}
      {showRight ? (
        <TouchableOpacity style={styles.right} onPress={onRightPress}>
          {rightIcon && <Ionicons name={rightIcon} size={24} color="#2c3e50" />}
          {rightTitle ? <Text style={styles.rightTitle}>{rightTitle}</Text> : null}
        </TouchableOpacity>
      ) : <View style={styles.right} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
    backgroundColor: '#fff',
    borderBottomColor: Colors.light.borderColor,
    borderBottomWidth: 1
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  leftTitle: {
    fontSize: FontSize.md,
    marginLeft: 6,
    color: colors.titleColor,
    fontFamily: Fonts.RalewaySemiBold
  },
  center: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2c3e50',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 80,
    justifyContent: 'flex-end',
  },
  rightTitle: {
    fontSize: FontSize.sm,
    color: '#2c3e50',
    fontFamily: Fonts.RalewayMedium
  },
});

export default SubHeader;
