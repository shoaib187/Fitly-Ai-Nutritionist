import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { colors } from '../../../constants/theme/theme';
import { Fonts } from '../../../constants/fonts/font';
import { FontSize, Layout, Spacing } from '../../../constants/constant/responsive/responsive';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

const MyLineChart = () => {
  const todayIndex = 3; // Tue (0=Sat, 1=Sun, 2=Mon, 3=Tue...)

  const data = [
    { value: 60, label: 'Sat' },
    { value: 80, label: 'Sun' },
    { value: 120, label: 'Mon' },
    { value: 150, label: 'Tue' },
    { value: 130, label: 'Wed' },
    { value: 110, label: 'Thr' },
    { value: 140, label: 'Fri' },
  ];

  // spacing adjusted to fill full width exactly
  // const chartWidth = width - Spacing.lg * 2;
  const chartWidth = Dimensions.get('window').width;

  const spacing = chartWidth / (data.length - 1);


  return (
    <View style={styles.container}>
      {/* Top Section */}
      <Text style={styles.mainValue}>1.120 kcal</Text>
      <Text style={styles.todayText}>Today</Text>

      {/* Chart Wrapper */}
      <View style={[styles.chartContainer, { width: chartWidth }]}>
        {/* Active day background bar */}
        <LinearGradient
          colors={[colors.backdrop, '#0D986A20']} // gradient top → bottom
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={[
            styles.activeDayBar,
            {
              left: todayIndex * spacing - 17, // center bar
            },
          ]}
        />

        {/* Line Chart */}
        <LineChart
          data={data}
          curved
          color={colors.backdrop}
          areaChart
          startFillColor={colors.backdrop}
          startOpacity={0.2}
          endOpacity={0.05}
          hideDataPoints
          yAxisThickness={0}
          xAxisThickness={0}
          hideRules
          hideYAxisText
          height={180}
          showDataPointOnFocus={true}
          initialSpacing={0}
          spacing={spacing}
          width={chartWidth}
          xAxisLabelTextStyle={{
            color: '#9E9E9E',
            fontSize: FontSize.sm,
            fontFamily: Fonts.RalewayMedium,
          }}
          showVerticalLines={false}
          showScrollIndicator={false}
          scrollToEnd={false}
          isAnimated
          pointerConfig={{
            pointerStripHeight: 180,
            pointerStripColor: '#CFE5D9',
            pointerStripWidth: 2,
            pointerColor: '#0D986A',
            radius: 5,
            pointerVanishDelay: 100000,
            activatePointersOnLongPress: false,
            activatePointersOnDrag: true, // shows tooltip while dragging
            pointerLabelComponent: (items) => (
              <View style={styles.tooltipContainer}>
                <Text style={styles.tooltipText}>{items[0].value} kcal</Text>
              </View>
            ),
          }}
        />
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Text style={styles.footerValue}>12.000 kcal</Text>
          <Text style={styles.footerLabel}>Eaten</Text>
        </View>
        <View style={styles.footerItem}>
          <Text style={[styles.footerValue, { color: '#E67E22' }]}>
            28.400 kcal
          </Text>
          <Text style={[styles.footerLabel, { color: '#E67E22' }]}>
            Burned
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: Spacing.sm,
  },
  mainValue: {
    fontSize: FontSize.xxl,
    fontFamily: Fonts.RalewayBold,
    color: '#000',
    alignSelf: 'center',
  },
  todayText: {
    fontSize: FontSize.md,
    color: '#8E8E8E',
    alignSelf: 'center',
    fontFamily: Fonts.RalewayMedium,
    marginBottom: 10,
  },
  chartContainer: {
    position: 'relative',
    height: 200,
    width: Layout.fullWidth,
    // backgroundColor: 'gold'
    // alignSelf: 'center',
  },
  activeDayBar: {
    position: 'absolute',
    width: 35,
    height: 200,
    borderRadius: 4,
    bottom: -16,
  },
  tooltipContainer: {
    backgroundColor: colors.buttonColor,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    minWidth: 70,
  },
  tooltipText: {
    color: '#fff',
    fontSize: FontSize.sm,
    fontFamily: Fonts.RalewayMedium,
    textAlign: 'center'
  },
  footer: {
    marginTop: Spacing.xl,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.md,
  },
  footerItem: {
    alignItems: 'center',
  },
  footerValue: {
    fontSize: FontSize.md,
    fontFamily: Fonts.RalewayBold,
    color: colors.titleColor,
  },
  footerLabel: {
    fontSize: 14,
    color: '#8E8E8E',
    fontFamily: Fonts.RalewayMedium,
  },
});

export default MyLineChart;
