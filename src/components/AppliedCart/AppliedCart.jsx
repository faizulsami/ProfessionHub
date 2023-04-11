import { Button, Card } from 'flowbite-react';
import React from 'react';
import { MapPinIcon , CurrencyDollarIcon } from '@heroicons/react/24/solid'
import './AppliedCart.css'

const AppliedCart = ({data}) => {
    
    return (
        <div className="w-3/6 lg:m-16 relative lg:left-96">
            <Card>
                <div className='lg:flex justify-around'>
                    <img className='w-40 rounded-lg' src={data.img} alt=""/>
                    <div>
                        <p className='cart-title lg:text-xl'>{data.jobTitle}</p>
                        <p className='company-name-style'>{data.companyName}</p>
                        <div className='flex lg:my-4 lg:gap-4'>
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
                        <div className='flex lg:gap-4'>
                            <div className='flex'>
                                <MapPinIcon className="h-6 w-6 text-blue-500" />
                                <p>{data.address}</p>
                            </div>
                            <div className='flex'>
                                <CurrencyDollarIcon className="h-6 w-6 text-blue-500" />
                                <p>Salary : {data.Salary}</p>
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