import React, {Suspense, useContext } from 'react';
import './App.css';
import Header from "./Components/Header/Header.component";
import Loading from './Components/Loading/Loading.component'
import {ActionContext} from './Context/GlobalState';


const MapContainer = React.lazy(() => import('./Components/Map/MapContainer'));
const Boxes = React.lazy(() => import('./Components/Boxes/Boxes.component'));
const Charts = React.lazy(() => import('./Components/Charts/Charts.component'));
const SelectBox = React.lazy(() => import('./Components/SelectBox/SelectBox'));


const App = () => {
  const {mode} = useContext(ActionContext);

  return (
      
        <div id="main" style={{backgroundColor : mode === "dark" ? "black" : "white"}}>
          <Header/>
          <Suspense fallback={<Loading/>}>
            <SelectBox/>
            <Boxes/>
            <Charts/>
            <MapContainer/>
          </Suspense>
        </div>
  );
}

export default App;
