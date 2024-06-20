import React from 'react'
import HOC from '../../Components/HOC/HOC'
import './ReferenceFormData.css'
import { IoIosArrowDown } from "react-icons/io";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'
import { IoCloseSharp } from "react-icons/io5";

import { DeleteRequest } from '../Modals/Modals'


const ReferenceFormData = () => {
    const tableData = [
        {
            id: 1,
            CandidateName: 'Lorem Ipsum',
            MobileNo: '1234567890',
            EmailID: 'loremipsum@gmail.com',
            Country: 'Lorem Ipsum',
            State: 'Lorem Ipsum',
            City: 'Lorem Ipsum',
            Remarks: 'Lorem Ipsum sdfe terer',
            Course: 'B.A ( Lorem Ipsum )',
        },

        {
            id: 1,
            CandidateName: 'Lorem Ipsum',
            MobileNo: '1234567890',
            EmailID: 'loremipsum@gmail.com',
            Country: 'Lorem Ipsum',
            State: 'Lorem Ipsum',
            City: 'Lorem Ipsum',
            Remarks: 'Lorem Ipsum sdfe terer',
            Course: 'B.A ( Lorem Ipsum )',
        },

    ];


    const [modalShow, setModalShow] = React.useState(false);



    function AddRecords(props) {


        return (
            <Modal
                {...props}
                size="sl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body >
                    <div className='newpaymentrequest1'>
                        <div className='newpaymentrequest2'>
                            <p>Add New Record</p>
                            <IoCloseSharp size={20} color='#000000' onClick={() => setModalShow(false)} />
                        </div>

                        <div className='newpaymentrequest3'>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Candidate Name</label>
                                <input type="text" />
                            </div>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Mobile Number</label>
                                <input type="text" />
                            </div>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Email ID</label>
                                <input type="text" />
                            </div>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Country</label>
                                <input type="text" />
                            </div>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">City</label>
                                <input type="text" />
                            </div>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Course</label>
                                <select name="" id="">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Remarks</label>
                                <textarea name="" id=""></textarea>
                            </div>
                        </div>

                        <div className='newpaymentrequest5'>
                            <button onClick={() => setModalShow(false)}>Submit</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }



    const [modalShow1, setModalShow1] = React.useState(false);



    function EditRecords(props) {


        return (
            <Modal
                {...props}
                size="sl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body >
                    <div className='newpaymentrequest1'>
                        <div className='newpaymentrequest2'>
                            <p>Edit Record</p>
                            <IoCloseSharp size={20} color='#000000' onClick={() => setModalShow(false)} />
                        </div>

                        <div className='newpaymentrequest3'>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Candidate Name</label>
                                <input type="text" />
                            </div>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Mobile Number</label>
                                <input type="text" />
                            </div>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Email ID</label>
                                <input type="text" />
                            </div>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Country</label>
                                <input type="text" />
                            </div>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">City</label>
                                <input type="text" />
                            </div>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Course</label>
                                <select name="" id="">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Remarks</label>
                                <textarea name="" id=""></textarea>
                            </div>
                        </div>

                        <div className='newpaymentrequest5'>
                            <button onClick={() => setModalShow(false)}>Submit</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }

    const [modalShow2, setModalShow2] = React.useState(false);


    return (
        <>
            <AddRecords
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <EditRecords
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
            <DeleteRequest
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <div className='payfeepayfee8'>

                <div className='referenceformdata2'>
                    <button style={{ backgroundColor: "#2155CD" }} onClick={() => setModalShow(true)}>ADD RECORD</button>
                    <button style={{ backgroundColor: "#FFB800" }} onClick={() => setModalShow1(true)}>EDIT</button>
                    <button style={{ backgroundColor: "#FF0000" }} onClick={() => setModalShow2(true)}>DELETE</button>
                </div>
                <div className='payfeepayfee9'>
                    <div className='payfeepayfee10'>
                        <h6>Reference Form</h6>
                    </div>

                    <div className='payfeepayfee11'>
                        <div className='table-container'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Candidate Name</th>
                                        <th>Mobile No.</th>
                                        <th>Email ID</th>
                                        <th>Country</th>
                                        <th>State</th>
                                        <th>City</th>
                                        <th>Remarks</th>
                                        <th>Course</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((data) => (
                                        <tr key={data.id}>
                                            <td>
                                                <div className='editprofile111'>
                                                    <input type="checkbox" />
                                                    {data.CandidateName}
                                                </div>
                                            </td>
                                            <td>{data.MobileNo}</td>
                                            <td>{data.EmailID}</td>
                                            <td>{data.Country}</td>
                                            <td>{data.State}</td>
                                            <td>{data.City}</td>
                                            <td>{data.Remarks}</td>
                                            <td>{data.Course}</td>
                                            <td className='referenceformdata1'>
                                                <p>In Process</p>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
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

                <div className='admission18'>
                    <button>Previous</button>
                    <button>Next</button>
                </div>
            </div>
        </>
    )
}

export default HOC(ReferenceFormData)
