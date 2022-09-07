import vector from '../assets/Vector.png'
import cloud from '../assets/Cloud.png'
import cloud1 from '../assets/Cloud1.png'

export default function Sign() {
    return(
        <div className="sign">
            <h2 className="sign_title">Access is easy for now</h2>
            <h3 className="sign_desc">Don’t miss your chance to sign up</h3>
            <div className="sign_container">
                <input className='name' type="text" placeholder="Your Name"></input>
                <input className='email' type="email" placeholder="Your Email"></input>
                <div className="submit">
                    <img src={vector} alt="" />
                    <div className='sub'>Subscribe</div>
                </div>
            </div>
            <img className='cloud' src={cloud} alt="" />
            <img className='cloud1' src={cloud} alt="" />
            <img className='cloud2' src={cloud} alt="" />
            {/* <img className='cloud3' src={cloud} alt="" /> */}
            <img className='cloud4' src={cloud1} alt="" />
        </div>
    )
}