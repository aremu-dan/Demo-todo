import React, { useEffect } from 'react'

function ListItems({ todoList, removeItem }) {
  useEffect(() => {}, [todoList])

  const displayList = (x) => {
    if (!x || x.length <= 0) {
      return (
        <p style={{ color: 'red', textAlign: 'center' }}>No data to list</p>
      )
    } else {
      return todoList.map((listItem, index) => {
        return (
          <Items
            key={index}
            index={index}
            removeItem={removeItem}
            data={listItem}
          ></Items>
        )
      })
    }
  }

  return (
    <>
      <div id='todoList'>{displayList(todoList)}</div>
    </>
  )
}

function Items({ index, removeItem, data }) {
  return (
    <>
      <div className='item'>
        <button title='remove task' className='close' onClick={() => removeItem(index)}>
          X
        </button>

        <p className='listTitle'>{data.title}</p>
        <span className='listContent'>{data.content}</span>
      </div>
    </>
  )
}

export default ListItems
