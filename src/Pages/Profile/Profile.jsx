import React from 'react'
import HOC from '../../Components/HOC/HOC'
import './Profile.css'
import { useNavigate, useLocation } from "react-router-dom";
import img from '../../Img/img117.png'

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
                            <div>
                                
                            </div>
                        </div>
                        <p className={location.pathname === "/admission_details" ? "editprofile8" : "editprofile9"} onClick={() => navigate("/admission_details")}>Admission Details</p>
                        <p className={location.pathname === "/payment_section" ? "editprofile8" : "editprofile9"} onClick={() => navigate("/payment_section")}>Payment</p>
                        <p className={location.pathname === "/personal_details" ? "editprofile8" : "editprofile9"} onClick={() => navigate("/personal_details")}>Personal Details</p>
                        <p className={location.pathname === "/automatic2feestructure" ? "editprofile8" : "editprofile9"} onClick={() => navigate("/automatic2feestructure")}>Fee Structure</p>
                        <p className={location.pathname === "/contact_details" ? "editprofile8" : "editprofile9"} onClick={() => navigate("/contact_details")}>Contact Details</p>
                        <p className={location.pathname === "/guardian_details" ? "editprofile8" : "editprofile9"} onClick={() => navigate("/guardian_details")}>Guardian Details</p>
                        <p className={location.pathname === "/certificate" ? "editprofile8" : "editprofile9"} onClick={() => navigate("/certificate")}>Certificate</p>
                        <p className={location.pathname === "/education_details" ? "editprofile8" : "editprofile9"} onClick={() => navigate("/education_details")}>Educational Details</p>
                        <p className={location.pathname === "/whatsAppsectionedit" ? "editprofile8" : "editprofile9"} onClick={() => navigate("/whatsAppsectionedit")}>What’s app</p>
                        <p className={location.pathname === "/telegramedit" ? "editprofile8" : "editprofile9"} onClick={() => navigate("/telegramedit")}>Telegram</p>
                        <p className={location.pathname === "/emailtemplateedit" ? "editprofile8" : "editprofile9"} onClick={() => navigate("/emailtemplateedit")}>Email</p>
                        <p className={location.pathname === "/zoomedit" ? "editprofile8" : "editprofile9"} onClick={() => navigate("/zoomedit")}>Zoom</p>
                        <p className={location.pathname === "/meetingedit" ? "editprofile8" : "editprofile9"} onClick={() => navigate("/meetingedit")}>Meeting</p>
                    </div>
                </div >
            </div>
        </>
    )
}

export default HOC(Profile)
