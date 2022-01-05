import React from "react";

function UserInput(props) {

  const [letter, setLetter] = React.useState();
  const [errorTracker, setErrorTracker] = React.useState(0);
  const [startTime, setStartTime] = React.useState(null);
  var WPM, netWPM, timeDifference;

  function findDiff(str1, str2){
    let diff = 0;
    str2.split('').forEach(function(val, i){
      if (val != str1.charAt(i))
        diff += 1 ;
    });
    return diff;
  }

  function handleTyping (event) {

    // Start Time Tracking
    if (event.target.value.length === 1) {
         setStartTime(performance.now());
         console.log(startTime);
    }

    // Uncorrected Erros Tracking
    if (props.sampleString[event.target.value.length -1] !== event.target.value [event.target.value.length -1]) {
      setErrorTracker(errorTracker + 1);
    }

    // Colour letters as User types
    for (let i = 0 ; i < event.target.value.length  ; i++) {
      if (event.target.value[i] === props.sampleString[i]) {
        document.querySelector(".string" + i).style.color = "green";
        document.querySelector(".string" + i).style.backgroundColor = "#DAF7A6";
      }

      else {
        document.querySelector(".string" + i).style.color = "red";
        document.querySelector(".string" + i).style.backgroundColor = "#fab1ac";
      }
    }

    if (event.target.value.length === props.sampleString.length) {
      console.log(errorTracker);
      // console.log(performance.now());
      // console.log("startime", startTime);
      timeDifference = (performance.now() - startTime);
      console.log(timeDifference);
      WPM = Math.round ((event.target.value.length / 5) / ( timeDifference / 60000));
      console.log(WPM);

      netWPM = Math.round(((event.target.value.length / 5) - findDiff(props.sampleString, event.target.value)) / (timeDifference / 60000));
      console.log(netWPM);
      props.setStats([errorTracker, WPM, netWPM]);
      document.querySelector("#stats-holder").style.visibility = "visible";
    }
  }

  return (
    <div className="user-input">
         {props.sampleString && <textarea className="user-input" type="text" onChange={handleTyping} autoFocus placeholder="Type To Begin" maxLength={props.sampleString.length}></textarea>}
    </div>
  );
}

export default UserInput;
