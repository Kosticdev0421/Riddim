import cloud from '../assets/Cloud.png'
import video from '../assets/video.mp4'

export default function Riddim() {
    return (
        <div className="riddim">
            <div className="riddim_main">
                <h2>Riddim Ecosystem</h2>
                <p>Merging the physical world with web3.</p>
                <div className="riddim_item1">
                    <div className="riddim_item1_box">
                        <div className="riddim_item1_box_text">
                            <p className="bt_title">Riddim NFTs</p>
                            <p className="bt_desc">Game design is the heart of Riddim. We are heavily<br /> invested in creating utility NFTS that are exclusive,<br /> unlockable, buildable, and evolve over time.</p>
                        </div>
                        <img className='r_cloud' src={cloud} alt="" />
                    </div>
                    <div className="riddim_item1_gif">

                    </div>
                </div>
                <div className="riddim_item2">
                    <div className='riddim_item2_box'>
                        <div className='riddim_item2_box_text'>
                            <p className='bt_title mar'>Riddim the social app</p>
                            <p className='bt_desc color'>COMING Q4 2022</p>
                            <p className='bt_desc'>Play and earn tokens, NFTs, physical prizes and<br /> loot boxes as you level up and access your power<br /> in the world of Riddim.</p>
                            <img className='r_cloud1' src={cloud} alt="" />
                        </div>
                    </div>
                    <div className='riddim_item2_gif'>
                        <video loop muted autoPlay preload='auto' className='video'>
                            <source src={video} type='video/webm'></source>
                        </video>
                    </div>
                    <img className='r_cloud2' src={cloud} alt="" />
                </div>
            </div>
        </div>
    )
}