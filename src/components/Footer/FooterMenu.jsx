import React from 'react';

function FooterMenu(props) {
    return (
        <div>
            <h3 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>{props.Title}</h3>
            <ul className='text-gray-500 dark:text-gray-400'>
                <li className='mb-4'>
                    <a
                        href='#'
                        className=' hover:underline'>
                        {props?.c1}
                    </a>
                </li>
                <li className='mb-4'>
                    <a
                        href='#'
                        className='hover:underline'>
                        {props?.c2}
                    </a>
                </li>
                <li className='mb-4'>
                    <a
                        href='#'
                        className='hover:underline'>
                        {props?.c3}
                    </a>
                </li>
                <li className='mb-4'>
                    <a
                        href='#'
                        className='hover:underline'>
                        {props?.c4}
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default FooterMenu;
