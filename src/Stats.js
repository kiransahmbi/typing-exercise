import React from "react";
import {FaKeyboard} from 'react-icons/fa';

function Stats(props) {

return (
  <div id="stats-holder">
    <button type="button" className="btn btn-light btn-lg">Errors: {props.errors}</button>
    <button type="button" className="btn btn-light btn-lg">WPM: {props.wpm}</button>
    <button type="button" className="btn btn-light btn-lg">Net WPM: {props.netWPM}</button>
  </div>
);
}

export default Stats;
