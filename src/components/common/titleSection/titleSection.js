import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../constants/theme/theme';
import { FontSize, Spacing } from '../../constants/constant/responsive/responsive';
import { Fonts } from '../../constants/fonts/font';

const TitleSection = ({
  title,
  onPress,
  showButton = false,
  iconName = 'plus',
  navigation
}) => {
  return (
    <View style={styles.container}>
      {/* Left: Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Right: Button or "View All" */}
      {showButton ? (
        <TouchableOpacity style={styles.iconButton} onPress={onPress}>
          <Ionicons name={iconName} size={18} color={colors.subtitleColor} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.viewAllContainer} onPress={onPress}>
          <Text style={styles.viewAllText}>View All</Text>
          <Ionicons name="chevron-forward" size={18} color={colors.buttonColor} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.md,
  },
  title: {
    fontSize: FontSize.md,
    fontFamily: Fonts.RalewaySemiBold,
    color: colors.titleColor,
  },
  iconButton: {
    // backgroundColor: '#E8F5EE',
    padding: 8,
    borderRadius: 8,
  },
  viewAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: FontSize.sm,
    color: colors.buttonColor,
    fontFamily: Fonts.RalewayMedium,
    marginRight: 4,
  },
});

export default TitleSection;
