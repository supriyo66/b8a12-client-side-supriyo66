import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AiFillBook, AiFillCalendar, AiFillFileAdd, AiFillHome, AiFillRedEnvelope, AiOutlineAccountBook, AiOutlineRadarChart, AiOutlineShoppingCart, AiOutlineTeam } from "react-icons/ai";

import useCart from '../Hooks/useCart';

const Dashboard = () => {
    const [cart]=useCart()
    const isAdmin=true
    return (
        <div className="flex">
            <div className="w-64 min-h-full bg-orange-400">
          <ul className="menu">
            {
                isAdmin? <>
                <li>
                <NavLink to='/dashboard/adminHome'><AiFillHome></AiFillHome> Admin Home</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/addItems'><AiFillFileAdd></AiFillFileAdd>Add Items</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/manageItems'><AiOutlineAccountBook></AiOutlineAccountBook> Manage Items</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/bookings'><AiOutlineRadarChart></AiOutlineRadarChart>Manage Bookings</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/users'><AiFillBook></AiFillBook>All users</NavLink>
            </li>
                </>
                :
                <>
                <li>
                <NavLink to='/dashboard/userHome'><AiFillHome></AiFillHome> User Home</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/reservation'><AiFillCalendar></AiFillCalendar>Reservation</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/cart'><AiOutlineAccountBook></AiOutlineAccountBook> My Cart ({cart.length})</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/review'><AiOutlineRadarChart></AiOutlineRadarChart> Review</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/booking'><AiFillBook></AiFillBook> Bookings</NavLink>
            </li>
                </>
            }
            <div className="divider"></div>
            <li>
                <NavLink to='/'><AiFillHome></AiFillHome>Home</NavLink>
            </li>
            <li>
                <NavLink to='/order/salad'><AiFillBook></AiFillBook>Menu</NavLink>
            </li>
            <li>
                <NavLink to='/order/contact'><AiFillRedEnvelope></AiFillRedEnvelope>Contact</NavLink>
            </li>
            </ul>
            </div>
            <div className="flex-1 p-8">
          <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;