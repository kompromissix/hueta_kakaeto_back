import './Price.css'
import { ways } from './data'
import React, { useState, useEffect,texts} from 'react'
import axios from "axios"



function Price_list(){
    
    
    return(
        <>
            <section className="background10">
                {data.map((price,index) => (
                    <div className='list' key={index}>
                        <div className='list-div'>
                            <div className='top'>
                                <h2>{price.name_price}</h2>
                            </div>
                            <hr />
                            <div className='bottom'>
                                <div className='price_div'>
                                    <h2>{price.sostav_price}</h2>
                                    <h3>/Month</h3>
                                </div>
                                
                                <ul>
                                    <li>{pr.texts}</li>
                                </ul>
                            </div>
                        </div>
                        <div className='start'>
                            <p>Start Free Trial</p>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default function Price(Z){
    const [data, setdata] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/price")
            .then(response => {
                setdata(response.data)
            })
            .catch(error => {
                console.error("Ошибка", error)
            })
    }, [])
    return(
        <>
            <section className='background7'>
                <div>
                    <h2>Get your best deal</h2>
                    <div className='price_list'>
                        {data.map((price,index) => (
                            <div className='list' key={index}>
                                <div className='list-div'>
                                    <div className='top'>
                                        <h2>{price.name_price}</h2>
                                        <p>{price.name_price_bottom}</p>
                                    </div>
                                    <hr />
                                    <div className='bottom'>
                                        <div className='price_div'>
                                            <h2>{price.sostav_price}</h2>
                                            <h3>/Month</h3>
                                        </div>

                                        <ul>
                                            <li>{price.li1}</li>
                                            <li>{price.li2}</li>
                                            <li>{price.li3}</li>
                                            <li>{price.li4}</li>
                                            <li>{price.li5}</li>
                                            <li>{price.li6}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='start'>
                                    <p>Start Free Trial</p>
                                </div>
                            </div>
                        ))}
                    </div>
                        
                </div>
            </section>
        </>
    )
}