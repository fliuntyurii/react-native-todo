import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MonoText } from './StyledText';
import React, { useState, useContext } from 'react';
import { Context } from '../context/context';

export const HomeContent = ({ navigation }: any) => {
  const { user, isLoggined } = useContext(Context);

  return (
    <View style={styles.container}>
      <View style={styles.infoWrapper}>
        {
          !isLoggined ?
          <><View
            style={styles.homeScreenFilename}
          >
            <TouchableOpacity>
              <MonoText style={styles.redirect} onPress={() => navigation.navigate('Login')}>Go to login</MonoText>
            </TouchableOpacity>
          </View>
          <Text style={styles.notLoggined}>You cannot use all functions until you are logged in.</Text></>
          :
          <View style={styles.userInfo}>
            <MonoText style={styles.redirect}>Welcome!</MonoText>
            <Text style={styles.user}>Name: {user?.nickname}</Text>
            <Text style={styles.user}>Email: {user?.email}</Text>
          </View>
        }
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoWrapper: {
    flex: 1,
    marginTop: '20%'
  },
  notLoggined: {
    flex: 1,
    color: 'rgb(47, 149, 220)',
    fontWeight: 'bold',
    fontSize: 15
  },
  homeScreenFilename: {
    marginVertical: 7,
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  redirect: {
    textDecorationLine: 'underline',
    paddingVertical: 4,
  },
  userInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  user: {
    fontWeight: 'bold',
    color: 'rgb(47, 149, 220)'
  }
});