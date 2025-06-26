import { useState } from "react";

function App() {
  const [lat, set_lat] = useState()
  const [lon, set_lon] = useState()
  const [accuracy, set_accuracy] = useState()

  navigator.geolocation.getCurrentPosition( (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const accuracy = position.coords.accuracy;

        set_lat(lat);
        set_lon(lon);
        set_accuracy(accuracy);
  })

  return (
    <div>
    <h1>위도 : {lat}<br/>
    경도 : {lon}<br/>
    정확도 : {accuracy} 미터</h1>
    </div>
  ) 
}
export default App