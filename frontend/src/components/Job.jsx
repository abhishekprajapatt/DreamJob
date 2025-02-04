import React from 'react';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const jobId =  "kdkdkrejjjvi4994"
const Job = () => {
  const navigate = useNavigate();
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-200">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">2 days ago</p>
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
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Company Name</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
          temporibus? Porro voluptatem debitis sit! Aut soluta amet labore quo
          eaque.
        </p>
      </div>
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
      <div className="flex items-center gap-4 mt-4">
        <Button onClink={() => navigate(`/description/${jobId}`)} variant="outline" className="">Details</Button>
        <Button className="bg-violet-600">Save</Button>
      </div>
    </div>
  );
};

export default Job;
