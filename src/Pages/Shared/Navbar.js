import React from 'react';
import logo from '../../images/logo.png';


const menuItems = <>
    <li><a className='font-bold'>Campaign</a></li>
    <li><a className='font-bold'>Trending</a></li>
    <li><a className='font-bold'>Brand</a></li>
    <li><a className='font-bold'>Our Outlets</a></li>
    <li><a className='font-bold'>Service Center</a></li>
</>

const productCategory = <>
    <li><a>Smart Watches</a></li>
    <li><a>Smart Phones</a></li>
    <li><a>Headphones</a></li>
    <li><a>Smart TV and Accessories</a></li>
    <li><a>Computer and Accessories</a></li>
    <li><a>Wireless Speaker</a></li>
    <li><a>Security Cameras</a></li>
    <li><a>Smart Home Appliances</a></li>
    <li><a>Charger and Cables</a></li>
    <li><a>Powerbaks</a></li>
    <li><a>Network Components</a></li>
    <li><a>Health and Outdoors</a></li>
</>

const Navbar = () => {
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <a href="/"><img src={logo} alt="" /></a>
                    <div class="dropdown pl-6">
                        <label tabindex="0" class="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {productCategory}
                        </ul>
                    </div>

                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                </div>

                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>

                <div className="navbar-end">
                    <div class="form-control">
                        <input type="text" placeholder="Search" class="input input-bordered" />
                    </div>
                    <label tabindex="0" class="btn btn-ghost btn-circle">
                        <div class="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span class="badge badge-sm indicator-item">0</span>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;