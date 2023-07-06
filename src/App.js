import './App.css';
import React from 'react';
import ShipComponent from "./components/ShipComponent/ShipComponent";
import ShipContainer from "./components/ShipComponent/ShipContainer";

const App = () => {
  return (
      <div className={'app'}>
<ShipContainer />
      </div>
  );
};

export default App;
