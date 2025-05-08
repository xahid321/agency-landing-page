import React from 'react';
import NavItem from './NavItem';

function NavList() {
    return (
        <>
            <NavItem menuItem='Home' />
            <NavItem menuItem='Company' />
            <NavItem menuItem='Marketplace' />
            <NavItem menuItem='Features' />
            <NavItem menuItem='Team' />
            <NavItem menuItem='Contact' />
        </>
    );
}

export default NavList;
