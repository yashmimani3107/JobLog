import React, { useState } from 'react';

const JobList = ({ jobs, updateJobStatus, deleteJob }) => {
  const [sortOrder, setSortOrder] = useState('recent'); 

  // Function to get sorted jobs based on sort order
  const getSortedJobs = (jobs) => {
    if (sortOrder === 'recent') {
      return [...jobs].sort((a, b) => new Date(b.dateApplied) - new Date(a.dateApplied));
    } else if (sortOrder === 'lastWeek') {
      const lastWeek = new Date();
      lastWeek.setDate(lastWeek.getDate() - 7);
      return [...jobs].filter(job => new Date(job.dateApplied) >= lastWeek)
                      .sort((a, b) => new Date(b.dateApplied) - new Date(a.dateApplied));
    }
    return jobs; 
  };

  const sortedJobs = getSortedJobs(jobs); 

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  if (sortedJobs.length === 0) {
    return <div>No jobs applied yet.</div>; 
  }

  return (
    <div className="max-w-4xl mx-auto mt-6">
      <div className="mb-4">
        <label htmlFor="sort" className="block text-gray-700 mb-2">Sort by:</label>
        <select
          name="sort"
          value={sortOrder}
          onChange={handleSortChange}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="recent">Most Recent</option>
          <option value="lastWeek">Last Week</option>
        </select>
      </div>

      {sortedJobs.map((job, index) => (
        <div key={index} className="p-4 mb-4 shadow-md bg-white rounded-lg">
          <h3 className="text-xl font-bold">{job.company} - {job.position}</h3>
          <p>Date Applied: {job.dateApplied}</p>
          <p>Status: {job.status}</p>

          {/* Clickable Application Link */}
          {job.applyLink && (
            <p>
              Application Link: 
              <a 
                href={job.applyLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 underline hover:text-blue-700"
              >
                {job.applyLink}
              </a>
            </p>
          )}

          <div className="mt-4">
            <label htmlFor="status" className="block text-gray-700">Update Status</label>
            <select
              name="status"
              value={job.status}
              onChange={(e) => updateJobStatus(index, e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          <button onClick={() => deleteJob(index)} className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
            Delete Application
          </button>
        </div>
      ))}
    </div>
  );
};

export default JobList;
