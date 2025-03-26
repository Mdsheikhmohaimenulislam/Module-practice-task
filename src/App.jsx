import Runs from './module_runs_task'
import HideSection from './module_hide_rask'
import UserApi from './users'
import './App.css'
import { Suspense } from 'react'

const fetchApi = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}


function App() {

  const fetchApiPromise = fetchApi()

  return (
    <>
    <Suspense fallback="Loding........">
      <Runs></Runs>
    </Suspense>
    <Suspense fallback="Loding hide section.......">
      <HideSection></HideSection>
    </Suspense>
    <Suspense fallback="Api Loding........">
      <UserApi  fetchApiPromise = {fetchApiPromise}></UserApi>
    </Suspense>
    </>
  )
}

export default App
