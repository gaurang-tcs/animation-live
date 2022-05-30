import React, {useState} from "react";
import "./bestseller.css";
import styled, {keyframes} from "styled-components";

import rotateInDownLeft from "react-animations/lib/rotate-in-down-left";
import rotateInDownRight from "react-animations/lib/rotate-in-down-right";
import fadeInDown from "react-animations/lib/fade-in-down";

const BestSeller = () => {

    const [best, setBest] = useState(false);
    const animation = () => {
        if (window.scrollY >= 318) {
            setBest(true);
        } else {
            setBest(false);
        }
    };
    window.addEventListener("scroll", animation);

    return (
        <div className="bestseller">
            { best && (<FadeInDown><h2 className="best-title">Best Sellers</h2></FadeInDown>)}

            { best && (<div className="bestseller-list">
                <RotateInDownLeft className="bestseller-card">
                    <img src="https://static.uengage.in/uploads/5/image-827281-1595939023.jpeg" className="bestsellerimg" alt="icon" />
                    <div className="item-details">
                        <p className="item-name">FarmVilla Pizza</p>
                        <p className="item-description">The freshness of capsicum, tomatoes...</p>
                    </div>
                </RotateInDownLeft>

                <RotateInDownLeft className="bestseller-card">
                    <img src="https://static.uengage.in/uploads/5/image-1578569043.jpeg" className="bestsellerimg" alt="icon" />
                    <div className="item-details">
                        <p className="item-name">Korma Special Pizza</p>
                        <p className="item-description">Need some Indian Zing to your Pizza</p>
                    </div>
                </RotateInDownLeft>

                <RotateInDownRight className="bestseller-card">
                    <img src="https://static.uengage.in/uploads/5/image-1578569617.jpeg" className="bestsellerimg" alt="icon" />
                    <div className="item-details">
                        <p className="item-name">LasVegas Treat Pizza</p>
                        <p className="item-description">Mushrooms, Jalapenos, Baby Corn..</p>
                    </div>
                </RotateInDownRight>

                <RotateInDownRight className="bestseller-card">
                    <img src="https://static.uengage.in/uploads/5/image-1578568905.jpeg" className="bestsellerimg" alt="icon" />
                    <div className="item-details">
                        <p className="item-name">Sproing Filling Pizza</p>
                        <p className="item-description">Quintessentially veg with capcicum....</p>
                    </div>
                </RotateInDownRight>


                <RotateInDownLeft className="bestseller-card">
                    <img src="https://static.uengage.in/uploads/5/image-827281-1595939023.jpeg" className="bestsellerimg" alt="icon" />
                    <div className="item-details">
                        <p className="item-name">FarmVilla Pizza</p>
                        <p className="item-description">The freshness of capsicum, tomatoes...</p>
                    </div>
                </RotateInDownLeft>

                <RotateInDownLeft className="bestseller-card">
                    <img src="https://static.uengage.in/uploads/5/image-1578569043.jpeg" className="bestsellerimg" alt="icon" />
                    <div className="item-details">
                        <p className="item-name">Korma Special Pizza</p>
                        <p className="item-description">Need some Indian Zing to your Pizza</p>
                    </div>
                </RotateInDownLeft>

                <RotateInDownRight className="bestseller-card">
                    <img src="https://static.uengage.in/uploads/5/image-1578569617.jpeg" className="bestsellerimg" alt="icon" />
                    <div className="item-details">
                        <p className="item-name">LasVegas Treat Pizza</p>
                        <p className="item-description">Mushrooms, Jalapenos, Baby Corn..</p>
                    </div>
                </RotateInDownRight>

                <RotateInDownRight className="bestseller-card">
                    <img src="https://static.uengage.in/uploads/5/image-1578568905.jpeg" className="bestsellerimg" alt="icon" />
                    <div className="item-details">
                        <p className="item-name">Sproing Filling Pizza</p>
                        <p className="item-description">Quintessentially veg with capcicum....</p>
                    </div>
                </RotateInDownRight>

            </div>)}
        </div>

    )
};

export default BestSeller;


const RotateInDownLeft = styled.div`
 animation: 10s ${keyframes `${rotateInDownLeft}`} ease;
`;

const RotateInDownRight = styled.div`
 animation: 10s ${keyframes `${rotateInDownRight}`} ease;
`;

const FadeInDown = styled.div`
      animation: 12s ${keyframes`${fadeInDown}`};
`;