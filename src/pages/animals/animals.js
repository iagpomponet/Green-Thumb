import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo/aside-logo.svg';
import  Dog from '../../assets/illustrations/dog.png';
import './animals.css';
import AnimalSelect from '../../components/AnimalSelect/AnimalSelect';

const Animals = ({params}) => {
    return(
        <div className="animals">
             <Logo className="animals__main-logo"/>
             <div className="animals__container">
                <img src={Dog} className="animals__logo"></img>
                    <h3>Do you have pets? Do they <strong>chew</strong> plants? </h3>
                    <h4>We are asking because some plants can be <strong>toxic</strong> for your buddy. </h4>
                <AnimalSelect params={params} />
             </div>

        </div>
    )
}

export default Animals