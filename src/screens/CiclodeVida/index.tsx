import { useEffect, useState } from 'react';
import { AppState, Text, View } from 'react-native';
import { styles } from './styles';

export function CiclodeVida() {
  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    const subescription = AppState.addEventListener(
      'change',
      (nextAppState) => {
        setAppState(nextAppState);
        console.log('AppState mudou para:', nextAppState);
      }
    );

    return () => {
      subescription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ciclo de Vida - estado atual:</Text>
      <Text style={styles.text}>{appState}</Text>
    </View>
  );
}
