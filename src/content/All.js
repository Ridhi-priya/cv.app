import React from 'react'
import { Navbar } from './NAvbar/Navbar'

import Details from './Details'

function All() {
  return (
    <div className='flex h-screen bg-slate-900'>
      <div className='flex-1 bg-slate-800 rounded-lg text-white m-20 mx-32'>
        <Details />

        <Navbar />
      </div>
    </div>
  )
}

export default All
