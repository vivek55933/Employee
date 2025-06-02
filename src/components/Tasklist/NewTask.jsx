import React from 'react'

const NewTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
    <h4 className='text-sem'>20 feb 2025</h4>
      </div>
     <h3 className='mt-5 text-2xl font-semibold'>Make a youtube video</h3>
     <p className='text-sm mt-2'>
        The employee is responsible for completing assigned tasks on time, collaborating with team members, attending meetings, and maintaining work quality and accuracy. Regular updates and effective communication are expected.
     </p>
     <div className='mt-5'>
        <button  className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 text-sm rounded">Accept Task</button>
     </div>
  </div>

  )
}

export default NewTask