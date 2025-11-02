import { NavigationContainer } from "@react-navigation/native"
import { TabNavigation } from "../tabNavigation/tabNavigation"
import OnboardingFlow from "../../screens/onboarding/onboardingFlow/onboardingFlow"

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
      {/* <OnboardingFlow /> */}
    </NavigationContainer>
  )
}

export { AppNavigator }