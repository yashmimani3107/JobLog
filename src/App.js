import React, { useState } from 'react';
import JobForm from './components/JobForm';
import JobList from './components/JobList';

function App() {
  const [jobs, setJobs] = useState([]);

  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  const updateJobStatus = (index, newStatus) => {
    const updatedJobs = jobs.map((job, i) => 
      i === index ? { ...job, status: newStatus } : job
    );
    setJobs(updatedJobs);
  };

  const deleteJob = (index) => {
    const updatedJobs = jobs.filter((job, i) => i !== index);
    setJobs(updatedJobs);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-8">JobLog : Your career, your progress—tracked effortlessly.</h1>
      <JobForm addJob={addJob} />
      <JobList jobs={jobs} updateJobStatus={updateJobStatus} deleteJob={deleteJob} />
    </div>
  );
}

export default App;
