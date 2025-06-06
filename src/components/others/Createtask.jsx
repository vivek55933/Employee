import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [asignTo, setAsignTo] = useState('');
  const [category, setCategory] = useState('');

  const employeeNames = userData?.employees?.map(emp => emp.firstName) || [];

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

    const updatedEmployees = userData.employees.map(emp => {
      if (asignTo === emp.firstName) {
        return {
          ...emp,
          tasks: [...emp.tasks, newTaskObj],
          taskStats: {
            ...emp.taskStats,
            newTask: (emp.taskStats?.newTask || 0) + 1
          }
        };
      }
      return emp;
    });

    const updatedAdmin = Array.isArray(userData.admin)
      ? userData.admin.map(a =>
          a.admin
            ? { ...a, admin: { ...a.admin, newTask: (a.admin.newTask || 0) + 1 } }
            : a
        )
      : userData.admin;

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
    <div className="p-8 bg-gray-900 rounded-xl shadow-lg mt-6">
      <h2 className="text-2xl text-white font-semibold mb-6 border-b border-gray-700 pb-2">
        Create New Task
      </h2>
      <form onSubmit={submitHandler} className="flex flex-wrap gap-6">
        {/* Left Column */}
        <div className="w-full md:w-1/2 space-y-5">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Task Title</label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder="Make a UI design"
              className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Date</label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Assign To</label>
            <select
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Select Employee</option>
              {employeeNames.map(name => (
                <option key={name} value={name} className="text-black">
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="design, dev, etc"
              className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-[45%] flex flex-col">
          <label className="text-sm text-gray-300 mb-1">Task Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Enter a detailed task description..."
            className="w-full h-44 bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
          />
          <button
            type="submit"
            className="mt-6 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
