import React, { Component } from "react";
import "./contact.css";
import './fonts/Cream-Cake.otf';
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import linkedin from "./linkedin.png";
import agilogo from "./agilogo.png"
import agibanner from "./agibanner.jpeg"


class contact extends Component {
    getYear() {
        return new Date().getFullYear();
    }
    render() {
        return (
            <div className='gradiant'>
                <div className="contain">
                    <h1 className='mainhead' style={{ fontFamily: 'Palatino Linotype' }}>Contact Us</h1>

                    <div style={{ textAlign: 'center', marginTop: '25px' }}>
                        <p className='mainhead1'>You are just a step away from turning
                        <br />
                        your imagination to reality</p>
                    </div>
                    <br />
                    <div className='row'>
                        <div class="card crd1 col-sm-3" style={{ borderInlineColor: 'red', borderBlockColor: "red" }}>
                            <div class="card-body">
                                <div className='agi'>
                                <img className='agilogo' src={agilogo} />
                                </div>
                                <br />
                                <br />
                                <h6 class="card-title">Address</h6>
                                <a className='info' href="https://goo.gl/maps/9urgWLMyMduKgk8V9" target="_blank"><txt>Saibu Abhas-25, Bhaisipati, Lalitpur</txt></a>
                                <br />
                                <br />
                                <h6 class="card-title">Phone</h6>
                                <a className='info' href="tel:+977 9810111456"><txt>+977 9810111456</txt></a>
                                <br />
                                <br />
                                <h6 class="card-titl">Email</h6>
                                <a className='info' href="mailto:info@agiinfotech.com"><txt>info@agiinfotech.com</txt></a>
                                <br />
                                <br />
                                <div className='mainicon'>
                                    <a href='https://www.facebook.com/AGI-Infotech-105915604518772/' target="_blank"><img className='icon' src={facebook} /></a>
                                    <a href='https://www.instagram.com/agiinfotech/' target="_blank"><img className='icon' src={instagram} /></a>
                                    <a href="https://www.linkedin.com/company/a-g-i-infotech/" target="_blank"><img className='icon' src={linkedin} /></a>
                                </div>
                            </div>
                        </div>

                        <div class="card crd2 col-sm-6" style={{ borderInlineColor: 'red', borderBlockColor: "red" }}>
                            <div class="card-body">
                                <h5 class="card-title" style={{ textAlign: 'center' }}>Get In Touch</h5>
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <input type="text" class="form-control" id="firstname" placeholder="First name" required
                                                style={{ borderInlineColor: 'blue', borderBlockColor: "blue" }}
                                            />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <input type="text" class="form-control" id="lastname" placeholder="Last name" required
                                                style={{ borderInlineColor: 'blue', borderBlockColor: "blue" }}
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <input type="number" class="form-control" id="number" placeholder="Phone number" required
                                            style={{ borderInlineColor: 'blue', borderBlockColor: "blue" }}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="email" placeholder="Email" required
                                            style={{ borderInlineColor: 'blue', borderBlockColor: "blue" }}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="subject" placeholder="Subject" required
                                            style={{ borderInlineColor: 'blue', borderBlockColor: "blue" }}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <select id="inputState" class="form-control" style={{ borderInlineColor: 'blue', borderBlockColor: "blue" }} >
                                            <option selected>Choose Services</option>
                                            <option>Website</option>
                                            <option>Application Development</option>
                                            <option>Desgining</option>
                                            <option>Animation</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <textarea type="textarea" class="form-control" id="msg" placeholder="Type you message here.." required
                                            style={{ height: '150px', borderInlineColor: 'blue', borderBlockColor: "blue" }}
                                        />
                                    </div>
                                    <button type="submit" className="button">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='banner'>
                        <img className='agibanner' src={agibanner} />
                    </div>
                    <div class="foot mt-5" style={{ textalign: 'center' }}>
                        <p style={{ fontsize: "17px" }}>Copyright &copy;
                                {this.getYear()}
                                 <span> A.G.I. INFOTECH</span>
                            </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default contact;
