import React from 'react';

function ServiceComponent(props) {
    return (
        <div>
            {props.icon}
            <h3 className='mb-2 text-2xl font-bold dark:text-white'>{props.title}</h3>
            <p className='font-light text-gray-500 dark:text-gray-400'>{props.content}</p>
        </div>
    );
}

export default ServiceComponent;
