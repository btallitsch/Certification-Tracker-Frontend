import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, className }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`bg-blue-500 py-2 px-4 rounded ${className}`}
    >
      <Text className="text-white text-center">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;