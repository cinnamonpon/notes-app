import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 20,
  },
  listSeparator: {
    height: 8,
  },
  loading: {
    alignSelf: 'center',
    marginVertical: 5,
  },
  note: {
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 5,
  },
  noteTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
