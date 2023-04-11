import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/fakedb';
import PageHeader from '../PageHeader/PageHeader';
import { Dropdown } from 'flowbite-react';
import AppliedCart from '../AppliedCart/AppliedCart';

const Applied_Jobs = () => {
    const jobData = useLoaderData()
    const savedJob = getShoppingCart()
    const [dataFilter, setDataFilter] = useState('')
    let jobCart = []
    for (const id in savedJob) {
        const job = jobData ? jobData.find(singleData => singleData.id === parseInt(id)) : "";
        jobCart.push(job)
    }
    return (
        <div>
            <PageHeader title={'Applied Job'}></PageHeader>
            <div className='flex justify-end mt-20 me-8'>
                <Dropdown label="Filter By">
                    <Dropdown.Item onClick={() => setDataFilter('all')}>
                        Show All Jobs
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setDataFilter('Onsite')}>
                        Show Onsite Jobs
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setDataFilter('Remote')}>
                        Show Remote Jobs
                    </Dropdown.Item>
                </Dropdown>
            </div>
            <div>
            {
                        jobCart.filter(item => dataFilter === '' ? item : dataFilter=== 'all' ? item : item.jobSchedule.includes(dataFilter)).map(data => <AppliedCart
                            key={data.id}
                            data={data}
                        ></AppliedCart>)
                    }
            </div>
        </div>
    );
};

export default Applied_Jobs;