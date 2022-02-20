import React, { useReducer } from 'react'
import UserInterface from './components/UserInterface/UserInterface'
import app from './app.css'

export default function App() {
  return (
    <div className='center'>
      <UserInterface></UserInterface>
    </div>
  )
}
