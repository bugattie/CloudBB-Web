import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

import Logo from "../../assets/images/BazarLogo.png"
import MapImg from "../../assets/images/map.png"
import Shape1 from "../../assets/images/shape1.png"
import Shape2 from "../../assets/images/shape2.svg"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="footer-area bg-f7fafd">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget">
              <div className="logo">
                <Link to="/it-startup">
                  <img
                    style={{ width: "100px", height: "100px" }}
                    src={Logo}
                    alt="logo"
                  />
                </Link>
              </div>
              <p>
                It is a multivendor application where many owners of book and
                stationery businesses sell their products, therefore it will
                also benefit buyers in price because there will be price
                competition between vendors.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget pl-5">
              <h3>Company</h3>
              <ul className="list">
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/">Services</Link>
                </li>
                <li>
                  <Link to="/">Features</Link>
                </li>
                <li>
                  <Link to="/">Our Pricing</Link>
                </li>
                <li>
                  <Link to="/">Latest News</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget">
              <h3>Support</h3>
              <ul className="list">
                <li>
                  <Link to="/">FAQ's</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/">Terms & Condition</Link>
                </li>
                <li>
                  <Link to="/">Team</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget">
              <h3>Address</h3>

              <ul className="footer-contact-info">
                <li>
                  <Icon.MapPin />
                  DHA SUFFA UNIVERSITY
                </li>
                <li>
                  <Icon.Mail />
                  Email:{" "}
                  <Link to="mailto:spet@gmail.com">bookbazar@gmail.com</Link>
                </li>
                <li>
                  <Icon.PhoneCall />
                  Phone: <Link to="tel:321984754">+ (021) 984 754</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="copyright-area">
              <p>
                Copyright &copy; {currentYear} Spet. All rights reserved by{" "}
                <Link to="/">Cloud Book Bazaar</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <img src={MapImg} className="map" alt="map" />

      {/* Shape Images */}
      <div className="shape1">
        <img src={Shape1} alt="shape" />
      </div>
      <div className="shape8 rotateme">
        <img src={Shape2} alt="shape" />
      </div>
    </footer>
  )
}

export default Footer
