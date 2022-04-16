import React, { useEffect } from 'react'

function Title({ children }) {
  useEffect(() => {}, [])
  return (
    <div id='title'>
      <h1>{children}</h1>
    </div>
  )
}

export default Title
