import React from 'react'
import HOC from '../../Components/HOC/HOC'
import './Books.css'
import { IoIosArrowDown } from "react-icons/io";


const Books = () => {
    const tableData = [
        {
            id: 1,
            BatchNo: '#001',
            Subject: 'Loren Epsom',
        },

        {
            id: 1,
            BatchNo: '#001',
            Subject: 'Loren Epsom',
        },

    ];
    return (
        <>
            <div className='payfeepayfee8'>
                <div className='payfeepayfee9'>
                    <div className='booksbooks1'>
                        <h6>Book Section</h6>
                        <div className='booksbooks11'>
                            <p><span>University Name :</span> Lorem Ipum University</p>
                            <p><span>Course :</span>  B.A ( Lorem Ipsum Course )</p>
                        </div>
                    </div>

                    <div className='payfeepayfee11'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Batch No.</th>
                                    <th>Subject</th>
                                    <th>Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td>{data.BatchNo}</td>
                                        <td>{data.Subject}</td>
                                        <td className='studentrequest1'>
                                            <button>Download</button>
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

export default HOC(Books)
