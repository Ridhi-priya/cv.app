import React from 'react'
import Projects from '../Projects/Projects'
import Experience from '../Experience/Experience'
import About from '../About/About'
import Contact from '../Contact/Contact'

export const Navbar = () => {
  return (
    <div>
      <nav className='bg-slate-800 font-bold flex justify-end'>
        <ul className='px-32 py-4 flex space-x-8 justify-end'>
          <li className='cursor-pointer hover:underline underline-offset-8'>
            <About />
          </li>
          <li className='cursor-pointer hover:underline underline-offset-8'>
            <Projects />
          </li>
          <li className='cursor-pointer hover:underline underline-offset-8'>
            <Experience />
          </li>
          <li className='cursor-pointer hover:underline underline-offset-8'>
            <Contact />
          </li>
        </ul>
      </nav>
      <hr className='w-s h-1 -mt-4 bg-gray-200 border-0 rounded dark:bg-gray-700' />
    </div>
  )
}
