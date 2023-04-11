import React from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../PageHeader/PageHeader';
import { Button } from 'flowbite-react';
import './Job_Details.css'

const Job_Details = () => {
    const {id} = useParams()
    console.log(id);
    return (
        <div>
            <PageHeader title={'Job Details'}></PageHeader>
            <div className='grid lg:gap-5 lg:grid-cols-2 relative lg:left-80 lg:mt-28'>
                <div>
                    <div>
                    <p><span className='job-title'>Job Description:</span><span>A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</span></p>
                    </div>
                    <div>
                        <p><span className='job-title'>Job Responsibility:</span><span>Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</span></p>
                    </div>
                    <div>
                        <p className='job-title'>Educational Requirements:</p>
                        <p>Bachelor degree to complete any reputational university.</p>
                    </div>
                    <div>
                        <p className='job-title'>Experiences: </p>
                        <p>2-3 Years in this field.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>Job Details</h2>
                        <br/>
                        <p>Salary : 100K - 150K (Per Month)</p>
                        <p>Job Title : Product Designer</p>
                        <h2>Contact Information</h2>
                        <br/>
                        <p>Phone : 01750-00 00 00</p>
                        <p>Email : info@gmail.com</p>
                        <p>Address : Dhanmondi 32, Sukrabad Dhaka, Bangladesh</p>
                    </div>
                    <Button className='w-96' gradientDuoTone="purpleToBlue">
                        Apply Now
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Job_Details;