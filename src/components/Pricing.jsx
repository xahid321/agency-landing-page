import React from 'react';
import PriceCard from './PriceCard';

function Pricing() {
    return (
        <section class='bg-white dark:bg-gray-900'>
            <div class='max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6'>
                <div class='max-w-screen-md mx-auto mb-8 text-center lg:mb-12'>
                    <h2 class='mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white'>Designed for business teams like yours</h2>
                    <p class='mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400'>
                        Here at Landwind we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
                    </p>
                </div>
                <div class='space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0'>
                    <PriceCard
                        plan='Starter'
                        Title='Best option for personal use & for your next project.'
                        price='$29'
                        Data='Get Started'
                        l1='Individual configuration'
                        l2='No setup, or hidden fees'
                        l3='Team size: 1 developer'
                        l4='Premium support: 6 months'
                        l5='Free updates: 6 months'
                    />
                    <PriceCard
                        plan='Company'
                        Title='Relevant for multiple users, extended & premium support.'
                        price='$99'
                        Data='Get Started'
                        l1='Individual configuration'
                        l2='No setup, or hidden fees'
                        l3='Team size: 10 developers'
                        l4='Premium support: 24 months'
                        l5='Free updates: 24 months'
                    />
                    <PriceCard
                        plan='Enterprise'
                        Title='Best for large scale uses and extended redistribution rights.'
                        price='$499'
                        Data='Get Started'
                        l1='Individual configuration'
                        l2='No setup, or hidden fees'
                        l3='Team size: 100+ developers'
                        l4='Premium support: 36 months'
                        l5='Free updates: 36 months'
                    />
                </div>
            </div>
        </section>
    );
}

export default Pricing;
