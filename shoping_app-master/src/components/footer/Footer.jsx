import "./footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">

                <div className="footer-item">
                    <h4 className="title">Vision</h4>
                    <p>Creativity, Expression, &<br /> Exploration</p>
                </div>
                <div className="footer-item">
                    <h4 className="title">Pages</h4>
                    <ul className="footerlist">
                        <li className="footerlistitem">About Us</li>
                        <li className="footerlistitem">Contact us</li>
                        <li className="footerlistitem">Terms and condition</li>
                        <li className="footerlistitem">Privacy policy</li>
                        <li className="footerlistitem">Refunds/Cancellations/Shipping Policy</li>
                        <li className="footerlistitem">FAQ</li>
                    </ul>
                </div>
                <div className="footer-item">
                    <h4 className="title">My Accounts</h4>
                    <ul className="footerlist">
                        <li className="footerlistitem">Login</li>
                        <li className="footerlistitem">Register</li>
                        <li className="footerlistitem">Track Order</li>
                    </ul>
                </div>
                <div className="footer-item">
                    <h4 className="title">Follow us</h4>
                    <ul className="footerlist">
                        <li className="footerlistitem">Twitter</li>
                        <li className="footerlistitem">Facebook</li>
                        <li className="footerlistitem">YouTube</li>
                        <li className="footerlistitem">Instagram</li>
                    </ul>
                </div>
            </div>
            <p className="copyright">Copyright © 2023 Notcools</p>
        </div>
    )
}

export default Footer
