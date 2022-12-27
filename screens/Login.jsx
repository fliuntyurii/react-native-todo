import { useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Header } from '../components/Header';
import { LoginForm } from '../components/LoginForm';
import { View } from '../components/Themed';
import { Context } from '../context/context';

export const Login = () => {
  const { isLoggined, userLogin } = useContext(Context);

  const submitLoginData = (data) => {
    userLogin(data, true);
  }

  return (
    <View style={styles.container}>
      <Header title='Login' />
      <LoginForm
        submitLoginData={submitLoginData}
      />
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