import React from 'react'
import "./Home.css"
import image from "../Data/karim.PNG"


const AboutMeCard = ({info}) => {
    return (
        <div className="card-wrapper">
            <div className="body-wrapper">
                <div className="info-wrapper">
                    {info}
                </div>
                <div className="image-wrapper">
                    <img height={"320"} width={"210"} src={image} alt="Me"/>
                </div>
            </div>
            <div className="see-projects">
                Scroll down below to see some of my projects!
            </div>
        </div>
    )
}

export default AboutMeCard;
