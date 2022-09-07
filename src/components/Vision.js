import wing from '../assets/wing.png'
import cloud from '../assets/Cloud.png'
import cloud1 from '../assets/wing1.png'
import Lottie from 'react-lottie'
import vision from '../lotties/vision.json'
import vision1 from '../lotties/vision1.json'

export default function Vision() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: vision,
        renderSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: vision1,
        renderSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="vision">
            <div className="vision_main">
                <h2>Our Vision  </h2>
                <h3>To power the largest Social Reward Ecosystem   </h3>
                <p>Riddim is the reward platform for brands to easily invest their advertising dollars back to their community and create lifelong partnerships</p>
                <div className="vision_desc">
                    <div className="text-box">
                        <p>Brands</p>
                        <ul>
                            <li><p>• Brands spend over $200B per year on advertising</p></li>
                            <li><p>• Brands have the largest <br />social networks</p></li>
                        </ul>
                    </div>
                    <div className="lottie-box">
                        <Lottie options={defaultOptions} height={229} width={335} />
                    </div>
                    <div className="lottie-box1">
                        <Lottie options={defaultOptions1} height={418} width={275} />
                    </div>
                    <div className="text-box">
                        <p>People</p>
                        <ul>
                            <li><p>• People want be rewarded  to do what they love</p></li>
                            <li><p>• People want to grow their <br />social following</p></li>
                        </ul>
                    </div>
                </div>
                <img className='wing' src={wing} alt="" />
                <img className='v_cloud1' src={cloud} alt="" />
                <img className='v_cloud2' src={cloud} alt="" />
                <img className='v_cloud3' src={cloud1} alt="" />
            </div>
        </div>
    )
} 