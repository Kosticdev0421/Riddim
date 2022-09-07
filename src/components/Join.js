import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import tiktok from '../assets/tiktok.png'
import snapchat from '../assets/snapchat.png'
import twitter from '../assets/twitter.png'
import discord from '../assets/discord.png'
import cloud from '../assets/cloud_h.png'
import vector from '../assets/Vector.png'

export default function Join() {
    return(
        <div className="join">
            <div className="join_main">
                <h3>Access Riddim and join the Game</h3>
                <img className='j_cloud' src={cloud} alt="" />
                <div className='j_box'>
                    <form className='j_form'>
                        <input type='text' placeholder='Your Name' className='j_name'></input>
                        <input type='text' placeholder='Your Email' className='j_email'></input>
                        <div className='j_sub'>
                            <input type='submit'></input>
                            <div className='j_submit_content'>
                                <img loading='lazy' src={vector} alt="" />
                                <p>Keep me updated</p>
                                <div>Subscribe</div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="join_icons">
                <p>Join Us</p>
                <div className="join_icons_content">
                    <a className="j_facebook" href="https://www.facebook.com/Riddim-104005655683489" target='_blank'>
                        <img src={facebook} alt="" />
                    </a>
                    <a className="j_instagram" href="https://t.snapchat.com/Rdl5vEcD" target='_blank'>
                        <img src={instagram} alt="" />
                    </a>
                    <a className="j_tiktok" href="https://www.facebook.com/Riddim-104005655683489" target='_blank'>
                        <img src={tiktok} alt="" />
                    </a>
                    <a className="j_snapchat" href="https://t.snapchat.com/Rdl5vEcD" target='_blank'>
                        <img src={snapchat} alt="" />
                    </a><a className="j_twitter" href="https://twitter.com/riddimrewards" target='_blank'>
                        <img src={twitter} alt="" />
                    </a>
                    <a className="j_discord" href="https://discord.gg/HXcaXPDpaf" target='_blank'>
                        <img src={discord} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}