import Runs from './module_task'
import './App.css'
import { Suspense } from 'react'

function App() {

  return (
    <>
    <Suspense fallback="Loding........">
      <Runs></Runs>
    </Suspense>
    </>
  )
}

export default App
