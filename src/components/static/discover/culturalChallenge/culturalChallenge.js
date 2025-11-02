import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../../constants/theme/theme';
import { Spacing, FontSize, Radius } from '../../../constants/constant/responsive/responsive';
import { Fonts } from '../../../constants/fonts/font';

const CulturalChallenge = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Cultural Challenges</Text>

    <TouchableOpacity style={styles.challengeCard} activeOpacity={0.8}>
      <LinearGradient colors={['#f9f9f9', '#fff']} style={styles.challengeGradient}>
        <View style={styles.challengeBadge}>
          <Text style={styles.challengeBadgeText}>New</Text>
        </View>

        <Text style={styles.challengeTitle}>7 Days of Mediterranean</Text>
        <Text style={styles.challengeDescription}>
          Discover the health benefits of Mediterranean cuisine
        </Text>

        <View style={styles.challengeStats}>
          <Text style={styles.challengeStat}>2.4k participants</Text>
          <Text style={styles.challengeStat}>Starts tomorrow</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  </View>
);

export default CulturalChallenge;

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: Spacing.md,
    marginBottom: Spacing.md,
  },
  sectionTitle: {
    fontSize: FontSize.lg,
    color: colors.titleColor,
    marginBottom: Spacing.md,
    fontFamily: Fonts.RalewayBold
  },
  challengeCard: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#699D7E80',
    borderWidth: 1,
    borderColor: "#eee"
  },
  challengeGradient: {
    padding: Spacing.lg,
  },
  challengeBadge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.buttonColor,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: Radius.lg,
    marginBottom: Spacing.sm,
  },
  challengeBadgeText: {
    fontSize: FontSize.xs,
    color: colors.white,
    fontFamily: Fonts.RalewaySemiBold,
    bottom: 1
  },
  challengeTitle: {
    fontSize: FontSize.md,
    // color: colors.white,
    marginBottom: Spacing.xs,
    fontFamily: Fonts.RalewaySemiBold
  },
  challengeDescription: {
    fontSize: FontSize.base,
    // color: 'rgba(255,255,255,0.8)',
    marginBottom: Spacing.md,
    fontFamily: Fonts.RalewayRegular
  },
  challengeStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  challengeStat: {
    fontSize: FontSize.xs,
    // color: 'rgba(255,255,255,0.7)',
    fontFamily: Fonts.RalewayMedium
  },
});
