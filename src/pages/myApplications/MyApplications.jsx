import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import useAuth from '../../hooks/useAuth';
import { myApplicationsPromise } from '../../api/applicationsApi';



const MyApplications = () => {
    const {user} = useAuth();

    // const applicationsDataPromise = myApplicationsPromise(user.email)   
    return (
        <div>
            <ApplicationStats></ApplicationStats>
            <Suspense fallback={<span className="loading loading-bars loading-lg"></span>}>
                <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email)}>
                </ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;