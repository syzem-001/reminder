import React from 'react'

export const Counter = ({count}) => {

  return (
    <div>
        <h3>{count == 0 ? 'Today no more events...' : `Persons:${count}`}</h3>
    </div>
  )
}
