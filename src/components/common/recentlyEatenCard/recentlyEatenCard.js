
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { FontSize, Radius, Spacing } from "../../constants/constant/responsive/responsive";
import { colors } from "../../constants/theme/theme";
import { Fonts } from "../../constants/fonts/font";

export default function RecentlyEatenCard({ onPress, item }) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.7}>
      <View style={styles.leftSection}>
        <Image
          source={{ uri: "https://media.istockphoto.com/id/168340083/photo/choosemyplate-healthy-food-and-plate-of-usda-balanced-diet-recommendation.jpg?s=612x612&w=0&k=20&c=S5OYuPg-n1fuOOgReQf9xPuFgA1i-UO54Uj2u1RD7iU=" }}
          style={styles.image}
        />
        <View style={styles.textSection}>
          <Text style={styles.title}>Telor ceplok</Text>
          <View style={styles.infoRow}>
            <Ionicons name="time-outline" size={14} color="#555" />
            <Text style={styles.infoText}>9 mins</Text>
            <View style={styles.dot} />
            <Ionicons name="star" size={14} color="#FDBD35" />
            <Text style={styles.infoText}>4.3</Text>
          </View>
        </View>
      </View>
      <Feather name="chevron-right" size={20} color="#555" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: Radius.lg,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: Spacing.md,
    marginVertical: Spacing.xs,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 12,
    marginRight: 10,
  },
  textSection: {
    justifyContent: "center",
  },
  title: {
    fontSize: FontSize.md,
    color: colors.titleColor,
    marginBottom: 2,
    fontFamily: Fonts.RalewaySemiBold
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoText: {
    fontSize: FontSize.sm,
    fontFamily: Fonts.RalewayMedium,
    color: "#555",
    marginLeft: 4,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#bbb",
    marginHorizontal: 6,
  },
});
