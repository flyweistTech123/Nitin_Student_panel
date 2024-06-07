import React, { useState } from 'react'
import './EditProfile.css'
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img from '../../Img/img109.png'


import {
    History1,
    FilterModalhistory,
    AddNewEvent,
    Counsellorform,
    PropertiesModal
} from '../Modals/Modals.jsx'
const EditProfile1 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [step, setStep] = useState(0);

    // Counsellorform Modal 

    const [modalShow, setModalShow] = React.useState(false);


    // History Modal
    const [modalShow4, setModalShow4] = React.useState(false);


    // FilterModalhistory Modal
    const [modalShow5, setModalShow5] = React.useState(false);


    // AddNewEvent Modal
    const [modalShow6, setModalShow6] = React.useState(false);

    const [modalShow2, setModalShow2] = React.useState(false);

    const popover = (
        <Popover id="popover-basic">
            <Popover.Body>
                <div className="toppart7">
                    <div className="toppart8" onClick={() => setModalShow2(true)}>
                        <h6>String</h6>
                        <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="toppart8">
                        <h6>Date</h6>
                        <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="toppart8">
                        <h6>List</h6>
                        <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="toppart8">
                        <h6>Yes/ No</h6>
                        <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );



    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 5,
        arrows: false
    };

    return (
        <>
            <Counsellorform
                show={modalShow}
                onHide={() => setModalShow(false)}
                setModalShow8={setModalShow2}
            />
            <History1
                show={modalShow4}
                onHide={() => setModalShow4(false)}
                setModalShow5={setModalShow5}
                setModalShow6={setModalShow6}
            />
            <FilterModalhistory
                show={modalShow5}
                onHide={() => setModalShow5(false)}
            />
            <AddNewEvent
                show={modalShow6}
                onHide={() => setModalShow6(false)}
            />
            <PropertiesModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <div className=''>
                <div className='editprofile2'>
                    <h6><FaArrowLeft onClick={() => navigate('/dashboard')} /> EDUCATION</h6>
                </div>
                <div className='editprofile3'>
                    <div className='editprofile4'>
                        <input type="search" placeholder='Search Here' />
                        <IoSearchSharp />
                    </div>

                    <div className='editprofile5'>
                        <div className='editprofile85'>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                <p className='editprofile85'>Create a field</p>
                            </OverlayTrigger>
                        </div>
                        <button onClick={() => setModalShow4(true)}>History</button>
                        <button onClick={() => setModalShow(true)}>Counselor Form</button>
                    </div>
                </div>

                <div className="editprofile6">
                    <div className="editprofile7">
                        <Slider {...settings}>
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
                        </Slider>
                    </div>
                </div>



                <div className='editprofile10'>
                    <div className='editprofile11'>
                        <img src={img} alt="" />
                        <div className='editprofile12'>
                            <p>Lore Epsom</p>
                        </div>
                    </div>

                    <div className='editprofile13'>
                        <div className="editprofile14">
                            <div className={step === 0 ? "editprofile15" : "editprofile16"} onClick={() => setStep(0)}>
                                <p>General Info</p>
                            </div>
                            <div className={step === 1 ? "editprofile15" : "editprofile16"} onClick={() => setStep(1)}>
                                <p>Course Info</p>
                            </div>
                        </div>
                        {step === 0 ? (
                            <div className='editprofile17'>
                                <div className='editprofile19'>
                                    <div className='editprofile18'>
                                        <p>Email</p>
                                        <h6>lorenepsom@gmail.com</h6>
                                    </div>
                                    <div className='editprofile18'>
                                        <p>Admission no</p>
                                        <h6>12121213</h6>
                                    </div>
                                </div>

                                <div className='editprofile19'>
                                    <div className='editprofile18'>
                                        <p>Email</p>
                                        <h6>lorenepsom@gmail.com</h6>
                                    </div>
                                    <div className='editprofile18'>
                                        <p>Admission Date</p>
                                        <h6>DD/MM/YYYY</h6>
                                    </div>
                                </div>
                                <div className='editprofile19'>
                                    <div className='editprofile18'>
                                        <p>Date of Birth</p>
                                        <h6>DD/MM/YYYY</h6>
                                    </div>
                                    <div className='editprofile18'>
                                        <p>Admission confirmation status</p>
                                        <h6>Status</h6>
                                    </div>
                                </div>
                                <div className='editprofile19'>
                                    <div className='editprofile18'>
                                        <p>Enrollment no</p>
                                        <h6>1234345</h6>
                                    </div>
                                    <div className='editprofile18'>
                                        <p>University Name</p>
                                        <h6>University name</h6>
                                    </div>
                                </div>
                            </div>
                        ) : step === 1 ? (
                            <div className='editprofile17'>
                                <div className='editprofile19'>
                                    <div className='editprofile18'>
                                        <p>Course</p>
                                        <h6>PHD</h6>
                                    </div>
                                    <div className='editprofile18'>
                                        <p>Course Level</p>
                                        <h6>PG</h6>
                                    </div>
                                </div>

                                <div className='editprofile19'>
                                    <div className='editprofile18'>
                                        <p>Specialization</p>
                                        <h6>Physical Education</h6>
                                    </div>
                                    <div className='editprofile18'>
                                        <p>Course Duration</p>
                                        <h6>3 Years</h6>
                                    </div>
                                </div>
                                <div className='editprofile19'>
                                    <div className='editprofile18'>
                                        <p>Session</p>
                                        <h6>2021-2024</h6>
                                    </div>
                                    <div className='editprofile18'>
                                        <p>Counselor</p>
                                        <h6>Loren Epsom</h6>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>

                </div>


            </div>
        </>
    )
}

export default EditProfile1