import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png"
import ChooseMeals from "../Assets/choose-image.png"
import DeliveryMeals from "../Assets/delivery-image.png"
//import { eventWrapper } from '@testing-library/user-event/dist/utils'

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum blanditiis sapiente sed exercitationem! Odio, exercitationem harum?",
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem! Odio, exercitationem harum?",
        },
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem harum?",
        },
    ]
  return (
    <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">Work</p>
            <h1 className="primary-heading">How It Works</h1>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorem fugit dolorum nobis architecto, illum sit, fugiat eveniet nihil voluptatum voluptates quidem.
            </p>
        </div>
        <div className="work-section-bottom">
            {workInfoData.map((data) => (
                <div className="work-section-info">
                    <div className="info-boxes-img-container">
                        <img src={data.image} alt="" />
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Work
