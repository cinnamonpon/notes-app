import CreateNotesScreen from '@components/notes/create-notes/CreateNotesScreen';
import NotesScreen from '@components/notes/NotesScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

const Tab = createBottomTabNavigator();

function AppNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Notes"
        component={NotesScreen}
      />
      <Tab.Screen
        name="Create"
        component={CreateNotesScreen}
      />
    </Tab.Navigator>
  );
}

export default AppNavigation;
