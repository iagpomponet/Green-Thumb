import React from 'react';
import PlantItem from '../PlantItem/PlantItem'
import './PlantList.css'

const PlantList = (plants) =>{
    console.log(plants)
    return(
        <div className="results__results-list">
           {plants.plants.map((plant) => {
               return <PlantItem plant={plant} />
           })}
        </div>
    )
}

export default PlantList