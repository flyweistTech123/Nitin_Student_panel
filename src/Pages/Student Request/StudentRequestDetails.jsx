import React from 'react'
import HOC from '../../Components/HOC/HOC'
import './StudentRequest.css'
import img from '../../Img/img83.png'


const StudentRequestDetails = () => {


    return (
        <>
            <div className='payfeepayfee8'>
                <div className='studentrequestdetails'>
                    <div className='studentrequestdetails1'>
                        <div className='studentrequestdetails2'>
                            <div className='studentrequestdetails3'>
                                <div className='studentrequestdetails4'>
                                    <img src={img} alt="" />
                                    <p>Employee</p>
                                </div>
                                <div className='studentrequestdetails5'>
                                    <span>MONDAY, 23 SEP ( 8:00 AM ) </span>
                                </div>

                            </div>
                            <div className='studentrequestdetails6'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor quam, accumsan quis lectus vel, tristique elementum leo. Ut feugiat non massa ac placerat. Mauris tempus a felis ut commodo. </p>
                            </div>
                        </div>
                        <div className='studentrequestdetails2'>
                            <div className='studentrequestdetails3'>
                                <div className='studentrequestdetails4'>
                                    <img src={img} alt="" />
                                    <p>Student</p>
                                </div>
                                <div className='studentrequestdetails5'>
                                    <span>MONDAY, 23 SEP ( 8:00 AM ) </span>
                                </div>

                            </div>
                            <div className='studentrequestdetails6'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor quam, accumsan quis lectus vel, tristique elementum leo. Ut feugiat non massa ac placerat. Mauris tempus a felis ut commodo. </p>
                            </div>
                        </div>
                    </div>

                    <div className='studentrequestdetails7'>
                        <div className='studentrequestdetails8'>
                            <div className='studentrequestdetails9'>
                                <h6>TICKET DETAILS</h6>
                            </div>
                            <div className='studentrequestdetails10'>
                                <div className='studentrequestdetails11'>
                                    <p>Ticket Number</p>
                                    <p>:</p>
                                    <span>REQ012345</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(StudentRequestDetails)
