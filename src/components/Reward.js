import circle from '../assets/circle1.png'
import Lottie from 'react-lottie'
import Circle from '../lotties/circle.json'

export default function Reward() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Circle,
        renderSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    
    return (
        <div className="reward">
            <div className="reward_main">
                <h1>our rewards systems</h1>
                <div>How we are different</div>
                <div className='circles'>
                    <div className='circle1'>
                        <img className='p_circle1' src={circle} alt="" />
                        <p className='p_circle1_desc' >Fixed Irrelevant Rewards</p>
                    </div>
                    <div className='circle1'>
                        <div className='mar_5'></div>
                        <Lottie className="lottie" options={defaultOptions} height={198} width={204} />
                        <p className='p_circle1_desc mar_top' >Effect based Rewards</p>
                    </div>
                </div>
                <p className='reward_text'>
                    One of the best features, besides being potentially highly lucrative, is that everything happens on a participant's own terms. Riddims’ rewards are designed for our highly-stimulated, high-expectation generation. We deliver the variability and excitement to keep people engaged.
                </p>
            </div>
        </div>
    )
}