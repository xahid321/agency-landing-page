import React from 'react';
import List from './List';
import FeatureImg2 from '../assets/features/feature-2.png';
import FeatureImg1 from '../assets/features/feature-1.png';
import Service from './Service';
import ServiceComponent from './ServiceComponent';
import Uptime from '../assets/ServiceLogo/Uptime';
import Users from '../assets/ServiceLogo/Users';
import Cart from '../assets/ServiceLogo/Cart';
import Countries from '../assets/ServiceLogo/countries';

function Services() {
    return (
        <>
            <section className='bg-gray-50 dark:bg-gray-800'>
                <div className='max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6'>
                    <Service
                        Title='Work with tools you already use'
                        description='Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.'
                        l1='Continuous integration and deployment'
                        l2='Development workflow'
                        l3='Knowledge management'
                        description2='Deliver great service experiences fast - without the complexity of traditional ITSM solutions.'
                        img={FeatureImg1}
                    />
                    <Service
                        className='flex flex-row-reverse'
                        Title='We invest in the world’s potential'
                        description='Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.'
                        l1='Dynamic reports and dashboards'
                        l2='Templates for everyone'
                        l3='Development workflow'
                        l4='Limitless business automation'
                        l5='Knowledge management'
                        description2='Deliver great service experiences fast - without the complexity of traditional ITSM solutions.'
                        img={FeatureImg2}
                    />
                </div>
            </section>

            <section className='bg-white dark:bg-gray-900'>
                <div className='items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6'>
                    <div className='col-span-2 mb-8'>
                        <p className='text-lg font-medium text-purple-600 dark:text-purple-500'>Trusted Worldwide</p>
                        <h2 className='mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white'>Trusted by over 600 million users and 10,000 teams</h2>
                        <p className='font-light text-gray-500 sm:text-xl dark:text-gray-400'>
                            Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers.
                        </p>
                        <div className='pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700'>
                            <div>
                                <a
                                    href='#'
                                    className='inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700'>
                                    Explore Legality Guide
                                    <svg
                                        className='w-5 h-5 ml-1'
                                        fill='currentColor'
                                        viewBox='0 0 20 20'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            fill-rule='evenodd'
                                            d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                                            clip-rule='evenodd'></path>
                                    </svg>
                                </a>
                            </div>
                            <div>
                                <a
                                    href='#'
                                    className='inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700'>
                                    Visit the Trust Center
                                    <svg
                                        className='w-5 h-5 ml-1'
                                        fill='currentColor'
                                        viewBox='0 0 20 20'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            fill-rule='evenodd'
                                            d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                                            clip-rule='evenodd'></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0'>
                        <ServiceComponent
                            title='99.99% uptime'
                            content='For Landwind, with zero maintenance downtime'
                            icon={<Uptime />}
                        />
                        <ServiceComponent
                            title='600M+ Users'
                            content='Trusted by over 600 milion users around the world'
                            icon={<Users />}
                        />
                        <ServiceComponent
                            title='100+ countries'
                            content='Have used Landwind to create functional websites'
                            icon={<Countries />}
                        />
                        <ServiceComponent
                            title='5+ Million'
                            content='Transactions per day'
                            icon={<Cart />}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Services;
