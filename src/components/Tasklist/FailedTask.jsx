import React from 'react'

const FailedTask = ({task}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{task.category}</h3>
    <h4 className='text-sem'>{task.taskDate}</h4>
      </div>
     <h3 className='mt-5 text-2xl font-semibold'>{task.title}</h3>
     <p className='text-sm mt-2'>
        {task.taskDescription}
     </p>
     <div className='mt-2'>
        <button className='w-full'>Failed</button>
     </div>
  </div>
  )
}

export default FailedTask