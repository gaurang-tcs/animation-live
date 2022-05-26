import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import { AiOutlineBulb } from "react-icons/ai";
import { MdPayment } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

import rotateInDownLeft from "react-animations/lib/rotate-in-down-left";
import rotateInDownRight from "react-animations/lib/rotate-in-down-right";
import fadeInDown from "react-animations/lib/fade-in-down";


import './footer.css';
import flash from "react-animations/lib/flash";

const Footer = () => {

    const [footer, setFooter] = useState(false);
    const animation = () => {
        if (window.scrollY >= 700) {
            setFooter(true);
        } else {
            setFooter(false);
        }
    };
    window.addEventListener("scroll", animation);

    return (
        <div>
            {footer && (
                <Flash className="main-footer">
                    <div className="footer">
                        <RotateInDownLeft className="links">
                            <p className="link-title"><AiOutlineBulb />Useful Links</p>
                            <p>Refund Policy</p>
                            <p>Terms & Condition</p>
                            <p>Privacy Policy</p>
                            <p>Promo Codes</p>
                        </RotateInDownLeft>

                        <FadeInDown className="payment">
                            <p className="link-title"><MdPayment />Payment Methods</p>
                            <div className="atmcard">
                                <img src="https://lapinozpizza.in/assets/wla_new/img/visa.png" className="atm" alt="atm" />
                                <img src="https://lapinozpizza.in/assets/wla_new/img/google-pay.png" className="atm" alt="atm" />
                                <img src="https://lapinozpizza.in/assets/wla_new/img/paytm.png" className="atm" alt="atm" />
                                <img src="https://lapinozpizza.in/assets/wla_new/img/master-card.png" className="atm" alt="atm" />
                            </div>
                        </FadeInDown>

                        <RotateInDownRight className="contact">
                            <p className="link-title"><MdOutlineContactSupport />Contact With Us</p>
                            <div className="social">
                                <div className="social-icon"><FiFacebook size={25} /></div>
                                <div className="social-icon"><FiInstagram size={25} /></div>
                                <div className="social-icon"><FiTwitter size={25} /></div>
                                <div className="social-icon"><FiYoutube size={25} /></div>
                            </div>

                            <div className="mail">
                                <AiOutlineMail />
                                <p className="contact-name">coopendominos@yahoo.com</p>
                            </div>

                            <div className="number">
                                <AiOutlinePhone />
                                <p className="contact-name">+91 01762509231</p>
                            </div>

                        </RotateInDownRight>

                    </div>

                </Flash>)}
        </div>
    )
};

export default Footer;

const Flash = styled.div`
 animation: 4s ${keyframes`${flash}`} ease;
`;

const RotateInDownLeft = styled.div`
 animation: 4s ${keyframes`${rotateInDownLeft}`} ease;
`;

const RotateInDownRight = styled.div`
 animation: 4s ${keyframes`${rotateInDownRight}`} ease;
`;

const FadeInDown = styled.div`
      animation: 7s ${keyframes`${fadeInDown}`};
`;