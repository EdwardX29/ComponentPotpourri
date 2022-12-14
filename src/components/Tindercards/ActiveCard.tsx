import React, {useState} from 'react';
import PictureSlider from './PictureSlider';
import { motion } from "framer-motion";

import './ActiveCard.css'

const ActiveCard = (props:any) => {

    const [clicked, setClicked] = useState("") 
 
    return (
        <>
            <div className="tindercard">
            <PictureSlider clicked={clicked} images={props.images} />

            <div className="user-info">
                <div className="basic-info">
                    <div className="name">
                        {props.name}
                    </div>
                    <div className="age">
                        {props.age}
                    </div>
                </div>
                <div className="location">
                    <img id="location-icon" src="Tindercards/location.svg" alt="location icon"/>
                    <span>{props.distance} km away</span>
                </div>
                <div className="demographics">
                    {props.gender}, {props.sClass}
                </div>
            </div>

            <div className="description">
                <div className="quote">
                    <q>{props.quote}</q>
                </div>
                <div>
                    {props.description}
                </div>
            </div>
                <div className="rating-container">

                    <motion.img 
                        className="rate"
                        id="decline"
                        src="Tindercards/x.svg" alt="decline icon"
                        onClick={() => {
                                if (clicked === ""){
                                    setClicked("declined")
                                    setTimeout(() => {
                                        props.swipeLeft()

                                    }, 250)
                                }
                            }
                        }
                        whileHover={{
                            scale:1.5,
                            transition:{duration:1},
                        }}
                        whileTap={{
                            scale:0.9
                        }}
                    />
                    <motion.img 
                        className="rate"
                        id="heart"
                        src="Tindercards/heart2.svg" alt="heart icon"
                        onClick={() => {
                            if (clicked === ""){
                                setClicked("heart")
                                setTimeout(() => {
                                    props.swipeLeft()
                                }, 250)
                        }}}
                        whileHover={{
                            scale:1.5,
                            transition:{duration:1},
                        }}
                        whileTap={{
                            scale:0.9
                        }}
                    />
                </div>
            </div>
        </>
    )   
}

export default ActiveCard;