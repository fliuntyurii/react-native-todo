import { View, Text, StyleSheet } from 'react-native';

type Props = {
  title: string
}

export const Header = ({ title }: Props) => {
  return (
    <View  style={styles.headerWrapper}>
      <View style={styles.header}>
        <Text style={styles.title}>{title || 'Header'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    width: '100%',
    backgroundColor: 'rgb(47, 149, 220)',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    marginTop: 25,
  },
  title: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 18,
    color: 'white'
  }
});