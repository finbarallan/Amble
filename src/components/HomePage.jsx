import React, { useRef, useEffect, useState,useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';
const reactLogo = "react.svg";
const viteLogo = "vite.svg";

// import StartPlace from "./components/start_place";

import { createTheme,ThemeProvider  } from '@mui/material/styles';

import MenuAppBar from './MenuBar';
import './HomePage.css';
import MyButton from './mainbutton';
import MyFunctionButton from './functionbutton';
import MapBackground from './mapbackground';
import Box from "@mui/material/Box";

const theme = createTheme({
    palette: {
      primary: {
        main: '#004d40',
      },
      secondary: {
        main: '#004d40',
      },
    },
  });

  const logoImages = [
    
   
  
    // Add more logo image paths here if needed
  ];
  
  function HomePage() {
    const navigate=useNavigate();
    const [logoIndex, setLogoIndex] = useState(0);

    const handleButtonClick = () =>{
        navigate('/interface-two')
    }

    useEffect(() => {
      const interval = setInterval(() => {
        setLogoIndex((prevIndex) => (prevIndex + 1) % logoImages.length);
      }, 80); // Change logo every 3 seconds (adjust this interval as needed)
  
      return () => {
        clearInterval(interval);
      };
    }, []);


    return (
      <>
      <MenuAppBar />
      <div className='homepagecontainer'>
        
    
        <div className='mapwrapper_homepage'>
          <MapBackground zoom={12.8}/>
        </div>
        <div className='flex-container' >
          <span className='hometext'> 
          <span style={{ fontSize: '28px' ,fontWeight: 550}}>amble - the peaceful way</span>
          <br></br>
          <span style={{ fontSize: '16px' }}>The purpose of our application is to generate walking routes for users to guide them though the quiet corners of Manhattan. The route generating algorthm takes forecast conditions into our machine learning model to determine busyiness based on taxizone, citibike and subway data and pair this infomation with crimes statistics for areas of Manhattan to ensure users can enjoy a quiet, peaceful and safe journey!
          </span>
          </span>
          <div className='LOGO'>
            <img src={logoImages[logoIndex]} className='Logo' alt='Logo'/>
          </div>
          <MyButton onClick={handleButtonClick}/>
        </div>
        {/* <MyFunctionButton/> */}
      </div>
      </>
    );
  }

  export default HomePage;