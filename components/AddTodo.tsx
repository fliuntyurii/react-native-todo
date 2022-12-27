import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, TextInput, View, Alert } from 'react-native';

export const AddTodo = ({ setTodos, todos }: any) => {
  const [titleValue, setTitleValue]: any = useState('')
  const [todo, setTodo]: any = useState([]);

  useEffect(() => {
    const newTodo: any = {
      title: titleValue, id: todos.length
    }
    setTodo(newTodo);
  }, [titleValue]);
  
  const submitHandler = () => {
    if(todo.title && todo.title.length > 3) setTodos([...todos, todo]);
    else {
      Alert.alert('Error', 'Todo length must be over 3 char long.', [
        { text: 'OK' }
      ])
    }
    setTitleValue('');
  }

  return (
    <View style={styles.container}>
      <TextInput 
        value={titleValue}
        style={styles.input}
        placeholder="Add todo..."
        onChangeText={(e) => setTitleValue(e)}
      />
      <Button 
        title="Add TODO" 
        onPress={() => submitHandler()} 
        color="rgb(47, 149, 220)"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginBottom: 10,
    marginRight: 15,
    paddingHorizontal: 5,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(47, 149, 220)',
    fontSize: 16,
    width: 150,
    color: 'rgb(47, 149, 220)'
  }
})