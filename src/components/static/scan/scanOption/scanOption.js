import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../../constants/theme/theme';
import { FontSize } from '../../../constants/constant/responsive/responsive';
import { Fonts } from '../../../constants/fonts/font';

const ScanOption = ({ icon, title, description, mode, color, scanMode, onSelect }) => {
  return (
    <TouchableOpacity
      style={[styles.scanOption,]}
      onPress={() => onSelect(mode)}
    >
      <LinearGradient colors={[color, `${color}DD`]} style={styles.iconContainer}>
        <MaterialCommunityIcons name={icon} size={32} color="#fff" />
      </LinearGradient>

      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{description}</Text>
      </View>

      {scanMode === mode && <Ionicons name="checkmark-circle" size={24} color={color} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  scanOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  scanOptionActive: {
    borderColor: '#6366F1',
    borderWidth: 1,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  title: {
    fontSize: FontSize.md,
    fontFamily: Fonts.RalewaySemiBold
  },
  desc: {
    fontSize: FontSize.base,
    color: '#94A3B8',
    fontFamily: Fonts.RalewayMedium
  },
});

export default ScanOption;
