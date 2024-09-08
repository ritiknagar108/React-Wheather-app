import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike: 19.78,
        humidity: 40,
        temp: 20.62,
        tempMax: 21.05,
        tempMin: 20.62,
        weather: "haze",
    });
    let updateInfo =(result)=>{
        setWeatherInfo(result);
    }
    return(
        <div>
            <SearchBox updateInfo={updateInfo}/>
            <br/>
            <InfoBox info={weatherInfo}/>
        </div>
    
    );
}