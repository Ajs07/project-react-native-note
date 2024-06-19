import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import CustomButton from '../components/CustomButton'
import CustomTextInput from '../components/CustomTextInput'

const EditNote = ({ setCurrentPage, noteList, setNoteList, currentNoteId }) => {
  const noteToEdit = noteList.find(note => note.id === currentNoteId)
  const [title, setTitle] = useState(noteToEdit ? noteToEdit.title : '')
  const [desc, setDesc] = useState(noteToEdit ? noteToEdit.desc : '')

  const editNote = (id, newTitle, newDesc) => {
    const updatedNotes = noteList.map(note =>
      note.id === id ? { ...note, title: newTitle, desc: newDesc } : note
    )
    setNoteList(updatedNotes)
    setCurrentPage('home')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Edit Note</Text>
      <CustomTextInput
        text={title}
        onChange={setTitle}
        label="Judul"
        placeholder="Judul"
        numberOfLines={1}
        multiline={false}
      />
      <CustomTextInput
        text={desc}
        onChange={setDesc}
        label="Deskripsi"
        placeholder="Deskripsi"
        multiline
        numberOfLines={4}
      />
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#247881"
          color="white"
          text="Simpan Perubahan"
          width="100%"
          onPress={() => editNote(currentNoteId, title, desc)}
        />
      </View>
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#DDDDDD"
          color="#203239"
          text="Kembali ke Home"
          width="100%"
          onPress={() => setCurrentPage('home')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  pageTitle: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: '#203239',
  },
  spacerTop: {
    marginTop: 30,
  },
})

export default EditNote
