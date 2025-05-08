import React from 'react';
import Button from './Button';
import List from './List';
import CardList from './CardList';

function PriceCard(props) {
    return (
        <div class='flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white'>
            <h3 class='mb-4 text-2xl font-semibold'>{props.plan}</h3>
            <p class='font-light text-gray-500 sm:text-lg dark:text-gray-400'>{props.Title}</p>
            <div class='flex items-baseline justify-center my-8'>
                <span class='mr-2 text-5xl font-extrabold'>{props.price}</span>
                <span class='text-gray-500 dark:text-gray-400'>/month</span>
            </div>

            <ul
                role='list'
                class='mb-8 space-y-4 text-left'>
                <CardList>{props.l1}</CardList>
                <CardList>{props.l2}</CardList>
                <CardList>{props.l3}</CardList>
                <CardList>{props.l4}</CardList>
                <CardList>{props.l5}</CardList>
            </ul>
            <Button>{props.Data}</Button>
        </div>
    );
}

export default PriceCard;
