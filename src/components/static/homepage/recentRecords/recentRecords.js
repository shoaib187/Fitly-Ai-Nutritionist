import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import RecentlyEatenCard from '../../../common/recentlyEatenCard/recentlyEatenCard'
import { FontSize, Spacing } from '../../../constants/constant/responsive/responsive'
import { Fonts } from '../../../constants/fonts/font'

export default function RecentRecords() {
  return (
    <View style={{ backgroundColor: '#f4f4f4', paddingHorizontal: Spacing.md, paddingVertical: Spacing.md }}>
      <Text style={styles.title}>
        Recently eaten
      </Text>
      <FlatList
        data={[...Array(7).fill()]}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, i }) => {
          return (
            <RecentlyEatenCard />
          )
        }}

      />
    </View>
  )
}
const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.RalewaySemiBold,
    fontSize: FontSize.lg,
    marginBottom: Spacing.xs
  }
})