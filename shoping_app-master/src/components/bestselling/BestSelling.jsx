import React from 'react'
import "./bestselling.css"
function BestSelling({ data, heading }) {

    return (
        <React.Fragment>
            <div className="container">
                <h2>{heading}</h2>
                <div className="best_sell_img">
                    {
                        data.map((item) => (
                            <div className="card">
                                <img className='image' key={item.id} src={item.imageUrl} alt="" />
                                <div className="card_info">
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                    <div class="middle">
                                        <div class="text">Select Your Device</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </React.Fragment>
    )
}

export default BestSelling
