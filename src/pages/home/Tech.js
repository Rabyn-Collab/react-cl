import React from 'react'
import { DiAndroid, DiAppstore, DiCss3, DiHtml5, DiJavascript, DiNodejs, DiPython, DiReact } from 'react-icons/di'
const Tech = () => {
  return (
    <div className='space-y-10'>

      <h1 className='text-4xl font-bold text-center'>Technologies I use</h1>


      <div className="dev-icons grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center gap-y-4 ">

        <DiAndroid size={200} />
        <DiPython size={200} />
        <DiCss3 size={200} />
        <DiReact size={200} className='animate-bounce' />
        <DiHtml5 className='hover:scale-125 hover:text-red-700 transition-all duration-200' size={200} />
        <DiJavascript size={200} />
        <DiNodejs size={200} />
        <DiAppstore size={200} />
      </div>

    </div>
  )
}

export default Tech