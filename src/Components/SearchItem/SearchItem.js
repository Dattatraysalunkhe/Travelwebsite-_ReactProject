import React from 'react'
import './SearchItem.css'

function SearchItem() {
    return (
        <>
        <div className='SearchItem'>
            <img src='./hotel/villas.jpg' alt='' className='siImg'></img>
            <div className='siDesc'>
                <h1 className="siTitle">Tower Street Apartments</h1>
                <span className="siDistance">200m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
                    Studio Apartment with Air conditioning
                </span>
                <span className="siFeatures">
                    Entire studio • 1 bathroom • 21m² 1 full bed
                </span>
                <span className="siCancelOp">Free cancellation </span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className='siDetails'>
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$220</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
      
        <div className='SearchItem'>
            <img src='./hotel/Resort.jpg' alt='' className='siImg'></img>
            <div className='siDesc'>
                <h1 className="siTitle">Ocean View Resort</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
                    Studio Apartment with Air conditioning
                </span>
                <span className="siFeatures">
                    Entire studio • 1 bathroom • 21m² 1 full bed
                </span>
                <span className="siCancelOp">Free cancellation </span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className='siDetails'>
                <div className="siRating">
                    <span>Excellent</span>
                    <button>9.0</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$205</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>

        <div className='SearchItem'>
            <img src='./hotel/Property3.jpg' alt='' className='siImg'></img>
            <div className='siDesc'>
                <h1 className="siTitle">Downtown Apartment</h1>
                <span className="siDistance">1km from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
                    Studio Apartment with Air conditioning
                </span>
                <span className="siFeatures">
                    Entire studio • 1 bathroom • 21m² 1 full bed
                </span>
                <span className="siCancelOp">Free cancellation </span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className='siDetails'>
                <div className="siRating">
                    <span>Excellent</span>
                    <button>9.5</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$195</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>




        </>
        
    )
}

export default SearchItem
