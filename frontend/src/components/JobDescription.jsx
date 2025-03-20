import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setSingleJob } from '@/redux/jobSlice';
import { toast } from 'sonner';

const JobDescription = () => {
  const { singleJob } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);
  const isIntiallyApplied = singleJob?.applications?.some(
    (application) => application.applicant === user?._id || false
  );
  const [isApplied, setIsApplied] = useState(isIntiallyApplied);

  const params = useParams();
  const jobId = params.id;
  const dispatch = useDispatch();

  const applyJobHandler = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/application/apply/${jobId}`,
        { withCredentials: true }
      );
      if (res.data.success) {
        setIsApplied(true);
        const updateSingleJob = {...singleJob, applications:[...singleJob.applications,{applicant:user?._id}]};
        dispatch(setSingleJob(updateSingleJob))
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchSingleJobs = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/job/${jobId}`,
          { withCredentials: true }
        );
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
          setIsApplied(res.data.job.applications.some(application => application.applicant === user?._id));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJobs();
  }, [jobId, dispatch, user?.id]);
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">{singleJob?.title}</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className={`text-blue-700 font-bold`} variant="ghost">
              {singleJob?.position} Position
            </Badge>
            <Badge className={`text-red-500 font-bold`} variant="ghost">
              {singleJob?.jobType}
            </Badge>
            <Badge className={`text-violet-600 font-bold`} variant="ghost">
              {singleJob?.salary} LPA
            </Badge>
          </div>
        </div>
        <Button
          onClick={isApplied ? null : applyJobHandler}
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
      <h1 className="border-b-2 border-b-gray-600 font-medium py-4">
        Job Description
      </h1>
      <div className="my-4">
        <h1 className="font-bold my-1">
          Role:
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.title}
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Location:
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.location}
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Description:
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.discription}
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Experience:
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.experience} Years
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Salary:
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.salary}LPA
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Total Applicants:
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.applications?.length}
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Posted Date:
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.createAt.split('T')}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default JobDescription;
