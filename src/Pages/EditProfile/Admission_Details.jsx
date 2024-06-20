import React, { useState } from 'react'
import './EditProfile.css'
import { useNavigate } from "react-router-dom";
import EditProfile from './EditProfile';
import { FaLink } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";



const Admission_Details = () => {
    const navigate = useNavigate();
    const tableData = [
        {
            id: 1,
            Application_number: '12134',
            Phone: '8665656561',
            AdmissionData: 'Loren Epsom',
            Status: 'Approved',
            University: 'University_name',
            Course: 'Course_name',
            Counsellor: 'Loren Epsom',
            Created_Date: 'DD/MM/YYYY',
        },

        {
            id: 1,
            Application_number: '12134',
            Phone: '8665656561',
            AdmissionData: 'Loren Epsom',
            Status: 'Approved',
            University: 'University_name',
            Course: 'Course_name',
            Counsellor: 'Loren Epsom',
            Created_Date: 'DD/MM/YYYY',
        },
        {
            id: 1,
            Application_number: '12134',
            Phone: '8665656561',
            AdmissionData: 'Loren Epsom',
            Status: 'Approved',
            University: 'University_name',
            Course: 'Course_name',
            Counsellor: 'Loren Epsom',
            Created_Date: 'DD/MM/YYYY',
        },
        {
            id: 1,
            Application_number: '12134',
            Phone: '8665656561',
            AdmissionData: 'Loren Epsom',
            Status: 'Approved',
            University: 'University_name',
            Course: 'Course_name',
            Counsellor: 'Loren Epsom',
            Created_Date: 'DD/MM/YYYY',
        },
        {
            id: 1,
            Application_number: '12134',
            Phone: '8665656561',
            AdmissionData: 'Loren Epsom',
            Status: 'Approved',
            University: 'University_name',
            Course: 'Course_name',
            Counsellor: 'Loren Epsom',
            Created_Date: 'DD/MM/YYYY',
        },
        {
            id: 1,
            Application_number: '12134',
            Phone: '8665656561',
            AdmissionData: 'Loren Epsom',
            Status: 'Approved',
            University: 'University_name',
            Course: 'Course_name',
            Counsellor: 'Loren Epsom',
            Created_Date: 'DD/MM/YYYY',
        },

    ];


    return (
        <>
            <div className='editprofile1'>
                <EditProfile />


                <div className='editprofile20'>
                    <div className='admission13'>
                        <div className='table-container'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            <div className='editprofile111'>
                                                <input type="checkbox" />
                                                <IoSettings size={20} />
                                            </div>

                                        </th>
                                        <th>Application_number</th>
                                        <th>Phone</th>
                                        <th>Admission Data</th>
                                        <th>Status</th>
                                        <th>University</th>
                                        <th>Course</th>
                                        <th>Counsellor</th>
                                        <th>Created_Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((data) => (
                                        <tr key={data.id}>
                                            <td><input type="checkbox" /></td>
                                            <td>{data.Application_number}</td>
                                            <td>{data.Phone}</td>
                                            <td>{data.AdmissionData}</td>
                                            <td>{data.Status}</td>
                                            <td>{data.University}</td>
                                            <td>{data.Course}</td>
                                            <td>{data.Counsellor}</td>
                                            <td>{data.Created_Date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admission_Details