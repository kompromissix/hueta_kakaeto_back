import './Footer.css'
import logo from './Footer-assets/Frame.png'

export default function Footer(){
    return(
        <>
            <footer>
                <div>
                    <img src={logo} alt="" />
                    <div>
                        <p>Privacy Policy</p>
                        <p>Terms and Conditions</p>
                        <p>Contact Us</p>
                        <p>Careers</p>
                    </div>
                </div>
            </footer>
        </>
    )
}