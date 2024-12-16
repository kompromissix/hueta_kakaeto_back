import './Musk.css'
import { ways } from './data'
import img1 from './Musk-assets/tweet1.png'
import img2 from './Musk-assets/tweet2.png'
import img3 from './Musk-assets/tweet3.png'

function Logo(img){
    return(
        <>
            <div className='img-logo'>
                <img src={img.img} alt="" />
            </div>
        </>
    )
}
export default function Musk(){
    return(
        <>
            <section className='background5'>
                <div>
                    <h2>All platform connect to Findtrend</h2>
                    <div className='icon'>
                        {ways.map((way) =>(
                            <Logo {...way}/>
                        ))}
                    </div>
                    <div className='twit'>
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                    </div>
                    <div className='black'>
                        <p>View More Trend</p>
                    </div>
                </div>
            </section>
        </>
    )
}