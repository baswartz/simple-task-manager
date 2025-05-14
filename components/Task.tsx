// components/Task.tsx
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type TaskProps = {
  description: string;
  completed: boolean;
  onToggleCompleted: () => void;
};

// Create task component with description
export default function Task({ description, completed, onToggleCompleted }: TaskProps) {
  return (
    <View style={[
        styles.task,
        completed && styles.completedTask
    ]}>
        <Pressable onPress={onToggleCompleted} style={styles.checkbox}>
            {completed ? (
                <FontAwesome name="check-square" size={24} color="#4caf50" />
            ) : (
                <FontAwesome name="square-o" size={24} color="#bbb" />
            )}
        </Pressable>
        <Text style={[
            styles.description,
            completed && styles.completedText
        ]}>
            {description}
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    task: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 12,
      backgroundColor: '#fff',
      marginVertical: 4,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: '#eee',
    },
    completedTask: {
      opacity: 0.5, // More transparent if completed
    },
    checkbox: {
      marginRight: 12,
    },
    description: {
      fontSize: 16,
      color: '#25292e',
    },
    completedText: {
      textDecorationLine: 'line-through',
      color: '#888',
    },
  });
