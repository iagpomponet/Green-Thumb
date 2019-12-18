import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as PrevBtn} from '../../assets/buttons/prev-btn.svg'
import {ReactComponent as FinishBtn} from '../../assets/buttons/finish-btn.svg'
import {ReactComponent as YesBtn} from '../../assets/icons/coral/pet.svg';
import {ReactComponent as NoAnswer} from '../../assets/icons/coral/no-answer.svg';

import Home from '../../pages/home/home';

import './AnimalSelect.css'

 const AnimalSelect = ({params}) =>{
     
    function makeActive(e){
        if(e.target.tagName == "SPAN"){
            const prevSelected = document.querySelector(".animals-selected");
            if(prevSelected){
                prevSelected.classList.remove("animals-selected");
            }
            e.target.classList.add('animals-selected');
        }
    }

    function handleSelect(e){
        makeActive(e);
        params(e);
    }

   
        return(
           <div className="animals-select">
               <div className="animals-select__options">
                    <span className="animals-select__btn animals-selected" onClick={handleSelect} value="true">
                        <YesBtn />
                        <strong>Yes</strong>
                    </span>
                    <span className="animals-select__btn" onClick={handleSelect} value="false">
                        <NoAnswer />
                        <strong>No/ They don't care</strong>
                    </span>
               </div>
               <div className="animals-select__navigate">
                   <Link to="/water">
                        <PrevBtn className="animals-select__finish-btn"/>
                   </Link>
                   <Link to="/results">
                        <FinishBtn className="animals-select__next-btn" />
                   </Link>
               </div>
           </div>
        )
}

export default AnimalSelect

