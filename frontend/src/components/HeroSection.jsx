import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="text-center flex flex-col gap-5 my-10">
      <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-red-600 font-medium">
        No. 1 Dream Job Website
      </span>
      <h2 className="text-5xl font-bold">
        Search, Apply & <br /> Get Your
        <span className="text-violet-600">Dream Jobs</span>
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
        necessitatibus.
      </p>
      <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto ">
        <Input
          type="text"
          placeholder="Find Your Dream Jobs"
          className="outline-none border-none w-full"
        />
        <Button className="rounded-r-full bg-violet-600">
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
