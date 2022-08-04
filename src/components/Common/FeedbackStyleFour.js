import React from 'react';
import * as Icon from 'react-feather';

// Client Images
import Client1 from '../../assets/images/client-image/client1.jpg'
import Client2 from '../../assets/images/client-image/client2.jpg'
import Client3 from '../../assets/images/client-image/client3.jpg'

// Shape Images
import Shape1 from "../../assets/images/shape1.png";
import Shape2 from "../../assets/images/shape2.svg";
import Shape3 from "../../assets/images/shape3.svg";
import Shape4 from "../../assets/images/shape4.svg";

import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
    loop: false,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    items: 1,
    animateOut: 'fadeOut',
}

const FeedbackStyleFour = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="ml-feedback-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2>Our Clients Feedback</h2>
                    <div className="bar"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                {display ? <OwlCarousel 
                    className="ml-feedback-slides owl-carousel owl-theme"
                    {...options}
                > 
                    <div className="single-ml-feedback-item">
                        <div className="client-info">
                            <img src={Client1} alt="image" />
                            <h3>Sarah Taylor</h3>
                            <span>CEO at Envato</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!</p>

                        <div className="rating">
                            <Icon.Star />
                            <Icon.Star />
                            <Icon.Star />
                            <Icon.Star />
                            <Icon.Star />
                        </div>
                    </div>

                    <div className="single-ml-feedback-item">
                        <div className="client-info">
                            <img src={Client2} alt="image" />
                            <h3>Steven Smith</h3>
                            <span>CEO at Envato</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!</p>

                        <div className="rating">
                            <Icon.Star />
                            <Icon.Star />
                            <Icon.Star />
                            <Icon.Star />
                            <Icon.Star />
                        </div>
                    </div>

                    <div className="single-ml-feedback-item">
                        <div className="client-info">
                            <img src={Client3} alt="image" />
                            <h3>James Eva</h3>
                            <span>CEO at Envato</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!</p>

                        <div className="rating">
                            <Icon.Star />
                            <Icon.Star />
                            <Icon.Star />
                            <Icon.Star />
                            <Icon.Star />
                        </div>
                    </div>
                </OwlCarousel> : ''}
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
    );
}

export default FeedbackStyleFour;