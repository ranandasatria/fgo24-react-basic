import React from 'react'
import "./calculate.css"

function Calculate() {
  const [count, setCount] = React.useState(0)

  function changeCount(newCount){
    if (newCount >= 0 && newCount <= 10){
    setCount(newCount)
    }
  }

  return (
    <>
      <div className="card">
        
        <button onClick={() => changeCount(count - 1)}>
          -
        </button>
        <div className="count">{count}</div>
          <button onClick={() => changeCount(count + 1)}>
          +
        </button>
      </div>     
    </>
  )
}

export default Calculate