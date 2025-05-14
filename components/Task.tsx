// components/Task.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type TaskProps = {
  description: string;
};

// Create task component with description
export default function Task({ description }: TaskProps) {
  return (
    <View style={styles.task}>
      <Text>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 12,
    backgroundColor: '#eee',
    marginVertical: 4,
    borderRadius: 6,
  },
});
