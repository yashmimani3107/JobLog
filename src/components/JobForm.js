import React, { useState } from 'react';

const JobForm = ({ addJob }) => {
  const [job, setJob] = useState({
    company: '',
    position: '',
    dateApplied: '',
    status: 'Applied',
    applyLink: '', 
  });

 
  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    addJob(job);
   
    setJob({
      company: '',
      position: '',
      dateApplied: '',
      status: 'Applied',
      applyLink: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 shadow-md bg-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">Add New Application</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Company</label>
        <input 
          type="text"
          name="company"
          value={job.company}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required 
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Position</label>
        <input 
          type="text"
          name="position"
          value={job.position}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required 
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Date Applied</label>
        <input 
          type="date"
          name="dateApplied"
          value={job.dateApplied}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required 
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Application Link</label>
        <input 
          type="url" 
          name="applyLink"
          value={job.applyLink}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter the link to the application"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Add Application
      </button>
    </form>
  );
};

export default JobForm;
