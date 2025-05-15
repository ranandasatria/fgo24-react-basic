import React from 'react'
import "./calculate.css"

function Calculate() {
  const [count, setCount] = React.useState(0)

  function changeCount(newCount){
    setCount(newCount)
  }

  return (
    <>
      <div className="card">
        
        <button onClick={() => changeCount((count) => count - 1)}>
          -
        </button>
        <div class="count">{count}</div>
          <button onClick={() => changeCount((count) => count + 1)}>
          +
        </button>
      </div>     
    </>
  )
}

export default Calculate