import lock from '../assets/lock.png'

export default function Brand() {
    return (
        <div className="brand">
            <div className="brand_main">
                <h1 className='rm_title'>Brand partnerships</h1>
                <p className='rm_status'>Status:</p>
                <a href='#' className='rm_button'>Brands: Private Referrals &nbsp; Only</a>
                <div className="b_content">
                    <img className='lock' src={lock} alt="" />
                    <img className='lock' src={lock} alt="" />
                    <img className='lock' src={lock} alt="" />
                    <img className='lock' src={lock} alt="" />
                    <img className='lock' src={lock} alt="" />
                    <img className='lock' src={lock} alt="" />
                    <img className='lock' src={lock} alt="" />
                    <img className='lock' src={lock} alt="" />
                    <img className='lock' src={lock} alt="" />
                </div>
            </div>
        </div>
    )
}