import React from 'react';
import './ButtonHandler.css';

const Button = ({handleClick, buttonClass}) => {


    return(
        <div>
            <button className={buttonClass} onClick={handleClick}>Submit</button>
        </div>
    )

}

export default Button;