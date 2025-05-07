import React from 'react';
import { MultichannelWidgetProvider } from '@qiscus-community/react-native-multichannel-widget';
import HomeScreen from '.';


const YOUR_APP_ID = 'ramo-29lun8b1ulepsaio'; // Replace with your actual app ID

export default function MainTabLayout() {
  return (
    <MultichannelWidgetProvider appId={YOUR_APP_ID}>
      <>
        <HomeScreen />
      </>
    </MultichannelWidgetProvider>
  );
}