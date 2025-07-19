import React from 'react'

import { MdOutlineLocalShipping } from "react-icons/md";
import { GrInsecure } from "react-icons/gr";
import { GiReturnArrow } from "react-icons/gi";
import { MdAccessTime } from "react-icons/md";

function Features() {
    return ( 
        <>
        <div className='mt-24'>
            <div className='grid grid-cols-2 gap-8 lg:grid-cols-4 md:ml-[80px] lg:ml-[90px]'>
                <div className='flex flex-row items-center'>
                    <MdOutlineLocalShipping className='w-[50px] h-[40px] opacity-45' />
                    <div className='flex flex-col space-y-1 ml-3'>
                        <p className='font-bold'>Free Shipping</p>
                        <p>On orders over $100</p>
                    </div>
                </div>


                <div className='flex flex-row items-center'>
                    <GrInsecure  className='w-[50px] h-[40px] opacity-45' />
                    <div className='flex flex-col space-y-1 ml-3'>
                        <p className='font-bold'>Secure Payment</p>
                        <p>100% protected payments</p>
                    </div>
                </div>


                <div className='flex flex-row items-center'>
                    <GiReturnArrow  className='w-[50px] h-[40px] opacity-45' />
                    <div className='flex flex-col space-y-1 ml-3'>
                        <p className='font-bold'>Easy Returns</p>
                        <p>30-day return policy</p>
                    </div>
                </div>
                
                <div className='flex flex-row items-center'>
                    <MdAccessTime   className='w-[50px] h-[40px] opacity-45'/>
                    <div className='flex flex-col space-y-1 ml-3'>
                        <p className='font-bold'>24/7 Support</p>
                        <p>Dedicated customer service</p>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default Features;