import React, { useState } from 'react'
import Home from './src/screens/home'
import AddNote from './src/screens/addNote'
import EditNote from './src/screens/editNote'

const CurrentPageWidget = ({ currentPage, noteList, setCurrentPage, addNote }) => {
  switch (currentPage) {
    case 'home':
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
        />
      )
    case 'add':
      // Untuk membuat button Kembali ke Home bekerja, ubah code di dalam CurrentPageWidget pada App.js seperti di bawah untuk meneruskan setCurrentPage ke addNote.js.
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote}/>
    case 'edit':
      return <EditNote />
    default:
      return <Home />
  }
}

const App = () => {

  const [currentPage, setCurrentPage] = useState('home')

  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ])

    /*Function ini akan membuat id untuk note terlebih dahulu. Hal ini dilakukan dengan memeriksa apakah ada note di dalam noteList atau tidak.
    Jika tidak, maka kita akan beri 1 sebagai id dari note.
    Jika iya, kita akan berikan id dari note baru yang berupa id terbesar dari note di dalam noteList ditambah 1 (satu).
    Kita bisa menganggap note paling belakang memiliki id terbesar karena note di noteList akan selalu diurutkan berdasarkan id. Hal ini dilakukan agar tidak ada index note yang duplikat karena index ini akan digunakan untuk rendering list di home.js.
    Setelah itu kita akan menambahkan note ke dalam noteList dengan function setNoteList. */
  const addNote = (title, desc) => {
  const id =
    noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1

  setNoteList([
    ...noteList,
    {
      id,
      title: title,
      desc: desc,
    },
  ])
}

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
      addNote={addNote}
    />
  )
}

export default App