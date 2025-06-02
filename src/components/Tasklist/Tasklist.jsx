import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const Tasklist = ({ employee }) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap mt-10 p-4'>
      {employee.tasks.map((elem, idx) => {
        if (elem.type === "active") {
          return <AcceptTask key={idx} task={elem} />;
        }
        if (elem.type === "newTask") {
          return <NewTask key={idx} task={elem} />;
        }
        if (elem.type === "completed") {
          return <CompleteTask key={idx} task={elem} />;
        }
        if (elem.type === "failed") {
          return <FailedTask key={idx} task={elem} />;
        }
        return null;
      })}
    </div>
  )
}

export default Tasklist