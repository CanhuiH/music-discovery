// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Layout from './app/_layout';

export default function App() {
  return (
    <NavigationContainer>
      <Layout />
    </NavigationContainer>
  );
}