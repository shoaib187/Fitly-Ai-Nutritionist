import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { screens } from '../../components/constants/constant/screens';
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeStack from '../homeStack/homeStack';
import { colors } from '../../components/constants/theme/theme';
import DiscoverStack from '../discoverStack/discoverStack';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopColor: colors.buttonColor,
          height: 60,
          paddingBottom: 6,
        },
        tabBarActiveTintColor: colors.buttonColor,
        tabBarInactiveTintColor: colors.backdrop,
        tabBarHideOnKeyboard: true,

        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color, focused }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Discover':
              iconName = focused ? 'compass' : 'compass-outline';
              break;
            case 'Scan':
              iconName = focused ? 'camera' : 'camera-outline';
              break;
            case 'Mindful':
              iconName = focused ? 'heart' : 'heart-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = 'ellipse-outline';
          }

          return (
            <Ionicons
              name={iconName}
              size={focused ? 30 : 26}
              color={color}
              style={{
                transform: [{ scale: focused ? 1.1 : 1 }],
              }}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Discover" component={DiscoverStack} />
      <Tab.Screen name="Scan" component={screens.ScanHomePage} />
      <Tab.Screen name="Mindful" component={screens.MindfulHomePage} />
      <Tab.Screen name="Profile" component={screens.ProfileHomePage} />
    </Tab.Navigator>
  );
};

export { TabNavigation };
