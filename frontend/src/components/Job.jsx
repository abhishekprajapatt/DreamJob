import React from 'react';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

 const Job = ({job}) => {
  const navigate = useNavigate();
  const daysAgoFunction = (mongodbTime) => {
    const createAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createAt;
    return Math.floor(timeDifference/(1000*24*60*60));
  }
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-200">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">{daysAgoFunction(job?.createAt) === 0 ? "Today" : `${daysAgoFunction(job?.createAt)} days ago`}</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://yt3.googleusercontent.com/K8WVrQAQHTTwsHEtisMYcNai7p7XIlyEAdZg86qYw78ye57r5DRemHQ9Te4PcD_v98HB-ZvQjQ=s900-c-k-c0x00ffffff-no-rj" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
        <div className="">
          <h1 className="font-medium text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{job?.title} </h1>
        <p className="text-sm text-gray-600">
          {job?.description}
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={`text-blue-700 font-bold`} variant="ghost">
          {job?.position} Position
        </Badge>
        <Badge className={`text-red-500 font-bold`} variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className={`text-violet-600 font-bold`} variant="ghost">
          {job?.salary} LPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button onClink={() => navigate(`/description/${job?._id}`)} variant="outline" className="">Details</Button>
        <Button className="bg-violet-600">Save</Button>
      </div>
    </div>
  );
};

export default Job;
