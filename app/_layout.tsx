import { Stack } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View, Text } from 'react-native';

function HeaderWithIcon() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <FontAwesome name="tasks" size={24} color="#222" style={{ marginRight: 8 }} />
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#222' }}>Task Manager</Text>
    </View>
  );
}

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: () => <HeaderWithIcon />,
        }}
      />
    </Stack>
  );
}
