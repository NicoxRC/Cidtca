import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import CreateForm from './src/screens/CreateForm';
import Firms from './src/components/form/Firms';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Inicio"
        component={Home}
        options={{ title: 'Inicio' }}
      />
      <Stack.Screen
        name="CreateForm"
        component={CreateForm}
        options={{ title: 'Create Formulario' }}
      />
      <Stack.Screen
        name="Firmas"
        component={Firms}
        options={{ title: 'Firmas' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
