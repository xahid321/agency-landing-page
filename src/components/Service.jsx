import React from 'react';
import List from './List';

function Service(props) {
    return (
        <div className='items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16 flex flex-row-reverse'>
            <div className='text-gray-500 sm:text-lg dark:text-gray-400'>
                <h2 className='mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white'>{props.Title}</h2>
                <p className='mb-8 font-light lg:text-xl'>{props.description}</p>

                <ul
                    role='list'
                    className='pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700'>
                    <List>{props.l1}</List>
                    <List>{props.l2}</List>
                    <List>{props.l3}</List>
                    <List>{props?.l4}</List>
                    <List>{props?.l5}</List>
                </ul>

                <p className='mb-8 font-light lg:text-xl'>{props.description2}</p>
            </div>
            <img
                className='hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex'
                src={props.img}
                alt='dashboard feature image'
            />
        </div>
    );
}

export default Service;
