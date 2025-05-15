# Task Manager

A simple, modern task management app built with **React Native** and **Expo**.  
Add, complete, and delete tasks with smooth animations and an intuitive mobile UI.

---

## Features

- **Add Tasks:** Quickly add new tasks via a modal popup.
- **Complete Tasks:** Tap the checkbox to mark tasks as complete (with a bounce animation).
- **Delete Tasks:** Swipe left on a task to reveal the delete button, then tap to remove (with fade-out animation).
- **Animated UI:** Tasks fade in when added and fade out when deleted for a polished user experience.
- **Responsive Design:** Works on both iOS and Android devices.
- **Accessible:** Large touch targets and clear color contrast.

---

## Screenshots

![Add Task Modal](./screenshots/add-task-modal.png)
![Swipe to Delete](./screenshots/swipe-to-delete.png)
![No Tasks State](./screenshots/no-tasks.png)
![Mark Completed](./screenshots/mark-completed.png)

---

## Getting Started

### 1. **Clone the Repository**
- git clone https://github.com/baswartz/simple-task-manager.git
- cd task-manager

### 2. **Install Dependencies**
- npm install

### 3. **Start the Expo Project**
- npx expo start

### 4. **Run on Your Device**
- **iOS / Android:**  
  Install [Expo Go](https://expo.dev/client) from the App Store or Google Play.
- **Scan the QR code** in your terminal or browser with Expo Go.
- Or, on computer use web browser option through Expo
- The app will open instantly!

---

## Tech Stack

- **React Native** (with Expo)
- **expo-router** for navigation
- **react-native-reanimated** for smooth animations
- **react-native-swipe-list-view** for swipe-to-delete functionality
- **@expo/vector-icons** for icons

---

## 🧑‍💻 Code Quality

- **TypeScript** throughout for type safety.
- **Reusable Components:** Task, Button, and Modal are modular and easy to maintain.

---

## How to Test

1. **Add a Task:** Tap "Add a task", enter a description, and tap "Add Task".
2. **Complete a Task:** Tap the checkbox next to any task.
3. **Delete a Task:** Swipe left on a task and tap the trash can.
4. **Empty State:** Delete all tasks to see the "No tasks yet." message.

---

## Reviewer Notes

- All features work in Expo Go; no custom native modules required.
- No setup beyond `npm install` and `npx expo start`.
- For any questions, please contact [baswartz@umich.edu].

---

## License

MIT

---

**Thank you for reviewing!**



