// import logo from './logo.svg'
import React, { useState } from 'react'
import Title from './components/Title'
import ListItems from './components/ListItems/ListItems'
import Splashscreen from './components/Splashscreen'
import AddItem from './components/ListItems/AddItem'

function App() {
  const titleText = 'Castle Todo'

  const [todoList, setTodoList] = useState([
    {
      title: 'title One',
      content: 'content One',
    },
    {
      title: 'title Two',
      content: 'content Two',
    },
    {
      title: 'title Three',
      content: 'content Three',
    },
  ])

  const [showModal, setShowModal] = useState(false)
  // const [showSplashscreen, setShowSplashscreen] = useState(true)

  const addItem = (item) => {
    setTodoList([
      ...todoList,
      {
        title: item.title,
        content: item.content,
      },
    ])
  }

  const removeItem = (item) => {
    todoList.splice(item, 1)
    setTodoList([...todoList])
  }

  const handleModal = (x = false) => {
    setShowModal(x)
  }

  return (
    <div className='App'>
      <Title>{titleText}</Title>
      <ListItems todoList={todoList} removeItem={removeItem} />
      <AddItem
        addItem={addItem}
        showModal={showModal}
        handleModal={handleModal}
      ></AddItem>
      <Splashscreen handleModal={handleModal} />
    </div>
  )
}

export default App
