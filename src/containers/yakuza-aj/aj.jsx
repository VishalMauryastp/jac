import React from "react";
import productImage from "../../assets/a450.webp";
import Navbar from "../../components/navbar/Navbar";
import "./aj.css";
const aj = (props) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pro-title">
        <h1>
          Ather 450 electric scooter price, specifications, features:</h1>
      </div>
      <div className="product-wrapper">
        <div className="product-header">
          <div className="product-image">
            <div className="image-wrapper">
              <img src={productImage} alt="Bike A450" />
            </div>
          </div>
          <div className="product-overview">
            <div className="info-wrapper">
              <h1 className="product-title">Ather 450 Plus</h1>
              <h2 className="product-price">Price : 1.16 lakh INR</h2>
              <p className="product-rating">Rating : ⭐⭐⭐</p>
              <p className="product-des">
                Ather is an Indian brand, a startup which is dedicated to
                deliver best range of electric two wheelers in Indian electric
                vehicle market. This startup is founded by two IIT graduates in
                2013 and this ather 450 plus is fully designed and assembles in
                India with 20% of its parts Imported. This is not a budget range
                electric scooter but it can surly give the high end performant
                and user comfort.
              </p>
            </div>
          </div>
        </div>
        <div className="table-container">
          <div className="tabel-wrapper">
            <table cellSpacing="0" cellPadding="0">
              <thead>
                <tr>
                  <th colSpan="2">Specifications</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Range</td>
                  <td>55-75km</td>
                </tr>
                <tr>
                  <td>Top speed</td>
                  <td>75km</td>
                </tr>
                <tr>
                  <td>Charging time</td>
                  <td>4-5 Hours</td>
                </tr>
                <tr>
                  <td>Electricity unit’s consumption</td>
                  <td>2.5 units</td>
                </tr>
                <tr>
                  <td>Motor power</td>
                  <td>3.3kW</td>
                </tr>
                <tr>
                  <td>Battery specifications</td>
                  <td>Li-ion/ 51.1V / 2.71 kWh</td>
                </tr>
                <tr>
                  <td>Torque</td>
                  <td>20.5 Nm</td>
                </tr>
                <tr>
                  <td>Acceleration</td>
                  <td>3.9s</td>
                </tr>
                <tr>
                  <td>Motor type</td>
                  <td>BLDC motor</td>
                </tr>
              </tbody>
            </table>
          </div>
       
          <div className="tabel-wrapper">
            <table cellSpacing="0" cellPadding="0">
              <thead>
                <tr>
                  <th colSpan="2">Specifications</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Range</td>
                  <td>55-75km</td>
                </tr>
                <tr>
                  <td>Top speed</td>
                  <td>75km</td>
                </tr>
                <tr>
                  <td>Charging time</td>
                  <td>4-5 Hours</td>
                </tr>
                <tr>
                  <td>Electricity unit’s consumption</td>
                  <td>2.5 units</td>
                </tr>
                <tr>
                  <td>Motor power</td>
                  <td>3.3kW</td>
                </tr>
                <tr>
                  <td>Battery specifications</td>
                  <td>Li-ion/ 51.1V / 2.71 kWh</td>
                </tr>
                <tr>
                  <td>Torque</td>
                  <td>20.5 Nm</td>
                </tr>
                <tr>
                  <td>Acceleration</td>
                  <td>3.9s</td>
                </tr>
                <tr>
                  <td>Motor type</td>
                  <td>BLDC motor</td>
                </tr>
              </tbody>
            </table>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default aj;
