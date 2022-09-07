import cloud from '../assets/cloud_h.png'
import check_r from '../assets/check_r.png'
import check_w from '../assets/check_w.png'

export default function Roadmap() {
    return(
        <div className="roadmap">
            <div className="roadmap_main">
                <h1 className='rm_title'>The roadmap</h1>
                <p className='rm_status'>Status:</p>
                <a href='#' className='rm_button'>Riddim App: In development</a>
                <div className='rm_text'>Riddim is committed to executing our long-term vision. We have invested our own capital and full-time effort, for years, into strategy, design, and app development. We have created achievable steps that are clear and concise and can be measured objectively. Our focus all along has been to build the reward platform of the future.</div>
                <div className='rm_buttoms'>
                    <div className='div_block'>
                        <img src={check_r} alt="" />
                        <div>Riddim.com</div>
                    </div>
                    <div className='div_block'>
                        <img src={check_r} alt="" />
                        <div>Whitepaper Published</div>
                    </div>
                    <div className='div_block'>
                        <img src={check_r} alt="" />
                        <div>Soulbound Passes</div>
                    </div>
                    <div className='div_block light'>
                        <img src={check_w} alt="" />
                        <div className='lightone'>Angel Passes</div>
                    </div>
                    <div className='div_block light'>
                        <img src={check_w} alt="" />
                        <div className='lightone'>Brand Portal</div>
                    </div>
                    <div className='div_block light'>
                        <img src={check_w} alt="" />
                        <div className='lightone'>Mega Ticket Event</div>
                    </div>
                    <div className='div_block light'>
                        <img src={check_w} alt="" />
                        <div className='lightone'>Riddim Party</div>
                    </div>
                    <div className='div_block light'>
                        <img src={check_w} alt="" />
                        <div className='lightone'>Riddim IOS Beta Release</div>
                    </div>
                    <div className='div_block light'>
                        <img src={check_w} alt="" />
                        <div className='lightone'>Riddim IOS Launch</div>
                    </div>
                    <div className='div_block light'>
                        <img src={check_w} alt="" />
                        <div className='lightone'>AR/ VR Development</div>
                    </div>
                </div>
            </div>
            <img className='rm_cloud' src={cloud} alt="" />
        </div>
    )
}