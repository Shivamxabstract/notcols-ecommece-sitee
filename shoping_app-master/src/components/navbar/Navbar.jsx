import React from 'react'
import Logo from "../../assets/images/logo/logo.png"
import "./navbar.css"
function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="left">
                    <i class=" menuIcon fa-solid fa-bars"></i>
                    <img className='navlogo' src={Logo} alt="" />
                </div>
                <div className="center">
                    <ul className='nav_list'>
                        <li className='list_item'><a href="/">Marvel Skins
                            <ul className='dropdown'>
                                <li className='dropdown_item'><a href="/">mobile</a></li>
                                <li className='dropdown_item'><a href="/">Laptop</a></li>
                            </ul>
                        </a></li>
                        <li className='list_item'><a href="/">Mobile Skins
                            <ul className='dropdown'>
                                <li className='dropdown_item'><a href="/">iPhone
                                    <ul className='dropdown_list'>
                                        <li className='dropdown_list_item'><a href="/">iPhone 14 Pro Max</a></li>
                                        <li className='dropdown_list_item'><a href="/">iPhone 14 Pro</a></li>
                                        <li className='dropdown_list_item'><a href="/">iPhone 14 Plus</a></li>
                                        <li className='dropdown_list_item'><a href="/">iPhone 14</a></li>
                                        <li className='dropdown_list_item'><a href="/">iPhone 13 Pro Max</a></li>
                                        <li className='dropdown_list_item'><a href="/">iPhone 13 Pro</a></li>
                                        <li className='dropdown_list_item'><a href="/">iPhone 13</a></li>
                                        <li className='dropdown_list_item'><a href="/">iPhone 13 Mini</a></li>
                                        <li className='dropdown_list_item'><a href="/">See More...</a></li>
                                    </ul>
                                </a></li>
                                <li className='dropdown_item'><a href="/">Samsung
                                    <ul className='dropdown_list' style={{ marginTop: "4rem" }}>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S23 Ultra (New)</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S23 Plus (New)</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S23 (New)</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S22 Ultra</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S22 Plus</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S22</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy Z Fold 4</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy Z Fold2</a></li>
                                        <li className='dropdown_list_item'><a href="/">See More...</a></li>
                                    </ul>
                                </a></li>
                                <li className='dropdown_item'><a href="/">Oneplus
                                    <ul className='dropdown_list' style={{ marginTop: "6rem" }}>
                                        <li className='dropdown_list_item'><a href="/">OnePlus 11 (New)</a></li>
                                        <li className='dropdown_list_item'><a href="/">OnePlus 11R (New)</a></li>
                                        <li className='dropdown_list_item'><a href="/">OnePlus 10 Pro</a></li>
                                        <li className='dropdown_list_item'><a href="/">OnePlus 10R</a></li>
                                        <li className='dropdown_list_item'><a href="/">OnePlus 9 Pro</a></li>
                                        <li className='dropdown_list_item'><a href="/">OnePlus 9RT</a></li>
                                        <li className='dropdown_list_item'><a href="/">OnePlus 9R</a></li>
                                        <li className='dropdown_list_item'><a href="/">OnePlus 9</a></li>
                                        <li className='dropdown_list_item'><a href="/">OnePlus Nord CE</a></li>
                                        <li className='dropdown_list_item'><a href="/">OnePlus Nord CE 2</a></li>
                                        <li className='dropdown_list_item'><a href="/">OnePlus Nord CE 2 Lite</a></li>
                                        <li className='dropdown_list_item'><a href="/">OnePlus Nord 2T</a></li>
                                        <li className='dropdown_list_item'><a href="/">See More...</a></li>
                                    </ul>
                                </a></li>
                                <li className='dropdown_item'><a href="/">Pixel
                                    <ul className='dropdown_list' style={{ marginTop: "8rem" }}>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S23 Ultra (New)</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S23 Plus (New)</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S23 (New)</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S22 Ultra</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S22 Plus</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S22</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy Z Fold 4</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy Z Fold2</a></li>
                                        <li className='dropdown_list_item'><a href="/">See More...</a></li>
                                    </ul>
                                </a></li>
                                <li className='dropdown_item'><a href="/">Nothing
                                    <ul className='dropdown_list' style={{ marginTop: "10rem" }}>
                                        <li className='dropdown_list_item'><a href="/">Nothing Phone 1</a></li>
                                    </ul>
                                </a></li>
                                <li className='dropdown_item'><a href="/">Asus
                                    <ul className='dropdown_list' style={{ marginTop: "12rem" }}>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S23 Ultra (New)</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S23 Plus (New)</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S23 (New)</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S22 Ultra</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S22 Plus</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S22</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy Z Fold 4</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy Z Fold2</a></li>
                                        <li className='dropdown_list_item'><a href="/">See More...</a></li>
                                    </ul>
                                </a></li>
                                <li className='dropdown_item'><a href="/">Xiaomi
                                    <ul className='dropdown_list' style={{ marginTop: "14rem" }}>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S23 Ultra (New)</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S23 Plus (New)</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S23 (New)</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S22 Ultra</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S22 Plus</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S22</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy Z Fold 4</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy Z Fold2</a></li>
                                        <li className='dropdown_list_item'><a href="/">See More...</a></li>
                                    </ul>
                                </a></li>
                                <li className='dropdown_item'><a href="/">POCO
                                    <ul className='dropdown_list' style={{ marginTop: "16rem" }}>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S23 Ultra (New)</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S23 Plus (New)</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S23 (New)</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S22 Ultra</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S22 Plus</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S22</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy Z Fold 4</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy Z Fold2</a></li>
                                        <li className='dropdown_list_item'><a href="/">See More...</a></li>
                                    </ul>
                                </a></li>
                                <li className='dropdown_item'><a href="/">realme
                                    <ul className='dropdown_list' style={{ marginTop: "18rem" }}>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S23 Ultra (New)</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S23 Plus (New)</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S23 (New)</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S22 Ultra</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S22 Plus</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S22</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy Z Fold 4</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy Z Fold2</a></li>
                                        <li className='dropdown_list_item'><a href="/">See More...</a></li>
                                    </ul>
                                </a></li>
                                <li className='dropdown_item'><a href="/">iQOO
                                    <ul className='dropdown_list' style={{ marginTop: "20rem" }}>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S23 Ultra (New)</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S23 Plus (New)</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S23 (New)</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S22 Ultra</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S22 Plus</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S22</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy Z Fold 4</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy Z Fold2</a></li>
                                        <li className='dropdown_list_item'><a href="/">See More...</a></li>
                                    </ul>
                                </a></li>
                                <li className='dropdown_item'><a href="/">OPPO
                                    <ul className='dropdown_list' style={{ marginTop: "22rem" }}>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S23 Ultra (New)</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S23 Plus (New)</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S23 (New)</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S22 Ultra</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S22 Plus</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S22</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy Z Fold 4</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy Z Fold2</a></li>
                                        <li className='dropdown_list_item'><a href="/">See More...</a></li>
                                    </ul>
                                </a></li>
                                <li className='dropdown_item'><a href="/">Vivo
                                    <ul className='dropdown_list' style={{ marginTop: "24rem" }}>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S23 Ultra (New)</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S23 Plus (New)</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S23 (New)</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S22 Ultra</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S22 Plus</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy S22</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy Z Fold 4</a></li>
                                        <li className='dropdown_list_item'><a href="/">Samsung Galaxy Z Fold2</a></li>
                                        <li className='dropdown_list_item'><a href="/">See More...</a></li>
                                    </ul>
                                </a></li>
                            </ul>
                        </a></li>
                        <li className='list_item'><a href="/">Laptops Skins
                            <ul className='dropdown'>
                                <li className='dropdown_item'><a href="/">Macbook</a></li>
                                <li className='dropdown_item'><a href="/">Windows</a></li>
                            </ul>
                        </a></li>
                        <li className='list_item'><a href="/">Skin Collections
                            <ul className='dropdown'>
                                <li className='dropdown_item'><a href="/">Dark</a></li>
                                <li className='dropdown_item'><a href="/">Cyberforce</a></li>
                                <li className='dropdown_item'><a href="/">Into the Woods</a></li>
                                <li className='dropdown_item'><a href="/">Retro Funk</a></li>
                                <li className='dropdown_item'><a href="/">The Ripple</a></li>
                                <li className='dropdown_item'><a href="/">Wanderlust</a></li>
                                <li className='dropdown_item'><a href="/">Messed It</a></li>
                                <li className='dropdown_item'><a href="/">Sky is not the Limit</a></li>
                            </ul>
                        </a></li>
                        <li className='list_item'><a href="/">How to Apply</a></li>
                        <li className='list_item'><a href="/">Track order</a></li>
                        <li className='list_item'><a href="/">Login</a></li>
                    </ul>
                </div>

                <div className="right">
                    <div className="rightIcon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <i className="fa-solid fa-cart-plus"></i>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Navbar
