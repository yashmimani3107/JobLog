import React, { useState } from 'react'

const handleSubmit = ()=>{

}

const JobForm = () => {

    const [job,setJob] = useState({
        company:'',
        position:'',
        dateApplied:'',
    })

    const handleChange = (e) =>{
        setJob({...job,
            [e.target.name] : e.target.value
        })
    }
  return (
    <form onSubmit={handleSubmit} className='max-w-lg mx-auto p-6 shadow-md bg-white rounded-lg'>
        <h2 className='text-xl font-bold mb-4'>Add New Application</h2>
        <div className='mb-4'>
            <label className='block text-gray-700'> Company</label>
            <input 
            type='text' 
            value={job.company}
            onChange={handleChange}
            name='company' 
            className='border border-gray-300 w-full p-2 rounded' >
            </input>
        </div>
        <div className='mb-4'>
            <label className='block text-gray-700'> Position</label>
            <input 
            type='text' 
            value={job.position}
            onChange={handleChange}
            name='position' 
            className='border border-gray-300 w-full p-2 rounded' >
            </input>
        </div>
        <div className='mb-4'>
            <label className='block text-gray-700'> Date Applied</label>
            <input 
            type='date' 
            value={job.dateApplied}
            onChange={handleChange}
            name='dateApplied' 
            className='border border-gray-300 w-full p-2 rounded' >
            </input>
        </div>
        <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>Add Application</button>
        
    </form>
  )
}

export default JobForm