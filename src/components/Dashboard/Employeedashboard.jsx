import React from 'react'
import Header from '../others/Header'
import TaskListnumber from '../others/TaskListnumber'
import Tasklist from '../Tasklist/Tasklist'

const Employeedashboard = ({ employee }) => {
  return (
    <div  className='p-10 bg-white h-screen'>
      <h2>Welcome, {employee.id}</h2>
      <Header employee={employee}/>
      <TaskListnumber  employee={employee}/>
      <Tasklist  employee={employee}/>
    </div>
  )
}

export default Employeedashboard