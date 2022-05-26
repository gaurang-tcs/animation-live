import React from "react";
import "./list.css"
import { Carousel } from 'antd';

const List = () => {

    return (
        <div className="list">
            <Carousel effect="fade" autoplay autoplaySpeed={2000}>
                <div>
                <img src="https://res.cloudinary.com/dri8rauwo/image/upload/v1653454094/cropped-1920-650-1074058_vhxn05.jpg" className="offer" alt="icon" />
                </div>
                <div>
                <img src="https://res.cloudinary.com/dri8rauwo/image/upload/v1653454230/cropped-1920-650-434468_czrlef.jpg" className="offer" alt="icon" />
                </div>
                <div>
                <img src="https://res.cloudinary.com/dri8rauwo/image/upload/v1653454314/cropped-1920-650-1235639_tpu3um.jpg" className="offer" alt="icon" />
                </div>
                <div>
                <img src="https://res.cloudinary.com/dri8rauwo/image/upload/v1653454557/cropped-1920-650-399004_dhij3w.jpg" className="offer" alt="icon" />
                </div>
            </Carousel>
        </div >
    )
};

export default List;