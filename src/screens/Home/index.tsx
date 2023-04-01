import { View, TextInput, TouchableOpacity, Text} from 'react-native'
import { styles } from './styles'
import { Logo } from '../../components/Logo'
import { PlusCircle } from 'phosphor-react-native'
import { Todo } from '../../components/Todo'


export function Home() {
  return (
    <>
    <View style={styles.container}>
      <Logo />

      <View style={styles.formContainer}>
        <TextInput
          placeholder='Adicione uma nova tarefa'
          style={styles.formInput}
          placeholderTextColor="#808080"
        />
        <TouchableOpacity
          style={styles.formButton}
        >
          <PlusCircle color='#f2f2f2'/>
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.secondContainer}>
       

        <View style={styles.summaryContainer}>

          <View style={styles.summaryCreated}>
            <Text style={styles.summaryCreatedText}>Criadas</Text>
            <Text style={styles.summaryNumber}>5</Text>
          </View>

          <View style={styles.summaryCreated}>
            <Text style={styles.summaryCompletedText}>Concluidas</Text>
            <Text style={styles.summaryNumber}>2</Text>
          </View>

        </View>


      <View style={styles.listContainer}>

        <Todo />

        <Todo />

      </View>


    </View>
    </>
  )
}