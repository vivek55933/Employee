import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Alltask = () => {
  const [authData, setAuthData] = useContext(AuthContext);

  return (
    <div className="p-6 bg-gray-900 mt-6 rounded-xl overflow-auto shadow-lg">
      {/* Header Row */}
      <div className="bg-emerald-600 mb-4 py-3 px-6 flex justify-between rounded-md text-white shadow-md">
        <h2 className="text-base font-semibold w-1/5 text-center">Employee Name</h2>
        <h3 className="text-base font-semibold w-1/5 text-center">New Tasks</h3>
        <h3 className="text-base font-semibold w-1/5 text-center">Active</h3>
        <h3 className="text-base font-semibold w-1/5 text-center">Completed</h3>
        <h3 className="text-base font-semibold w-1/5 text-center">Failed</h3>
      </div>

      {/* Data Rows */}
      {authData?.employees?.map((emp, idx) => (
        <div
          key={idx}
          className="border border-gray-700 bg-gray-800 mb-3 py-4 px-6 flex justify-between rounded-lg hover:shadow-lg transition-all duration-200"
        >
          <h2 className="text-sm font-medium w-1/5 text-center text-gray-100">
            {emp.firstName}
          </h2>
          <p className="text-sm font-semibold w-1/5 text-center text-blue-400">
            {emp.taskStats?.newTask || 0}
          </p>
          <p className="text-sm font-semibold w-1/5 text-center text-yellow-400">
            {emp.taskStats?.active || 0}
          </p>
          <p className="text-sm font-semibold w-1/5 text-center text-green-400">
            {emp.taskStats?.completed || 0}
          </p>
          <p className="text-sm font-semibold w-1/5 text-center text-red-400">
            {emp.taskStats?.failed || 0}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Alltask;
