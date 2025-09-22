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
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
        <button onClick={() => setCount((count) => count - 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
