import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import './card.css';
import { Card } from "antd";
import bounce from "react-animations/lib/bounce";
import fadeInDown from "react-animations/lib/fade-in-down";

const { Meta } = Card;

const DominosCard = () => {

    const [navBar, setNavBar] = useState(false);

    const animation = () => {
        if (window.scrollY >= 200) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    };
    window.addEventListener("scroll", animation);

    return (
        <div style={{"display": "flex", "flexDirection": "column"}}>
       {navBar && (<FadeInDown><h3 className="card-list-title">Explore</h3></FadeInDown>)}
            {navBar ? (
                <Bounce className="card-list">
                
                    <div className="card">
                        <Card
                            hoverable
                            style={{ width: 300, height: 300 }}
                            cover={
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <img alt="example" src="https://www.dominos.co.in/assets/menu@2x.png" className="icon" />
                                    <h4 className="card-title">OUR MENU</h4>
                                    <p className="p">Explore Our range of delicious pizzas, delivered in 30 minutes</p>
                                </div>
                            }
                        >
                            <Meta className="meta" title="Discover pizza" />
                        </Card>
                    </div>

                    <div className="card">
                        <Card
                            hoverable
                            style={{ width: 300, height: 300 }}
                            cover={
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <img alt="example" src="https://www.dominos.co.in/assets/store@2x.png" className="icon" />
                                    <h4 className="card-title">NEARBY STORE</h4>
                                    <p className="p">Find a Domino's Pizza restaurant near you</p>
                                </div>
                            }
                        >
                            <Meta className="meta" title="Find Domino's" />
                        </Card>
                    </div>

                    <div className="card">
                        <Card
                            hoverable
                            style={{ width: 300, height: 300 }}
                            cover={
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <img alt="example" src="https://www.dominos.co.in/assets/birthday@2x.png" className="icon" />
                                    <h4 className="card-title">BIRTHDAY PARTY</h4>
                                    <p className="p">Celebrate the joy of birthday with Fresh and Hot Pizzas </p>
                                </div>
                            }
                        >
                            <Meta className="meta" title="Book Now" />
                        </Card>
                    </div>

                    <div className="card">
                        <Card
                            hoverable
                            style={{ width: 300, height: 300 }}
                            cover={
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <img alt="example" src="https://www.dominos.co.in/assets/catering.png" className="icon" />
                                    <h4 className="card-title">CATERING</h4>
                                    <p className="p">Live Domino's Kitchen for weddings / corporate events</p>
                                </div>
                            }
                        >
                            <Meta className="meta" title="Discover pizza" />
                        </Card>
                    </div>

                </Bounce>
            ) :
                <div style={{ height: "300px" }}></div>
            }
        </div>
    )
};

export default DominosCard;

const Bounce = styled.div`
      animation: 4s ${keyframes`${bounce}`};
`;

const FadeInDown = styled.div`
      animation: 7s ${keyframes`${fadeInDown}`};
`;