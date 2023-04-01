import { Trash } from 'phosphor-react-native'
import { Checkbox } from 'expo-checkbox'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { useState } from 'react'

export function Todo(){

  const [check, setCheck] = useState(false)

  function toggleChecked() {
    setCheck(prevState => !prevState)
  }

  return (
      <View style={styles.todoContent}>
        <Checkbox style={styles.checkBox} value={check}  color={check ? '#5E60CE' : '#4EA8DE'}  onValueChange={toggleChecked}/>

        <Text 
          style={
            check ? styles.todoContentTextChecked : styles.todoContentText
          }
          adjustsFontSizeToFit={true}
        >
          Lorem 
        </Text>

        <TouchableOpacity style={styles.trashButton}>
          <Trash color='#808080'/>
        </TouchableOpacity>
      </View>
  )
}