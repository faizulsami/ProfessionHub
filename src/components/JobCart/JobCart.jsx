import React from 'react';
import './JobCart.css'
import { Button, Card } from 'flowbite-react';
import { MapPinIcon , CurrencyDollarIcon } from '@heroicons/react/24/solid'
const JobCart = ({ job }) => {
    return (
        <div className="mx-auto lg:mt-6">
            <Card>
                <img src={job.img} alt="" className='w-32 rounded-2xl'/>
                <h2 className='lg:text-2xl job-title'>{job.jobTitle}</h2>
                <p className='lg:text-xl companyName'>{job.companyName}</p>
                <div className='flex'>
                    <div>
                    <button type="button" class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">{job.jobType}</button>
                    </div>
                    <div>
                    <button type="button" class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">{job.jobSchedule}</button>
                    </div>
                </div>
                <div className='flex gap-6'>
                        <div className='flex'>
                        <MapPinIcon className="h-6 w-6 text-zinc-400" />
                            <p className='salary ps-1'>{job.address}</p>
                        </div>
                        <div className='flex'>
                            <CurrencyDollarIcon className="h-6 w-6 text-zinc-400" />
                            <p className='salary ps-1'>Salary:{job.Salary}</p>
                        </div>
                </div>
                        <Button className='view-more' gradientDuoTone="purpleToBlue">
                        View Details
                        </Button>
            </Card>
        </div>
    );
};

export default JobCart;