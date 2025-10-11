// screens/ScanScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  Modal,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
export default function ScanHomePage({ navigation }) {
  const [scanMode, setScanMode] = useState('camera'); // 'camera', 'voice', 'barcode'
  const [showResults, setShowResults] = useState(false);
  const [scannedFood, setScannedFood] = useState(null);

  const recentScans = [
    {
      id: '1',
      name: 'Greek Yogurt with Berries',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=150',
      calories: 180,
      time: '2 hours ago',
    },
    {
      id: '2',
      name: 'Chicken Salad',
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=150',
      calories: 320,
      time: '5 hours ago',
    },
  ];

  const ScanOption = ({ icon, title, description, mode, color }) => (
    <TouchableOpacity
      style={[
        styles.scanOption,
        scanMode === mode && styles.scanOptionActive
      ]}
      onPress={() => setScanMode(mode)}
    >
      <LinearGradient
        colors={[color, `${color}DD`]}
        style={styles.scanOptionIcon}
      >
        <MaterialCommunityIcons name={icon} size={32} color="#fff" />
      </LinearGradient>
      <View style={styles.scanOptionText}>
        <Text style={styles.scanOptionTitle}>{title}</Text>
        <Text style={styles.scanOptionDescription}>{description}</Text>
      </View>
      {scanMode === mode && (
        <Ionicons name="checkmark-circle" size={24} color={color} />
      )}
    </TouchableOpacity>
  );

  const simulateScan = () => {
    setScannedFood({
      name: 'Avocado Toast with Eggs',
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
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Scan & Log Food</Text>
          <Text style={styles.subtitle}>Choose your scanning method</Text>
        </View>

        {/* Scan Options */}
        <View style={styles.scanOptions}>
          <ScanOption
            icon="camera"
            title="AI Camera Scan"
            description="Take a photo of your food"
            mode="camera"
            color="#6366F1"
          />
          <ScanOption
            icon="microphone"
            title="Voice Log"
            description="Describe what you're eating"
            mode="voice"
            color="#10B981"
          />
          <ScanOption
            icon="barcode"
            title="Barcode Scan"
            description="Scan packaged food items"
            mode="barcode"
            color="#F59E0B"
          />
        </View>

        {/* Main Scanner */}
        <View style={styles.scannerContainer}>
          <LinearGradient
            colors={['#1E293B', '#334155']}
            style={styles.scanner}
          >
            <View style={styles.scannerPlaceholder}>
              <Ionicons name="camera" size={64} color="#64748B" />
              <Text style={styles.scannerText}>
                {scanMode === 'camera' && 'Point camera at food'}
                {scanMode === 'voice' && 'Tap to start speaking'}
                {scanMode === 'barcode' && 'Align barcode with frame'}
              </Text>
            </View>
          </LinearGradient>

          <TouchableOpacity style={styles.scanButton} onPress={simulateScan}>
            <LinearGradient
              colors={['#6366F1', '#4F46E5']}
              style={styles.scanButtonGradient}
            >
              <Ionicons name="camera" size={32} color="#fff" />
              <Text style={styles.scanButtonText}>
                {scanMode === 'camera' && 'Capture Food'}
                {scanMode === 'voice' && 'Start Speaking'}
                {scanMode === 'barcode' && 'Scan Barcode'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Quick Log Suggestions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Log</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.quickLogContainer}>
            {['🍎 Apple', '🥛 Milk', '🍞 Bread', '🥚 Eggs', '🥦 Broccoli', '🐔 Chicken'].map((item, index) => (
              <TouchableOpacity key={index} style={styles.quickLogItem}>
                <Text style={styles.quickLogEmoji}>{item.split(' ')[0]}</Text>
                <Text style={styles.quickLogText}>{item.split(' ')[1]}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Recent Scans */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Scans</Text>
          {recentScans.map((item) => (
            <TouchableOpacity key={item.id} style={styles.recentItem}>
              <Image source={{ uri: item.image }} style={styles.recentImage} />
              <View style={styles.recentInfo}>
                <Text style={styles.recentName}>{item.name}</Text>
                <Text style={styles.recentCalories}>{item.calories} calories</Text>
              </View>
              <Text style={styles.recentTime}>{item.time}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Scan Results Modal */}
      <Modal
        visible={showResults}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Food Identified!</Text>

            <Image source={{ uri: scannedFood?.image }} style={styles.resultImage} />

            <Text style={styles.foodName}>{scannedFood?.name}</Text>
            <Text style={styles.confidence}>{scannedFood?.confidence}% confidence</Text>

            <View style={styles.nutritionFacts}>
              <View style={styles.nutritionItem}>
                <Text style={styles.nutritionValue}>{scannedFood?.calories}</Text>
                <Text style={styles.nutritionLabel}>Calories</Text>
              </View>
              <View style={styles.nutritionItem}>
                <Text style={styles.nutritionValue}>{scannedFood?.protein}g</Text>
                <Text style={styles.nutritionLabel}>Protein</Text>
              </View>
              <View style={styles.nutritionItem}>
                <Text style={styles.nutritionValue}>{scannedFood?.carbs}g</Text>
                <Text style={styles.nutritionLabel}>Carbs</Text>
              </View>
              <View style={styles.nutritionItem}>
                <Text style={styles.nutritionValue}>{scannedFood?.fat}g</Text>
                <Text style={styles.nutritionLabel}>Fat</Text>
              </View>
            </View>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setShowResults(false)}
              >
                <Text style={styles.cancelButtonText}>Rescan</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={() => {
                  setShowResults(false);
                  // Navigate to log confirmation
                }}
              >
                <Text style={styles.confirmButtonText}>Confirm & Log</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#94A3B8',
  },
  scanOptions: {
    paddingHorizontal: 24,
    marginTop: 16,
  },
  scanOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  scanOptionActive: {
    borderColor: '#6366F1',
    borderWidth: 1,
  },
  scanOptionIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  scanOptionText: {
    flex: 1,
  },
  scanOptionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginBottom: 4,
  },
  scanOptionDescription: {
    fontSize: 14,
    color: '#94A3B8',
  },
  scannerContainer: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
  scanner: {
    height: 300,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  scannerPlaceholder: {
    alignItems: 'center',
  },
  scannerText: {
    color: '#64748B',
    fontSize: 16,
    marginTop: 16,
  },
  scanButton: {
    marginTop: 24,
    borderRadius: 16,
    overflow: 'hidden',
  },
  scanButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  scanButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  section: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginBottom: 16,
  },
  quickLogContainer: {
    flexDirection: 'row',
  },
  quickLogItem: {
    alignItems: 'center',
    backgroundColor: '#1E293B',
    padding: 16,
    borderRadius: 12,
    marginRight: 12,
    minWidth: 80,
  },
  quickLogEmoji: {
    fontSize: 24,
    marginBottom: 8,
  },
  quickLogText: {
    color: '#F8FAFC',
    fontSize: 12,
    fontWeight: '600',
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  recentImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  recentInfo: {
    flex: 1,
    marginLeft: 12,
  },
  recentName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#F8FAFC',
    marginBottom: 4,
  },
  recentCalories: {
    fontSize: 14,
    color: '#94A3B8',
  },
  recentTime: {
    fontSize: 12,
    color: '#64748B',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#1E293B',
    borderRadius: 20,
    padding: 24,
    margin: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginBottom: 20,
  },
  resultImage: {
    width: 200,
    height: 150,
    borderRadius: 12,
    marginBottom: 16,
  },
  foodName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginBottom: 8,
  },
  confidence: {
    fontSize: 14,
    color: '#10B981',
    marginBottom: 20,
  },
  nutritionFacts: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 24,
  },
  nutritionItem: {
    alignItems: 'center',
  },
  nutritionValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginBottom: 4,
  },
  nutritionLabel: {
    fontSize: 12,
    color: '#94A3B8',
  },
  modalButtons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#334155',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginRight: 12,
  },
  cancelButtonText: {
    color: '#F8FAFC',
    fontWeight: '600',
  },
  confirmButton: {
    flex: 1,
    backgroundColor: '#6366F1',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginLeft: 12,
  },
  confirmButtonText: {
    color: '#F8FAFC',
    fontWeight: '600',
  },
});
