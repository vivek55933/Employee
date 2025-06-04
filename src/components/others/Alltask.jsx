import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'


const Alltask = () => {
    const [authData,setAuthData] =useContext(AuthContext)
  return (
    <div className='p-5 bg-[#1c1c1c] mt-5 rounded  overflow-auto'>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded font-bold text-white'>
  <h2 className='text-lg font-medium w-1/5 text-center'>Employee Name</h2>
  <h3 className='text-lg font-medium w-1/5 text-center'>New Task</h3>
  <h5 className='text-lg font-medium w-1/5 text-center'>Active Task</h5>
  <h5 className='text-lg font-medium w-1/5 text-center'>Completed</h5>
  <h5 className='text-lg font-medium w-1/5 text-center'>Failed</h5>
</div>
        <div className=''>
            {authData.employees.map(function(elem,idx){
                return <div key={idx} className='border-2 border-emerald-500 mb-2 py-4 px-4 flex justify-between rounded'>
  <h2 className='text-lg font-medium w-1/5 text-center'>{elem.firstName}</h2>
  <h3 className='text-lg font-medium w-1/5 text-center text-blue-600'>{elem.taskStats.newTask}</h3>
  <h5 className='text-lg font-medium w-1/5 text-center text-yellow-400'>{elem.taskStats.active}</h5>
  <h5 className='text-lg font-medium w-1/5 text-center text-white'>{elem.taskStats.completed}</h5>
  <h5 className='text-lg font-medium w-1/5 text-center text-red-600'>{elem.taskStats.failed}</h5>
</div>
            })}
            </div>
            </div>
  )

}
export default Alltask