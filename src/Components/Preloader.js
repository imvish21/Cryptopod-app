import React, { useEffect } from 'react';
import './preloader.css';
import { preLoaderAnim } from '../animations';
import 'boxicons';
const Preloader = () => {
 
    useEffect(()=>{
         preLoaderAnim();
    },[])

    return(
        <div className='main'>
            <div id="loader">
                <div id="topheading">
                    <h1 className="reveal">CryptoPod</h1>
                </div>
                 <h1 className="reveal"><span>Explore </span> <span>Analyze </span> <span>Trade</span></h1>
                 <box-icon name='bitcoin' type="regular" color="#fff" size="80px" animation="spin"></box-icon >
            </div>    
            <div id="green"></div>    
        </div>
    )
}
export default Preloader;