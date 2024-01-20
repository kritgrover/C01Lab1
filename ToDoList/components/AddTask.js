import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Keyboard } from 'react-native';

const AddTask = ({ onAddTask }) => {
    const [title, setTitle] = useState('');
  
    const handleAddTask = () => {
      const trimmedTitle = title.trim();
      if (trimmedTitle !== '') {
        onAddTask(title);
        setTitle('');
      }
    };
  
    return (
      <View>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={(text) => setTitle(text)}
          placeholder="Enter task title"
          keyboardType="default"
          returnKeyType="done"
        />
        <Button title="Add Task" onPress={handleAddTask} />
      </View>
    );
  };

const styles = StyleSheet.create({
    addTodoForm: {
      margin: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
});

export default AddTask;