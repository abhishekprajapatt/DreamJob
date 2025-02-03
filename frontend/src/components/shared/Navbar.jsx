import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const user = useSelector(store => store.auth);
  console.log(user)
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold text-[#7525c6]">
            Dream<span className="text-[#f86402]">Job</span>
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <ul className="flex font-medium items-center gap-5">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login"><Button variant="outline">Login</Button></Link>
              <Link to="/signup"><Button>Signup</Button></Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                {/* <Button variant="outline">Opne popover</Button> */}
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="">
                  <div className="flex gap-2 space-y-2">
                    <Avatar className="cursor-pointer">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="">
                      <h4 className="font-medium">{user?.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        Lorem epsome is hai ji
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 text-gray-600">
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <Button variant="link">View Profile</Button>
                    </div>
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <Button variant="link">Logout</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
