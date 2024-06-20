import React from 'react'
import './Profile.css'
import HOC from '../../Components/HOC/HOC'
import Profile from './Profile'
import { MdPhotoCamera } from "react-icons/md";


const BankDetails = () => {
    return (
        <>
            <div>
                <div>
                    <Profile />
                </div>

                <div className='profileprofile12'>
                    <div className='profileprofile13'>
                        <h2>Bank Details</h2>
                    </div>
                    <div className='profileprofile14'>
                        <h4>Student Bank Information</h4>
                    </div>

                    <div className='profileprofile19'>
                        <div className='profileprofile200'>
                            <div className='profileprofile21'>
                                <label htmlFor="">Account Number</label>
                                <input type="text" />
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">Account Holder Name</label>
                                <input type="text" />
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">Select Bank Name</label>
                                <select name="" id="">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">Branch Name</label>
                                <input type="text" />
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">IFSC Code</label>
                                <input type="text" />
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">MICR Code</label>
                                <input type="text" />
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">Account Type</label>
                                <input type="text" />
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">Select State</label>
                                <select name="" id="">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className='profileprofile21'>
                                <label htmlFor="">Select City</label>
                                <select name="" id="">
                                    <option value=""></option>
                                </select>
                            </div>
                        </div>
                        <div className='profileprofile27'>
                            <div className='profileprofile21'>
                                <label htmlFor="">Branch Address</label>
                                <textarea name="" id=""></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='profileprofile28'>
                    <div className='profileprofile29'>
                        <div className='profileprofile30'>
                            <h4>Photo upload Instructions</h4>
                        </div>

                        <div className='profileprofile31'>
                            <ul>
                                <li>Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</li>
                                <li>Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='profileprofile32'>
                        <label htmlFor="">Upload Bank Document</label>

                        <div className='profileprofile33'>
                            <MdPhotoCamera color='#3F3F3F' size={25} />
                            <button>Upload</button>
                        </div>
                    </div>
                </div>
                <div className='profileprofile25'>
                    <button>SAVE BANK DETAILS</button>
                </div>
            </div>
        </>
    )
}

export default HOC(BankDetails)