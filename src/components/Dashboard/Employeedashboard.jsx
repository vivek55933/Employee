import React from 'react'
import Header from '../others/Header'
import TaskListnumber from '../others/TaskListnumber'
import Tasklist from '../Tasklist/Tasklist'

const Employeedashboard = (props) => {
  return (
    <div className='p-10 bg-white h-screen'>
      <h2>Welcome, {props.employee.id}</h2>
      <Header changeUser={props.changeUser} employee={props.employee} />
      <TaskListnumber employee={props.employee} />
      <Tasklist employee={props.employee} />
    </div>
  );
};

export default Employeedashboard