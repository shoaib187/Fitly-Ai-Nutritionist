import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
  Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../../constants/theme/theme';
import { FontSize, Radius, Spacing } from '../../../constants/constant/responsive/responsive';
import { Fonts } from '../../../constants/fonts/font';

const { width } = Dimensions.get('window');

const AIInsightCard = ({ theme }) => {
  const [pulseAnim] = useState(new Animated.Value(1));
  const [slideAnim] = useState(new Animated.Value(50));
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    // Staggered animations on mount
    Animated.sequence([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      })
    ]).start();

    // Continuous subtle pulse
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.02,
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const handlePress = () => {
    // Add press feedback
    Animated.sequence([
      Animated.timing(pulseAnim, {
        toValue: 0.98,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(pulseAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Animated.View style={[styles.cardContainer]}>
      <View style={styles.card}>
        <LinearGradient
          colors={[colors.buttonColor, colors.textColor, colors.backdrop]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <View style={styles.pattern}>
            <Ionicons name="nutrition" size={100} color="rgba(255,255,255,0.05)" style={styles.patternIcon} />
            <Ionicons name="fitness" size={80} color="rgba(255,255,255,0.03)" style={styles.patternIcon2} />
          </View>

          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Animated.View style={styles.sparkleContainer}>
                <Ionicons name="sparkles" size={20} color="gold" />
                <View style={[styles.sparkleDot, { backgroundColor: colors.buttonColor }]} />
              </Animated.View>
              <Text style={styles.title}>AI Nutrition Insight</Text>
            </View>
            <View style={[styles.badge, { backgroundColor: 'rgba(125,187,146,0.2)', borderColor: 'rgba(125,187,146,0.3)' }]}>
              <Text style={styles.badgeText}>LIVE</Text>
            </View>
          </View>

          <View style={[styles.messageContainer, { borderLeftColor: colors.buttonColor }]}>
            <Ionicons name="heart" size={16} color={colors.buttonColor} style={styles.messageIcon} />
            <Text style={styles.message}>
              "Based on your mood and activity patterns, I recommend adding more omega-3 rich foods today. How about some grilled salmon with quinoa for dinner?"
            </Text>
          </View>

          <View style={styles.metricsContainer}>
            <View style={styles.metric}>
              <Text style={styles.metricValue}>85%</Text>
              <Text style={styles.metricLabel}>Match</Text>
            </View>
            <View style={styles.metricDivider} />
            <View style={styles.metric}>
              <Text style={styles.metricValue}>15min</Text>
              <Text style={styles.metricLabel}>Prep Time</Text>
            </View>
            <View style={styles.metricDivider} />
            <View style={styles.metric}>
              <Ionicons name="flame" size={16} color={colors.buttonColor} />
              <Text style={styles.metricValue}>420cal</Text>
              <Text style={styles.metricLabel}>Estimate</Text>
            </View>
          </View>

          <View style={styles.footer}>
            <View style={styles.footerTextContainer}>
              <Text style={styles.footerText}>Your Personal Nutrition Coach</Text>
              <Text style={styles.footerSubtext}>Updated just now</Text>
            </View>
            <View style={[styles.ctaButton, { backgroundColor: 'rgba(125,187,146,0.2)', borderColor: 'rgba(125,187,146,0.3)' }]}>
              <Text style={styles.ctaText}>View Details</Text>
              <Ionicons name="chevron-forward" size={16} color={colors.white} />
            </View>
          </View>

          <View style={[styles.shineOverlay, { backgroundColor: 'rgba(125,187,146,0.1)' }]} />
        </LinearGradient>

      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: Spacing.md,
    borderRadius: Radius.md,
  },
  card: {
    borderRadius: Radius.md,
    overflow: 'hidden',
  },
  gradient: {
    padding: 16,
    position: 'relative',
  },
  pattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.6,
  },
  patternIcon: {
    position: 'absolute',
    top: -20,
    right: -20,
    transform: [{ rotate: '15deg' }],
  },
  patternIcon2: {
    position: 'absolute',
    bottom: -10,
    left: -10,
    transform: [{ rotate: '-10deg' }],
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    // backgroundColor: 'gold'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sparkleContainer: {
    position: 'relative',
  },
  sparkleDot: {
    position: 'absolute',
    top: 2,
    right: 2,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#FFD700',
  },
  title: {
    fontSize: FontSize.lg,
    color: '#fff',
    letterSpacing: -0.5,
    fontFamily: Fonts.RalewaySemiBold,
    marginLeft: Spacing.xs
  },
  badge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  badgeText: {
    fontSize: FontSize.xs,
    color: '#fff',
    letterSpacing: 0.5,
    fontFamily: Fonts.RalewayMedium
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: Spacing.md,
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 16,
    borderRadius: 16,
    borderLeftWidth: 3,
    borderLeftColor: '#FFD700',
  },
  messageIcon: {
    marginRight: 12,
    marginTop: 2,
    color: '#fff'
  },
  message: {
    fontSize: FontSize.md,
    color: 'rgba(255,255,255,0.95)',
    lineHeight: 22,
    flex: 1,
    fontFamily: Fonts.RalewayRegular
  },
  metricsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,
  },
  metric: {
    alignItems: 'center',
    flex: 1,
  },
  metricValue: {
    fontSize: FontSize.md,
    color: '#fff',
    marginBottom: 4,
    fontFamily: Fonts.RalewayBold
  },
  metricLabel: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: FontSize.xs,
    fontFamily: Fonts.RalewayMedium
  },
  metricDivider: {
    width: 1,
    height: 30,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerTextContainer: {
    flex: 1,
  },
  footerText: {
    fontSize: FontSize.md,
    fontFamily: Fonts.RalewayMedium,
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 2,
  },
  footerSubtext: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.6)',
    fontFamily: Fonts.RalewayMedium
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgb(255, 255, 255)',
    // borderColor: 'red'
  },
  ctaText: {
    fontSize: FontSize.base,
    color: '#fff',
    marginRight: 4,
    letterSpacing: 0.5,
    fontFamily: Fonts.RalewayMedium
  },
  shineOverlay: {
    position: 'absolute',
    top: -100,
    left: -100,
    width: 200,
    height: 200,
    backgroundColor: 'rgba(255,255,255,0.1)',
    transform: [{ rotate: '45deg' }],
    borderRadius: 40,
  },
});

export default AIInsightCard;