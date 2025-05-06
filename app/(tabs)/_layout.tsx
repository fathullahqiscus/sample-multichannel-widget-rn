import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import HomeScreen from '.';

export default function MainTabLayout() {
  const colorScheme = useColorScheme();

  return (<HomeScreen />);
}
