import React from 'react';
import { Badge } from './ui/badge';

const LatestJobCards = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer">
      <div className="">
        <h1 className="font-medium text-lg">Company Name</h1>
        <p className="text-sm text-gray-500">India</p>
      </div>
      <div className="">
        <h1 className="font-bold text-lg my-2">Job Title</h1>
        <p className="text-sm gray-600">
          Lorem ipsum dolor, sit amet consecteur adipisicing elit.
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={`text-blue-700 font-bold`} variant="ghost">20 Position</Badge>
        <Badge className={`text-red-500 font-bold`} variant="ghost">Part Time</Badge>
        <Badge className={`text-violet-600 font-bold`} variant="ghost">80 LPA</Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
