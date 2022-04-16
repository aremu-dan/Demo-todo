import React, { useEffect } from 'react'

function Splashscreen({ handleModal }) {
  useEffect(() => {}, [])

  return (
    <>
      <button
        title='add task'
        className='showModalButton'
        onClick={() => handleModal(true)}
      >
        +
      </button>
    </>
  )
}

export default Splashscreen
