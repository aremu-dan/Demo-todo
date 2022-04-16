import React, { useEffect, useRef } from 'react'

function AddItem({ addItem, showModal, handleModal }) {
  const refTitle = useRef(null)
  const refContent = useRef(null)

  const isNull = (val) => {
    if (val === '') return true
    return false
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isNull(refTitle.current.value)) {
      refTitle.current.focus()
    } else if (isNull(refContent.current.value)) {
      refContent.current.focus()
    } else {
      addItem({
        title: refTitle.current.value,
        content: refContent.current.value,
      })
      handleModal(false)
    }
  }

  const emptyForm = () => {
    refTitle.current.value = ''
    refContent.current.value = ''
  }

  useEffect(() => {
    if (showModal) {
      emptyForm()
      refTitle.current.focus()
    }
  }, [showModal])

  return (
    <div className={showModal ? 'modal show' : 'modal'}>
      <div className='backdrop' onClick={() => handleModal(false)}></div>
      <div className='card'>
        <div className='card-title'>
          <p>Add New Item</p>
        </div>
        <div className='card-body'>
          <form className='form' onSubmit={handleSubmit}>
            <div>
              <input type='text' placeholder='Task Title' ref={refTitle} />
              <textarea placeholder='Task content' ref={refContent}></textarea>
              <button type='submit'>Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddItem
