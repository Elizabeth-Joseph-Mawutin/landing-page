import React from 'react'
import ProfilePic from "../Assets/john-doe-image.png"
import {AiFillStar} from "react-icons/ai"

const Testimonials = () => {
  return (
    <div className='work-section-wrapper'>
        <div className="work-section-top">
            <p className="primary-subheading">Testimonials</p>
            <h1 className="primary-heading">What They Are Saying</h1>
            <p className='primary-text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, libero itaque adipisci nihil consequatur placeat animi facilis illum possimus modi dolores ab labore perferendis tempora. Nostrum quam illum laudantium accusamus.
            </p>
        </div>
        <div className="testimonial-section-bottom">
            <img src={ProfilePic} alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quibusdam nobis iusto dolorum eos. Soluta dolore consequatur ad recusandae nisi architecto, debitis harum eaque odio repellendus, aut repellat laboriosam pariatur.
            </p>
            <div className="testimonials-stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <h2>John Doe</h2>
        </div>
      
    </div>
  )
}

export default Testimonials
