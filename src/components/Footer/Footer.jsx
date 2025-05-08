import React from 'react';
import Dribbble from '../../assets/Footer Icon/Dribbble';
import Github from '../../assets/companiesLogo/Github';
import Twitter from '../../assets/Footer Icon/Twitter';
import Instagram from '../../assets/Footer Icon/Instagram';
import Facebook from '../../assets/Footer Icon/Facebook';
import lwslogo from '../../assets/logo.svg';
import FooterMenu from './FooterMenu';

function Footer() {
    return (
        <footer className='bg-white dark:bg-gray-800'>
            <div className='max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10'>
                <div className='grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5'>
                    <FooterMenu
                        Title='Company'
                        c1='About'
                        c2='Careers'
                        c3='Brand Center'
                        c4='Blog'
                    />
                    <FooterMenu
                        Title='Help center'
                        c1='Discord Server'
                        c2='Twitter'
                        c3='Facebook'
                        c4='Contact Us'
                    />
                    <FooterMenu
                        Title='Legal'
                        c1='Privacy Policy'
                        c2='Licensing'
                        c3='Terms'
                    />
                    <FooterMenu
                        Title='Company'
                        c1='About'
                        c2='Careers'
                        c3='Brand Center'
                        c4='Blog'
                    />
                    <FooterMenu
                        Title='Download'
                        c1='iOS'
                        c2='Android'
                        c3='Windows'
                        c4='MacOS'
                    />
                </div>
                <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />

                <div className='text-center'>
                    <a
                        href='#'
                        className='flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white'>
                        <img
                            src={lwslogo}
                            className='h-6 mr-3 sm:h-9'
                            alt='Learn with Sumit Logo'
                        />
                        Learn with Sumit{' '}
                    </a>
                    <span className='block text-sm text-center text-gray-500 dark:text-gray-400'>
                        © 2024-2025 Learn with Sumit. All Rights Reserved. Built with{' '}
                        <a
                            href='#'
                            target='_blank'
                            className='text-purple-600 hover:underline dark:text-purple-500'>
                            Flowbite
                        </a>{' '}
                        and{' '}
                        <a
                            href='#'
                            className='text-purple-600 hover:underline dark:text-purple-500'>
                            Tailwind CSS
                        </a>
                        .
                    </span>
                    <ul className='flex justify-center mt-5 space-x-5'>
                        <li>
                            <a
                                href='#'
                                className='text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400'>
                                <Facebook />
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400'>
                                <Instagram />
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400'>
                                <Twitter />
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400'>
                                <Github />
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400'>
                                <Dribbble />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
