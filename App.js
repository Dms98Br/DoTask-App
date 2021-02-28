import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Task} from "./source/screen/Task";

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
        <Tab.Screen name='Atrasados' children={() => <Task title={'Atrasados'} /> }/>
        <Tab.Screen name="Hoje"      children={() => <Task title={'Hoje'} /> }/>
        <Tab.Screen name="Amanhã"    children={() => <Task title={'Amanhã'} /> }/>
        <Tab.Screen name="Semana"    children={() => <Task title={'Semana'} /> }/>
        <Tab.Screen name="Mês"       children={() => <Task title={'Mês'} /> }/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}