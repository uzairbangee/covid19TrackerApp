import React, {Suspense } from 'react';
import './App.css';
import Loading from './Components/Loading/Loading.component'
const MapContainer = React.lazy(() => import('./Components/Map/MapContainer'));
const Boxes = React.lazy(() => import('./Components/Boxes/Boxes.component'));
const Charts = React.lazy(() => import('./Components/Charts/Charts.component'));
const SelectBox = React.lazy(() => import('./Components/SelectBox/SelectBox'));



const App = () => {

  return (
      
        <div id="main">
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
