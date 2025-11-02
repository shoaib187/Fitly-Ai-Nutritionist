import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import ScanOption from '../../../components/static/scan/scanOption/scanOption';
import RecentScans from '../../../components/static/scan/recentScans/recentScans';
import ScanResultModal from '../../../components/static/scan/scanResultModal/scanResultModal';
import Backdrop from '../../../components/common/backdrop/backdrop';
import Header from '../../../components/common/header/header';
import { useTheme } from '../../../components/context/themeContext/themeContext';
import { Spacing } from '../../../components/constants/constant/responsive/responsive';


export default function ScanHomePage() {
  const { theme } = useTheme()
  const [scanMode, setScanMode] = useState('camera');
  const [showResults, setShowResults] = useState(false);
  const [scannedFood, setScannedFood] = useState(null);

  const recentScans = [
    { id: '1', name: 'Greek Yogurt', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=150', calories: 180, time: '2 hours ago' },
    { id: '2', name: 'Chicken Salad', image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=150', calories: 320, time: '5 hours ago' },
  ];

  const simulateScan = () => {
    setScannedFood({
      name: 'Avocado Toast',
      image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=300',
      calories: 420,
      protein: 18,
      carbs: 35,
      fat: 22,
      confidence: 94,
    });
    setShowResults(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Backdrop />
      <Header userName={"Scan & Log Food"} subtitle="Choose your scanning method" theme={theme} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: Spacing.md, marginTop: Spacing.md }}>
          <ScanOption icon="camera" title="AI Camera Scan" description="Take a photo" mode="camera" color="#6366F1" scanMode={scanMode} onSelect={setScanMode} />
          <ScanOption icon="microphone" title="Voice Log" description="Describe your meal" mode="voice" color="#10B981" scanMode={scanMode} onSelect={setScanMode} />
          <ScanOption icon="barcode" title="Barcode Scan" description="Scan packaged food" mode="barcode" color="#F59E0B" scanMode={scanMode} onSelect={setScanMode} />
        </View>

        {/* <Scanner scanMode={scanMode} onScan={simulateScan} />
        <QuickLog /> */}
        <RecentScans scans={recentScans} />
      </ScrollView>

      <ScanResultModal
        visible={showResults}
        food={scannedFood}
        onRescan={() => setShowResults(false)}
        onConfirm={() => setShowResults(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingHorizontal: 24, paddingTop: 16 },
  title: { color: '#F8FAFC', fontWeight: 'bold', fontSize: 28 },
  subtitle: { color: '#94A3B8', fontSize: 16, marginTop: 4 },
});
