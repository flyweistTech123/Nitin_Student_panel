import React from 'react'
import './Profile.css'
import { useNavigate, useLocation } from "react-router-dom";
import img from '../../Img/img117.png'
import { MdPersonalInjury } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";
import { BsBank2 } from "react-icons/bs";
import { IoMdLock } from "react-icons/io";


const Profile = () => {
    const navigate = useNavigate()
    const location = useLocation();

    return (
        <>
            <div className='profileprofile'>
                <div className='profileprofile1'>
                    <div className='profileprofile4'>
                        <div className='profileprofile2'>
                            <img src={img} alt="" />
                            <p>D1223112</p>
                        </div>
                        <div className='profileprofile3'>
                            <p>Loren Epsom</p>
                        </div>
                    </div>

                </div>

                <div className='profileprofile5'>
                    <div className="profileprofile6">
                        <div className='profileprofile7'>
                            <div className={location.pathname === "/personaldetails" ? "profileprofile8" : "profileprofile9"} onClick={() => navigate("/personaldetails")}>
                                <MdPersonalInjury   />
                            </div>
                            <div className={location.pathname === "/personaldetails" ? "profileprofile10" : "profileprofile11"} onClick={() => navigate("/personaldetails")}>
                                <p>Personal Details</p>
                            </div>
                        </div>
                        <div className='profileprofile7'>
                            <div className={location.pathname === "/contactdetails" ? "profileprofile8" : "profileprofile9"} onClick={() => navigate("/contactdetails")}>
                                <MdPermContactCalendar    />
                            </div>
                            <div className={location.pathname === "/contactdetails" ? "profileprofile10" : "profileprofile11"} onClick={() => navigate("/contactdetails")}>
                                <p>Contact Details</p>
                            </div>
                        </div>
                        <div className='profileprofile7'>
                            <div className={location.pathname === "/bankdetails" ? "profileprofile8" : "profileprofile9"} onClick={() => navigate("/bankdetails")}>
                                <BsBank2    />
                            </div>
                            <div className={location.pathname === "/bankdetails" ? "profileprofile10" : "profileprofile11"} onClick={() => navigate("/bankdetails")}>
                                <p>Bank Details</p>
                            </div>
                        </div>
                        <div className='profileprofile7'>
                            <div className={location.pathname === "/changepassword" ? "profileprofile8" : "profileprofile9"} onClick={() => navigate("/changepassword")}>
                                <IoMdLock    />
                            </div>
                            <div className={location.pathname === "/changepassword" ? "profileprofile10" : "profileprofile11"} onClick={() => navigate("/changepassword")}>
                                <p>Change Password</p>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}

export default Profile
