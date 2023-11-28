import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AiFillBook, AiFillCalendar, AiFillFileAdd, AiFillHome, AiFillRedEnvelope, AiOutlineAccountBook, AiOutlineRadarChart, AiOutlineShoppingCart, AiOutlineTeam } from "react-icons/ai";

const Dashboard = () => {
    return (
        <div className='flex'>
            <div className="w-64 min-h-full bg-orange-400">
          <ul className="menu p-4 pb-40">
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
                <NavLink to='/dashboard/allUsers'><AiFillBook></AiFillBook>All users</NavLink>
            </li>
            <div className="divider"></div>
            <li>
                <NavLink to='/'><AiFillHome></AiFillHome>Home</NavLink>
            </li>
            <li>
                <NavLink to='/order/fiction'><AiFillBook></AiFillBook>Menu</NavLink>
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