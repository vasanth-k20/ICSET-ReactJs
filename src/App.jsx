import { useState } from 'react'
import './App.css'
import AppRouter from './Router/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <AppRouter/>
    </>
  )
}

export default App