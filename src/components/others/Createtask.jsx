import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext);

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [asignTo, setAsignTo] = useState('');
    const [category, setCategory] = useState('');

    // Get employee names for dropdown
    const employeeNames = userData && userData.employees
        ? userData.employees.map(emp => emp.firstName)
        : [];

    const submitHandler = (e) => {
        e.preventDefault();

        const newTaskObj = {
            title: taskTitle,
            taskDescription,
            taskDate,
            category,
            type: "newTask",
            active: false,
            newTask: true,
            failed: false,
            completed: false
        };

        // Update employees array
        const updatedEmployees = userData.employees.map(emp => {
            if (asignTo === emp.firstName) {
                return {
                    ...emp,
                    tasks: [...emp.tasks, newTaskObj],
                    taskStats: {
                        ...emp.taskCounts,
                        newTask: (emp.taskStats?.newTask || 0) + 1
                    }
                };
            }
            return emp;
        });

        // Update admin's newTask count (assuming admin is an array with an admin object)
        const updatedAdmin = Array.isArray(userData.admin)
            ? userData.admin.map(a =>
                a.admin
                    ? { ...a, admin: { ...a.admin, newTask: (a.admin.newTask || 0) + 1 } }
                    : a
              )
            : userData.admin;

        // Update context and localStorage
        const updatedData = {
            ...userData,
            employees: updatedEmployees,
            admin: updatedAdmin
        };

        setUserData(updatedData);
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));
        localStorage.setItem('admin', JSON.stringify(updatedAdmin));

        setTaskTitle('');
        setCategory('');
        setAsignTo('');
        setTaskDate('');
        setTaskDescription('');
    };

    return (
        <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
            <form onSubmit={submitHandler}
                className='flex flex-wrap w-full items-start justify-between'
            >
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text"
                            placeholder='Make a UI design'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="date"
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                        <select
                            value={asignTo}
                            onChange={(e) => setAsignTo(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent color-black border-[1px] border-gray-400 mb-4'
                        >
                            <option className= 'bg-transparent color-black' value="">Select employee</option>
                            {employeeNames.map(name => (
                                <option key={name} value={name}>{name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text"
                            placeholder='design, dev, etc'
                        />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'
                        name=""
                        id=""
                    ></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;