import React from 'react';

const AcceptTask = ({ task }) => {
  return (
<div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{task.category}</h3>
    <h4 className='text-sem'>{task.taskDate}</h4>
      </div>
     <h3 className='mt-5 text-2xl font-semibold'>{task.title}</h3>
     <p className='text-sm mt-2'>
        {task.taskDescription}
     </p>
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 text-sm rounded">Mark as Completed</button>
        <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 text-sm rounded">Mark as Failed</button>
      </div>
      </div>
  );
};

export default AcceptTask;