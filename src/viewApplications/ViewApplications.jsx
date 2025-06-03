import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ViewApplications = () => {
    const {job_id} = useParams();
    const applications = useLoaderData();

    return (
        <div>
            <h2 className='text-4xl'>{applications.length} Applications for : {job_id}</h2>
        </div>
    );
};

export default ViewApplications;