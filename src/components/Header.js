import logo from '../assets/logo.png'
import './action.js';

export default function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <img src={logo} alt="" />
            </div>
            <div className="header_right">
                <ul>
                    <li><a href='#vision'>Our Vision</a></li>
                    <li><a href='#roadmap'>Roadmap</a></li>
                    <li><a href='#about'>About us</a></li>
                    <li><a href='#whitepaper'>Whitepaper</a></li>
                    <li className='last'><a href='#join'>Join us</a></li>
                </ul>
            </div>
            <div className='navbar_hidden'>
                <div className='menubar'>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </div>
            <div className='navbar_show'>
                <ul>
                    <li><a href='#vision'>Our Vision</a></li>
                    <li><a href='#roadmap'>Roadmap</a></li>
                    <li><a href='#about'>About us</a></li>
                    <li><a href='#whitepaper'>Whitepaper</a></li>
                    <li><a href='#join'>Join us</a></li>
                </ul>
            </div>
        </div>
    )
}