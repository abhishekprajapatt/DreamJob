import React from 'react';
import { Button } from './ui/button';

const isApplied = false;
const JobDescription = () => {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">FullStack</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className={`text-blue-700 font-bold`} variant="ghost">
              20 Position
            </Badge>
            <Badge className={`text-red-500 font-bold`} variant="ghost">
              Part Time
            </Badge>
            <Badge className={`text-violet-600 font-bold`} variant="ghost">
              80 LPA
            </Badge>
          </div>
        </div>
        <Button
          disabled={isApplied}
          className={`rounded-lg ${
            isApplied
              ? 'bg-gray-200 text-green-400 cursor-not-allowed'
              : 'bg-violet-600 hover:bg-violet-500 cursor-pointer'
          }`}
        >
          {isApplied ? 'Already Applied' : 'Apply Now'}
        </Button>
      </div>
      <h1 className="border-b-2 border-b-gray-600 font-medium py-4">Job Description</h1>
      <div className="my-4">
        <h1 className="font-bold my-1">Role:<span className="pl-4 font-normal text-gray-800">FullStack Developer</span></h1>
        <h1 className="font-bold my-1">Location:<span className="pl-4 font-normal text-gray-800">Gurugram</span></h1>
        <h1 className="font-bold my-1">Description:<span className="pl-4 font-normal text-gray-800">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, possimus. </span></h1>
        <h1 className="font-bold my-1">Experience:<span className="pl-4 font-normal text-gray-800">2 Years</span></h1>
        <h1 className="font-bold my-1">Salary:<span className="pl-4 font-normal text-gray-800">80LPA</span></h1>
        <h1 className="font-bold my-1">Total Applicants:<span className="pl-4 font-normal text-gray-800">8</span></h1>
        <h1 className="font-bold my-1">Posted Date:<span className="pl-4 font-normal text-gray-800">30/10/2024</span></h1>
      </div>
    </div>
  );
};

export default JobDescription;
