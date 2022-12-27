import { useState, useEffect } from "react"
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { AddTodo } from "./AddTodo";
import Checkbox from 'expo-checkbox';
import storage from "../utils/storage";


export const TodoList = () => {
  const [doneTasks, setDoneTasks]: any = useState([]);
  const [todos, setTodos]: any = useState([]);


  useEffect(() => {
    storage.getAllDataForKey('todoState').then((ret: any) => {
      setDoneTasks(ret.doneTasks || []);
      setTodos(ret.todos || []);   
    });
  }, []);

  storage.save({
    key: 'todoState',
    data: {
      doneTasks: doneTasks,
      todos: todos,
    },
    expires: 1000 * 3600
  });

  const doneTask = (task: any) => {
    if (doneTasks.includes(task)) {
      setDoneTasks(doneTasks.filter((el: any) => el != task))
    } else {
      setDoneTasks([...doneTasks, task]);
    }
  }

  const Item = ({ title }: any) => (
    <View style={styles.item}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
  
  const TaskList = () => (
    <ScrollView style={styles.taskList}>
      { todos.length ? 
          todos.map((todo: any) => (
            <View key={todo.id} style={styles.checkboxWrapper}>
              <View style={styles.checkboxBlock}>
                <Checkbox
                  color="rgb(47, 149, 220)"
                  style={styles.checkbox}
                  disabled={false}
                  value={doneTasks.includes(todo.title)}
                  onValueChange={() => doneTask(todo.title)}
                />
                <Item title={todo.title} />
                <TouchableOpacity 
                  style={styles.closeWrapper}
                  onPress={() => {
                    Alert.alert('Delete', 'Are you sure?', [
                      { text: 'Cancel', style: 'cancel' },
                      { text: 'Delete', onPress: () => setTodos(todos.filter((t: any) => t.title != todo.title)) }
                    ])
                  }}
                >
                  <Text style={styles.closeButton}>x</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        :
        <Text style={styles.emptyTasks}>You have not a task.</Text>
      }
    </ScrollView>
  )

  return (
    <View style={styles.container}>
      <AddTodo setTodos={setTodos} todos={todos} />
      <TaskList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
  taskList: {
    flex: 1,
  },
  checkboxWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  closeWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    paddingTop: 5,
    paddingRight: 15,
    fontSize: 20,
    color: 'rgb(47, 149, 220)',
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: 'rgb(47, 149, 220)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 12,
    marginHorizontal: 16,
    width: 175
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  },
  checkboxBlock: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
  },
  checkbox: {
    width: 30,
    height: 30,
    borderWidth: 2,
    borderColor: 'rgb(47, 149, 220)',
    marginRight: 5,
    marginTop: 10,
  },
  emptyTasks: {
    color: 'rgb(47, 149, 220)',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginTop: '100%'
  }
});