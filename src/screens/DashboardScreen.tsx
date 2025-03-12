// src/screens/DashboardScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { getCertificationStatus } from '../services/certificationService';
import Card from '../components/Card';
import { Certification } from '../types';

const DashboardScreen: React.FC = () => {
  const [certificationData, setCertificationData] = useState<Certification[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getCertificationStatus()
      .then(data => {
        setCertificationData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View className="flex-1 p-4">
      <Text className="text-2xl font-bold mb-4">Dashboard</Text>
      <FlatList
        data={certificationData}
        renderItem={({ item }) => (
          <Card title={item.status} content={`Deadline: ${item.deadline}`} className="mb-4" />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default DashboardScreen;