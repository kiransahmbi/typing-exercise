import React from "react";


function SampleTextGenerator(props) {

  console.log(props.sampleString);

return (
  <div className="sample-text-box shadow-sm">
  {props.sampleString &&
  (props.sampleString.map((item, index) => {
     return (<span className={"sample-text string" + index}>{item}</span>)
   }))
  }

  </div>
);
}

export default SampleTextGenerator;
