import { Trash } from 'phosphor-react-native'
import { Checkbox } from 'expo-checkbox'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { useState } from 'react'

interface TodoProps {
  content: string,
  checked: boolean,
  handleChecked: () => void,
  handleDelete: () => void
}


export function Todo({content, checked, handleChecked, handleDelete }: TodoProps){

  return (
      <View style={styles.todoContent}>
        <Checkbox style={styles.checkBox} value={checked}  color={checked ? '#5E60CE' : '#4EA8DE'} onValueChange={handleChecked}/>

        <Text 
          style={
            checked ? styles.todoContentTextChecked : styles.todoContentText
          }
          adjustsFontSizeToFit={true}
        >
          {content}
        </Text>

        <TouchableOpacity style={styles.trashButton} onPress={handleDelete}>
          <Trash color='#808080'/>
        </TouchableOpacity>
      </View>
  )
}