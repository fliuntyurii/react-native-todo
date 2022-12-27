import { StyleSheet } from 'react-native';
import { Header } from '../components/Header';
import { HomeContent } from '../components/HomeContent';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export const Home = ({ navigation }: RootTabScreenProps<'Home'>) => {
  return (
    <View style={styles.container}>
      <Header title='home' />
      <HomeContent navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});