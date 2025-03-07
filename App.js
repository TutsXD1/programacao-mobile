import { titulo } from './util.js';
import titulo_padrao from './util.js';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>{titulo}</Text>
      <Text>{titulo_padrao}</Text>
      <Status
    </View>
  );

  // Estados para gerenciar dados
  const [task, setTask] = useState(''); // Texto digitado
  const [tasks, setTasks] = useState([]); // Lista de tarefas

  // Função para adicionar tarefa
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now(), text: task }]);
      setTask(''); // Limpa o input
    }
  };

  // Função para remover tarefa
  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <View style={styles.container}>
      {/* Entrada de texto */}
      <TextInput
        style={styles.input}
        placeholder="Digite uma tarefa"
        value={task}
        onChangeText={setTask}
      />

      {/* Botão de adicionar */}
      <Button title="Adicionar Tarefa" onPress={addTask} />

      {/* Lista de tarefas */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text>{item.text}</Text>
            <TouchableOpacity onPress={() => removeTask(item.id)}>
              <Text style={styles.deleteButton}>🗑️</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

// Estilização
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  deleteButton: {
    color: 'red',
    fontSize: 18,
  },
});
