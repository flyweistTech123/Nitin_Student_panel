import React from 'react'
import HOC from '../../Components/HOC/HOC'
import './ReferenceFormData.css'

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
    return (
        <>
            <div className='payfeepayfee8'>
                <div className='payfeepayfee9'>
                    <div className='payfeepayfee10'>
                        <h6>Reference Form</h6>
                    </div>

                    <div className='payfeepayfee11'>
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
                                        <td>{data.CandidateName}</td>
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
        </>
    )
}

export default HOC(ReferenceFormData)
