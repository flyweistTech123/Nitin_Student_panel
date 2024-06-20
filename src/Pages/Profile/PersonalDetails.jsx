import React from 'react'
import './Profile.css'
import HOC from '../../Components/HOC/HOC'
import Profile from './Profile'
import img from '../../Img/img109.png'


const PersonalDetails = () => {
    return (
        <>
            <div>
                <div>
                    <Profile />
                </div>

                <div className='profileprofile12'>
                    <div className='profileprofile13'>
                        <h2>Personal Details</h2>
                    </div>
                    <div className='profileprofile14'>
                        <h4>Student Personal Details</h4>
                    </div>

                    <div className='profileprofile15'>
                        <div className='profileprofile16'>
                            <div className='profileprofile17'>
                                <label htmlFor="">Full Name</label>
                                <input type="text" />
                            </div>
                            <div className='profileprofile17'>
                                <label htmlFor="">Father’s Name</label>
                                <input type="text" />
                            </div>
                            <div className='profileprofile17'>
                                <label htmlFor="">Mother’s Name</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='profileprofile18'>
                            <img src={img} alt="" />
                        </div>
                    </div>

                    <div className='profileprofile19'>
                        <div className='profileprofile20'>
                            <div className='profileprofile21'>
                                <label htmlFor="">Date of Birth</label>
                                <input type="date" />
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">Course</label>
                                <select name="" id="">
                                    <option value=""></option>
                                    <option value="">B.A Lorem Ipsum</option>
                                    <option value="">Engineering Lorem Ipsum</option>
                                    <option value="">Engineering Lorem Ipsum</option>
                                    <option value="">Engineering Lorem Ipsum</option>
                                </select>
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">Specialization</label>
                                <select name="" id="">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">Duration</label>
                                <select name="" id="">
                                    <option value=""></option>
                                    <option value="">1 Year</option>
                                    <option value="">2 Years</option>
                                    <option value="">3 Years</option>
                                    <option value="">4 Years</option>
                                    <option value="">5 Years</option>
                                </select>
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor=""><span>*</span>Email Address</label>
                                <input type="text" />
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">Alternate Email</label>
                                <input type="text" />
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor=""><span>*</span>Phone Number</label>
                                <input type="number" />
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor=""><span>*</span>Whatsapp Number</label>
                                <input type="number" />
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor=""><span>*</span>Alternate Number</label>
                                <input type="number" />
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor=""><span>*</span>Marital Status</label>
                                <select name="" id="">
                                    <option value=""></option>
                                    <option value="">Married</option>
                                    <option value="">Single</option>
                                    <option value="">Divorced</option>
                                    <option value="">Widowed</option>
                                </select>
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor=""><span>*</span>Gender</label>
                                <select name="" id="">
                                    <option value=""></option>
                                    <option value="">Male</option>
                                    <option value="">Female</option>
                                    <option value="">Other</option>
                                </select>
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor=""><span>*</span>Category</label>
                                <select name="" id="">
                                    <option value=""></option>
                                    <option value="">SC</option>
                                    <option value="">ST</option>
                                    <option value="">OBC</option>
                                    <option value="">General</option>
                                </select>
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor=""><span>*</span>Nationality</label>
                                <select name="" id="">
                                    <option value=""></option>
                                    <option value="">Indian</option>
                                    <option value="">Foreigner</option>
                                    <option value="">NRI</option>
                                    <option value="">Immigrant</option>
                                </select>
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor=""><span>*</span>ID Proof Type</label>
                                <select name="" id="">
                                    <option value=""></option>
                                    <option value="">Aadhar Card</option>
                                    <option value="">PAN Card</option>
                                    <option value="">Voter ID Card</option>
                                    <option value="">Electricity Bill</option>
                                </select>
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">ID Proof Number</label>
                                <input type="text" />
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">ID Proof Document</label>
                                <div className='profileprofile24'>
                                    <button>Choose File</button>
                                    <p>No File Chosen</p>
                                </div>
                            </div>
                        </div>

                        <div className='profileprofile22'>
                            <label htmlFor="">Employment Status</label>
                            <select name="" id="">
                                <option value="">YES</option>
                            </select>
                        </div>

                        <div className='profileprofile23'>
                            <h2>Employment History</h2>
                        </div>
                        <div className='profileprofile20'>
                            <div className='profileprofile21'>
                                <label htmlFor="">Job Type</label>
                                <input type="text" />
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">Name of the Company</label>
                                <input type="text" />
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">Designation</label>
                                <input type="text" />
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">Job Location</label>
                                <input type="text" />
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">Experience</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='profileprofile23'>
                            <h2>Social Links</h2>
                        </div>
                        <div className='profileprofile20'>
                            <div className='profileprofile21'>
                                <label htmlFor="">Instagram</label>
                                <input type="text" />
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">Facebook</label>
                                <input type="text" />
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">LinkedIn</label>
                                <input type="text" />
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">Other</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>

                    <div className='profileprofile25'>
                        <button>SAVE PERSONAL DETAILS</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(PersonalDetails)