import React from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import CustomButton from '../components/customButton'

// Tambahkan "setCurrentPage" sebagai sebuah prop
const NoteCard = ({ item, setCurrentPage, setCurrentNoteId,deleteNote }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{item.title}</Text>
    <Text style={styles.cardDesc}>{item.desc}</Text>
    <View style={styles.buttons}>
      <CustomButton
        backgroundColor="#FFC300"
        color="#151D3B"
        text="Ubah"
        fontSize={12}
        width={100}
        onPress={() => {
          setCurrentNoteId(item.id)
          setCurrentPage('edit')}}
      />
      <CustomButton
        backgroundColor="#D82148"
        color="#fff"
        text="Hapus"
        fontSize={12}
        width={100}
        onPress={() => {}}
      />
    </View>
  </View>
)

// Tambahkan "setCurrentPage" sebagai prop
const Home = ({ noteList, setCurrentPage, setCurrentNoteId }) => (
  <View style={styles.container}>
    <CustomButton
      backgroundColor="#DDD"
      color="#203239"
      text="Tambahkan Note"
      width="100%"
      onPress={() => {setCurrentPage('add')}}
    />
    <FlatList
      showsVerticalScrollIndicator={false}
      data={noteList}
      // Berikan function "setCurrentPage" ke component "NoteCard"
      renderItem={({ item }) => (
        <NoteCard item={item} setCurrentPage={setCurrentPage} />
      )}
      keyExtractor={(item) => item.id}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,backgroundColor: '#f5f5f5'
  },
  card: {
    padding: 15,
    marginVertical: 8,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontWeight: '600',
    color: '#203239',
    fontSize: 18,
    marginBottom: 5,
  },  
  cardDesc: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  buttons: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
})

export default Home