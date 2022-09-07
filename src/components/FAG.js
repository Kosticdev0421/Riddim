import wing from '../assets/wing1.png'
import cloud from '../assets/cloud_h.png'
import plus from '../assets/plus.png'
import div from '../assets/div.png'
import './action.js'

export default function FAG() {
    return (
        <div className="fag">
            <div className="fag_main">
                <img className='f_cloud' src={cloud} alt="" />
                <img className='f_cloud1' src={cloud} alt="" />
                <img className='f_wing' src={wing} alt="" />
                <div className='fag_box'>
                    <h2>Frequently Asked <br />Questions</h2>
                    <div className='fag_content'>
                        <div className='fag_item'>
                            <div id='id1q' className='fag_q'>
                                <p>What do we hope to achieve?</p>
                                <img className='plus1' src={plus} alt="" />
                                <img className='div1' src={div} alt="" />
                            </div>
                            <p id='id1a' className='fag_a'>
                                A social media platform where advertising is nonexistent and the participants and brands are rewarded for their growth together.
                            </p>
                        </div>
                        <div className='fag_item'>
                            <div id='id2q' className='fag_q'>
                                <p>How is Riddims’ social media platform going to provide utility to the people?</p>
                                <img className='plus' src={plus} alt="" />
                                {/* <img className='div' src={div} alt="" /> */}
                            </div>
                            <p id='id2a' className='fag_a'>
                                We charge brands a commission to dispense their advertising budget back to their community. We reward Riddim app users to create, engage and promote brands. We have developed a complex ecosystem of sustainable rewards. Our users build habits and level up and earn progressive rewards.
                            </p>
                        </div>
                        <div className='fag_item'>
                            <div id='id3q' className='fag_q'>
                                <p>What are the angel passes?</p>
                                <img className='plus' src={plus} alt="" />
                                {/* <img className='div' src={div} alt="" /> */}
                            </div>
                            <p id='id3a' className='fag_a'>
                                The angel passes are the most exclusive membership to Riddim. These limited edition passes allow holders to claim rewards, access events, and contests.
                            </p>
                        </div>
                        <div className='fag_item'>
                            <div id='id4q' className='fag_q'>
                                <p>Do I need an NFT to access the Riddim app?</p>
                                <img className='plus' src={plus} alt="" />
                                {/* <img className='div' src={div} alt="" /> */}
                            </div>
                            <p id='id4a' className='fag_a'>
                                No, but they enable you to access exclusive events, contests, and opportunities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}