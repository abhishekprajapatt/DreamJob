import React from 'react';
import LatestJobCards from './LatestJobCards';
const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const LatestJobs = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h2 className="text-4xl font-bold">
        <span className="text-violet-600">Latest & Top</span>Jobs Openings
      </h2>
      <div className="grid grid-cols-3 gap-4 my-5">
        {randomJobs.slice(0, 6).map((item, index) => (
          <LatestJobCards item={item} />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
