import React from 'react';
import {Button, StyleSheet, Text, View,} from 'react-native';
import { useThemeContext } from '../contexts/ThemeContext';

export const HomeScreen = () => {
  const { theme, changeTheme } = useThemeContext();
  return (
    <View style={styles[theme!].container}>
      <Text style={styles[theme!].text}>You are now in {theme} mode</Text>
      <Button title='Toggle theme' onPress={() => changeTheme(theme === 'light' ? 'dark' : 'light')} />
    </View>
  )
}

const defaultStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 26,
    marginBottom: 10,
  }
});

const styles = {
  light: StyleSheet.create({
    container: {
      ...defaultStyles.container,
      flex: 1,
      backgroundColor: '#fff',
    },
    text: {
      ...defaultStyles.text,
      color: '#000',
    },
  }),

  dark: StyleSheet.create({
    container: {
      ...defaultStyles.container,
      flex: 1,
      backgroundColor: '#20232A',
    },
    text: {
      ...defaultStyles.text,
      color: '#fff',
    },
  }),
};