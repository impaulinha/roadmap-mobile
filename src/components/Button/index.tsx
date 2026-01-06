import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface ButtonProps {
  text: string;
  action: () => void;
}

export function Button({ text, action }: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={action}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
