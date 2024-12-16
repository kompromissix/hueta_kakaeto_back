import './Open.css'
import img_left from './Open-assets/Group427321657.png'
import img_mid from './Open-assets/Group15.png'
import img_right from './Open-assets/Group427321665.png'

export default function Open() {
    return(
        <>
            <section className='backgraund2'>
                <div>
                    <h2>Open new tabs is sh*t </h2>
                    <div>
                        <img src={img_left} alt="" />
                        <div>
                            <img src={img_mid} alt="" />
                        </div>
                        <img src={img_right} alt="" />
                    </div>
                    <p>A solution for your browser tabs and don’t make your device get slower over time. Get ease and faster to discover a trend with just one tab.</p>
                </div>
            </section>
        </>
    )
}