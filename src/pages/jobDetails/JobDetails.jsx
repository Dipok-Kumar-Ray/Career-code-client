import React from 'react';
import { useLoaderData } from 'react-router';

const JobDetails = () => {
    const {title, company, } = useLoaderData();

    return (
        <div>
            <h2 className='text-6xl'>{title}</h2>
            <p>Company : {company}</p>
        </div>
    );
};

export default JobDetails;