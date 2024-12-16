import "./Header.css"
import logo from "./Header-assets/Logo.png"
import img_hero from "./Header-assets/img-hero.png"
import img from "./Header-assets/Group7.png"
import img2 from "./Header-assets/Group8.png"
import img3 from "./Header-assets/Group9.png"
import img4 from "./Header-assets/Group10.png"
import krest from "./Header-assets/pngegg.png"
import { useState } from "react"
import axios from 'axios';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenit, setIsOpenit] = useState(false);
    const [name_user, setNameuser] = useState('');
    const [age_user, setAgeuser] = useState('');
    const [mail_user, setMailuser] = useState('');
    const [nick_user, setNickuser] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');

    function openPopUp() {
        setIsOpenit(true);
    }

    function closePopUp() {
        setIsOpenit(false);
    }

    function openPopUpreg() {
        setIsOpen(true);
    }

    function closePopUpreg() {
        setIsOpen(false);
    }
    const handleReg = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/register', { name_user, age_user, mail_user, nick_user, number, password})
            alert(response.data.message);
        } catch (error) {
            console.error(error);
            alert('Registration failed');
        }
    };


    const handleLog = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', { name_user, password });
            alert(response.data.message);
        } catch (error) {
            console.error(error);
            alert('Login failed');
        }
    };




    return(
        <>
            <header>
                <nav>
                    <img src={logo} alt="" />
                    <div className="nav">
                        <a href="">About</a>
                        <a href="">How it work</a>
                        <a href="">Pricing</a>
                        <a href="">Solution</a>
                        <a href="">Features</a>
                    </div>
                    <div className="regist">
                        <button type="button" onClick={openPopUp}>
                            <p>Login</p>
                        </button>
                        <button type="button" onClick={openPopUpreg}>
                            <p>Register</p>
                        </button>
                    </div>
                </nav>
                <div className="background1">
                    <div className="top-elonmusk">
                        <h1>Minimize your tabs. Find the trends!</h1>
                        <p>Don't let your computer memories consumes all of those browser tabs. Findtrend  let you gathers all of your favorite website into one place.</p>
                        <div>
                            <div>
                                <p>Get Started 🔥</p>
                            </div>
                            <img src={img_hero} alt="" />
                        </div>
                    </div>
                    <div className="elonmusk">
                        <div className="img1">
                            <img src={img} alt="" />
                        </div>
                        <div className="img2">
                            <img src={img2} alt="" />
                        </div>
                        <div className="img3">
                            <img src={img3} alt="" />
                        </div>
                        <div className="img4">
                            <img src={img4} alt="" />
                        </div>
                    </div>
                </div>
                {isOpenit && (
                    <div className="popap" id="popap">
                        <div className="krest">
                            <button type="button" onClick={closePopUp}>
                                <img src={krest} alt="Close" />
                            </button>
                        </div>
                        <form className="popap_div"  onSubmit={handleLog}>
                            <div>
                                <div>
                                    <input type="text" name="name" placeholder="Имя" value={name_user} onChange={(e) => setNameuser(e.target.value)} required />
                                </div>
                                <div>
                                    <input type="text" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                            </div>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                )}
                {isOpen && (
                    <div className="popap" id="popap">
                        <div className="krest">
                            <button type="button" onClick={closePopUpreg}>
                                <img src={krest} alt="Close" />
                            </button>
                        </div>
                        <form className="popap_div" onSubmit={handleReg}>
                            <div>
                                <div>
                                    <input type="text" name="name" placeholder="Имя" value={name_user} onChange={(e) => setNameuser(e.target.value)} required />
                                    <input type="text" name="age" placeholder="Возраст" value={age_user} onChange={(e) => setAgeuser(e.target.value)} required />
                                    <input type="text" name="mail" placeholder="mail" value={mail_user} onChange={(e) => setMailuser(e.target.value)} required />
                                </div>
                                <div>
                                    <input type="text" name="nick" placeholder="nick" value={nick_user} onChange={(e) => setNickuser(e.target.value)} required />
                                    <input type="text" name="phone" placeholder="phone" value={number} onChange={(e) => setNumber(e.target.value)} required />
                                    <input type="text" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                </div>
                            </div>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                )}
            </header>
        </>
    )
}