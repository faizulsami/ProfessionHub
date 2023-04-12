import { Button, Card } from 'flowbite-react';
import React from 'react';
import { MapPinIcon , CurrencyDollarIcon } from '@heroicons/react/24/solid'
import './AppliedCart.css'

const AppliedCart = ({data}) => {
    return (
        <div className="w-3/6 lg:m-16 relative left-24 top-3 lg:left-96 m-5">
            <Card>
                <div className='lg:flex justify-around'>
                    <img className='w-40 rounded-lg' src={data.img} alt=""/>
                    <div className='lg:my-0 my-4'>
                        <p className='cart-title lg:text-xl'>{data.jobTitle}</p>
                        <p className='company-name-style-3 lg:text-lg'>{data.companyName}</p>
                        <div className='flex lg:my-4 my-3 lg:gap-4 gap-2'>
                        <Button
                        outline={true}
                        gradientDuoTone="purpleToBlue"
                        >
                            {data.jobType}
                        </Button>
                        <Button
                        outline={true}
                        gradientDuoTone="purpleToBlue"
                        >
                            {data.jobSchedule}
                        </Button>
                        </div>
                        <div className='flex lg:gap-4 custom-color'>
                            <div className='flex'>
                                <MapPinIcon className="h-6 w-6 " />
                                <p className='company-name-style-3 lg:text-lg'>{data.address}</p>
                            </div>
                            <div className='flex'>
                                <CurrencyDollarIcon className="h-6 w-6" />
                                <p className='company-name-style-3 lg:text-lg'> Salary : {data.Salary}</p>
                            </div>
                        </div>
                    </div>
                    <Button className='lg:mt-14' gradientDuoTone="purpleToBlue">
                        View Details
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default AppliedCart;