import cloud from '../assets/cloud_h.png'
import girl from '../assets/girl.png'
import man from '../assets/man.png'

export default function Team() {
    return(
        <div className="team">
            <img className='t_cloud1' src={cloud} alt="" />
            <img className='t_cloud2' src={cloud} alt="" />
            <div className="team_main">
                <h2>Our Management Team</h2>
                <p>We’re Hiring! <a className='link' href='/careers' target="_blank">Click here</a> for our open roles</p>
                <div className='teams'>
                    <div className='teams_item'>
                        <div className='team_item_avatar'>
                            <img src={girl} alt="" />
                        </div>
                        <p className='t_name'>Batwomen</p>
                        <p className='role'>CEO Visionary, Business Strategy & marketing</p>
                        <p className='t_desc'>Spell master who is an expert in managing strategy and planning with a 360 understanding of applied behaviorial psychology and economics.  Impact-driven with a balance of innovation and creativity with practical considerations. </p>
                    </div>
                    <div className='teams_item'>
                        <div className='team_item_avatar'>
                            <img src={man} alt="" />
                        </div>
                        <p className='t_name'>The Wizard</p>
                        <p className='role'>Gamification & User Psychology</p>
                        <p className='t_desc'>Spell master who is an expert in managing strategy and planning with a 360 understanding of applied behaviorial psychology and economics.  Impact-driven with a balance of innovation and creativity with practical considerations. </p>
                    </div>
                    <div className='teams_item'>
                        <div className='team_item_avatar'>
                            <img src={man} alt="" />
                        </div>
                        <p className='t_name'>The Tiger</p>
                        <p className='role'>Lead Backend Developer</p>
                        <p className='t_desc'>The Architect has experince in brand building, scaling a business, marketing, user focused business designs. Planning and strategizing accross all parts of a business are second nature for the architect, the big picture is always on the forefront of their mind.</p>
                    </div>
                    <div className='teams_item'>
                        <div className='team_item_avatar'>
                            <img src={man} alt="" />
                        </div>
                        <p className='t_name'>The Dragon</p>
                        <p className='role'>CEO</p>
                        <p className='t_desc'>The Architect has experince in brand building, scaling a business, marketing, user focused business designs. Planning and strategizing accross all parts of a business are second nature for the architect, the big picture is always on the forefront of their mind.</p>
                    </div>
                    <div className='teams_item'>
                        <div className='team_item_avatar'>
                            <img src={man} alt="" />
                        </div>
                        <p className='t_name'>The Wolf</p>
                        <p className='role'>Head Of Outreach and Community  </p>
                        <p className='t_desc'>The Architect has experince in brand building, scaling a business, marketing, user focused business designs. Planning and strategizing accross all parts of a business are second nature for the architect, the big picture is always on the forefront of their mind.</p>
                    </div>
                    <div className='teams_item'>
                        <div className='team_item_avatar'>
                            <img src={man} alt="" />
                        </div>
                        <p className='t_name'>The Wolf</p>
                        <p className='role'>Head Of Outreach and Community  </p>
                        <p className='t_desc'>The Architect has experince in brand building, scaling a business, marketing, user focused business designs. Planning and strategizing accross all parts of a business are second nature for the architect, the big picture is always on the forefront of their mind.</p>
                    </div>
                    <div className='teams_item'>
                        <div className='team_item_avatar'>
                            <img src={man} alt="" />
                        </div>
                        <p className='t_name'>Another dev</p>
                        <p className='role'>Gamification & User Psychology</p>
                        <p className='t_desc'>Spell master who is an expert in managing strategy and planning with a 360 understanding of applied behaviorial psychology and economics.  Impact-driven with a balance of innovation and creativity with practical considerations. </p>
                    </div>
                    <div className='teams_item'>
                        <div className='team_item_avatar'>
                            <img src={man} alt="" />
                        </div>
                        <p className='t_name'>Another dev</p>
                        <p className='role'>Gamification & User Psychology</p>
                        <p className='t_desc'>Spell master who is an expert in managing strategy and planning with a 360 understanding of applied behaviorial psychology and economics.  Impact-driven with a balance of innovation and creativity with practical considerations. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}