import React from 'react';

const JobDashboard = ({ jobs }) => {
  const totalApplications = jobs.length;

  const applicationsByStatus = jobs.reduce((acc, job) => {
    acc[job.status] = (acc[job.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="max-w-4xl mx-auto mt-6 p-6 bg-gray-100 shadow-md rounded-lg">
      {/* Dashboard Header */}
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Job Application Dashboard</h2>

      {/* Total Applications */}
      <div className="mb-6 p-4 bg-white shadow rounded-lg">
        <h3 className="text-xl font-semibold text-gray-700">Total Applications</h3>
        <p className="text-4xl font-bold text-blue-500 mt-2">{totalApplications}</p>
      </div>

      {/* Applications by Status */}
      <div className="p-4 bg-white shadow rounded-lg">
        <h3 className="text-xl font-semibold text-gray-700">Applications by Status</h3>
        <ul className="mt-4">
          {Object.keys(applicationsByStatus).map((status) => (
            <li
              key={status}
              className="flex justify-between mt-2 text-lg text-gray-600 bg-gray-50 px-4 py-2 rounded-lg"
            >
              <span className="capitalize">{status}</span>
              <span className="font-bold text-blue-500">{applicationsByStatus[status]}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobDashboard;
