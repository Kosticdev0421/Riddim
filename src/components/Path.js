import d_cloud from '../assets/d_cloud.png'
import cloud from '../assets/Cloud.png'
import cloud1 from '../assets/wing1.png'
import Lottie from 'react-lottie'
import cloud_y from '../assets/cloud_y.png'
import cloud_h from '../assets/cloud_h.png'
import cloud_b from '../assets/cloud_b.png'
import cloud_r from '../assets/cloud_r.png'
import cloud_g from '../assets/cloud_g.png'
import cloud_p from '../assets/cloud_p.png'
import path_item1 from '../lotties/path_item1.json'
import path_item2 from '../lotties/path_item2.json'
import path_item3 from '../lotties/path_item3.json'
import path_item41 from '../lotties/path_item4_1.json'
import path_item42 from '../lotties/path_item4_2.json'
import path_item5 from '../lotties/path_item5.json'

export default function Path() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: path_item1,
        renderSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: path_item3,
        renderSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: path_item2,
        renderSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const defaultOptions31 = {
        loop: true,
        autoplay: true,
        animationData: path_item41,
        renderSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const defaultOptions32 = {
        loop: true,
        autoplay: true,
        animationData: path_item42,
        renderSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const defaultOptions4 = {
        loop: true,
        autoplay: true,
        animationData: path_item5,
        renderSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };


    return (
        <div className="path">
            <div className="path_main">
                <h2 className='path_title'>Your Path To Mastery</h2>
                <p className='path_desc'>Stepping stone not a tombstone</p>
                <div className='path_content'>
                    <div className='path_cotent_left'>
                        <div className='path_item'>
                            <div className='path_block'>
                                <Lottie options={defaultOptions} height={200} width={250} />
                            </div>
                            <p className='path_item_title'>1. Earn and Level-Up</p>
                            <div className='p_embed'></div>
                            <p className='path_item_desc'>Each activity you complete as a “Connect” earns you rewards and brings you closer to the next level. Climb the ranks and monetize your likes. Take advantage of tempting offers and win tokens, prizes, and NFTs.</p>
                            <img className='cloud_y' src={cloud_y} alt="" />
                            <img className='cloud_h' src={cloud_h} alt="" />
                        </div>
                        <div className='path_item sec'>
                            <div className='path_block1'>
                                <Lottie options={defaultOptions2} height={49} width={141} />
                            </div>
                            <p className='path_item_title'>2. Make Alliances</p>
                            <div className='p_embed'></div>
                            <p className='path_item_desc'>We don’t have to do all of it alone. We were never meant to. Co-create with others and build your following while maximizing the exposure of your content via the brands sharing and interacting.</p>
                            <img className='cloud_b' src={cloud_b} alt="" />
                            <img className='cloud_h' src={cloud_h} alt="" />
                        </div>
                        <div className='path_item'>
                            <div className='path_block1'>
                                <Lottie className="lottie" options={defaultOptions1} height={75} width={250} />
                            </div>
                            <p className='path_item_title'>3. Explore Possibilities</p>
                            <div className='p_embed'></div>
                            <p className='path_item_desc'>Unlock new one-of-a-kind experiences. Be prepared to be surprised. We merge both the physical world and web3 to bring you partnerships that would not be achievable otherwise.</p>
                            <img className='cloud_r' src={cloud_r} alt="" />
                            <img className='cloud_h' src={cloud_h} alt="" />
                        </div>
                        <div className='path_item sec'>
                            <div className='path_block2'>
                                <div className='lottie_41'><Lottie options={defaultOptions31} height={200} width={250} /></div>
                                <div className='lottie_42'><Lottie options={defaultOptions32} height={200} width={250} /></div>
                            </div>
                            <p className='path_item_title'>4. Create a legacy</p>
                            <div className='p_embed'></div>
                            <p className='path_item_desc'>What if you had a chance to leave an impact? Creating authenticity is our power. Stepping up makes us grow a little each time. You craft the stories of your life. You design your own dynamic endings.</p>
                            <img className='cloud_p' src={cloud_p} alt="" />
                            <img className='cloud_h' src={cloud_h} alt="" />
                        </div>
                        <div className='path_item'>
                            <div className='path_block1'>
                                <Lottie options={defaultOptions4} height={120} width={120} />
                            </div>
                            <p className='path_item_title'>5. Fairness</p>
                            <div className='p_embed'></div>
                            <p className='path_item_desc'>There are no winner hotspots, future “wins” take into account effort and achievements. No exploitation by managers or third parties. Brands reward their “Connects” for engaging with their communities.</p>
                            <img className='cloud_g' src={cloud_g} alt="" />
                            <img className='cloud_h' src={cloud_h} alt="" />
                        </div>
                    </div>
                    <div className='path_cotent_right'>
                        <div className='path_item'>
                            <div className='path_block1'>
                                <Lottie options={defaultOptions2} height={74} width={220} />
                            </div>
                            <p className='path_item_title'>2. Make Alliances</p>
                            <p className='path_item_desc'>We don’t have to do all of it alone. We were never meant to. Co-create with others and build your following while maximizing the exposure of your content via the brands sharing and interacting.</p>
                            <img className='cloud_b' src={cloud_b} alt="" />
                        </div>
                        <div className='path_item'>
                            <div className='path_block2'>
                                <div className='lottie_41'><Lottie options={defaultOptions31} height={146} width={260} /></div>
                                <div className='lottie_42'><Lottie options={defaultOptions32} height={146} width={260} /></div>
                            </div>
                            <p className='path_item_title'>4. Create a legacy</p>
                            <p className='path_item_desc'>What if you had a chance to leave an impact? Creating authenticity is our power. Stepping up makes us grow a little each time. You craft the stories of your life. You design your own dynamic endings.</p>
                            <img className='cloud_p' src={cloud_p} alt="" />
                        </div>
                    </div>
                </div>
                <img className='p_path' src={cloud} alt="" />
                <img className='p_path1' src={cloud} alt="" />
                <img className='p_path2' src={cloud1} alt="" />
            </div>
            <img className='d_cloud' src={d_cloud} alt="" />
        </div>
    )
}