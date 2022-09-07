import m_cloud from '../assets/m_cloud.png'
import Lottie from 'react-lottie'
import door from '../lotties/new.json'
import wing from '../assets/wing.png'
import w_c from '../assets/w_c.png'
import c_c from '../assets/c_c.png'
import cloud_hh from '../assets/cloud_hh.png'
import cloud_h from '../assets/cloud_h.png'
import cloud_a from '../assets/cloud_a.png'


export default function About() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: door,
        renderSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="about">
            <img className='m_cloud' src={m_cloud} alt="" />
            <div className="about_main">
                <div className='about_main_content'>
                    <h2>About Us</h2>
                    <p className='amc_title'>The future of a company is community</p>
                    <p className='amc_content1'>
                        Our team has an extensive history in brand building, marketing, and startups. We were frustrated by the lack of ways for brands to engage with their already loyal audiences. Brands spend billions on ads because there is no other option.
                        <br />
                        <br />
                        Brands rather invest their advertising dollars back to their communities. Brands know investing in creating experiences and loyalty builds genuine connection, which is more valuable than any ad.
                        <br />
                        <br />
                        At Riddim we build incentive programs for brands to directly reward their community.
                        <br />
                        <br />
                        Our vision is to redefine what is possible by building the largest social reward platform. We call each member of the community a <strong>“Connect”</strong> as everyone has meaningful opportunities to drive impact. Together we can create a platform where we can do more. Together we can build a better world.
                    </p>
                    <div className='a_lottie'>
                        <div><Lottie className="lottie" options={defaultOptions} height={320} width={300} /></div>
                        <img className='cloud_h1' src={cloud_h} alt="" />
                        <img className='cloud_h2' src={cloud_h} alt="" />
                        <img className='cloud_h3' src={cloud_h} alt="" />
                        <img className='cloud_hh' src={cloud_hh} alt="" />
                    </div>
                    <p className='amc_content2'>
                        Since 2018 we have been working extensively with brands, creators, and many designers, improving and reiterating Riddim until Riddim was truly game-changing. &nbsp;
                        <strong>Everyone knows building superior<br /> products take time.</strong>
                        <br />
                        <br />
                        We believe a team whose values align is essential to building beautiful quality products. Every team member has been hand-picked from around the world in order to execute and build out our dynamically adapting platform in a highly competitive space. That means no outsourced agencies, only a team that cares.
                        <br />
                        <br />
                        All collected proceeds from our NFT sales will be redistributed into product development, community rewards, and metaverse development.
                    </p>
                </div>
                <img className='a_wing' src={wing} alt="" />
                <img className='w_c' src={w_c} alt="" />
                <img className='c_c' src={c_c} alt="" />
                <img className='cloud_h4' src={cloud_h} alt="" />
                <img className='cloud_h5' src={cloud_h} alt="" />
                <img className='cloud_h6' src={cloud_a} alt="" />
            </div>
        </div>
    )
}