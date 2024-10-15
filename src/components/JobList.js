import React, { useState } from 'react';

const JobList = ({ jobs, updateJobStatus, deleteJob }) => {
  const [sortOrder, setSortOrder] = useState('recent');
  const [searchTerm, setSearchTerm] = useState('');

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

  // Function to filter jobs based on search term
  const filteredJobs = sortedJobs.filter(job =>
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredJobs.length === 0) {
    return <div>No jobs found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-6">
      {/* Search Input */}
      <div className="mb-4">
        <label htmlFor="search" className="block text-gray-700 mb-2">Search:</label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by company or position"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Sort by Date Applied */}
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

      {/* Job List - Compact Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map((job, index) => (
          <div key={index} className="p-4 shadow-md bg-white rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold">{job.company} - {job.position}</h3>
            <p className="text-sm text-gray-500">Date Applied: {job.dateApplied}</p>
            <p className="text-sm text-gray-500">Status: {job.status}</p>

            {/* Clickable Application Link with Truncation */}
            {job.applyLink && (
              <p className="mt-2 text-sm">
                Application Link: 
                <a 
                  href={job.applyLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-500 underline hover:text-blue-700 block truncate"
                  style={{ wordWrap: 'break-word' }} // Ensures long URLs wrap
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

            <button 
              onClick={() => deleteJob(index)} 
              className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
            >
              Delete Application
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
