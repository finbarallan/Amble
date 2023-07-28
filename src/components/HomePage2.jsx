import React, { useRef, useEffect, useState, useContext } from "react";
import { Link, useNavigate, useLocation} from "react-router-dom";
// import StartPlace from "./components/start_place";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuBar2 from "./MenuBar2";
import "./HomePage2.css";
import MyButton from "./mainbutton";
import MyFunctionButton_home from "./functionbutton";
import MapBackground from "./mapbackground";
import Box from "@mui/material/Box";
import { useGreetingData } from './GreetingDataContext';


const theme = createTheme({
  palette: {
    primary: {
      main: "#004d40",
    },
    secondary: {
      main: "#004d40",
    },
  },
});

function LandingPage() {
  const { data } = useGreetingData();
  const value1 = data.value1;
  const value2 = data.value2;

  // 使用 value1 和 value2 来组成句子
  const greeting = 'Hey ' + value1 + value2;

  return (
    <div className="landing-page-container">
      <div className="menubar-area">
        <MenuBar2 />
      </div>
      <div className="homepage-pics-container">
        <div className="left-color-block">
          <span className="hometext-title">
            <span style={{ fontSize: "36px", fontWeight: 500 }}>
              amble <br></br>- the peaceful way
            </span>
            <br></br>
            <br></br>
            <br></br>
            <span style={{ fontSize: "16px" }}>
              The purpose of our application is to generate walking routes for
              users to guide them though the quiet corners of Manhattan.
              <br></br>
              <br></br>
              The route generating algorthm takes forecast conditions into our
              machine learning model to determine busyiness based on taxizone,
              citibike and subway data and pair this infomation with crimes
              statistics for areas of Manhattan to ensure users can enjoy a
              quiet, peaceful and safe journey!
            </span>
          </span>
          <div className="home-button-container">
            <MyButton />
          </div>
        </div>
        <div className="guidebutton">
        <a href="#mapwrapper_landingpage">
        <MyFunctionButton_home/>
       </a>
        </div>
      </div>
      <div className="mapwrapper_landingpage"  id="mapwrapper_landingpage">
        <div className="leftbox">
          <MapBackground zoom={12.0} />
        </div>

        <div className="rightbox">
          <div className="rightbox-in-1">
            <span className="hometext-address">
              <span style={{ fontSize: "45px", fontWeight: 500 }}>{greeting}</span>
              <br></br>
              <br></br>
              <span style={{ fontSize: "17px" }}>
                Please discover the green world around you!{" "}
              </span>

              <span style={{ fontSize: "17px" }}>
                You can find pedestrian walkways, gardens, green spaces, parks,
                commercial areas, and a vast array of interest points.
              </span>
            </span>
          </div>
          <div className="rightbox-in-2">
            <img
              src="/static/images/newyork6.jpg"
              alt="pics"
              className="pic-in-rightbox"
            ></img>
          </div>
        </div>
      </div>

      <div className="endbar"></div>
    </div>
  );
}
export default LandingPage;
