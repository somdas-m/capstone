import footerLogo from "../images/footer_logo.png"
export const Footer = (props) => {
    return <footer>
        <div className="container">
            <div className="footer-container">
                <img src={footerLogo} width={"5%"}/>
                <div className="footer-nav">
                    <div className="nav-links-1">
                        <h3>Dormat Navigation</h3>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Menu</li>
                            <li>Reservations</li>
                            <li>Order Online</li>
                            <li>Login</li>
                        </ul>
                    </div>
                    <div className="nav-links-2">
                    <h3>Contact</h3>
                        <ul>
                            <li>Address</li>
                            <li>Phone Number</li>
                            <li>E-mail</li>
                        </ul>
                    </div>
                    <div className="nav-links-3">
                    <h3>Social Media Links</h3>
                        <ul>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Linkedin</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
}