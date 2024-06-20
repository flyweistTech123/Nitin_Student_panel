import React from 'react'
import './Profile.css'
import HOC from '../../Components/HOC/HOC'
import Profile from './Profile'
import img from '../../Img/img109.png'


const ContactDetails = () => {
    return (
        <>
            <div>
                <div>
                    <Profile />
                </div>

                <div className='profileprofile12'>
                    <div className='profileprofile13'>
                        <h2>Contact Details</h2>
                    </div>
                    <div className='profileprofile14'>
                        <h4>Permanent Address</h4>
                    </div>

                    <div className='profileprofile19'>
                        <div className='profileprofile21'>
                            <label htmlFor="">Permanent Address</label>
                            <textarea name="" id=""></textarea>
                        </div>
                        <div className='profileprofile200'>
                            <div className='profileprofile21'>
                                <label htmlFor="">Country</label>
                                <select name="" id="">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">State</label>
                                <select name="" id="">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">District</label>
                                <select name="" id="">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">City</label>
                                <select name="" id="">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">Taluka</label>
                                <select name="" id="">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">Pin-Code</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='profileprofile26'>
                            <input type="checkbox" />
                            <label htmlFor="">Keep the Current Address same as permanent address</label>
                        </div>
                    </div>
                </div>
                <div className='profileprofile12'>
                    <div className='profileprofile14'>
                        <h4>Current Address</h4>
                    </div>

                    <div className='profileprofile19'>
                        <div className='profileprofile21'>
                            <label htmlFor="">Permanent Address</label>
                            <textarea name="" id=""></textarea>
                        </div>
                        <div className='profileprofile200'>
                            <div className='profileprofile21'>
                                <label htmlFor="">Country</label>
                                <select name="" id="">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">State</label>
                                <select name="" id="">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">District</label>
                                <select name="" id="">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">City</label>
                                <select name="" id="">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">Taluka</label>
                                <select name="" id="">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">Pin-Code</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='profileprofile12'>
                    <div className='profileprofile14'>
                        <h4>Emergency Contact Information</h4>
                    </div>

                    <div className='profileprofile19'>
                        <div className='profileprofile201'>
                            <div className='profileprofile21'>
                                <label htmlFor="">Emergency Contact Number</label>
                                <input type="number" />
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">Emergency Contact Name</label>
                                <input type="number" />
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">Alternate Emergency Contact Number</label>
                                <input type="number" />
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">Alternate Emergency Contact Name</label>
                                <input type="number" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='profileprofile12'>
                    <div className='profileprofile14'>
                        <h4>Hostel/PG Information</h4>
                    </div>

                    <div className='profileprofile19'>
                        <div className='profileprofile201'>
                            <div className='profileprofile21'>
                                <label htmlFor="">Hostel/PG Name</label>
                                <input type="number" />
                            </div>
                        </div>
                        <div className='profileprofile27'>
                            <div className='profileprofile21'>
                                <label htmlFor="">Hostel/PG Address</label>
                                <textarea name="" id=""></textarea>
                            </div>
                        </div>

                    </div>
                    <div className='profileprofile25'>
                        <button>SAVE CONTACT DETAILS</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(ContactDetails)