import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FontSize, Radius, Spacing } from '../../constants/constant/responsive/responsive';
import { Fonts } from '../../constants/fonts/font';
import { colors } from '../../constants/theme/theme';

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <View style={styles.searchContainer}>
    <Ionicons name="search" size={20} color="#64748B" />
    <TextInput
      style={styles.searchInput}
      placeholder="Search recipes, ingredients..."
      placeholderTextColor="#64748B"
      value={searchQuery}
      onChangeText={setSearchQuery}
    />
  </View>
);

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginHorizontal: Spacing.md,
    marginVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: Radius.md,
  },
  searchInput: {
    flex: 1,
    marginLeft: Spacing.md,
    color: '#F8FAFC',
    fontSize: FontSize.md,
    fontFamily: Fonts.RalewayMedium
  },
})

export default SearchBar;
