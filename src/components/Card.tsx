import React from 'react';
import { View, Text } from 'react-native';

interface CardProps {
  title: string;
  content: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, content, className }) => {
  return (
    <View className={`bg-white p-4 rounded shadow ${className}`}>
      <Text className="text-lg font-bold">{title}</Text>
      <Text className="text-gray-700">{content}</Text>
    </View>
  );
};

export default Card;