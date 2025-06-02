import React from 'react'

const CompleteTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
    <h4 className='text-sem'>20 feb 2025</h4>
      </div>
     <h3 className='mt-5 text-2xl font-semibold'>Make a youtube video</h3>
     <p className='text-sm mt-2'>
        The employee is responsible for completing assigned tasks on time, collaborating with team members, attending meetings, and maintaining work quality and accuracy. Regular updates and effective communication are expected.
     </p>
     <div className='mt-2'>
        <button className='w-full'>Completed</button>
     </div>
  </div>
  )
}

export default CompleteTask