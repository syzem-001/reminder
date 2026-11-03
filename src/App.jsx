import { useState } from 'react'
import './App.css'
import { persons } from './data'
import { Counter } from './components/Counter'
import { Header } from './components/Header'
import { PersList } from './components/PersList'

function App() {
  const [Persons, setPersons] = useState(persons)

  const handleDelete = (id) => {
    setPersons((currentPersons) => currentPersons.filter((person) => person.id !== id))
  }

  return (
    <div className='flex flex-col items-center justify-center bg-blue-300 h-[100vh]'>
        <div className='flex flex-col items-center justify-center  border-b border-slate-800 gap-4 p-3'>
          <Header/>
          <Counter count={Persons.length}/>
        </div>

        <div className='flex w-full flex-row justify-center p-5'>
            {Persons.length !== 0 && <PersList Persons={Persons} onDelete={handleDelete}/>}
        </div>
    </div>
  )
}

export default App
