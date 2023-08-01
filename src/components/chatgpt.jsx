import React, { useRef, useEffect, useState,useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';

import { createTheme,ThemeProvider  } from '@mui/material/styles';
import MenuBar2 from './MenuBar2';
import './resources.css';
// import { globalArray } from './useRouteDisplay.jsx';
import MyButton from './mainbutton';
import MyFunctionButton from './functionbutton';
import MapBackground from './mapbackground';
import Box from "@mui/material/Box";
import { ArrayContext, useWaypointsArray } from '../context/ArrayContext';

import axios from 'axios';

const ChatGPT = () => {
    const [userInput, setUserInput] = useState('');
    const [response, setResponse] = useState('');
    const { globalArray, setGlobalArrayValue } = useWaypointsArray();
    console.log(globalArray)
  
    const handleChange = (event) => {
      setUserInput(event.target.value);
    };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/users/chatgpt', {
        input: userInput,
      });
      setResponse(response.data.message);
      console.log(response.data.message);
    } catch (error) {
      console.error('Error fetching response from backend:', error);
    }
  };

  const theme = createTheme({
    palette: {
      primary: {main: '#004d40',},
      secondary: {main: '#004d40',},
    },
  });
// const routeArray = globalArray;
// console.log(routeArray)
const lat = 40.7505;
const lon = -73.9934;

const node = 'Yeshiva University Museum';

const dist = 7;
const co2_per_mile = 0.77
const total_co2 = (dist * co2_per_mile).toFixed(2);

const co2_per_tree_per_year = 22
const tree_per_mile = co2_per_tree_per_year / co2_per_mile

const address = '415 East Houston Street, 10002 Manhattan';

const currentDate = new Date();
const dates = { month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleString(undefined, dates);

  // Define options
  const options = [
    { value: '', label: 'Some interesting stuff about your amble' },
    { value: `Tell me one thing good that happened on ${formattedDate}`, label: '1. Tell me something good that happened on this date' },
    // { value: `Without printing out all the factors, how much co2 is created by a petrol car driving ${dist} miles in a city?`, label: '4. How much carbon will I save on this walk?' },
    { value: `Give me a short paragraph on ${node}`, label: '2. Where is an interesting place I might visit as I amble' },
    { value: `Suggest some mindfulness classes around ${address} `, label: '3. Suggest some mindfulness classes on my route' },
    { value: `On average how many calories will I burn on a ${dist} mile walk?`, label: '4. On average how many calories will I burn?' },
    { value: `What point of interest is found around longitude ${lon} and latitude ${lat}?`, label: '5. What else is interesting as I amble?' },
    { value: `Who was born on ${formattedDate}?`, label: '6. Who was born on this day?' }
  ];

  return (
    <div className="landing-page-container">
      <div>
      <div className="imageresources-container">
            </div>


        <select value={userInput} onChange={handleChange}>
            {options.map((option) => (
            <option key={option.value} value={option.value} >{option.label}</option>
            ))}
        </select>
      </div>

      <div className="btn-container">
        <button className='btn' onClick={handleSubmit}>Choose something</button>
      </div>

      <div className="response-container">
        {response && <div>{response}
          </div>}
      </div>
      
          <br></br>
          <br></br>
      
       
      <div className="attribution-text">
          Get a reflection from 'They Said So' : Chose something powered by ChatGPT
      </div>
        <br></br>
      <div className='endbar'></div>
    </div>    
   
  );
};

export default ChatGPT;