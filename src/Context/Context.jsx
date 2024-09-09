import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// Create a context object
const Auth = createContext(null);

const AuthProvider = ({ children }) => {
    const APIKey = '5b2ae638d891491b990145042241507';
    const [city, setCity] = useState("Lahore");
    const [temp, setTemp] = useState(null);
    const [forecast, setForecast] = useState(null);

    const getUserCity = (cityName) => {
        const lowerCaseStr = cityName.toLowerCase();
        const cityNameUpperCase= lowerCaseStr.charAt(0).toUpperCase() + lowerCaseStr.slice(1);
        setCity(cityNameUpperCase);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${city}`);
                const forecastResponse = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=${city}&days=5`);
                setTemp(response.data.current.temp_c);
                setForecast(forecastResponse.data.forecast.forecastday);
                console.log("Response", response.data.current.temp_c);
                console.log("Forecast", forecastResponse.data.forecast.forecastday);
            } catch (err) {
                console.log("Error", err);
            }
        };

        fetchData();

    }, [APIKey, city]);

    return (
        <Auth.Provider value={{ getUserCity, temp, forecast , city }}>
            {children}
        </Auth.Provider>
    );
};

export const useAuth = () => {
    return useContext(Auth);
} 

export default AuthProvider;
