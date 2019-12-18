import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo/aside-logo.svg';
import Sun from '../../assets/illustrations/sun.png';
import SunlightSelect from '../../components/SunlightSelect/SunlightSelect';

import './sunlight.css'

const Sunlight = ({params}) =>
   (
        <div className="sunlight">
            <Logo className="sunlight__main-logo"/>
            <div className="sunlight__container">
                <img src={Sun} className="sunlight__logo"></img>
                <h3>First set the amount of <br/>
                <strong>sunlight</strong>
                your plant will get</h3>
                <SunlightSelect params={params} />
            </div>
        </div>
    )


export default Sunlight;