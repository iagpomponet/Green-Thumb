import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as NextBtn} from '../../assets/buttons/next-btn.svg'
import {ReactComponent as HomeBtn} from '../../assets/buttons/home-btn.svg'
import {ReactComponent as HighSun} from '../../assets/icons/coral/high-sun.svg';
import {ReactComponent as LowSun} from '../../assets/icons/coral/low-sun.svg';
import {ReactComponent as NoAnswer} from '../../assets/icons/coral/no-answer.svg';

import Home from '../../pages/home/home';

import './SunlightSelect.css'

 const SunlightSelect = ({params}) =>{

    function makeActive(e){
        if(e.target.tagName == "SPAN"){
            const prevSelected = document.querySelector(".sun-selected");
            if(prevSelected){
                prevSelected.classList.remove("sun-selected");
            }
            console.log(e.target)
            e.target.classList.add('sun-selected');
        }
    }

    function handleSelect(e){
        makeActive(e);
        params(e);
    }

   
        return(
           <div className="sunlight-select">
               <div className="sunlight-select__options">
                    <span className="sunlight-select__high-sun sun-selected" onClick={handleSelect} value="high">
                        <HighSun />
                        <strong>High sunlight</strong>
                    </span>
                    <span className="sunlight-select__low-sun" onClick={handleSelect} value="low">
                        <LowSun />
                        <strong>Low sunlight</strong>
                    </span>
                    <span className="sunlight-select__low-sun" onClick={handleSelect} value="no">
                        <NoAnswer />
                        <strong>No sunlight</strong>
                    </span>
               </div>
               <div className="sunlight-select__navigate">
                   <Link to="/" >
                        <HomeBtn className="sunlight-select__home-btn"/>
                   </Link>
                   <Link to="/water">
                        <NextBtn className="sunlight-select__next-btn" />
                   </Link>
               </div>
           </div>
        )
}

export default SunlightSelect

