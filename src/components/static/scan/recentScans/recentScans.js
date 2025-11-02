import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontSize, Radius, Spacing } from '../../../constants/constant/responsive/responsive';
import { colors } from '../../../constants/theme/theme';
import { Fonts } from '../../../constants/fonts/font';

const RecentScans = ({ scans }) => (
  <View style={styles.section}>
    <Text style={styles.title}>Recent Scans</Text>
    {scans.map((item) => (
      <TouchableOpacity key={item.id} style={styles.item}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.calories}>{item.calories} calories</Text>
        </View>
        <Text style={styles.time}>{item.time}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  section: {
    marginTop: Spacing.lg,
    paddingHorizontal: Spacing.md
  },
  title: {
    color: colors.titleColor,
    marginBottom: Spacing.md,
    fontFamily: Fonts.RalewaySemiBold,
    fontSize: FontSize.lg,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: Radius.md,
    marginBottom: 12,
    alignItems: 'center',
  },
  image: { width: 50, height: 50, borderRadius: Radius.md, },
  info: { flex: 1, marginLeft: 12 },
  name: {
    color: colors.headingColor,
    fontFamily: Fonts.RalewaySemiBold,
  },
  calories: { color: '#94A3B8', fontSize: FontSize.base, fontFamily: Fonts.RalewayMedium },
  time: { color: '#64748B', fontSize: FontSize.sm, fontFamily: Fonts.RalewayRegular },
});

export default RecentScans;
