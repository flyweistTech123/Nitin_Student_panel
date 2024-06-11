import React from 'react'
import HOC from '../../Components/HOC/HOC'


const PayFeePayment = () => {
    const tableData = [
        {
            id: 1,
            SrNo: '#001',
            Fees_Type: 'Admission Fees',
            Description: 'Partial Fees Payment',
            Academic_Year: '2021-22',
            Semester: '1',
            Payment_Date: 'DD/MM/YYYY',
            Amount: 'Amount'
        },

        {
            id: 1,
            SrNo: '#001',
            Fees_Type: 'Admission Fees',
            Description: 'Partial Fees Payment',
            Academic_Year: '2021-22',
            Semester: '1',
            Payment_Date: 'DD/MM/YYYY',
            Amount: 'Amount'
        },

    ];
    return (
        <>
            <div className='payfeepayfee8'>
                <div className='payfeepayfee9'>
                    <div className='payfeepayfee10'>
                        <h6>Pay Fees</h6>
                    </div>

                    <div className='payfeepayfee11'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Sr. No</th>
                                    <th>Fees_Type</th>
                                    <th>Description</th>
                                    <th>Academic_Year</th>
                                    <th>Semester</th>
                                    <th>Payment_Date</th>
                                    <th>Amount</th>
                                    <th>Pay_Fees</th>
                                    <th>NEFT</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td>{data.SrNo}</td>
                                        <td>{data.Fees_Type}</td>
                                        <td>{data.Description}</td>
                                        <td>{data.Academic_Year}</td>
                                        <td>{data.Semester}</td>
                                        <td>{data.Payment_Date}</td>
                                        <td>{data.Amount}</td>
                                        <td className='payfeepayfee12'>
                                            <p>LINK</p>
                                        </td>
                                        <td className='payfeepayfee12'>
                                            <p>NEFT</p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className='payfeepayfee13'>
                    <div className='payfeepayfee9'>
                        <div className='payfeepayfee10'>
                            <h6>Other Fees</h6>
                        </div>

                        <div className='payfeepayfee14'>
                            <div className='payfeepayfee15'>
                                <select name="" id="">
                                    <option value="">Option 1</option>
                                    <option value="">Option 2</option>
                                    <option value="">Option 3</option>
                                    <option value="">Option 4</option>
                                    <option value="">Option 5</option>
                                    <option value="">Option 6</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='payfeepayfee16'>
                    <div className='payfeepayfee17'>
                        <div className='payfeepayfee18'>
                            <h4>Pay Other Fees</h4>
                        </div>
                        <div className='payfeepayfee19'>
                            <label htmlFor="">Amount</label>
                            <input type="text"  placeholder='0' />
                        </div>
                        <div className='payfeepayfee20'>
                           <button>NEFT</button>
                        </div>
                        <div className='payfeepayfee21'>
                           <button>Pay via other way</button>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default HOC(PayFeePayment)
