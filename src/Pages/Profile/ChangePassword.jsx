import React from 'react'
import './Profile.css'
import HOC from '../../Components/HOC/HOC'
import Profile from './Profile'
import { MdPhotoCamera } from "react-icons/md";


const ChangePassword = () => {
    return (
        <>
            <div>
                <div>
                    <Profile />
                </div>

                <div className='profileprofile12'>
                    <div className='profileprofile13'>
                        <h2>Change Password</h2>
                    </div>

                    <div className='profileprofile19'>
                        <div className='profileprofile34'>
                            <label htmlFor="">New Password</label>
                            <input type="password" />
                        </div>
                        <div className='profileprofile35'>
                            <div className='profileprofile34'>
                                <label htmlFor="">Re-Enter Password</label>
                                <input type="password" />
                            </div>
                            <div className='profileprofile36'>
                                <p>PASSWORD MATCHES!</p>
                            </div>
                        </div>
                    </div>
                    <div className='profileprofile37'>
                        <button>CHANGE PASSWORD</button>
                    </div>
                </div>


            </div>
        </>
    )
}

export default HOC(ChangePassword)