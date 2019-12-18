import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo/logo.svg';
import { ReactComponent as Button } from '../../assets/buttons/start-btn.svg';


import './home.css';

import illustration from '../../assets/illustrations/illustration-home.png';


const Home = ({value}) => {
  console.log(value)
  return (
      <div className="home">
          <div className="home__logo">
               <Logo/>
          </div>
          <div className="home__start-quizz">
            <h3>Find your next green friend</h3>
               <Link to="/sunlight">
                    <Button className="start-btn" />
               </Link>
          </div>
          <div className="home__illustration">
              <img src={illustration} />
          </div>
      </div>
  );
}

export default Home;
