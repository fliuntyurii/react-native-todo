import { StyleSheet } from 'react-native';
import { Header } from '../components/Header';
import { View } from '../components/Themed';
import { TodoList } from '../components/TodoList';

export const Todos = () => {
  return (
    <View style={styles.container}>
      <Header title='My todos' />
      <TodoList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
