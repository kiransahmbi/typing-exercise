import React from "react";
import axios from 'axios';
import UserInput from './UserInput';
import SampleTextGenerator from './SampleTextGenerator';
import Stats from './Stats';

function Body() {

  const [[sampleString, sampleSplitArray], setSampleString] = React.useState([]);
  const [[errors, wpm, netWPM], setStats] = React.useState([]);
  const wordsToGenerate = 8;

  const fetchWords = async () => {
    console.log("Sending API Call");
    const wordsArray = await axios.get('https://random-word-api.herokuapp.com/word?number=' + wordsToGenerate +'&swear=0');
    setSampleString([wordsArray.data.join(' '), wordsArray.data.join(' ').split('')]);
  }

  React.useEffect( ()=>{
    fetchWords();
  }, []);


return (
  <div className="body">
    <SampleTextGenerator  sampleString={sampleSplitArray} setSampleString = {setSampleString}/>
    <UserInput sampleString = {sampleString} setStats={setStats} wordsToGenerate={wordsToGenerate} />
    <Stats errors={errors} wpm={wpm} netWPM={netWPM} />
    <footer>
      &copy; KS 2021
    </footer>
  </div>
);
}

export default Body;
