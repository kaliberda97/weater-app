import {context} from '../CityContext'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Leaflet = () => {
  const {city,coords} = context();
  
  return (
    <div className="flex flex-col items-center mt-5  ">
 
      {coords.length > 0 && (
        <MapContainer center={coords} zoom={13} scrollWheelZoom={false} style={{ width: '100%', height: '40vh' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={coords}>
            <Popup>
              {city}
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default Leaflet;