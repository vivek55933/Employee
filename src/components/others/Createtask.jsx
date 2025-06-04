import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Createtask = () => {

      const [authData,setAuthData] =useContext(AuthContext)

    const [taskTitle, setTasktitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newtask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();

        // Create the new task object
        const newTask = {
            taskDate,
            taskDescription,
            taskTitle,
            asignTo,
            category,
            active: true,
            newTask: true,
            completed: false,
            failed: false
        };

        // Update the employees array
        const updatedEmployees = authData.employees.map(emp => {
            if (asignTo === emp.firstName) {
                return {
                    ...emp,
                    tasks: [...emp.tasks, newTask],
                    taskStats: {
                        ...emp.taskStats,
                        newTask: (emp.taskStats.newTask || 0) + 1
                    }
                };
            }
            return emp;
        });

        // Update context and localStorage
        setAuthData({ ...authData, employees: updatedEmployees });
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));
        

        // Clear form fields
        setAsignTo('');
        setCategory('');
        setTaskDate('');
        setTaskDescription('');
        setTasktitle('');
    }

    return (
        <div className='p-7 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-medium text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => setTasktitle(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text"
                            placeholder='Make the UI design'
                        />
                    </div>
                    <div>
                        <h3 className='text-medium text-gray-300 mb-0.5'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="date"
                            placeholder='Enter task date'
                        />
                    </div>
                    <div>
                        <h3 className='text-medium text-gray-300 mb-0.5'>Assign to</h3>
                        <input
                            value={asignTo}
                            onChange={(e) => setAsignTo(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text"
                            placeholder='Employee name'
                        />
                    </div>
                    <div>
                        <h3 className='text-medium text-gray-300 mb-0.5'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text"
                            placeholder='Design,Dev,etc'
                        />
                    </div>
                </div>
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-medium text-gray-300 mb-0.5'>Description</h3>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className='w-full text-white h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                    ></textarea>
                    <button
                        type="submit"
                        className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-medium mt-4 w-full'
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Createtask