import React, { useState } from 'react'
import './Service.css'
import HOC from '../../Components/HOC/HOC'
import { MdOutlineClose } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate, Link } from 'react-router-dom';

import img from '../../Img/img33.png'
import img19 from '../../Img/img83.png'
import { MdEdit } from "react-icons/md";
import { MultiSelect } from "react-multi-select-component";

// Modals 


import {
    FilterModal,
    MYDEALSModal,
    AddFieldModal,
    AdmissionFollowUp,
    NewTask,
    History,
    NeWLead,
    SMS,
    Email,
    Whatsapp,
    CallRecoding,
    Remarks,
    History1,
    FilterModalhistory,
    AddNewEvent,
    AddNewFilter,
    PropertiesModal,
    NewViewModal,
    Counsellorform,
    CallSummeryListModal
} from '../Modals/Modals.jsx'

const Service = () => {
    const navigate = useNavigate();
    const tableData = [
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            university: 'Lorem Ipsum University',
            course: 'Engineering',
        },

        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            university: 'Lorem Ipsum University',
            course: 'Engineering',
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            university: 'Lorem Ipsum University',
            course: 'Engineering',
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            university: 'Lorem Ipsum University',
            course: 'Engineering',
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            university: 'Lorem Ipsum University',
            course: 'Engineering',
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            university: 'Lorem Ipsum University',
            course: 'Engineering',
        },

    ];



    // Filter Modal 

    const [modalShow, setModalShow] = React.useState(false);

    // mydeals Modal
    const [modalShow1, setModalShow1] = React.useState(false);

    // add field Modal
    const [modalShow2, setModalShow2] = React.useState(false);




    // Admission Follow Up Modal

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // New Lead Modal

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    // History Modal


    const [modalShow3, setModalShow3] = React.useState(false);






    // NewTask Modal

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    // SMS Modal
    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);




    // Email Modal
    const [show4, setShow4] = useState(false);

    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);



    // Whatsapp Modal
    const [show5, setShow5] = useState(false);

    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);

    // call Recoding Modal 
    const [modalShow4, setModalShow4] = React.useState(false);
    const [modalShow5, setModalShow5] = React.useState(false);

    // History Modal

    const [modalShow6, setModalShow6] = React.useState(false);


    // FilterModalhistory Modal

    const [modalShow7, setModalShow7] = React.useState(false);


    // AddNewEvent Modal

    const [modalShow8, setModalShow8] = React.useState(false);

    // property modal
    const [modalShow9, setModalShow9] = React.useState(false);

    // NewView Modal
    const [modalShow10, setModalShow10] = React.useState(false);

    // counsler Modal
    const [modalShow11, setModalShow11] = React.useState(false);

    // AddNewFilter Modal
    const [modalShow12, setModalShow12] = React.useState(false);

    // Call summery Modal
    const [modalShow13, setModalShow13] = React.useState(false);

    const [selected, setSelected] = useState([]);


    const options = [
        {
            label: (
                <>
                    <img src={img19} alt="img19" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                    Loren Epsom
                </>
            ), value: "Loren Epsom1"
        },
        {
            label: (
                <>
                    <img src={img19} alt="img19" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                    Loren Epsom
                </>
            ), value: "Loren Epsom2"
        },
        {
            label: (
                <>
                    <img src={img19} alt="img19" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                    Loren Epsom
                </>
            ), value: "Loren Epsom3"
        },
    ];

    return (
        <>
            <FilterModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                setModalShow1={setModalShow1}
                setModalShow2={setModalShow2}
                setModalShow7={setModalShow12}
            />
            <MYDEALSModal
                show={modalShow1}
                onHide={() => setModalShow1(false)}
                setModalShow={setModalShow}
                setModalShow2={setModalShow2}
                setModalShow7={setModalShow12}
            />
            <AddFieldModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <AdmissionFollowUp
                show={show}
                onHide={handleClose}
                setModalShow3={setModalShow3}
                handleShow1={handleShow1}
                handleShow2={handleShow2}
                handleShow3={handleShow3}
                handleShow4={handleShow4}
                handleShow5={handleShow5}
                setModalShow8={setModalShow9}
                setModalShow9={setModalShow10}
                setModalShow10={setModalShow11}
                title={"Service"}
            />
            <NeWLead
                show={show1}
                onHide={handleClose1}
                setModalShow3={setModalShow3}
                handleShow={handleShow}
                handleShow2={handleShow2}
                handleShow3={handleShow3}
                handleShow4={handleShow4}
                handleShow5={handleShow5}
                setModalShow8={setModalShow11}
            />
            <History
                show={modalShow3}
                onHide={() => setModalShow3(false)}
            />
            <NewTask
                show={show2}
                onHide={handleClose2}
            />
            <SMS
                show={show3}
                onHide={handleClose3}
                setModalShow3={setModalShow3}
                setModalShow8={setModalShow11}
                handleShow1={handleShow1}
                handleShow2={handleShow2}
                handleShow3={handleShow3}
                handleShow4={handleShow4}
                handleShow5={handleShow5}
            />
            <Email
                show={show4}
                onHide={handleClose4}
            />
            <Whatsapp
                show={show5}
                onHide={handleClose5}
            />
            <CallRecoding
                show={modalShow4}
                onHide={() => setModalShow4(false)}
                setModalShow1={setModalShow5}
            />
            <Remarks
                show={modalShow5}
                onHide={() => setModalShow5(false)}
            />
            <History1
                show={modalShow6}
                onHide={() => setModalShow6(false)}
                setModalShow5={setModalShow7}
                setModalShow6={setModalShow8}
            />
            <FilterModalhistory
                show={modalShow7}
                onHide={() => setModalShow7(false)}
            />
            <AddNewEvent
                show={modalShow8}
                onHide={() => setModalShow8(false)}
            />
            <PropertiesModal
                show={modalShow9}
                onHide={() => setModalShow9(false)}
            />
            <NewViewModal
                show={modalShow10}
                onHide={() => setModalShow10(false)}
            />
            <Counsellorform
                show={modalShow11}
                onHide={() => setModalShow11(false)}
                setModalShow8={setModalShow9}
            />
            <AddNewFilter
                show={modalShow12}
                onHide={() => setModalShow12(false)}
            />
            <CallSummeryListModal
                show={modalShow13}
                onHide={() => setModalShow13(false)}
            />
            <div className='service'>
                <div className='admission1'>
                    <p>Service</p>
                    <div className='admission2'>
                        <Link to={'/whatsapp'} className='link'>
                            <div className='admission3'>
                                <p>What’s App</p>
                            </div>
                        </Link>
                        <Link to={'/email'} className='link'>
                            <div className='admission4'>
                                <p>Email</p>
                            </div>
                        </Link>
                        <Link to={'/telegram'} className='link'>
                            <div className='admission5'>
                                <p>Telegram</p>
                            </div>
                        </Link>
                        <Link to={'/zoommeeting'} className='link'>
                            <div className='admission6'>
                                <p>Zoom</p>
                            </div>
                        </Link>
                        <Link to={'/voicecall'} className='link'>
                            <div className='admission7'>
                                <p>Voice Call</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='service1'>
                    <div className='service2'>
                        <p>Fees Collection</p>
                    </div>
                    <div className='service3'>
                    </div>
                </div>


                <div className='admission8' >
                    <div>
                        <p>Filter</p>
                    </div>
                    <div className='admission9' onClick={() => setModalShow(true)}>
                        <div className='admission10'>
                            <p>My filter</p>
                            <MdOutlineClose color='#FFFFFF' size={20} />
                        </div>
                    </div>

                    <div className='service4'>
                        <button>Import</button>
                        <button>Export</button>
                    </div>
                </div>


                <div className='service5'>
                    <button onClick={() => setModalShow4(true)}>Call Recoding</button>
                    <button onClick={() => setModalShow13(true)}>Call Summary</button>
                </div>

                <div className='service3'>
                </div>


                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th><IoSettings size={20} onClick={() => setModalShow2(true)} /></th>
                                    <th>Student Name</th>
                                    <th>Contact_no</th>
                                    <th>Email_ID</th>
                                    <th>University</th>
                                    <th>Courses</th>
                                    <th>History</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><input type="checkbox" /></td>
                                        <td onClick={handleShow}><img src={img} alt="" /></td>
                                        <td>
                                            <p className='admission202'><button onClick={() => navigate('/admission_details')}><MdEdit size={20} /> Edit</button></p>
                                            {data.name}
                                        </td>
                                        <td>{data.contact}</td>
                                        <td>{data.email}</td>
                                        <td>{data.university}</td>
                                        <td>{data.course}</td>
                                        <td>
                                            <div className='admission14'>
                                                <button onClick={() => setModalShow6(true)}>History</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='pendingpayment6'>
                    <div className='pendingpayment7'>
                        <h6>Total:</h6>
                        <span>Show quantity</span>
                    </div>

                    <div className='pendingpayment8'>
                        <p>Page :1</p>
                    </div>

                    <div className='pendingpayment9'>
                        <p>Records</p>
                        <div className='pendingpayment10'>
                            <p>20</p>
                            <IoIosArrowDown color='#3F3F3F' />
                        </div>
                    </div>
                </div>

                <div className='admission15'>
                    <div className='admission16'>
                        <p>START DIALING</p>
                    </div>
                    <div className='admission16'>
                        <select name="" id="">
                            <option value="">Select Action</option>
                            <option value="">Assign Responsible Person</option>
                            <option value="">Assign Service Manager</option>
                            <option value="" onClick={() => navigate('/paymentreceived')}>Assign Backend Person</option>
                        </select>
                    </div>
                    <div className='admission16'>
                        <MultiSelect
                            options={options}
                            value={selected}
                            onChange={setSelected}
                            labelledBy="Select"
                            className='admission1666'
                        />
                    </div>
                    <div className='admission17'>
                        <input type="checkbox" />
                        <p>For All</p>
                    </div>
                </div>

                <div className='admission18'>
                    <button>Previous</button>
                    <button>Next</button>
                </div>
            </div>
        </>
    )
}

export default HOC(Service)