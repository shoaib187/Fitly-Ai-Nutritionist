import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CulturalRecipes = () => {
  const recipes = [
    { title: 'Japanese Bento Bowl', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300', region: 'Japan', calories: 420 },
    { title: 'Mexican Quinoa Bowl', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300', region: 'Mexico', calories: 380 },
    { title: 'Mediterranean Platter', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300', region: 'Greece', calories: 320 },
  ];

  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <Text style={styles.title}>Global Taste Journey</Text>
        <TouchableOpacity>
          <Text style={styles.link}>Explore</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {recipes.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} style={styles.gradient}>
              <View style={styles.badge}>
                <Text style={styles.region}>{item.region}</Text>
              </View>
              <Text style={styles.recipeTitle}>{item.title}</Text>
              <Text style={styles.calories}>{item.calories} cal</Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: { marginTop: 24, paddingHorizontal: 24 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#F8FAFC' },
  link: { fontSize: 14, color: '#6366F1', fontWeight: '600' },
  card: { width: 200, height: 150, borderRadius: 16, marginRight: 12, overflow: 'hidden' },
  image: { width: '100%', height: '100%' },
  gradient: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 12 },
  badge: { backgroundColor: '#6366F1', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8, marginBottom: 8 },
  region: { fontSize: 10, color: '#fff', fontWeight: '600' },
  recipeTitle: { fontSize: 14, fontWeight: 'bold', color: '#fff', marginBottom: 2 },
  calories: { fontSize: 12, color: 'rgba(255,255,255,0.8)' },
});

export default CulturalRecipes;
