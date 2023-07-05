import React from 'react';
import axios from 'axios';
import "./Comms.css";

const StartPlace = ({ inputValues, setInputValues }) => {

  const handleInputChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();

    console.log("handleInputSubmit", inputValues);

    axios.post('/users', inputValues, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => {
        console.log("errorless:", response.data);
        
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded with error");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  };

  return (
    <div className="comms">
      <form onSubmit={handleInputSubmit}>
        <label htmlFor="latitude">Latitude:</label>
        <input
          type="text"
          name="latitude"
          value={inputValues.latitude}
          onChange={handleInputChange}
        />
        <label htmlFor="longitude">Longitude:</label>
        <input
          type="text"
          name="longitude"
          value={inputValues.longitude}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div >
  );
}

export default StartPlace;