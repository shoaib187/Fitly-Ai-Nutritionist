import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Header = ({ greeting, userName }) => (
  <View style={styles.header}>
    <View>
      <Text style={styles.greeting}>{greeting}, {userName} 👋</Text>
      <Text style={styles.subtitle}>How are you feeling today?</Text>
    </View>
    <TouchableOpacity style={styles.avatar}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150' }}
        style={styles.avatarImage}
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, paddingTop: 16, paddingBottom: 8 },
  greeting: { fontSize: 28, fontWeight: 'bold', color: '#F8FAFC', marginBottom: 4 },
  subtitle: { fontSize: 16, color: '#94A3B8' },
  avatar: { width: 50, height: 50, borderRadius: 25, overflow: 'hidden', borderWidth: 2, borderColor: '#6366F1' },
  avatarImage: { width: '100%', height: '100%' },
});

export default Header;