import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto'

import { Home } from './src/screens/Home'

const Tab = createBottomTabNavigator()

export default function App() {
  useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  )
}
