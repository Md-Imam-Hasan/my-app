import React, { useState } from 'react'

export default function Index() {
  const [count, setCount] = useState(0)
  const handleEvent = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleEvent}>+</button>
    </div>
  )
}