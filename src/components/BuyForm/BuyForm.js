import React from 'react';
import './BuyForm.css';


const BuyForm = () => {
    return(
        <div className="buy-form" type="submit">
            <h3>Nice pick!</h3>
            <span>Tell us your name and e-mail and we will get in touch regarding your order ;)</span>
            <form>
                <label for="Name">Name :</label>
                <input id="Name" name="Name"></input>
                <label for="E-mail">E-mail :</label>
                <input id="E-mail" name="E-mail"></input>
                
            </form>
    </div>
    )
}



export default BuyForm 