import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LowSun } from '../../assets/icons/grey/low-sun.svg';
import { ReactComponent as HighSun } from '../../assets/icons/grey/high-sun.svg';
import { ReactComponent as OneDrop } from '../../assets/icons/grey/one-drop.svg';
import { ReactComponent as TwoDrops } from '../../assets/icons/grey/two-drops.svg';
import { ReactComponent as ThreeDrops } from '../../assets/icons/grey/three-drops.svg';
import { ReactComponent as Toxic } from '../../assets/icons/grey/toxic.svg';
import { ReactComponent as NoAnswer } from '../../assets/icons/grey/no-answer.svg';
import { ReactComponent as BuyBtn } from '../../assets/buttons/buy-btn.svg';
import './PlantItem.css'



const PlantItem = ({plant}) => {
    const SunProp =  (plant.sun) == "high" ? <HighSun /> : (plant.sun == "low" ? <LowSun /> : <NoAnswer />);
    const WaterProp = (plant.water) == "rarely" ? <OneDrop /> : (plant.water == "regularly" ? <TwoDrops /> : <ThreeDrops />);
    const PetsProp =  plant.toxicity  ? <Toxic/> : null;

    return(
        <div className="results__plant-item">
           <div className="results__plant-img">
                <img src={plant.url} id="plant-img" />
           </div>
           <div className="results__plant-info">
               <div className="results__plant-name">
                   {plant.name}
               </div>
               <span className="results__plant-price">
                    {`$${plant.price}`}
               </span>
               <span className="results__plant-props">
                    <span className="results__props-pets">
                        {PetsProp}
                    </span>
                    <span className="results__props-sun">
                        {SunProp}
                    </span>
                    <span className="results__props-water">
                        {WaterProp}
                    </span>
               </span>
           </div>
           <div className="results__props-buyBtn">
                <Link to={`/plants/${plant.id}`}>
                    <BuyBtn />
                </Link>
           </div>
        </div>
    )
}

export default PlantItem