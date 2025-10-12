import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../../components/common/header/header';
import OverviewSection from '../../../components/static/homepage/overviewSection/overviewSection';
import QuickActions from '../../../components/static/homepage/quickActions/quickActions';
import CulturalRecipes from '../../../components/static/homepage/culturalRecipes/culturalRecipes';
import AIInsightCard from '../../../components/static/homepage/aIInsightCard/aIInsightCard';
import { colors, Colors } from '../../../components/constants/theme/theme';
import { useTheme } from '../../../components/context/themeContext/themeContext';

import GradientOffer from '../../../components/common/gradientOffer/gradientOffer';
import Button from '../../../components/common/button/button';

import Backdrop from '../../../components/common/backdrop/backdrop';
import MyBarChart from '../../../components/common/charts/barCharts/barChart';
import TitleSection from '../../../components/common/titleSection/titleSection';
import IconButton from '../../../components/common/iconButton/iconButton';
import { Spacing } from '../../../components/constants/constant/responsive/responsive';
import DailyNutritionStats from '../../../components/static/homepage/dailyNutritionStats/dailyNutritionStats';
import ConsultBanner from '../../../components/static/homepage/consultBanner/consultBanner';

export default function HomePage({ navigation }) {
  const { theme, toggleTheme } = useTheme()
  const [greeting, setGreeting] = useState('');

  const date = new Date()
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);


  const statsData = {
    calories: { consumed: 1240, goal: 1800, color: '#6366F1' },
    protein: { consumed: 128, goal: 142, color: '#10B981' },
    hydration: { consumed: 8, goal: 10, color: '#0EA5E9' },
  };
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme?.colors?.background }]}>
      <StatusBar animated showHideTransition={"fade"} backgroundColor={colors.backdrop} barStyle={'dark-content'} />
      <Backdrop />
      <Header navigation={navigation} theme={theme} date={formattedDate} userName={"Hi, Shabii"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TitleSection
          title="Burned weekly track"
          showButton
          iconName="ellipsis-horizontal"
        />
        <MyBarChart />
        <ConsultBanner />
        {/* <OverviewSection theme={theme} statsData={statsData} /> */}
        <CulturalRecipes theme={theme} />
        <QuickActions theme={theme} navigation={navigation} />
        <AIInsightCard theme={theme} />
      </ScrollView>
      {/* <GradientOffer /> */}
      <IconButton elevation={10} padding={Spacing.md} name={"add"} style={{ position: 'absolute', bottom: Spacing.md, right: Spacing.md }} />
      {/* <Button title={"Toggle theme"} onPress={toggleTheme} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background
  },
  fab: {
    position: 'absolute',
    right: 24, bottom: 24, width: 60, height: 60, borderRadius: 30,
    backgroundColor: '#6366F1', justifyContent: 'center', alignItems: 'center',
  },
});



// // HomeScreen.js
// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   StyleSheet,
//   TouchableOpacity,
//   StatusBar,
//   SafeAreaView,
//   Image,
//   Dimensions,
//   Animated,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const { width } = Dimensions.get('window');

// const HomeScreen = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(true);
//   const [userData, setUserData] = useState({
//     name: 'Sarah',
//     dailyCalories: 1800,
//     consumedCalories: 1200,
//     macros: {
//       carbs: { consumed: 45, goal: 60 },
//       protein: { consumed: 80, goal: 100 },
//       fat: { consumed: 30, goal: 40 },
//     },
//     water: { consumed: 4, goal: 8 },
//   });

//   const fadeAnim = useState(new Animated.Value(0))[0];

//   useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 800,
//       useNativeDriver: true,
//     }).start();
//   }, []);

//   // Hero Section for logged-out users
//   const HeroSection = () => (
//     <View style={styles.heroContainer}>
//       <Image
//         source={{ uri: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500' }}
//         style={styles.heroImage}
//       />
//       <View style={styles.heroOverlay}>
//         <Text style={styles.heroTitle}>Reach Your Health Goals, Your Way</Text>
//         <Text style={styles.heroSubtitle}>
//           Get a custom meal plan, track your macros, and build healthy habits that last
//         </Text>
//         <TouchableOpacity style={styles.primaryButton}>
//           <Text style={styles.primaryButtonText}>Start Your Journey</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   // Progress Ring Component
//   const ProgressRing = ({ progress, size = 120, strokeWidth = 8, color = '#4CAF50' }) => {
//     const radius = (size - strokeWidth) / 2;
//     const circumference = radius * 2 * Math.PI;
//     const alpha = progress > 1 ? 1 : progress;
//     const strokeDashoffset = circumference - alpha * circumference;

//     return (
//       <View style={[styles.ringContainer, { width: size, height: size }]}>
//         <Svg width={size} height={size}>
//           {/* Background Circle */}
//           <Circle
//             stroke="#E0E0E0"
//             fill="none"
//             cx={size / 2}
//             cy={size / 2}
//             r={radius}
//             strokeWidth={strokeWidth}
//           />
//           {/* Progress Circle */}
//           <Circle
//             stroke={color}
//             fill="none"
//             cx={size / 2}
//             cy={size / 2}
//             r={radius}
//             strokeWidth={strokeWidth}
//             strokeDasharray={`${circumference} ${circumference}`}
//             strokeDashoffset={strokeDashoffset}
//             strokeLinecap="round"
//             rotation="-90"
//             origin={`${size / 2}, ${size / 2}`}
//           />
//         </Svg>
//         <View style={styles.ringContent}>
//           <Text style={styles.calorieCount}>{userData.consumedCalories}</Text>
//           <Text style={styles.calorieGoal}>/ {userData.dailyCalories}</Text>
//           <Text style={styles.calorieLabel}>CALORIES</Text>
//         </View>
//       </View>
//     );
//   };

//   // Macro Progress Component
//   const MacroProgress = ({ label, consumed, goal, color }) => (
//     <View style={styles.macroItem}>
//       <View style={styles.macroHeader}>
//         <Text style={styles.macroLabel}>{label}</Text>
//         <Text style={styles.macroCount}>{consumed}g / {goal}g</Text>
//       </View>
//       <View style={styles.macroBar}>
//         <View
//           style={[
//             styles.macroProgress,
//             {
//               width: `${(consumed / goal) * 100}%`,
//               backgroundColor: color
//             }
//           ]}
//         />
//       </View>
//     </View>
//   );

//   // Meal Item Component
//   const MealItem = ({ meal, items, onPress }) => (
//     <TouchableOpacity style={styles.mealCard} onPress={onPress}>
//       <View style={styles.mealHeader}>
//         <Text style={styles.mealTitle}>{meal}</Text>
//         <Icon name="chevron-right" size={20} color="#666" />
//       </View>
//       <Text style={styles.mealItems}>
//         {items || 'Click to log your meal'}
//       </Text>
//     </TouchableOpacity>
//   );

//   // Quick Action Button
//   const QuickActionButton = ({ icon, label, onPress, color = '#4CAF50' }) => (
//     <TouchableOpacity style={styles.quickAction} onPress={onPress}>
//       <View style={[styles.actionIcon, { backgroundColor: color }]}>
//         <Icon name={icon} size={24} color="#fff" />
//       </View>
//       <Text style={styles.actionLabel}>{label}</Text>
//     </TouchableOpacity>
//   );

//   if (!isLoggedIn) {
//     return (
//       <SafeAreaView style={styles.container}>
//         <ScrollView style={styles.scrollView}>
//           <HeroSection />
//           {/* Features Section */}
//           <View style={styles.featuresSection}>
//             <Text style={styles.sectionTitle}>How We Help You Succeed</Text>
//             {[
//               { icon: 'calculate', title: 'Personalized Plans', desc: 'Tailored to your diet, allergies, and goals' },
//               { icon: 'assessment', title: 'Smart Tracking', desc: 'Log meals in seconds with our barcode scanner' },
//               { icon: 'menu-book', title: 'Recipe Library', desc: 'Thousands of healthy, delicious recipes' },
//               { icon: 'people', title: 'Expert Guidance', desc: 'Access articles by certified dietitians' },
//             ].map((feature, index) => (
//               <View key={index} style={styles.featureItem}>
//                 <Icon name={feature.icon} size={32} color="#4CAF50" />
//                 <View style={styles.featureText}>
//                   <Text style={styles.featureTitle}>{feature.title}</Text>
//                   <Text style={styles.featureDesc}>{feature.desc}</Text>
//                 </View>
//               </View>
//             ))}
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="#fff" />
//       <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
//         <Animated.View style={{ opacity: fadeAnim }}>

//           {/* Welcome Header */}
//           <View style={styles.welcomeSection}>
//             <View>
//               <Text style={styles.welcomeText}>Good Morning,</Text>
//               <Text style={styles.userName}>{userData.name}!</Text>
//             </View>
//             <TouchableOpacity style={styles.profileButton}>
//               <Ionicons name="person-circle" size={32} color="#4CAF50" />
//             </TouchableOpacity>
//           </View>

//           {/* Daily Progress */}
//           <View style={styles.progressSection}>
//             <ProgressRing
//               progress={userData.consumedCalories / userData.dailyCalories}
//             />

//             <View style={styles.macrosContainer}>
//               <MacroProgress
//                 label="Carbs"
//                 consumed={userData.macros.carbs.consumed}
//                 goal={userData.macros.carbs.goal}
//                 color="#FF9800"
//               />
//               <MacroProgress
//                 label="Protein"
//                 consumed={userData.macros.protein.consumed}
//                 goal={userData.macros.protein.goal}
//                 color="#F44336"
//               />
//               <MacroProgress
//                 label="Fat"
//                 consumed={userData.macros.fat.consumed}
//                 goal={userData.macros.fat.goal}
//                 color="#2196F3"
//               />
//             </View>
//           </View>

//           {/* Water Tracking */}
//           <View style={styles.waterSection}>
//             <Text style={styles.sectionTitle}>Water Intake</Text>
//             <View style={styles.waterContainer}>
//               {[...Array(8)].map((_, index) => (
//                 <View
//                   key={index}
//                   style={[
//                     styles.waterGlass,
//                     index < userData.water.consumed && styles.waterGlassFilled,
//                   ]}
//                 >
//                   <Ionicons
//                     name="water"
//                     size={24}
//                     color={index < userData.water.consumed ? '#2196F3' : '#E0E0E0'}
//                   />
//                 </View>
//               ))}
//             </View>
//           </View>

//           {/* Quick Actions */}
//           <View style={styles.quickActionsSection}>
//             <Text style={styles.sectionTitle}>Quick Actions</Text>
//             <View style={styles.quickActionsRow}>
//               <QuickActionButton icon="restaurant" label="Add Food" />
//               <QuickActionButton icon="local-drink" label="Log Water" color="#2196F3" />
//               <QuickActionButton icon="fitness-center" label="Exercise" color="#FF9800" />
//             </View>
//           </View>

//           {/* Today's Meals */}
//           <View style={styles.mealsSection}>
//             <Text style={styles.sectionTitle}>Today's Meals</Text>
//             <MealItem
//               meal="Breakfast"
//               items="Oatmeal & Berries - 350 cal"
//             />
//             <MealItem
//               meal="Lunch"
//               items="Click to log your lunch"
//             />
//             <MealItem
//               meal="Dinner"
//               items="Suggested: Grilled Salmon with quinoa"
//             />
//             <MealItem
//               meal="Snacks"
//               items="Click to log a snack"
//             />
//           </View>

//           {/* Quick Recipes */}
//           <View style={styles.recipesSection}>
//             <View style={styles.sectionHeader}>
//               <Text style={styles.sectionTitle}>Quick Recipes</Text>
//               <TouchableOpacity>
//                 <Text style={styles.seeAllText}>See All</Text>
//               </TouchableOpacity>
//             </View>
//             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//               <View style={styles.recipeCard}>
//                 <Image
//                   source={{ uri: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300' }}
//                   style={styles.recipeImage}
//                 />
//                 <Text style={styles.recipeTitle}>15-Min Lemon Chicken</Text>
//                 <Text style={styles.recipeInfo}>320 cal • 35g protein</Text>
//               </View>
//               <View style={styles.recipeCard}>
//                 <Image
//                   source={{ uri: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300' }}
//                   style={styles.recipeImage}
//                 />
//                 <Text style={styles.recipeTitle}>High-Protein Smoothie</Text>
//                 <Text style={styles.recipeInfo}>280 cal • 25g protein</Text>
//               </View>
//             </ScrollView>
//           </View>

//         </Animated.View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// // Import Svg and Circle for the progress ring
// import Svg, { Circle } from 'react-native-svg';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   scrollView: {
//     flex: 1,
//   },
//   // Hero Section Styles
//   heroContainer: {
//     height: 500,
//     position: 'relative',
//   },
//   heroImage: {
//     width: '100%',
//     height: '100%',
//   },
//   heroOverlay: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: 'rgba(0,0,0,0.6)',
//     padding: 24,
//   },
//   heroTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 8,
//   },
//   heroSubtitle: {
//     fontSize: 16,
//     color: '#fff',
//     marginBottom: 24,
//     lineHeight: 22,
//   },
//   primaryButton: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 16,
//     paddingHorizontal: 32,
//     borderRadius: 12,
//     alignItems: 'center',
//   },
//   primaryButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   // Logged-in User Styles
//   welcomeSection: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     paddingBottom: 10,
//   },
//   welcomeText: {
//     fontSize: 18,
//     color: '#666',
//   },
//   userName: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   profileButton: {
//     padding: 4,
//   },
//   progressSection: {
//     alignItems: 'center',
//     paddingVertical: 20,
//     paddingHorizontal: 20,
//   },
//   ringContainer: {
//     position: 'relative',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 20,
//   },
//   ringContent: {
//     position: 'absolute',
//     alignItems: 'center',
//   },
//   calorieCount: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   calorieGoal: {
//     fontSize: 16,
//     color: '#666',
//   },
//   calorieLabel: {
//     fontSize: 12,
//     color: '#999',
//     marginTop: 4,
//   },
//   macrosContainer: {
//     width: '100%',
//     gap: 12,
//   },
//   macroItem: {
//     marginBottom: 8,
//   },
//   macroHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 4,
//   },
//   macroLabel: {
//     fontSize: 14,
//     color: '#666',
//     fontWeight: '500',
//   },
//   macroCount: {
//     fontSize: 14,
//     color: '#333',
//     fontWeight: '500',
//   },
//   macroBar: {
//     height: 6,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 3,
//     overflow: 'hidden',
//   },
//   macroProgress: {
//     height: '100%',
//     borderRadius: 3,
//   },
//   waterSection: {
//     paddingHorizontal: 20,
//     paddingVertical: 16,
//   },
//   waterContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 12,
//   },
//   waterGlass: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     borderWidth: 2,
//     borderColor: '#E0E0E0',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   waterGlassFilled: {
//     borderColor: '#2196F3',
//     backgroundColor: '#E3F2FD',
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 12,
//   },
//   quickActionsSection: {
//     paddingHorizontal: 20,
//     paddingVertical: 16,
//   },
//   quickActionsRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
//   quickAction: {
//     alignItems: 'center',
//   },
//   actionIcon: {
//     width: 56,
//     height: 56,
//     borderRadius: 28,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 8,
//   },
//   actionLabel: {
//     fontSize: 12,
//     color: '#666',
//     fontWeight: '500',
//   },
//   mealsSection: {
//     paddingHorizontal: 20,
//     paddingVertical: 16,
//   },
//   mealCard: {
//     backgroundColor: '#f8f9fa',
//     padding: 16,
//     borderRadius: 12,
//     marginBottom: 8,
//   },
//   mealHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 4,
//   },
//   mealTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   mealItems: {
//     fontSize: 14,
//     color: '#666',
//   },
//   recipesSection: {
//     paddingHorizontal: 20,
//     paddingVertical: 16,
//     marginBottom: 20,
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   seeAllText: {
//     color: '#4CAF50',
//     fontWeight: '500',
//   },
//   recipeCard: {
//     width: 160,
//     marginRight: 12,
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   recipeImage: {
//     width: '100%',
//     height: 120,
//     borderTopLeftRadius: 12,
//     borderTopRightRadius: 12,
//   },
//   recipeTitle: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#333',
//     padding: 8,
//   },
//   recipeInfo: {
//     fontSize: 12,
//     color: '#666',
//     paddingHorizontal: 8,
//     paddingBottom: 8,
//   },
//   // Features Section Styles
//   featuresSection: {
//     padding: 24,
//   },
//   featureItem: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     marginBottom: 24,
//   },
//   featureText: {
//     flex: 1,
//     marginLeft: 16,
//   },
//   featureTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 4,
//   },
//   featureDesc: {
//     fontSize: 14,
//     color: '#666',
//     lineHeight: 20,
//   },
// });

// export default HomeScreen;