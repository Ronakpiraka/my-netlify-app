import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 Ronak's First Netlify Deployment</h1>
      <p>Hello! This is a React + TypeScript site deployed on Netlify.</p>
    </div>
      The count is {count}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Add
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Subtract
        </button>
      </div>
    </>
  )
}

export default App
