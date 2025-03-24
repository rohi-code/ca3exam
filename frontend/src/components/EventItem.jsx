//EventItem Component
import React from 'react'
import EventList from './EventList'
import EventForm from './EventForm'

const EventItem = ({name,age,game}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{game}</p>
    </div>
  )
}

export default EventItem
