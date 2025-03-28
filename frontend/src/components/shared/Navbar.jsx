import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { setUser } from '@/redux/authSlice';
import axios from 'axios';
import React from 'react';
import Avatar from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Navbar = () => {
  const user = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(user);

  const logoutHandler = async (e) => {
    try {
      const res = await axios.get(`/logout`, { withCredentials: true });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate('/login');
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'Logout failed');
    }
  };

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold text-[#7525c6]">
            Dream <span className="text-[#f86402]">Job</span>
            {!user && <h1 className="text-black">User not here</h1>}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <ul className="flex font-medium items-center gap-5">
            {user && user.role === 'recruiter' ? (
              <>
                <li>
                  <Link to="/admin/companies">Companies</Link>
                </li>
                <li>
                  <Link to="/admin/jobs">Jobs</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/jobs">Jobs</Link>
                </li>
                <li>
                  <Link to="/browse">Browse</Link>
                </li>
              </>
            )}
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signup">
                <Button>Signup</Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar
                  src={
                    user?.profile?.profilePhoto ||
                    'https://via.placeholder.com/50'
                  }
                  round={true}
                  size="50px"
                  className="cursor-pointer"
                />
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="">
                  <div className="flex gap-2 space-y-2">
                    <Avatar
                      src={
                        user?.profile?.profilePhoto ||
                        'https://via.placeholder.com/50'
                      }
                      round={true}
                      size="50px"
                      className="cursor-pointer"
                    />
                    <div className="">
                      <h4 className="font-medium">
                        {user?.fullname || 'User'}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {user?.profile?.bio || 'No bio available'}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 text-gray-600">
                    {user && user.role === 'student' && (
                      <div className="flex w-fit items-center gap-2 cursor-pointer">
                        <Button variant="link">
                          <Link to="/profile">View Profile</Link>
                        </Button>
                      </div>
                    )}
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <Button onClick={logoutHandler} variant="link">
                        Logout
                      </Button>
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
