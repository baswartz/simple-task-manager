// Reusable button component with optional icon and customizable text/icon color.
import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  label: string;
  style?: object;
  onPress?: () => void;
  icon?: React.ComponentProps<typeof FontAwesome>['name'];
  textColor?: string;
};

export default function Button({ label, style, onPress, icon, textColor = '#25292e' }: Props) {
  return (
    <View
      style={[
        styles.buttonContainer,
        { borderWidth: 4, borderColor: '#D3D3D3', borderRadius: 18 },
        style,
      ]}
    >
      <Pressable
        style={[styles.button, style]}
        onPress={onPress}
      >
        {icon && (
         <FontAwesome 
            name={icon}
            size={18}
            color={textColor}
            style={styles.buttonIcon}
         />
        )}
        <Text style={[styles.buttonLabel, { color: textColor }]}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
