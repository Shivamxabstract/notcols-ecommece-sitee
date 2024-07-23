import "./brand.css"
import data from "./data"
function Brand() {
    return (
        <>
            <div className="container">
                <h2>Select Your Brand</h2>
                <div className="brand_Images">
                    {
                        data.map((item) => (
                            <><img key={item.id} src={item.imageUrl} alt="" />
                                {/* <div className="brand_name">
                                    <p >{item.name}</p>
                                </div> */}
                                {/* <span>{item.name}</span> */}
                                <hr />
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Brand
