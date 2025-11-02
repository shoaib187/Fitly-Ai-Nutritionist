import React from 'react';
import { View, Text, Image, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const ScanResultModal = ({ visible, food, onRescan, onConfirm }) => (
  <Modal visible={visible} animationType="slide" transparent>
    <View style={styles.overlay}>
      <View style={styles.content}>
        <Text style={styles.title}>Food Identified!</Text>

        <Image source={{ uri: food?.image }} style={styles.image} />
        <Text style={styles.name}>{food?.name}</Text>
        <Text style={styles.confidence}>{food?.confidence}% confidence</Text>

        <View style={styles.nutrition}>
          {[
            { label: 'Calories', value: food?.calories },
            { label: 'Protein', value: `${food?.protein}g` },
            { label: 'Carbs', value: `${food?.carbs}g` },
            { label: 'Fat', value: `${food?.fat}g` },
          ].map((item, i) => (
            <View key={i} style={styles.fact}>
              <Text style={styles.value}>{item.value}</Text>
              <Text style={styles.label}>{item.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.cancel} onPress={onRescan}>
            <Text style={styles.cancelText}>Rescan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.confirm} onPress={onConfirm}>
            <Text style={styles.confirmText}>Confirm & Log</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center', alignItems: 'center' },
  content: { backgroundColor: '#1E293B', borderRadius: 20, padding: 24, alignItems: 'center' },
  title: { color: '#F8FAFC', fontWeight: 'bold', fontSize: 22 },
  image: { width: 200, height: 150, borderRadius: 12, marginVertical: 16 },
  name: { color: '#F8FAFC', fontWeight: 'bold', fontSize: 20 },
  confidence: { color: '#10B981', marginBottom: 16 },
  nutrition: { flexDirection: 'row', justifyContent: 'space-around', width: '100%' },
  fact: { alignItems: 'center' },
  value: { color: '#F8FAFC', fontWeight: 'bold' },
  label: { color: '#94A3B8', fontSize: 12 },
  buttons: { flexDirection: 'row', width: '100%', marginTop: 20 },
  cancel: { flex: 1, backgroundColor: '#334155', padding: 14, borderRadius: 12, marginRight: 8, alignItems: 'center' },
  cancelText: { color: '#F8FAFC', fontWeight: '600' },
  confirm: { flex: 1, backgroundColor: '#6366F1', padding: 14, borderRadius: 12, alignItems: 'center' },
  confirmText: { color: '#fff', fontWeight: '600' },
});

export default ScanResultModal;
