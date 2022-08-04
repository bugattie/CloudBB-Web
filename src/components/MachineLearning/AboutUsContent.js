import React from "react"
import { Link } from "gatsby"

import AboutImg from "../../assets/images/about4.png"

// Shape Images
import Shape1 from "../../assets/images/shape1.png"
import Shape2 from "../../assets/images/shape2.svg"
import Shape3 from "../../assets/images/shape3.svg"
import Shape4 from "../../assets/images/shape4.svg"

const AboutUsContent = () => {
  return (
    <div className="about-area pt-0 ptb-80" id="about">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="ml-about-img">
              <img src={AboutImg} alt="image" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="ml-about-content">
              <h2>About Us</h2>
              <div className="bar"></div>
              <p>
                It is a multivendor application where many owners of book and
                stationery businesses sell their products, therefore it will
                also benefit buyers in price because there will be price
                competition between vendors. Users can order books online from
                bookstores at competitive prices without having to travel to
                bazaars, which takes a lot of time and money.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Shape Images */}
      <div className="shape1">
        <img src={Shape1} alt="shape" />
      </div>
      <div className="shape2 rotateme">
        <img src={Shape2} alt="shape" />
      </div>
      <div className="shape3">
        <img src={Shape3} alt="shape" />
      </div>
      <div className="shape4">
        <img src={Shape4} alt="shape" />
      </div>
      <div className="shape7">
        <img src={Shape4} alt="shape" />
      </div>
      <div className="shape8 rotateme">
        <img src={Shape2} alt="shape" />
      </div>
    </div>
  )
}

export default AboutUsContent
