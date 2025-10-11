// screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Animated,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const HomeScreen = ({ navigation }) => {
  const [greeting, setGreeting] = useState('');
  const [userName] = useState('Alex');
  const fadeAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const QuickActionCard = ({ icon, title, subtitle, color, onPress }) => (
    <TouchableOpacity style={styles.quickAction} onPress={onPress}>
      <LinearGradient
        colors={[color, `${color}DD`]}
        style={styles.quickActionGradient}
      >
        <MaterialCommunityIcons name={icon} size={28} color="#fff" />
        <Text style={styles.quickActionTitle}>{title}</Text>
        <Text style={styles.quickActionSubtitle}>{subtitle}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );

  const CulturalRecipeCard = ({ title, image, region, calories }) => (
    <TouchableOpacity style={styles.recipeCard}>
      <Image source={{ uri: image }} style={styles.recipeImage} />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.recipeGradient}
      >
        <View style={styles.recipeBadge}>
          <Text style={styles.recipeRegion}>{region}</Text>
        </View>
        <Text style={styles.recipeTitle}>{title}</Text>
        <Text style={styles.recipeCalories}>{calories} cal</Text>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <Animated.View style={[styles.header, { opacity: fadeAnim }]}>
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
        </Animated.View>

        {/* Rest of the HomeScreen content from previous code */}
        {/* ... (Mood Tracker, Today's Overview, Quick Actions, etc.) ... */}
      </ScrollView>
    </SafeAreaView>
  );
};

// Styles remain the same as previous implementation
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  // ... all previous styles
});

export default HomeScreen;


// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   StatusBar,
//   Image,
//   Animated,
// } from 'react-native';

// import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// export default function HomePage({ navigation }) {
//   const [greeting, setGreeting] = useState('');
//   const [userName, setUserName] = useState('Alex');
//   const fadeAnim = useState(new Animated.Value(0))[0];

//   useEffect(() => {
//     const hour = new Date().getHours();
//     if (hour < 12) setGreeting('Good Morning');
//     else if (hour < 18) setGreeting('Good Afternoon');
//     else setGreeting('Good Evening');

//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 1000,
//       useNativeDriver: true,
//     }).start();
//   }, []);

//   const QuickActionCard = ({ icon, title, subtitle, color, onPress }) => (
//     <TouchableOpacity style={styles.quickAction} onPress={onPress}>
//       <LinearGradient
//         colors={[color, `${color}DD`]}
//         style={styles.quickActionGradient}
//       >
//         <MaterialCommunityIcons name={icon} size={28} color="#fff" />
//         <Text style={styles.quickActionTitle}>{title}</Text>
//         <Text style={styles.quickActionSubtitle}>{subtitle}</Text>
//       </LinearGradient>
//     </TouchableOpacity>
//   );

//   const CulturalRecipeCard = ({ title, image, region, calories }) => (
//     <TouchableOpacity style={styles.recipeCard}>
//       <Image source={{ uri: image }} style={styles.recipeImage} />
//       <LinearGradient
//         colors={['transparent', 'rgba(0,0,0,0.8)']}
//         style={styles.recipeGradient}
//       >
//         <View style={styles.recipeBadge}>
//           <Text style={styles.recipeRegion}>{region}</Text>
//         </View>
//         <Text style={styles.recipeTitle}>{title}</Text>
//         <Text style={styles.recipeCalories}>{calories} cal</Text>
//       </LinearGradient>
//     </TouchableOpacity>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" />
//       <ScrollView showsVerticalScrollIndicator={false}>

//         {/* Header Section */}
//         <Animated.View style={[styles.header, { opacity: fadeAnim }]}>
//           <View>
//             <Text style={styles.greeting}>{greeting}, {userName} 👋</Text>
//             <Text style={styles.subtitle}>How are you feeling today?</Text>
//           </View>
//           <TouchableOpacity style={styles.avatar}>
//             <Image
//               source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150' }}
//               style={styles.avatarImage}
//             />
//           </TouchableOpacity>
//         </Animated.View>

//         {/* Mood Tracker */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Current Mood</Text>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.moodContainer}>
//             {['😊', '😴', '😰', '😡', '😞', '🎯'].map((mood, index) => (
//               <TouchableOpacity key={index} style={styles.moodPill}>
//                 <Text style={styles.moodEmoji}>{mood}</Text>
//               </TouchableOpacity>
//             ))}
//           </ScrollView>
//         </View>

//         {/* Today's Overview */}
//         <View style={styles.section}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>Today's Overview</Text>
//             <TouchableOpacity>
//               <Text style={styles.seeAllText}>Details</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.statsContainer}>
//             <View style={styles.statItem}>
//               <Text style={styles.statValue}>1,240</Text>
//               <Text style={styles.statLabel}>Calories</Text>
//               <Text style={styles.statSubLabel}>of 1,800 goal</Text>
//             </View>
//             <View style={styles.statDivider} />
//             <View style={styles.statItem}>
//               <Text style={styles.statValue}>128g</Text>
//               <Text style={styles.statLabel}>Protein</Text>
//               <Text style={styles.statSubLabel}>90% target</Text>
//             </View>
//             <View style={styles.statDivider} />
//             <View style={styles.statItem}>
//               <Text style={styles.statValue}>8/10</Text>
//               <Text style={styles.statLabel}>Hydration</Text>
//               <Text style={styles.statSubLabel}>Well done!</Text>
//             </View>
//           </View>
//         </View>

//         {/* Quick Actions */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Quick Actions</Text>
//           <View style={styles.quickActionsGrid}>
//             <QuickActionCard
//               icon="camera"
//               title="Scan Food"
//               subtitle="AI recognition"
//               color="#6366F1"
//               onPress={() => navigation.navigate('FoodScan')}
//             />
//             <QuickActionCard
//               icon="chef-hat"
//               title="Meal Plan"
//               subtitle="AI generated"
//               color="#10B981"
//               onPress={() => navigation.navigate('MealPlan')}
//             />
//             <QuickActionCard
//               icon="earth"
//               title="Global Recipes"
//               subtitle="50+ cuisines"
//               color="#F59E0B"
//               onPress={() => navigation.navigate('Recipes')}
//             />
//             <QuickActionCard
//               icon="brain"
//               title="Mindful Eat"
//               subtitle="5min exercise"
//               color="#EC4899"
//               onPress={() => navigation.navigate('Mindful')}
//             />
//           </View>
//         </View>

//         {/* Cultural Recipe Spotlight */}
//         <View style={styles.section}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>Global Taste Journey</Text>
//             <TouchableOpacity>
//               <Text style={styles.seeAllText}>Explore</Text>
//             </TouchableOpacity>
//           </View>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recipesContainer}>
//             <CulturalRecipeCard
//               title="Japanese Bento Bowl"
//               image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300"
//               region="Japan"
//               calories="420"
//             />
//             <CulturalRecipeCard
//               title="Mexican Quinoa Bowl"
//               image="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300"
//               region="Mexico"
//               calories="380"
//             />
//             <CulturalRecipeCard
//               title="Mediterranean Platter"
//               image="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300"
//               region="Greece"
//               calories="320"
//             />
//           </ScrollView>
//         </View>

//         {/* AI Insight Card */}
//         <TouchableOpacity style={styles.aiInsightCard}>
//           <LinearGradient
//             colors={['#667eea', '#764ba2']}
//             style={styles.aiInsightGradient}
//           >
//             <View style={styles.aiHeader}>
//               <Ionicons name="sparkles" size={24} color="#FFD700" />
//               <Text style={styles.aiTitle}>AI Nutrition Insight</Text>
//             </View>
//             <Text style={styles.aiMessage}>
//               "Based on your mood and activity, I recommend adding more omega-3 rich foods today. How about some salmon for dinner?"
//             </Text>
//             <View style={styles.aiFooter}>
//               <Text style={styles.aiFooterText}>Your Personal Nutrition Coach</Text>
//               <Ionicons name="chevron-forward" size={16} color="#fff" />
//             </View>
//           </LinearGradient>
//         </TouchableOpacity>

//       </ScrollView>

//       {/* Floating Action Button */}
//       <TouchableOpacity
//         style={styles.fab}
//         onPress={() => navigation.navigate('FoodLog')}
//       >
//         <Ionicons name="add" size={28} color="#fff" />
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0F172A',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 24,
//     paddingTop: 16,
//     paddingBottom: 8,
//   },
//   greeting: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#F8FAFC',
//     marginBottom: 4,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#94A3B8',
//   },
//   avatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     overflow: 'hidden',
//   },
//   avatarImage: {
//     width: '100%',
//     height: '100%',
//   },
//   section: {
//     marginTop: 24,
//     paddingHorizontal: 24,
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#F8FAFC',
//   },
//   seeAllText: {
//     fontSize: 14,
//     color: '#6366F1',
//     fontWeight: '600',
//   },
//   moodContainer: {
//     flexDirection: 'row',
//   },
//   moodPill: {
//     paddingHorizontal: 20,
//     paddingVertical: 12,
//     backgroundColor: '#1E293B',
//     borderRadius: 25,
//     marginRight: 12,
//   },
//   moodEmoji: {
//     fontSize: 20,
//   },
//   statsContainer: {
//     flexDirection: 'row',
//     backgroundColor: '#1E293B',
//     borderRadius: 16,
//     padding: 20,
//   },
//   statItem: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   statValue: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#F8FAFC',
//     marginBottom: 4,
//   },
//   statLabel: {
//     fontSize: 14,
//     color: '#94A3B8',
//     marginBottom: 2,
//   },
//   statSubLabel: {
//     fontSize: 12,
//     color: '#6366F1',
//   },
//   statDivider: {
//     width: 1,
//     backgroundColor: '#334155',
//     marginHorizontal: 10,
//   },
//   quickActionsGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   quickAction: {
//     width: '48%',
//     marginBottom: 12,
//     borderRadius: 16,
//     overflow: 'hidden',
//   },
//   quickActionGradient: {
//     padding: 16,
//     borderRadius: 16,
//     minHeight: 120,
//     justifyContent: 'space-between',
//   },
//   quickActionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginTop: 8,
//   },
//   quickActionSubtitle: {
//     fontSize: 12,
//     color: 'rgba(255,255,255,0.8)',
//     marginTop: 4,
//   },
//   recipesContainer: {
//     flexDirection: 'row',
//   },
//   recipeCard: {
//     width: 200,
//     height: 150,
//     borderRadius: 16,
//     marginRight: 12,
//     overflow: 'hidden',
//   },
//   recipeImage: {
//     width: '100%',
//     height: '100%',
//   },
//   recipeGradient: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     padding: 12,
//   },
//   recipeBadge: {
//     alignSelf: 'flex-start',
//     backgroundColor: '#6366F1',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   recipeRegion: {
//     fontSize: 10,
//     color: '#fff',
//     fontWeight: '600',
//   },
//   recipeTitle: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 2,
//   },
//   recipeCalories: {
//     fontSize: 12,
//     color: 'rgba(255,255,255,0.8)',
//   },
//   aiInsightCard: {
//     margin: 24,
//     borderRadius: 20,
//     overflow: 'hidden',
//     shadowColor: '#6366F1',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.3,
//     shadowRadius: 20,
//     elevation: 10,
//   },
//   aiInsightGradient: {
//     padding: 20,
//   },
//   aiHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   aiTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginLeft: 8,
//   },
//   aiMessage: {
//     fontSize: 14,
//     color: 'rgba(255,255,255,0.9)',
//     lineHeight: 20,
//     marginBottom: 16,
//   },
//   aiFooter: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   aiFooterText: {
//     fontSize: 12,
//     color: 'rgba(255,255,255,0.7)',
//   },
//   fab: {
//     position: 'absolute',
//     right: 24,
//     bottom: 24,
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: '#6366F1',
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 8,
//   },
// });
