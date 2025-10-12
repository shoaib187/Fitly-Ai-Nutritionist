import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FontSize, Radius, Spacing } from '../../constants/constant/responsive/responsive';
import { Fonts } from '../../constants/fonts/font';

const FilterSearchBar = ({ searchQuery, setSearchQuery }) => (
  <View style={styles.searchContainer}>
    <Ionicons name="search" size={20} color="#999" />
    <TextInput
      style={styles.searchInput}
      placeholder="Search recipes, ingredients..."
      placeholderTextColor="#999"
      value={searchQuery}
      onChangeText={setSearchQuery}
    />
    <TouchableOpacity style={styles.searchFilter}>
      <Ionicons name="options-outline" size={20} color="#4CAF50" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    marginHorizontal: Spacing.md,
    marginBottom: Spacing.md,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  searchInput: { flex: 1, marginLeft: Spacing.sm, fontSize: FontSize.md, color: '#333', fontFamily: Fonts.RalewayMedium },
  searchFilter: { padding: 4 },
});

export default FilterSearchBar;
