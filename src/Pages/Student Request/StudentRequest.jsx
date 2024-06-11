import React from 'react'
import HOC from '../../Components/HOC/HOC'
import './StudentRequest.css'

const StudentRequest = () => {
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
    return (
        <>
            <div className='payfeepayfee8'>
                <div className='payfeepayfee9'>
                    <div className='payfeepayfee10'>
                        <h6>Student Request</h6>
                    </div>

                    <div className='payfeepayfee11'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Student Request Number</th>
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

            </div>
        </>
    )
}

export default HOC(StudentRequest)
