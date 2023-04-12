import React, { useEffect, useState } from 'react';
import './Body.css';
import man from '../../assets/All Images/P3OLGJ1copy1.png';
import JobCart from '../JobCart/JobCart';
import { Button } from 'flowbite-react';

const Body = ({data}) => {
    const [cards,setCards]=useState([]);
    useEffect(()=>{
        fetch('../public/job.json')
        .then(res=> res.json()
        .then(data=> setCards(data)))
        },[])
    const [visible,setVisible] = useState(4);
    const [show,setShow] = useState(true);
    const seeMoreItems = () => {
        setVisible((prevValue => prevValue + 4))
    }
    return (
        <div>
        <section className='pt-10'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='p-14'>
                    <h1 className='text-2xl lg:text-8xl'>
                        One Step Closer To Your <span className='text-indigo-400'>Dream Job</span>
                    </h1>
                    <p className='py-5 lg:text-2xl'>
                        Explore thousands of job opportunities with all the information you need. It's your future.
                        Come find it. Manage all your job applications from start to finish.
                    </p>
                    <button className='custom-btn text-xl p-3 lg:text-3xl lg:p-5 lg:mt-14'>Get Started</button>
                </div>
                <div className='p-14'>
                    <img src={man} alt="" />
                </div>
            </div>
        </section>
        <section>
        <h1 className='text-center text-xl lg:text-5xl job-category-style'>Job Category List</h1>
        <p className='text-center mt-2 text-sm lg:text-xl explore-style lg:py-7'>Explore thousands of job opportunities with all theinformation<br></br>you need.Its your future</p>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
        {cards.map((cd, id)=>   <div className='border w-56 p-8 text-center col-span-1 mx-auto bg-violet-50 rounded-xl mt-5'>
            <img src={cd.Category_logo} className='mx-auto w-20 h-20' alt='' />
            <h1 className='text-xl p-2'>{cd.Category_name}</h1>
            <p className='text-indigo-300'>{cd.Jobs_available}</p>
        </div> )}
        </div>
        </section>
        <section className='lg:mt-10'>
        <h1 className='text-center text-xl lg:text-5xl job-category-style pt-10'>Featured Jobs</h1>
        <p className='text-center mt-2 text-sm lg:text-xl explore-style lg:py-7 '>Explore thousands of job opportunities with all theinformation<br></br>you need.Its your future</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 pt-8'>
                {
                    data.slice(0,visible).map(jobs => <JobCart key={jobs.id} job={jobs}></JobCart>)
                }
            </div>
            <div className={`${show ? '' : 'hidden'}`}>
                <Button onClick={()=> {seeMoreItems();setShow(false)}} className='mx-auto mt-5 lg:text-4xl lg:p-3 see-all-button' gradientDuoTone="purpleToBlue">
                    <p>See All Jobs </p>
                </Button>
            </div>
        </section>
        </div>
    );
};

export default Body;