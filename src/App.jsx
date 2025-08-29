import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import  fetchEarthquakes  from "./api";
import L from "leaflet";
import Loader from "./Components/Loader";
import NotFound from "./Components/NotFound";

export default function App() {
  const [earthquakes, setEarthquakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [minMag, setMinMag] = useState(0);

  useEffect(() => {
    fetchEarthquakes().then((data) => {
      setTimeout(()=>{

        setEarthquakes(data);
        setLoading(false);
      },2000)
    });
  }, []);

  // Function to decide marker color based on magnitude
  const getMarkerIcon = (mag) => {
    let color = "bg-green-500";
    if (mag >= 5) color = "bg-red-600";
    else if (mag >= 3) color = "bg-orange-500";

    return L.divIcon({
      html: `<div class="${color} w-4 h-4 rounded-full border-2 border-white"></div>`,
      className: "",
    });
  };

  if (loading)
    return (
  <div className="flex items-center justify-center w-[100%] h-[100%] mt-[160px] ">
        
    <Loader/>
      </div>
    );

  if (earthquakes.length === 0)
    return (
     
       <NotFound/>
      
    );

  return (
    <div className="h-screen w-full relative">
      {/* Filter Section */}
      <div className="absolute top-4 right-[5%] z-[1000] bg-white p-3 rounded-lg shadow-lg">
        <label className="text-sm font-semibold mr-2">Min Magnitude:</label>
        <select
          value={minMag}
          onChange={(e) => setMinMag(Number(e.target.value))}
          className="border border-gray-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500"
        >
          <option value={0}>All</option>
          <option value={2}>2+</option>
          <option value={3}>3+</option>
          <option value={4}>4+</option>
          <option value={5}>5+</option>
        </select>
      </div>

      <MapContainer center={[20, 0]} zoom={2} className="min-h-full min-w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {earthquakes
          .filter((eq) => eq.properties.mag >= minMag)
          .map((eq, idx) => {
            const [lng, lat] = eq.geometry.coordinates;
            return (
              <Marker
                key={idx}
                position={[lat, lng]}
                icon={getMarkerIcon(eq.properties.mag)}
              >
                <Popup>
                  <div className="space-y-1">
                    <p className="font-bold text-sm">{eq.properties.place}</p>
                    <p className="text-sm">Magnitude: {eq.properties.mag}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(eq.properties.time).toLocaleString()}
                    </p>
                  </div>
                </Popup>
              </Marker>
            );
          })}
      </MapContainer>
    </div>
  );
}
