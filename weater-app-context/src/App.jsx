import "./App.css";
import Form from "./components/Form";
import Weather from "./components/Weather";
import {CityProvider} from './CityContext';



const App = () => {
  return (
    <CityProvider>
      <div className="h-screen bg-cover bg-center opacity-70 " style={{backgroundImage:`url(https://t4.ftcdn.net/jpg/03/48/58/83/360_F_348588333_yEOn7lnklwAcNVSWf3iHUpFqmDgyOvCD.jpg)`}}>
        <Form />
        <Weather />
      
      </div>
    </CityProvider>
  );
};

export default App;
