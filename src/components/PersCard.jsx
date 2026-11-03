import { Card } from '@heroui/react'
import React from 'react'
import { Mymodal } from './Mymodal'

export const PersCard = ({ id, name, age, img, onDelete }) => {
  return (
      <div className="flex flex-wrap gap-4" key={id}>
        <Card className="w-[200px] gap-2">
            <Mymodal name={name} age={age} img={img}>
              <img
                alt={name}
                className="pointer-events-none aspect-square w-50 rounded-2xl object-cover select-none"
                loading="lazy"
                src={img}
              />
            </Mymodal>
            <Card.Header>
            <Card.Title>{name}</Card.Title>
            <Card.Description>{age}</Card.Description>
            </Card.Header>
            <button
             className='bg-slate-300 rounded-md hover:bg-red-500'
             onClick={() => onDelete(id)}
            >Delete
            </button>
        </Card>
    </div>  
  )
}
