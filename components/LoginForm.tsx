import { Formik } from "formik";
import { StyleSheet, TextInput, View, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

export const LoginForm: React.FC<{}> = ({ submitLoginData }: any) => { 
  const navigation = useNavigation();
  const initialValues: any = { nickname: '', email: '', password: '' };

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <Button title="Back" onPress={() => navigation.navigate('Root')} />
      </View>
      <Formik
        
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          actions.resetForm();
          submitLoginData(values);
        }}
      >
        {(props: any) => (
          <View
            style={styles.formWrapper}
          >
            <TextInput 
              style={styles.input}
              placeholder="Nickname..."
              onChangeText={props.handleChange('nickname')}
              value={props.values.nickname}
            />
            <TextInput 
              style={styles.input}
              placeholder="Email..."
              onChangeText={props.handleChange('email')}
              value={props.values.email}
            />
            <TextInput
              style={styles.input}
              placeholder="Password..."
              onChangeText={props.handleChange('password')}
              value={props.values.password}
            />
            <Button title="Submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '70%'
  },
  buttonWrapper: {  
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: 10
  },
  formWrapper: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  input: {
    marginBottom: 10,
    color: 'rgb(47, 149, 220)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(47, 149, 220)'
  }
})