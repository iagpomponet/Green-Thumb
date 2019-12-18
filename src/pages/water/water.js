import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo/aside-logo.svg';
import  WateringCan from '../../assets/illustrations/wateringcan.png';
import './water.css';
import WaterSelect from '../../components/WaterSelect/WaterSelect';

const Water = ({params}) => {
    return(
        <div className="water">
             <Logo className="water__main-logo"/>
             <div className="water__container">
                <img src={WateringCan} className="water__logo"></img>
                <h3>How often do you want to <strong>water</strong> your plant?</h3>
                <WaterSelect params={params} />
             </div>

        </div>
    )
}

export default Water