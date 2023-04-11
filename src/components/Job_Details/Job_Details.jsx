import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../PageHeader/PageHeader';
import { Button } from 'flowbite-react';
import './Job_Details.css'

const Job_Details = () => {
    const {id} = useParams()
    const [data , setData] = useState([])
    useEffect(()=>{
        const LoadData = () => {
            fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
        };
    },[])
    return (
        <div>
            <PageHeader title={'Job Details'}></PageHeader>
            <div className='grid lg:gap-5 lg:grid-cols-2 relative lg:left-80 lg:mt-28 leading-10'>
                <div>
                    <div>
                    <p><span className='job-title lg:text-xl'>Job Description:</span> <span className='job-details-custom lg:text-lg'>A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</span></p>
                    </div>
                    <div>
                        <p><span className='job-title lg:text-xl'>Job Responsibility: </span><span className='job-details-custom lg:text-lg'>Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</span></p>
                    </div>
                    <div>
                        <p className='job-title lg:text-xl'>Educational Requirements:</p>
                        <p className=' job-details-custom lg:text-lg'>Bachelor degree to complete any reputational university.</p>
                    </div>
                    <div>
                        <p className='job-title lg:text-xl'>Experiences: </p>
                        <p className=' job-details-custom lg:text-lg'>2-3 Years in this field.</p>
                    </div>
                </div>
                <div>
                    <div className='w-96 bg-indigo-100 p-8 pb-4 rounded-lg'>
                        <h2 className='job-title lg:text-2xl pt-3'>Job Details</h2>
                        <hr className='w-80 border-indigo-200 my-4'/>
                        <p><span className='job-details-custom-2 lg:text-lg'>Salary :</span> <span className='job-details-custom lg:text-lg'>100K - 150K (Per Month)</span></p>
                        <p><span className='job-details-custom-2 lg:text-lg'>Job Title :</span> <span className='job-details-custom lg:text-lg'>Product Designer</span></p>
                        <h2 className='job-title lg:text-2xl pt-5'>Contact Information</h2>
                        <hr className='w-80 border-indigo-200 my-4'/>
                        <p><span className='job-details-custom-2 lg:text-lg'>Phone :</span> <span className='job-details-custom lg:text-lg'>01750-00 00 00</span></p>
                        <p><span className='job-details-custom-2 lg:text-lg'>Email :</span> <span className='job-details-custom lg:text-lg'>info@gmail.com</span></p>
                        <p><span className='job-details-custom-2 lg:text-lg'>Address :</span> <span className='job-details-custom lg:text-lg'>Dhanmondi 32, Sukrabad Dhaka, Bangladesh</span></p>
                    </div>
                    <Button className='lg:w-96 mt-4 lg:h-14 apply-now-style' gradientDuoTone="purpleToBlue">
                        <p className='lg:text-xl apply-now-style'>Apply Now</p>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Job_Details;