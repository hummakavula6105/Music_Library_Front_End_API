import React from 'react';

const ButtonHandler = (props) => {
    const [buttonClass, setButtonClass] = useState("inactive");

    function handleClick(){
        if(buttonClass === "inactive"){
            setButtonClass("active");
        }
        else{
            setButtonClass("inactive");
        }

    }
    return ( 
        <div>
            <Button handleClick= {handleClick} activeLike={activeLike} buttonClass={buttonClass}/>
        </div>
     );
}
 
export default ButtonHandler;