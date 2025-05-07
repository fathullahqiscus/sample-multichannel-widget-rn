import { Image, StyleSheet, Platform, TouchableOpacity, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { useMultichannelWidget } from '@qiscus-community/react-native-multichannel-widget';
import { useCurrentUser } from '@qiscus-community/react-native-multichannel-widget';
import { useMemo } from 'react';

export default function HomeScreen() {
  useEffect(() => {
    const widget = useMultichannelWidget();
    widget.setUser({
      userId: 'sample_react_native_support_team',
      displayName: 'React Native User Test',
      avatarUrl: 'https://via.placeholder.com/200',
      userProperties: {
        extra_property_key: 'extra property value',
      },
    });
  }, []);

  const StartChatButton = () => {
    const user = useCurrentUser();
    const isLoggedIn = useMemo(() => user != null, [user]);

    return (
      <TouchableOpacity
        style={[
          styles.floatingButton,
          { backgroundColor: isLoggedIn ? '#007AFF' : '#A9A9A9' },
        ]}
        onPress={() => isLoggedIn && alert('Start a new chat!')}
        disabled={!isLoggedIn}
      >
        {isLoggedIn ? (
          <Ionicons name="chatbubble-ellipses" size={24} color="white" />
        ) : (
          <Text style={styles.floatingButtonText}>...</Text>
        )}
      </TouchableOpacity>
    );
  };
  return (
    <>
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        headerImage={
          <Image
            source={require('@/assets/images/partial-react-logo.png')}
            style={styles.chatLogo}
            resizeMode="contain" />
        }>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Welcome to Multichannel Chat!</ThemedText>
          <HelloWave />
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Step 1: Initialization</ThemedText>
          <ThemedText>
            In order to use MultichannelWidgetProvider, you need to initialize it with your AppID (YOUR_APP_ID). Get more information to get AppID from Qiscus Omnichannel Chat page
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Step 2: Set The User</ThemedText>
          <ThemedText>
          Set UserId before start the chat, this is mandatory.
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Step 3: Start chat</ThemedText>
          <ThemedText>
            Follow the documentation to integrate the chat SDK into your app.
          </ThemedText>
          <StartChatButton />
        </ThemedView>
      </ParallaxScrollView>
    </>
  );

}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  chatLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#007AFF',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  floatingButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
