import React from 'react';
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';

const LatestJobs = () => {
  const {allJobs} = useSelector(store => store.job);
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h2 className="text-4xl font-bold">
        <span className="text-violet-600">Latest & Top</span>Jobs Openings
      </h2>
      <div className="grid grid-cols-3 gap-4 my-5">
        {allJobs.length > 0 ? allJobs.slice(0, 6).map((job) => (
          <LatestJobCards item={job._id} job={job} />
        )): <span className="">No Jobs Available...</span> }
      </div>
    </div>
  );
};

export default LatestJobs;
