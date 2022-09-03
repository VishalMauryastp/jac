import React from "react";
import "./contact.css"
import Navbar from "../navbar/Navbar";
import fbicon from "../../assets/fb.png"
import linkedin from "../../assets/in.png"
import youtube from "../../assets/yt.png"
import insta from "../../assets/insta.png"
const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
       <div className="form-wrapper">
        <h1 className="main-heading">Contact Us</h1>
      <div className="form-flex">
        <div className="form-left">
          <div className="form-center">
            <div className="form-text">
              <h2>Send a Message</h2>
              <p>
                For any queries related to Product, Price, Company, Dealership,
                Warranty, Service, Finance, Insurance and vehicle support.
              </p>
            </div>
            <div className="form">
              <form action="#">
                <div className="row">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="row">
                  <input type="email" placeholder="Email" />
                </div>
                <div className="row">
                  <input type="text" placeholder="Phone" />
                </div>
                <div className="row">
                  <input type="text" placeholder="Subject" />
                </div>
                <div className="row">
                  <textarea
                    name=""
                    id=""
                    cols="50"
                    rows="10"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="row">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="form-right">
          <div className="form-center">
            <div className="form-text">
              <h2 className="heading">Contact Information</h2>
            </div>
            <div className="right-row">
              <p>
                <strong>Address : </strong>521-523, Tower A, Space iTech Park
                Sector-49, Sohna Road, Gurugram, Haryana (122018), India
              </p>
            </div>
            <div className="right-row">
              <p><strong>Toll Free Number : </strong>1800 890 6635</p>
            </div>
            <div className="right-row">
              <p><strong>Email : </strong>email@gmail.com</p>
            </div>
            <div className="line"></div>
            <div className="right-row">
              <p><strong>Dealership Enquires : </strong>email@gmail.com</p>
            </div>
            <div className="line"></div>
            <div className="right-row">
              <div className="icons">
                <div className="icon">
                  <img src={fbicon} alt="facebook" />
                </div>
                <div className="icon">
                  <img src={youtube} alt="facebook" />
                </div>
                <div className="icon">
                  <img src={linkedin}alt="facebook" />
                </div>
                <div className="icon">
                  <img src={insta} alt="facebook" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
