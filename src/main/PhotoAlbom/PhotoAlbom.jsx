import './PhotoAlbom.css'
import { ways } from './data'

function Photo(Albom){
    return(
        <>
            <div className='grid_div'>
                <img src={Albom.img} alt="" />
            </div>
        </>
    )
}

export default function PhotoAlbom() {
    return(
        <>
            <section className='background4'>
                <div>
                    <h2>Findtrend make +1000 Startup grow</h2>
                    <div>
                        {ways.map((way) =>(
                            <Photo {...way}/>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}