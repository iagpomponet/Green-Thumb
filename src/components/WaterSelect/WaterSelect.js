import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Rarely } from '../../assets/icons/green/one-drop.svg';
import { ReactComponent as Regularly } from '../../assets/icons/green/two-drops.svg';
import { ReactComponent as Daily } from '../../assets/icons/green/three-drops.svg';
import { ReactComponent as PrevBtn } from '../../assets/buttons/prev-btn.svg';
import { ReactComponent as NextBtn } from '../../assets/buttons/next-btn.svg';
import './WaterSelect.css';


const WaterSelect = ({params}) =>{

    function makeActive(e){
        if(e.target.tagName == "SPAN"){
            const prevSelected = document.querySelector(".water-selected");
            if(prevSelected){
                prevSelected.classList.remove("water-selected");
            }
            e.target.classList.add('water-selected');
        }
    }

    function handleSelect(e){
        makeActive(e);
        params(e);
    }

    return(
        <div className="water-select">
               <div className="water-select__options">
                    <span className="water-select__btn water-selected" onClick={handleSelect} value="rarely">
                        <Rarely />
                        <strong>Rarely</strong>
                    </span>
                    <span className="water-select__btn" onClick={handleSelect} value="regularly">
                        <Regularly />
                        <strong>Regularly</strong>
                    </span>
                    <span className="water-select__btn" onClick={handleSelect} value="daily">
                        <Daily />
                        <strong>Daily</strong>
                    </span>
               </div>
               <div className="water-select__navigate">
                   <Link to="/sunlight">
                        <PrevBtn className="water-select__prev-btn"/>
                   </Link>
                   <Link to="/animal">
                        <NextBtn className="water-select__next-btn" />
                   </Link>
               </div>
           </div>
    )
}

export default WaterSelect