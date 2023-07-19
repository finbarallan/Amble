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
    
    '/static/images/LL1.png',
    '/static/images/LL2.png',
    '/static/images/LL3.png',
    '/static/images/LL3.png',
    '/static/images/logo4.png',
    '/static/images/logo3.png',
    '/static/images/logo4.png',
    '/static/images/LL4.png',
    '/static/images/LL4.png',
    '/static/images/LL5.png',
    
    // '/static/images/LL6.png',
    // '/static/images/LL7.png',
  
    // Add more logo image paths here if needed
  ];
  
  function HomePage() {
    const navigate=useNavigate();
    const [logoIndex, setLogoIndex] = useState(0);

    const handleButtonClick = () =>{
        navigate('/interface')
    }

    useEffect(() => {
      const interval = setInterval(() => {
        setLogoIndex((prevIndex) => (prevIndex + 1) % logoImages.length);
      }, 1000); // Change logo every 3 seconds (adjust this interval as needed)
  
      return () => {
        clearInterval(interval);
      };
    }, []);


    return (
      <>
        <MenuAppBar />
    
        <div className='mapwrapper_homepage'>
          <MapBackground/>
        </div>
        <div className='flex-container'>
          <div className='LOGO'>
            <img src={logoImages[logoIndex]} className='Logo' alt='Logo'/>
          </div>
          <MyButton onClick={handleButtonClick}/>
        </div>
        {/* <MyFunctionButton/> */}
      </>
    );
  }

  export default HomePage;