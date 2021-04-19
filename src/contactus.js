import React, { Component } from "react";
import "./contactus.css";
import { BsList } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import { FaFacebookMessenger } from "react-icons/fa"
import { GoHome } from "react-icons/go";


class contactus extends Component {
    render() {
        return (
            <div className='gradiant'>
                <div className="contain">
                    <h1 className='mainhead' style={{ fontFamily: 'Palatino Linotype' }}>Contact Us</h1>

                    <div style={{ textAlign: 'center', marginTop: '25px' }}>
                        <p className='mainhead' style={{ fontSize: '20px' }}>You're just a step away from dragging
                        <br />
                        your imagination to reality</p>
                    </div>
                    <br />

                    <div className='row cardrow'>
                        <div class="card col-sm-6 next-card">
                            <div class="card-body">
                                <h5 class="card-title">Contact Form</h5>
                                <div classname='row'>

                                    <input
                                        className='field1 col-sm-4 fields'
                                        type='text'
                                        name='firstname'
                                        placeholder='First name'
                                        rule={[{ required: true, message: ' Please input your Name! ' }]}
                                    />
                                    <input
                                        className='field1 col-sm-4 fields1'
                                        type='text'
                                        name='lastname'
                                        placeholder='Last name'
                                        rule={[{ required: true, message: ' Please input your Name! ' }]}
                                    />

                                </div>
                                <br />
                                <input
                                    className='field1'
                                    type='number'
                                    name='number'
                                    placeholder='Phone number'
                                />
                                <br />
                                <input
                                    className='field1'
                                    type='email'
                                    name='email'
                                    placeholder='Email address'
                                    style={{ marginTop: '25px' }}
                                />
                                <br />
                                <input
                                    className='field2'
                                    type='subject'
                                    name='subject'
                                    placeholder='Subject for the message'
                                    required
                                />
                                <br />
                                <select id="dropdown" className='drop' name='dropdown'>
                                    <option value="1"> Major Services</option>
                                    <option value="2">Website</option>
                                    <option value="3">Application Development</option>
                                    <option value="4">Desgining</option>
                                    <option value="5">Animation</option>
                                </select>
                                <br />
                                <textarea
                                    className='field3'
                                    style={{ height: '170px' }}
                                    type='textarea'
                                    name='textarea'
                                    placeholder='Type you message here..'
                                    required
                                />
                                <br />
                                <a href='#'> <button className='button ' onClick='requierd'>Send Message</button></a>
                            </div>
                        </div>

                        {/* style={{ width: '15rem', marginLeft: '15px' }} */}

                        <div class="card col-sm-3 crd1 next-card1">
                            <div class="card-body">
                                <h5 class="card-title">A.G.I. INFOTECH</h5>
                                <br />
                                <h6 class="card-title">Address</h6>
                                <a className='info' href=''><txt>Saibu Abhas-25, Bhaisipati, Lalitpur</txt></a>
                                <br />
                                <br />
                                <h6 class="card-title">Phone</h6>
                                <a className='info' href=''><txt>+977 9810111456</txt></a>
                                <br />
                                <br />
                                <h6 class="card-titl">Email</h6>
                                <a className='info' href=''><txt>info@agiinfotech.com</txt></a>
                                <br />
                                <br />

                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}
export default contactus;
