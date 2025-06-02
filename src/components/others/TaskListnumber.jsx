import React from 'react';
import { FaTasks, FaSpinner, FaCheckCircle, FaClipboardList } from 'react-icons/fa';

const TaskListnumber = ({ employee }) => {
  // Safely get stats or fallback to 0
  const stats = employee?.taskStats || {};

  const taskData = [
    { count: stats.newTask || 0, label: 'New Tasks', bg: 'bg-red-500', icon: <FaTasks size={28}  /> },
    { count: stats.active || 0, label: 'Accept Task', bg: 'bg-blue-500', icon: <FaSpinner size={28} /> },
    { count: stats.completed || 0, label: 'Completed Task', bg: 'bg-green-500', icon: <FaCheckCircle size={28} /> },
    { count: stats.failed || 0, label: 'Failed task', bg: 'bg-yellow-400', icon: <FaClipboardList size={28} /> },
  ];

  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
      {taskData.map(({ count, label, bg, icon }, index) => (
        <div
          key={index}
          className={`${bg} rounded-2xl p-6 flex flex-col items-center text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer`}
        >
          <div className="mb-4">{icon}</div>
          <h2 className="text-5xl font-extrabold">{count}</h2>
          <p className="text-lg font-semibold mt-2">{label}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskListnumber;
