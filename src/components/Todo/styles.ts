import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  todoContent: {
    width: '100%',
    minHeight: 64,

    backgroundColor: '#262626',
    borderRadius: 8,
    flexDirection: 'row',

    paddingHorizontal: 8,
    paddingVertical: 12,

    justifyContent: 'space-between',
    alignItems: 'center',

    gap: 8,
  },

  todoContentText: {
    flex: 1,
    color: '#f2f2f2',
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
  },

  todoContentTextChecked: {
    flex: 1,
    color: '#808080',
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    textDecorationLine: 'line-through'
  },

  trashButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32
  },

  checkBox: {
    width: 24,
    height: 24,
    borderRadius: 999,

    justifyContent: 'center',
    alignItems: 'center',
  }
})