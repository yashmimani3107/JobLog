import React, { useState ,useEffect} from 'react';
import JobForm from './components/JobForm';
import JobList from './components/JobList';
import JobDashboard from './components/JobDashboard';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [jobs, setJobs] = useState([]);

  const addJob = (job) => {
    const updatedJobs = [...jobs, job];
    setJobs(updatedJobs);
    localStorage.setItem('jobs', JSON.stringify(updatedJobs)); // Save to local storage
  };

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    setJobs(storedJobs);
  }, []);
  
  

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
    <Router>
      <Header />
      <div className="App">
        <Routes>
          {/* Route for Add Job */}
          <Route path="/" element={<JobForm addJob={addJob} />} />

          {/* Route for Job List */}
          <Route path="/list" element={<JobList jobs={jobs} updateJobStatus={updateJobStatus} deleteJob={deleteJob} />} />

          {/* Route for Dashboard */}
          <Route path="/dashboard" element={<JobDashboard jobs={jobs} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
