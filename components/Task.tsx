// components/Task.tsx
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { useEffect } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Animated, {
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
    FadeOut
 } from 'react-native-reanimated';

type TaskProps = {
  description: string;
  completed: boolean;
  onToggleCompleted: () => void;
  onFadeInComplete?: () => void;
};

// Create task component with description
export default function Task({ description, completed, onToggleCompleted, onFadeInComplete }: TaskProps) {
    // Fade-in effect for added task
    const opacity = useSharedValue(0);
    useEffect(() => {
        opacity.value = withTiming(
          1,
          { duration: 500 },
          (isFinished) => {
            if (isFinished && onFadeInComplete) {
              runOnJS(onFadeInComplete)();
            }
          }
        );
      }, []);
    
    // Bounce effect when completed
    const scale = useSharedValue(1);
    useEffect(() => {
        if (completed) {
            scale.value = withSpring(1.2, { damping: 2 }, () => {
                scale.value = withSpring(1);
            });
        }
    }, [completed]);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
    }));

    const checkAnimatedStyle = useAnimatedStyle(() => ({ 
        transform: [{ scale: scale.value }],
    }));

    return (
        <Animated.View 
            style={[
                styles.task,
                completed && styles.completedTask,
                animatedStyle
            ]}
            // Fade-out on delete
            exiting={FadeOut.duration(300)}
        >
            {/* Checkbox to mark as complete */}
            <Pressable onPress={onToggleCompleted} style={styles.checkbox}>
                <Animated.View style={checkAnimatedStyle}>
                    {completed ? (
                        <FontAwesome name="check-square" size={24} color="#4caf50" />
                    ) : (
                        <FontAwesome name="square-o" size={24} color="#bbb" />
                    )}
                </Animated.View>
            </Pressable>
            {/* Task description */}
            <Text style={[
                styles.description,
                completed && styles.completedText
            ]}>
                {description}
            </Text>
        </Animated.View>
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
      width: '100%',
    },
    // Translucent if completed
    completedTask: {
        backgroundColor: '#f2f2f2',
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
