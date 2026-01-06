import { Button } from '@/src/components/Button';
import { StackParamList } from '@/src/routes/stacks.routes';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';

type NavigationProps = NativeStackNavigationProp<StackParamList, 'Home'>;

export function Home() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={{ ...styles.container, paddingTop: insets.top + 10 }}>
      <Text style={styles.title}>Roadmap Mobile</Text>
      <Text style={styles.subtitle}>Estudo e exercícios práticos</Text>

      <Button
        text="Ciclo de vida"
        action={() => navigation.navigate('CiclodeVida')}
      />
    </View>
  );
}
