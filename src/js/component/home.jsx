import React from "react";


import ReactDOM from "react-dom";
import { TrafficLight } from "./trafficLight.jsx";

const Home = () => {

  
  return (
    <div className="text-center">
      <TrafficLight />
    </div>
  );
};



export default Home

ReactDOM.render(<Home />, document.querySelector('#app'));