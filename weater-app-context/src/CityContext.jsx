import React, { useState, createContext, useContext } from 'react';
import axios from 'axios';


const CityContext = createContext();
export const context = ()=> useContext(CityContext)

export  const CityProvider = ({ children }) => {

  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState('');
  const [coords, setCoords] = useState([]);

  const API_KEY = import.meta.env.VITE_API_KEY;


  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&cnt=5`);
      setWeatherData(response.data);
   
      const response1 = await axios.get(`https://nominatim.openstreetmap.org/search?q=${city}&format=json`);
      if (response1.data.length > 0) {
        const { lat, lon } = response1.data[0];
        setCoords([lat, lon]);
          
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <CityContext.Provider value={{weatherData,fetchWeatherData,city, setCity,coords}}>
      {children}
    </CityContext.Provider>
  );
};