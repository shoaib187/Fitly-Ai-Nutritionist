import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontSize, ImageStyle, Radius, Spacing } from '../../constants/constant/responsive/responsive';
import { colors, Colors } from '../../constants/theme/theme';
import { Fonts } from '../../constants/fonts/font';
import Ionicons from "react-native-vector-icons/Ionicons"
const Header = ({ userName, theme, date, navigation, subtitle, showDate = false }) => (
  <View style={styles.header}>
    <View style={{ flex: 1 }}>
      <Text style={[styles.greeting, { color: theme?.colors?.textPrimary }]}>{userName}</Text>
      {showDate && <Text style={[styles.subtitle]}>Today, {date?.slice(0, 10)}</Text>}
      {subtitle && <Text style={[styles.subtitle, { color: theme?.colors?.textSecondary }]}>{subtitle}</Text>}
    </View>
    <TouchableOpacity onPress={() => navigation.navigate("Notifications")} style={[styles.avatar, { borderColor: theme?.colors?.border }]}>
      <Ionicons name="notifications-outline" size={20} />
    </TouchableOpacity>
  </View>
);



const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.lg - 16,
  },
  greeting: {
    fontSize: FontSize.lg,
    color: Colors.dark.textPrimary,
    marginBottom: Spacing.xs,
    fontFamily: Fonts.RalewayBold
  },
  subtitle: {
    fontSize: FontSize.sm, color: colors.textColor, fontFamily: Fonts.RalewayMedium
  },
  avatar: {
    width: ImageStyle.width,
    height: ImageStyle.width,
    borderRadius: Radius.xl,
    overflow: 'hidden',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarImage: { width: '100%', height: '100%' },
});

export default Header;