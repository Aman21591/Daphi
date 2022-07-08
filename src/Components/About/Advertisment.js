import React from 'react'
import  './Advertisment.css';
import Rectangle from './Rectangle.svg'
import logo from './PicsArt.svg'
const Advertisment = () =>{
    return(
        <div className='box-size'>
            <div className='boxes'>
                <img src={Rectangle} className='size'/>
                <div>
                <p className='text1'>Accelerate Innovation with Global AI Challenges</p>
                <p className='text2'>AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.</p>
                <button className='primary-button'>create Challenges</button>
                </div>
                <img src={logo} />

            </div>
            
        </div>
    );
}
export default Advertisment;