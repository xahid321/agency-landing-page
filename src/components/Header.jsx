import Logo from '../assets/logo.svg';
import Button from './Button';
import Lws from './Lws';
import NavList from './NavList';

function Header() {
    return (
        <header className='fixed w-full'>
            <nav className='bg-white border-gray-200 py-2.5 dark:bg-gray-900'>
                <div className='flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto'>
                    <Lws />
                    <div className='flex items-center lg:order-2'>
                        <Button>{'Download'}</Button>
                    </div>

                    <div
                        className='items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1'
                        id='mobile-menu-2'>
                        <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
                            <NavList />
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
