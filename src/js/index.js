//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClock} from '@fortawesome/free-solid-svg-icons'

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props){
    return (
        <div className="counter">
            <div className="clock">
                <FontAwesomeIcon icon={faClock} />
            </div>
            <div className="six">{props.sixDigit %10}</div>
            <div className="five">{props.fiveDigit %10}</div>
            <div className="four">{props.fourDigit %10}</div>
            <div className="three">{props.threeDigit %10}</div>
            <div className="two">{props.twoDigit %10}</div>
            <div className="one">{props.oneDigit %10}</div>
        </div>
    );
};

SimpleCounter.propTypes = {
    sixDigit: PropTypes.number,
    fiveDigit: PropTypes.number,
    fourDigit: PropTypes.number,
    threeDigit: PropTypes.number,
    twoDigit: PropTypes.number,
    oneDigit: PropTypes.number
};

let counter = 0;

setInterval(function(){
    const six = Math.floor(counter/100000);
    const five = Math.floor(counter/10000);
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    
    counter++;

ReactDOM.render(
<SimpleCounter oneDigit={one} twoDigit={two} threeDigit={three} fourDigit={four} fiveDigit={five} sixDigit={six} />, 
document.querySelector("#app"));

},1000);