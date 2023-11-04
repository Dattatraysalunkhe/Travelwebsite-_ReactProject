import React from 'react'
import './FeaturedProperties.css'

function FeaturedProperties() {
    return (
        <div className='fp'>
            <div className="fpItem">
                <img src='./properties/Property1.jpg' alt='' className='fpImg' />
                <span className='fpName'>Hotel the sky</span>
                <span className='fpCity'>Rome</span>
                <span className='fpPrice'>Starting from $1500</span>
                <div className='fpRating'>
                    <button>8.9</button>
                    <spna>Excellent</spna>

                </div>
            </div>
            <div className="fpItem">
                <img src='./properties/Property2.jpg' alt='' className='fpImg' />
                <span className='fpName'>Hotel the sky</span>
                <span className='fpCity'>Los Angeles</span>
                <span className='fpPrice'>Starting from $1500</span>
                <div className='fpRating'>
                    <button>8.9</button>
                    <spna>Excellent</spna>

                </div>
            </div>
            <div className="fpItem">
                <img src='./properties/Property3.jpg' alt='' className='fpImg' />
                <span className='fpName'>Hotel the sky</span>
                <span className='fpCity'>Turkey</span>
                <span className='fpPrice'>Starting from $1500</span>
                <div className='fpRating'>
                    <button>8.9</button>
                    <spna>Excellent</spna>

                </div>
            </div>
            <div className="fpItem">
                <img src='./properties/Property4.jpg' alt='' className='fpImg' />
                <span className='fpName'>Hotel the sky</span>
                <span className='fpCity'>Seoul</span>
                <span className='fpPrice'>Starting from $1500</span>
                <div className='fpRating'>
                    <button>8.9</button>
                    <span>Excellent</span>

                </div>
            </div>

        </div>
    )
}

export default FeaturedProperties
