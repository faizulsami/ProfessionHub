import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../PageHeader/PageHeader';
import { Button } from 'flowbite-react';
import './Job_Details.css'
import {addToDb} from '../../utilities/fakedb'

const Job_Details = () => {
    const {id} = useParams()
    const [data , setData] = useState([])
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch('/public/data.json');
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error(error);
            }
    };
            fetchData();
    },[])
    const matchId = data.find(d => d.id === parseInt(id));
    const handleAddtoCart = (id) => {
        addToDb(id)
    }
    return (
        <div>
            <PageHeader title={'Job Details'}></PageHeader>
            {matchId && (
                <div className='grid lg:gap-5 lg:grid-cols-2 relative lg:left-80 lg:mt-28 leading-10'>
                <div>
                    <div>
                    <p><span className='job-title lg:text-xl'>Job Description:</span> <span className='job-details-custom lg:text-lg'>{matchId.JobDescription}</span></p>
                    </div>
                    <div>
                        <p><span className='job-title lg:text-xl'>Job Responsibility: </span><span className='job-details-custom lg:text-lg'>{matchId.jobResponsibility}</span></p>
                    </div>
                    <div>
                        <p className='job-title lg:text-xl'>Educational Requirements:</p>
                        <p className=' job-details-custom lg:text-lg'>{matchId.EducationalRequirements}</p>
                    </div>
                    <div>
                        <p className='job-title lg:text-xl'>Experiences: </p>
                        <p className=' job-details-custom lg:text-lg'>{matchId.Experience}</p>
                    </div>
                </div>
                <div>
                    <div className='w-96 bg-indigo-100 p-8 pb-4 rounded-lg'>
                        <h2 className='job-title lg:text-2xl pt-3'>Job Details</h2>
                        <hr className='w-80 border-indigo-200 my-4'/>
                        <p><span className='job-details-custom-2 lg:text-lg'>Salary :</span> <span className='job-details-custom lg:text-lg'>{matchId.Salary}</span></p>
                        <p><span className='job-details-custom-2 lg:text-lg'>Job Title :</span> <span className='job-details-custom lg:text-lg'>{matchId.jobTitle}</span></p>
                        <h2 className='job-title lg:text-2xl pt-5'>Contact Information</h2>
                        <hr className='w-80 border-indigo-200 my-4'/>
                        <p><span className='job-details-custom-2 lg:text-lg'>Phone :</span> <span className='job-details-custom lg:text-lg'>{matchId.phone}</span></p>
                        <p><span className='job-details-custom-2 lg:text-lg'>Email :</span> <span className='job-details-custom lg:text-lg'>{matchId.email}</span></p>
                        <p><span className='job-details-custom-2 lg:text-lg'>Address :</span> <span className='job-details-custom lg:text-lg'>{matchId.address}</span></p>
                    </div>
                    <Button onClick={()=>handleAddtoCart(matchId.id)} className='lg:w-96 mt-4 lg:h-14 apply-now-style' gradientDuoTone="purpleToBlue">
                        <p className='lg:text-xl apply-now-style'>Apply Now</p>
                    </Button>
                </div>
            </div>
            )}
        </div>
    );
};

export default Job_Details;