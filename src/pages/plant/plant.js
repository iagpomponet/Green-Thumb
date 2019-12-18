import React, { Component } from 'react';
import { ReactComponent as Logo } from '../../assets/logo/aside-logo.svg';
import { ReactComponent as LowSun } from '../../assets/icons/grey/low-sun.svg';
import { ReactComponent as HighSun } from '../../assets/icons/grey/high-sun.svg';
import { ReactComponent as OneDrop } from '../../assets/icons/grey/one-drop.svg';
import { ReactComponent as TwoDrops } from '../../assets/icons/grey/two-drops.svg';
import { ReactComponent as ThreeDrops } from '../../assets/icons/grey/three-drops.svg';
import { ReactComponent as Toxic } from '../../assets/icons/grey/toxic.svg';
import { ReactComponent as NoAnswer } from '../../assets/icons/grey/no-answer.svg';
import { ReactComponent as Pet } from '../../assets/icons/grey/pet.svg';
import api from '../../services/api';
import BuyForm from '../../components/BuyForm/BuyForm';
import './plant.css'

export default class Plant extends Component {

    state = {
        plant : []
    }

    handleSunProp(plant){
        const HighSunProp = <div><HighSun /><span>High Sunlight</span></div>;
        const LowSunProp =  <div><LowSun /><span>Low Sunlight</span></div>;
        const NoSunProp =  <div><NoAnswer /><span>No Sunlight</span></div>;
        
        const SunProp =  (plant.sun) == "high" ? HighSunProp : ( plant.sun == "low" ? LowSunProp : NoSunProp );
        return SunProp
    }

    handleWaterProp(plant){
        const OneDropProp = <div><OneDrop /><span>Water Rarely</span></div>;
        const TwoDropsProp =  <div><TwoDrops /><span>Water Regularly</span></div>;
        const ThreeDropsProp =  <div><ThreeDrops /><span>Water Daily</span></div>;

        const WaterProp = (plant.water) == "rarely" ? OneDropProp: ( plant.water == "regularly" ? TwoDropsProp : ThreeDropsProp );
        return WaterProp
    }

    handleToxicityProp(plant){
        const ToxicityProp = <div><Toxic/><span><strong>Beware</strong>Toxic for pets</span></div>;
        const NonToxicProp = <div><Pet /><span>Non-toxic for pets</span></div>

        const PetsProp =  plant.toxicity  ? ToxicityProp : NonToxicProp ;
        return PetsProp
    }

    async componentDidMount(){
        const { id } = this.props.match.params;
        const response = await api.get(`/plant?id=${id}`);
        console.log(response);
        this.setState({ plant : response.data });
    }

    render(){
        const { plant } = this.state;


        return(
            <div className="plant-buy-page">
                <div className="plant-buy-page__logo">
                    <Logo />
                </div>
                <div className="plant-buy-page__container">
                    <div className="plant-buy-page__plant-info">
                        <span className="plant-buy-page__plant-name">
                            <h3>{plant.name}</h3>   
                        </span>
                        <span className="plant-buy-page__plant-price">
                            {`$${plant.price}`}
                        </span>
                        <img className="plant-buy-page_plant-img" src={plant.url}></img>
                            <div className="plant-buy-page__plant-props">
                                <span className="results__props-pets">
                                    {this.handleSunProp(plant)}
                                </span>
                                <span className="results__props-sun">
                                    {this.handleWaterProp(plant)}
                                </span>
                                <span className="results__props-water">
                                    {this.handleToxicityProp(plant)}
                                </span>
                            </div>
                    </div>
                    <div className="plant-buy-page__form">
                            <BuyForm />
                    </div>
                </div>
            </div>
        )
    }
}