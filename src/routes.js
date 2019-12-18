import React, { Component } from 'react';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import Home from './pages/home/home';
import Sunlight from './pages/sunlight/sunlight';
import Water from './pages/water/water';
import Animals from './pages/animals/animals';
import Results from './pages/results/results'
import Plant from './pages/plant/plant'

class Routes extends Component{

        constructor(props){
            super(props);

            this.state = {
                sun : "high",
                water: "daily",
                pets: "false"
            }

            this.getParams = this.getParams.bind(this);
        }       

       

    getParams(e){
        const element = e.target;
        this.setState((state) => ({
                sun : element.classList.contains("sun-selected") ? element.getAttribute("value") : state.sun,
                water: element.classList.contains("water-selected") ? element.getAttribute("value") : this.state.water,
                pets: element.classList.contains("animals-selected") ? element.getAttribute("value") : this.state.pets
        }), () => console.log(this.state))
        }
        
    

    render(){
        return(
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/sunlight" render={() => <Sunlight params={this.getParams} />}/>
                <Route path="/water" render={() => <Water params={this.getParams} />}/>
                <Route path="/animal" render={() => <Animals params={this.getParams} />}/>
                <Route path="/results" render={() => <Results params={this.state} />}/>
                <Route path="/plants/:id" component={Plant} />
            </Switch>
            </BrowserRouter>
        )
    }
};

export default Routes;