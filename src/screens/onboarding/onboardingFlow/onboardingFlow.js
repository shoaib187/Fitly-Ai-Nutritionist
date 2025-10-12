// src/screens/OnboardingFlow.js
import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WelcomeScreen from '../welcomeScreen/welcomeScreen';
import GoalScreen from '../goalScreen/goalScreen';
import LifestyleScreen from '../lifestyleScreen/lifestyleScreen';
import MindsetScreen from '../mindsetScreen/mindsetScreen';
import RestrictionsScreen from '../restrictionsScreen/restrictionsScreen';
import StruggleScreen from '../struggleScreen/struggleScreen';
import SummaryScreen from '../summaryScreen/summaryScreen';

const OnboardingFlow = () => {
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState({
    goal: '',
    lifestyle: '',
    mindset: '',
    restrictions: [],
    struggle: '',
  });

  const updateUserData = (key, value) => {
    setUserData(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const completeOnboarding = () => {
    // Here you would typically save userData to your backend/async storage
    console.log('User completed onboarding:', userData);
    navigation.navigate('Home');
  };

  const screens = [
    <WelcomeScreen onNext={nextStep} />,
    <GoalScreen
      onNext={nextStep}
      onBack={prevStep}
      selectedGoal={userData.goal}
      onSelectGoal={(goal) => updateUserData('goal', goal)}
    />,
    <LifestyleScreen
      onNext={nextStep}
      onBack={prevStep}
      selectedLifestyle={userData.lifestyle}
      onSelectLifestyle={(lifestyle) => updateUserData('lifestyle', lifestyle)}
    />,
    <MindsetScreen
      onNext={nextStep}
      onBack={prevStep}
      selectedMindset={userData.mindset}
      onSelectMindset={(mindset) => updateUserData('mindset', mindset)}
    />,
    <RestrictionsScreen
      onNext={nextStep}
      onBack={prevStep}
      selectedRestrictions={userData.restrictions}
      onSelectRestrictions={(restrictions) => updateUserData('restrictions', restrictions)}
    />,
    <StruggleScreen
      onNext={nextStep}
      onBack={prevStep}
      selectedStruggle={userData.struggle}
      onSelectStruggle={(struggle) => updateUserData('struggle', struggle)}
    />,
    <SummaryScreen
      userData={userData}
      onComplete={completeOnboarding}
      onBack={prevStep}
    />,
  ];

  return (
    <View style={{ flex: 1 }}>
      {screens[currentStep]}
    </View>
  );
};

export default OnboardingFlow;