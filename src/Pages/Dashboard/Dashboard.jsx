import React from 'react'
import HOC from '../../Components/HOC/HOC'
import './Dashboard.css'
import img from '../../Img/student1.png'

const Dashboard = () => {
    return (
        <>
            <div className='dashboard1'>
                <div className='dashboard2'>
                    <div className='dashboard3'>
                        <div className='dashboard4'>
                            <img src={img} alt="" />
                        </div>

                        <div className='dashboard5'>
                            <div className='dashboard6'>
                                <p>Name:</p>
                                <p>Registration Number:</p>
                                <p>Email ID:</p>
                                <p>Mobile Number:</p>
                                <p>Enrolled Program:</p>
                            </div>
                            <div className='dashboard6'>
                                <h6>Loren Epsom</h6>
                                <h6>D1223112</h6>
                                <h6>lorenepsom@gmail.com</h6>
                                <h6>9565325466</h6>
                                <h6>B.tech (Computer Engineering)</h6>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HOC(Dashboard)
