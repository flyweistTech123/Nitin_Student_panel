import React from 'react'
import HOC from '../../Components/HOC/HOC'
import './PayFees.css'
import { useNavigate } from 'react-router-dom'

const PayFees = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='payfeepayfee'>
                <div className='payfeepayfee1'>
                    <div className='payfeepayfee2'>
                        <h6>Pay Fees</h6>
                    </div>

                    <div className='payfeepayfee3'>
                        <div className='payfeepayfee4'>
                            <div className='payfeepayfee5' style={{ backgroundColor: "#40AF0C" }} onClick={() => navigate('/payfeepayment')}>
                                <p>Total Payment Received</p>
                            </div>
                            <div className='payfeepayfee5' style={{ backgroundColor: "#2155CD" }} onClick={() => navigate('/payfeepayment')}>
                                <p>Total Balance</p>
                            </div>
                            <div className='payfeepayfee5' style={{ backgroundColor: "#FFB800" }} onClick={() => navigate('/payfeepayment')}>
                                <p>Pay Amount</p>
                            </div>
                        </div>
                        <div className='payfeepayfee6'>
                            <div className='payfeepayfee7'>
                                <input type="text" placeholder='₹ 340.65' />
                            </div>
                            <div className='payfeepayfee7'>
                                <input type="text" placeholder='₹ 340.65' />
                            </div>
                            <div className='payfeepayfee7'>
                                <input type="text" placeholder='Enter your Amount Here' />
                            </div>
                            <div className='payfeepayfee7' onClick={()=>navigate('/paymentdetails')}>
                                <button>PAY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(PayFees)
