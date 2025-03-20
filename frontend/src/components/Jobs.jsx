import React from 'react';
import Navbar from './shared/Navbar';
import FilterCard from './FilterCard';
import Job from './Job';
import { useSelector } from 'react-redux';

const Jobs = () => {
  const {allJobs} = useSelector(store => store.job);
  return (
    <div>
      <Navbar />
      {/* Filter Page */}
      <div className="flex gap-5 max-w-7xl mx-auto mt-5">
        <FilterCard className="w-20" />
        {/* Job Card */}
        {allJobs.length > 0 ? (
          <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
            <div className="grid grid-cols-3 gap-4">
              {allJobs.map((job) => (
                <div key={job?._id}>
                  <Job job={job} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <span>Job not found.</span>
        )}
      </div>
    </div>
  );
};

export default Jobs;
