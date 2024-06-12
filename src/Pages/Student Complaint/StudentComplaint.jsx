import React from 'react'
import HOC from '../../Components/HOC/HOC'
import './StudentComplaint.css'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'
import { IoIosArrowDown } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";


const StudentComplaint = () => {
    const tableData = [
        {
            id: 1,
            StudentRequestNumber: '0123456',
            Title: 'Lorem Ipsum',
            Status: 'Pending',
        },

        {
            id: 1,
            StudentRequestNumber: '0123456',
            Title: 'Lorem Ipsum',
            Status: 'Pending',
        },

    ];

    const [modalShow, setModalShow] = React.useState(false);



    function AddRecords(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body >
                    <div className='newpaymentrequest1'>
                        <div className='newpaymentrequest2'>
                            <p>Start a Complaint Request</p>
                            <IoCloseSharp size={20} color='#000000' onClick={() => setModalShow(false)} />
                        </div>

                        <div className='newpaymentrequest3'>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Add Title</label>
                                <input type="text" />
                            </div>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Select Student Complaint Type</label>
                                <select name="" id="">
                                    <option value="">Lorem Ipsum Student Complaint Type</option>
                                    <option value="">Lorem Ipsum Student Complaint Type</option>
                                    <option value="">Lorem Ipsum Student Complaint Type</option>
                                    <option value="">Lorem Ipsum Student Complaint Type</option>
                                    <option value="">Lorem Ipsum Student Complaint Type</option>
                                    <option value="">Lorem Ipsum Student Complaint Type</option>
                                    <option value="">Lorem Ipsum Student Complaint Type</option>
                                </select>
                            </div>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Add Details</label>
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
    return (
        <>
            <AddRecords
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className='payfeepayfee8'>
                <div className='referenceformdata2'>
                    <button style={{ backgroundColor: "#2155CD" }} onClick={() => setModalShow(true)}>ADD COMPLAINT</button>
                </div>
                <div className='payfeepayfee9'>
                    <div className='payfeepayfee10'>
                        <h6>Student Complaint</h6>
                    </div>

                    <div className='payfeepayfee11'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Student Complaint Number</th>
                                    <th>Title</th>
                                    <th>Status</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td>{data.StudentRequestNumber}</td>
                                        <td>{data.Title}</td>
                                        <td>{data.Status}</td>
                                        <td className='studentrequest1'>
                                            <button>Details</button>
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

                <div className='admission18'>
                    <button>Previous</button>
                    <button>Next</button>
                </div>

            </div>
        </>
    )
}

export default HOC(StudentComplaint)
