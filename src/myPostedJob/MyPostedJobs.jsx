import React, { Suspense } from 'react';
import useAuth from '../hooks/useAuth';
import JobLists from './JobLists';
import { jobsCratedByPromise } from '../api/jobsApi';

const MyPostedJobs = () => {
   const {user} = useAuth(); 
    return (
        <div>
            <h2>My Posted Jobs</h2>
            <Suspense>
                <JobLists jobsCratedByPromise={jobsCratedByPromise(user.email) }></JobLists>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;