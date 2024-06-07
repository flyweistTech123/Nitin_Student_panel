import React, { useState } from 'react'
import './MeetingEdit.css'
import { useNavigate } from "react-router-dom";
import Edit2 from './Edit2';
import img from '../../Img/img115.png'
import img1 from '../../Img/img116.png'
import img2 from '../../Img/img94.png'

const MeetingEdit = () => {
    const navigate = useNavigate();

    const [state, setState] = useState(null);

    const handleState = (index) => {
        setState(index);
    };
    return (
        <>
            <div className='editprofile1'>
                <Edit2 />

                <div className='editprofile105'>
                    <div className='meetingedit111'>
                        <div className='meetingedit112'>
                            <h6>Meeting</h6>
                        </div>

                        <div className='meetingedit113'>
                            <div className="meetingedit114">
                                {["Today", "Tomorrow", "in 2 days", "in 3 days"].map((bank, index) => (
                                    <div
                                        key={index}
                                        className={state === index ? "meetingedit115" : "meetingedit116"}
                                        onClick={() => handleState(index)}
                                    >
                                        {bank}
                                    </div>
                                ))}
                            </div>
                            <div className='meetingedit117'>
                                <div className='meetingedit118'>
                                    <input type="checkbox" />
                                    <label htmlFor="">Completed</label>
                                </div>
                                <div className='meetingedit118'>
                                    <input type="checkbox" />
                                    <label htmlFor="">Important</label>
                                </div>
                            </div>
                        </div>

                        <div className='meetingedit119'>
                            <div className='meetingedit120'>
                                <div className='meetingedit121'>
                                    <h6>Calender</h6>
                                </div>
                                <div className='meetingedit122'>
                                    <img src={img} alt="" />
                                    <img src={img1} alt="" />
                                    <img src={img} alt="" />
                                    <img src={img1} alt="" />
                                </div>
                            </div>
                            <div className='meetingedit129'>
                                <div className='meetingedit130'>
                                    <div className='meetingedit131'>
                                        <div className='meetingedit134'>
                                            <label htmlFor="">Event Date & Time</label>
                                            <label htmlFor="">Duration</label>
                                        </div>
                                        <div className='meetingedit132'>
                                            <input type="date" name="" id="" />
                                            <select name="" id="">
                                                <option value="">11:20</option>
                                            </select>
                                            <div className='meetingedit133'>
                                                <p>1</p>
                                            </div>
                                            <select name="" id="">
                                                <option value="">Hour</option>
                                            </select>
                                        </div>

                                    </div>
                                    <div className='meetingedit131'>
                                        <div className='meetingedit134'>
                                            <label htmlFor="">Event end Date & Time</label>
                                        </div>
                                        <div className='meetingedit132'>
                                            <input type="date" name="" id="" />
                                            <select name="" id="">
                                                <option value="">11:20</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                                <div className='meetingedit123'>
                                    <div className='meetingedit124'>
                                        <label htmlFor="">Meeting</label>
                                        <input type="text" />
                                    </div>
                                    <div className='meetingedit124'>
                                        <label htmlFor="">Location</label>
                                        <input type="text" />
                                    </div>
                                    <div className='meetingedit124'>
                                        <label htmlFor="">With</label>
                                        <div className='meetingedit125'>
                                            <div className='meetingedit126'>
                                                <p>abc</p>
                                            </div>
                                            <div className='meetingedit127'>
                                                <p>+ Change</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='meetingedit135'>
                                    <p>More Options</p>
                                </div>

                                <div className='meetingedit136'>
                                    <div className='meetingedit137'>
                                        <label htmlFor="">Description</label>
                                        <textarea name="" id=""></textarea>
                                    </div>
                                    <div className='meetingedit137'>
                                        <label htmlFor="">Files:</label>
                                        <div className='meetingedit138'>
                                            <p>Attach Files</p>
                                        </div>
                                    </div>
                                    <div className='meetingedit137'>
                                        <label htmlFor="">Deal</label>
                                        <div className='meetingedit139'>
                                            <div className='meetingedit127'>
                                                <p>+ Select</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='meetingedit137'>
                                        <label htmlFor="">Responsible Person</label>
                                        <div className='meetingedit139'>
                                            <div className='meetingedit140'>
                                                <img src={img2} alt="" />
                                                <p>Loren Ipsom</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='meetingedit128'>
                                <p>View More Options</p>
                            </div>

                        </div>

                        <div className='meetingedit141'>
                            <button>Save</button>
                            <button>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MeetingEdit