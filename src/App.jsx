import Runs from './module_runs_task'
import HideSection from './module_hide_rask'
import './App.css'
import { Suspense } from 'react'

function App() {

  return (
    <>
    <Suspense fallback="Loding........">
      <Runs></Runs>
    </Suspense>
    <Suspense fallback="Loding hide section.......">
      <HideSection></HideSection>
    </Suspense>
    </>
  )
}

export default App
