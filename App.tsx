import { useState } from "react"
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

const App = () => {
  const [task, setTask] = useState('')
  const [day, setDay] = useState('')
  const [tasks, setTasks] = useState<Array<Object>>([])

  const handleAddTask = () => {
    if (task.trim() && day.trim()) {
      setTasks([...tasks, { task, day }])
      setTask('')
      setDay('')
    }
  }

  const handleDeleteTask = (idx: number) => {
    const newTasks = [...tasks]
    newTasks.splice(idx, 1)
    setTasks(newTasks)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.table}>
          <View style={[styles.row, styles.header]}>
            <Text style={[styles.cell, styles.headerText]}>Tarefa</Text>
            <Text style={[styles.cell, styles.headerText, styles.dayHeader]}>Dia</Text>
            <Text style={[styles.cell, styles.headerText]}></Text>
          </View>

          {tasks.map((item, idx) => (
            <View key={idx} style={[styles.row, idx !== tasks.length - 1 && styles.borderBottom]}>
              <Text style={[styles.cell, styles.borderRight]}>{item.task}</Text>
              <Text style={[styles.cell, styles.borderRight]}>{item.day}</Text>

              <TouchableOpacity onPress={() => { handleDeleteTask(idx) }} style={[styles.deleteButton, styles.borderRight]}>
                <Text style={styles.buttonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          ))}

        </View>
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, styles.taskInput]}
          placeholder='Tarefa' value={task}
          onChangeText={(text) => setTask(text)} />

        <TextInput
          style={[styles.input, styles.dayInput]}
          placeholder="Dia para realizar a tarefa"
          value={day}
          onChangeText={(text) => setDay(text)}
        />

        <TouchableOpacity onPress={handleAddTask} >
          <View style={styles.addButton}>
            <Text style={styles.buttonText}>Adicionar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#94b2e9',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  scrollContainer: {
    flexShrink: 1
  },
  table: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingVertical: 10
  },
  header: {
    backgroundColor: '#f8f8f8'
  },
  headerText: {
    fontWeight: 'bold'
  },
  cell: {
    flex: 1,
    paddingHorizontal: 10,
  },
  deleteButton: {
    padding: 10,
  },
  buttonText: {
    color: '#ff5555',
    fontWeight: 'bold'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10
  },
  addButton: {
    backgroundColor: '#8be9fd',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10
  },
  taskInput: {
    marginRight: 10
  },
  dayInput: {
    marginRight: 10
  },
  buttonText: {
    fontSize: 16,
    color: '#6272a4',
    marginLeft: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  borderRight: {
    borderRightWidth: 1,
    borderRightColor: '#ccc'
  },
  dayHeader: {
    textAlign: 'center'
  }
})

export default App
