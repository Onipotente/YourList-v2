import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import List from './src/pages/List';
import BemVindo from './src/pages/BemVindo';
import Auth from './src/pages/Login';

export default function App() {
    return (
      <>
        {/* <BemVindo /> */}
        {/* <Auth /> */}
        <List />
      </>
    );
}