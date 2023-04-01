import { View, TextInput, TouchableOpacity, Text, FlatList, Alert} from 'react-native'
import { styles } from './styles'
import { Logo } from '../../components/Logo'
import { PlusCircle } from 'phosphor-react-native'
import { Todo } from '../../components/Todo'
import { useState } from 'react'

import { randomUUID } from 'expo-crypto'

interface Todo {
  id: string,
  content: string,
  completed: boolean
}

export function Home() {

  const [todoList, setTodoList] = useState<Todo[]>([]) 

  const [todoContent, setTodoContent] = useState<string>('')

  function handleAddTodoToList() {

    if(todoContent === '') {
      return Alert.alert('Sem tarefa', 'O conteúdo da tarefa não pode ser vázio')
    }

    const newTodo = Object.assign({
      id: randomUUID(),
      content: todoContent,
      completed: false
    })

    setTodoList(prevState => [...prevState, newTodo])
    setTodoContent('')
  }

  function handleToggleTodoChecked(id: string) {
      setTodoList(prevState => {
      const newState = prevState.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)

      return newState
    })
  }

  function handleDeleteTodo(id: string) {
    Alert.alert('Remover tarefa', 'Deseja remover a tarefa selecionada?', [
      {
        text: 'Sim',
        onPress: () => setTodoList(prevState => {
          const newState = prevState.filter(todo => todo.id !== id)
          return newState
        })
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  const completedTodoInList = todoList.filter(todo => todo.completed).length

  return (
    <>
    <View style={styles.container}>
      <Logo />

      <View style={styles.formContainer}>
        <TextInput
          placeholder='Adicione uma nova tarefa'
          style={styles.formInput}
          placeholderTextColor="#808080"
          value={todoContent}
          onChangeText={setTodoContent}
        />
        <TouchableOpacity
          style={styles.formButton}
          onPress={handleAddTodoToList}
        >
          <PlusCircle color='#f2f2f2'/>
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.secondContainer}>
       

        <View style={styles.summaryContainer}>

          <View style={ styles.summaryCreated}>
            <Text style={styles.summaryCreatedText}>Criadas</Text>
            <Text style={styles.summaryNumber}>{todoList.length}</Text>
          </View>

          <View style={styles.summaryCreated}>
            <Text style={styles.summaryCompletedText}>Concluidas</Text>
            <Text style={styles.summaryNumber}>{completedTodoInList}</Text>
          </View>

        </View>


      <View style={styles.listContainer}>

        <FlatList
          data={todoList}
          renderItem={
            ({item}) => 
              <Todo 
                content={item.content} 
                checked={item.completed} 
                handleChecked={() => handleToggleTodoChecked(item.id)}
                handleDelete={() => handleDeleteTodo(item.id)}  
              />
            }
          keyExtractor={item => item.id}

        />

      </View>


    </View>
    </>
  )
}