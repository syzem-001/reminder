import React from 'react'
import { PersCard } from './PersCard'

export const PersList = ({ Persons, onDelete }) => {


  return (
    <div className='flex w-full flex-row flex-wrap justify-center gap-4'>
        {Persons.map(obj =>
            
            <div key={obj.id}>
            <PersCard

            id = {obj.id} 
            name= {obj.name} 
            age={obj.age}
            img={obj.image}
            onDelete={onDelete}

            />
            </div>
        )}
        
    </div>
  )
}
