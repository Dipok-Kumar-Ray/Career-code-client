import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const {_id, title, company, } = useLoaderData();

    return (
        <div>
            <h2 className='text-6xl'>{title}</h2>
            <p>Company : {company}</p>
            <Link to={`/jobApply/${_id}`}>
            <button className='btn btn-primary'> Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetails;