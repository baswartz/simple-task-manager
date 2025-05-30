// Main screen for the Task Manager app. Handles task list state, modal, and swipe-to-delete.
import React, { useState } from 'react';
import { View, Text, Modal, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { SwipeListView } from 'react-native-swipe-list-view';
import Button from '@/components/Button';
import Task from '@/components/Task';

type TaskType = {
  id: number;
  description: string;
  completed: boolean;
};

export default function Index() {
  // Initialize states for task list, whether add task pop-up shows, and input text
  const [tasks, setTasks] = useState<TaskType[]>([]); // List of all tasks
  const [modalVisible, setModalVisible] = useState(false); // Controls whether modal shows
  const [inputValue, setInputValue] = useState('') // Input value for new task
  const [nextId, setNextId] = useState(0); // Auto-incrementing task ID
  const [fadeInDone, setFadeInDone] = useState<{ [id: number]: boolean }>({}); // Tracks 
  // which tasks have finished fade-in

  // Adds a new task to the list
  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { id: nextId, description: inputValue, completed: false }]);
      setNextId(nextId + 1);
      setInputValue('');
      setModalVisible(false);
    }
  }

  // Toggles a task's completion status
  const toggleTaskCompleted = (id: number) => {
    setTasks(tasks =>
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Deletes a task from the list
  const deleteTask = (id: number) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };
  
  
  return (
    <View style={styles.container}>
      {/* List of tasks */}
      <SwipeListView
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Task
            description={item.description}
            completed={item.completed}
            onToggleCompleted={() => toggleTaskCompleted(item.id)}
            onFadeInComplete={() =>
              setFadeInDone(prev => ({ ...prev, [item.id]: true }))
            }
          />
        )}
        // Only show the delete button after the fade-in animation completes
        renderHiddenItem={({ item }) => (
          <View style={styles.rowBack}>
            {fadeInDone[item.id] && (
                <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteTask(item.id)}
              >
                <FontAwesome name="trash" size={24} color="#fff" />
              </TouchableOpacity>
            )}
          </View>
        )}
        rightOpenValue={-75}
        disableRightSwipe
        style={{ width: '100%' }}
        contentContainerStyle={[
          tasks.length === 0 && { flex: 1, justifyContent: 'center', alignItems: 'center' },
          { paddingHorizontal: 20 }
        ]}
        ListEmptyComponent={
          <Text style={styles.empty}>No tasks yet.</Text>
        }
      />

      {/* Add Task Button */}
      <View style={styles.button}>
        <Button
          label="Add a task"
          onPress={() => setModalVisible(true)}
          icon="plus"
        />
      </View>
        

      {/* Pop-up modal for adding task */}
      <Modal
        transparent
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <TextInput
              placeholder="Task description"
              value={inputValue}
              onChangeText={setInputValue}
              style={styles.input}
            />
            <View style={styles.buttonRow}>
              <Button
                label="Add Task"
                onPress={addTask}
                style={[styles.modalButton, { backgroundColor: '#4caf50' }]}
                icon="plus"
                textColor="#fff"
              />
              <Button
                label="Cancel"
                onPress={() => setModalVisible(false)}
                style={[styles.modalButton, { backgroundColor: '#e74c3c' }]}
                icon="times"
                textColor="#fff"
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 40,
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold'
  },
  empty: { 
    color: '#888',
    marginTop: 20 
  },
  list: {
    alignSelf: 'stretch',
    marginTop: 16,
  },
  button: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 40,
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 10,
    width: '80%',
    alignItems: 'stretch',
    // Optional: add a border to the box itself if desired
  },
  input: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 6,
    padding: 8,
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    flex: 1,
    marginHorizontal: 4, // space between buttons
    borderColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 8,
    height: 40,
    justifyContent: 'center',
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 15,
    borderRadius: 6,
    marginVertical: 4,
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 6,
    width: 60,
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
