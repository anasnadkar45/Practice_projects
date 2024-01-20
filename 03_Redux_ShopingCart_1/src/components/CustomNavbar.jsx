import React from 'react';
import { Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import logo from '../assets/logo.png';
import { useSelector } from 'react-redux';
import { Bounce } from 'react-toastify';

function CustomNavbar() {
    const items = useSelector(state => state.cart.items);

    return (
        <div className='mb-6 bg-[#0d121f]'>
            <NextUINavbar className='bg-[#0d121f] fixed w-full top-0 z-50 backdrop-blur-xl bg-opacity-90'>
                <NavbarBrand>
                    <NavLink to='/'>
                        <img src={logo} alt="" className='h-10' />
                    </NavLink>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <NavLink to='/'>
                            Home
                        </NavLink>
                    </NavbarItem>
                    <NavbarItem className='relative'>
                        <NavLink to='/cart'>
                            <p className='absolute right-[-10px] top-[-10px] text-sm 
                            bg-green-500 px-1.5 rounded-full animate-bounce'>{items.length}</p>
                            <FaShoppingCart size='25px'/>
                        </NavLink>
                    </NavbarItem>
                </NavbarContent>
            </NextUINavbar>
            {/* Add padding to the body content to avoid being obscured by the fixed navbar */}
            <div className="pt-16">
                {/* Your page content goes here */}
            </div>
        </div>
    );
}

export default CustomNavbar;
