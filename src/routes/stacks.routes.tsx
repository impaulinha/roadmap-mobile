import { createStackNavigator } from '@react-navigation/stack';
import { CiclodeVida } from '../screens/CiclodeVida';
import { Home } from '../screens/Home';

export type StackParamList = {
  Home: undefined;
  CiclodeVida: undefined;
};

const Stack = createStackNavigator();

export function StacksRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CiclodeVida" component={CiclodeVida} />
    </Stack.Navigator>
  );
}
