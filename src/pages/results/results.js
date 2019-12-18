import React, { Component } from 'react';
import api from '../../services/api';
import PlantList from '../../components/PlantList/PlantLits'
import {ReactComponent as Logo } from '../../assets/logo/logo-aside.svg';
import {ReactComponent as Line } from '../../assets/logo/logo-line.svg';
import ResultsLogo from '../../assets/illustrations/pick.png';
import './results.css';


class Results extends Component {

    state = {
        plants : ''
    }

    loadPlants = async () =>{
        const { params } = this.props;
        const url = `?sun=${params.sun}&water=${params.water}&pets=${params.pets}`
        const response = await api.get(url);
        this.setState((state) => ({ plants : response }), () => console.log(response))
    }

    componentDidMount(){
        this.loadPlants()
    }
    
    render(){
        const plants = this.state.plants.data;
        console.log(this.state)
        return(
            <div className="results">
                 <aside class="aside-logo">
                        <Logo />
                        <Line />
                    </aside>
                <div className="results__container">
                   
                    <div className="results__header">
                        <img src={ResultsLogo}/>
                        <h1>Our picks for you</h1>
                    </div>
                        {this.state.plants && <PlantList plants={this.state.plants && plants}/>}
                </div>
            </div>
        )
    }

}

export default Results

