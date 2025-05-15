import React from 'react'

function Calculate() {
  const [count, setCount] = React.useState(0)

  function changeCount(newCount){
    setCount(newCount)
  }

  return (
    <>
      <div className="card">
        <div>{count}</div>

        <button onClick={() => changeCount((count) => count + 1)}>
          +
        </button>
      </div>     
    </>
  )
}

export default Calculate