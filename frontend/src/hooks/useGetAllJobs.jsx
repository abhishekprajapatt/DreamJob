import { setAllJobs } from '@/redux/jobSlice'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllJobs = () => {
  useEffect(() => {
    const fetchAllJobs = async () => {
        const dispatch = useDispatch();
        try {
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/job`, {withCredentials:true});
            if(res.data.success){
                dispatch(setAllJobs(res.data.jobs));
            }
        } catch (error) {
            console.log(error);
        }
    }
    fetchAllJobs();
  },[])
}

export default useGetAllJobs