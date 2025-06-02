import React from 'react'

const Createtask = () => {
  return (
    <div className='p-7 bg-[#1c1c1c] mt-7 rounded'>
            <form className='flex flex-wrap w-full  item-start justify-between'>
                <div className='w-1/2'>
                <div >
                    <h3 className='text-medium text-gray-300 mb-0.5'>Task Title</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent  border-[1px] border-gray-400 mb-4' type="text" placeholder='Make the UI design'/>
                </div>
                <div >
                    <h3 className='text-medium text-gray-300 mb-0.5'>Date</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent  border-[1px] border-gray-400 mb-4' type="date" placeholder='Enter teak title'/>
                </div>
                <div >
                    <h3 className='text-medium text-gray-300 mb-0.5'>Assign to</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent  border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee name'/>
                </div>
                <div >
                    <h3 className='text-medium text-gray-300 mb-0.5'>Category</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent  border-[1px] border-gray-400 mb-4' type="text" placeholder='Design,Dev,etc'/>
                </div>
                </div>
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-medium  text-gray-300 mb-0.5'>Description</h3>
                    <textarea className='w-full text-black h-44 text-sm py-2 px-4 rounded outline-none bg-tansparent border-[1px] border-gray-400 mb-4'></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-medium mt-4 w-full'>Create Task</button>
                </div>
            </form>
        </div>
  )
}

export default Createtask