import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0d0d0d',
    padding: 24,
    zIndex: 1,
  },

  formContainer: {
    marginTop: 40,
    flexDirection: "row",
    gap: 4,
    marginBottom: -56,
  },

  formInput: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: '#262626',
    fontSize: 16,
    lineHeight: 140,
    padding: 16,
    borderWidth: 1,
    borderColor: '#0d0d0d',
    color: '#f2f2f2',
    
  },

  formButton: {
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: '#1e6f9f',
    padding: 18,

    borderRadius: 6,
  },

  listContainer: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 24,
  },

  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
  },

  summaryCreated: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center"
  },

  summaryCreatedText: {
    fontFamily: 'Inter_700Bold',
    fontSize: 14,
    color: '#4ea8de'
  },

  summaryCompletedText: {
    fontFamily: 'Inter_700Bold',
    fontSize: 14,
    color: '#8284FA'
  },

  summaryNumber: {
    color: '#d9d9d9',
    backgroundColor: '#333333',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignItems: 'center',

    fontSize: 12,
    fontFamily: 'Inter_700Bold',
  }

})