import {context} from '../CityContext'
import Leaflet from './Leaflet';


const Weather = () => {
    const {weatherData} = context();

    return (
      <div className="p-8 rounded-lg ">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4" >
          {weatherData.list?
           weatherData.list.map((item, index) => (
          <div key={index} className="bg-sky-500 p-4 rounded-lg">
          <img className='h-24 w-28' src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="" />
              <h3 className="text-xl font-semibold">{new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}</h3>
              <p className="text-gray-900 ">{item.weather[0].description}</p>
              <p className="text-gray-700 text-xs ">{item.dt_txt}</p>
              <p className="text-red-800 text-sm">Temperature: {item.main.temp}°C</p>
              <p className="text-blue-950 text-sm">Humidity: {item.main.humidity}%</p>
            </div>
          )):''
          }
        </div>
     <Leaflet/>
      </div>
    );
  };



export default Weather;