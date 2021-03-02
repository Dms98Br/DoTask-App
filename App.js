import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TaskList } from "./source/screen/taskList";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator tabBarOptions={{
          activeTintColor: "#0E6BA8",
          inactiveTintColor: "gray",
          labelStyle: {
            fontSize: 12,
          },
        }}>
          <Tab.Screen name='Atrasados' children={() => <TaskList title={'Atrasados'} />} />
          <Tab.Screen name="Hoje" children={() => <TaskList title={'Hoje'} />} />
          <Tab.Screen name="Amanhã" children={() => <TaskList title={'Amanhã'} />} />
          <Tab.Screen name="Semana" children={() => <TaskList title={'Semana'} />} />
          <Tab.Screen name="Mês" children={() => <TaskList title={'Mês'} />} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}