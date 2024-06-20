import React, { useState } from 'react';
import './Sidebar.css'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import img from '../../Img/img6.png'
import { Link } from 'react-router-dom';
import { FaWpforms } from "react-icons/fa6";
import { MdAccountBalance } from "react-icons/md";
import { VscReferences } from "react-icons/vsc";
import { PiStudentBold } from "react-icons/pi";
import { IoBookSharp } from "react-icons/io5";




const Sidebar = () => {

    const [expandedMenus, setExpandedMenus] = useState([]);
    const [expandedMenus1, setExpandedMenus1] = useState([]);
    const [expandedMenus2, setExpandedMenus2] = useState([]);
    const [expandedMenus3, setExpandedMenus3] = useState([]);

    const toggleMenu = (index) => {
        const newExpandedMenus = [...expandedMenus];
        if (newExpandedMenus.includes(index)) {
            newExpandedMenus.splice(newExpandedMenus.indexOf(index), 1);
        } else {
            newExpandedMenus.push(index);
        }
        setExpandedMenus(newExpandedMenus);
    };
    const toggleMenu1 = (index) => {
        const newExpandedMenus = [...expandedMenus1];
        if (newExpandedMenus.includes(index)) {
            newExpandedMenus.splice(newExpandedMenus.indexOf(index), 1);
        } else {
            newExpandedMenus.push(index);
        }
        setExpandedMenus1(newExpandedMenus);
    };
    const toggleMenu2 = (index) => {
        const newExpandedMenus = [...expandedMenus2];
        if (newExpandedMenus.includes(index)) {
            newExpandedMenus.splice(newExpandedMenus.indexOf(index), 1);
        } else {
            newExpandedMenus.push(index);
        }
        setExpandedMenus2(newExpandedMenus);
    };
    const toggleMenu3 = (index) => {
        const newExpandedMenus = [...expandedMenus3];
        if (newExpandedMenus.includes(index)) {
            newExpandedMenus.splice(newExpandedMenus.indexOf(index), 1);
        } else {
            newExpandedMenus.push(index);
        }
        setExpandedMenus3(newExpandedMenus);
    };


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className='sidebar'>
                <div className='sidebar7'>
                    <div className='sidebar1'>
                        <Link to={'/dashboard'} className='link'>
                            <div className='sidebar2'>
                                <img src={img} alt="" />
                                <p>Dashboard</p>
                            </div>
                        </Link>
                        <Link to={'/admission_details'} className='link'>
                            <div className='sidebar2'>
                                <FaWpforms color='#3F3F3F' size={18} />
                                <p>Admission Form</p>
                            </div>
                        </Link>
                        <div className='sidebar2'>
                            <div className='sidebar3' onClick={() => toggleMenu(0)}>
                                <div className='sidebar4'>
                                    <MdAccountBalance color='#3F3F3F' size={18} />
                                    <p>Accounts</p>
                                </div>
                                <div>
                                    {expandedMenus.includes(0) ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </div>

                            </div>
                        </div>
                        {expandedMenus.includes(0) && (
                            <div className='subMenu'>
                                <ul>
                                    <Link to={'/payfees'} className='link'>
                                        <li>Pay Fees</li>
                                    </Link>
                                    <Link to={'/payment_section'} className='link'>
                                        <li>Student fees receipt</li>
                                    </Link>
                                </ul>
                            </div>
                        )}
                        <Link to={'/books'} className='link'>
                            <div className='sidebar2'>
                                <IoBookSharp color='#3F3F3F' size={18} />
                                <p>Books</p>
                            </div>
                        </Link>
                        <Link to={'/referenceformdata'} className='link'>
                            <div className='sidebar2'>
                                <VscReferences color='#3F3F3F' size={18} />
                                <p>Reference Form</p>
                            </div>
                        </Link>
                        <Link to={'/studentrequest'} className='link'>
                            <div className='sidebar2'>
                                <PiStudentBold color='#3F3F3F' size={18} />
                                <p>Student Request</p>
                            </div>
                        </Link>
                        <Link to={'/studentcomplaint'} className='link'>
                            <div className='sidebar2'>
                                <PiStudentBold color='#3F3F3F' size={18} />
                                <p>Student Complaint</p>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Sidebar