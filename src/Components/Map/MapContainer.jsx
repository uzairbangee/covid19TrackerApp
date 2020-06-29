import React, {Fragment, useContext, useState} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {ActionContext} from '../../Context/GlobalState';


const LoadingContainer = (props) => (
    <div>Fancy loading container!</div>
  )



export const MapContainer = (props) => {

    const {map, data} = useContext(ActionContext);
    const [info, setInfo] = useState({})

    const onMarkerClick = (props, marker, e) => {
      setInfo(marker);
    }

      return (
        <Fragment>
          <div style={{width : '100vw', height: '100vh', padding: 20}}>
              <Map google={props.google}
                zoom={3}
                center={{lat: map.lat, lng: map.lng}}
                style={{width: '100%', height: '100%',position: 'relative'}}
                initialCenter={{lat: map.lat, lng: map.lng}}>
      
                    <Marker
                      position={{lat: map.lat, lng: map.lng}} 
                      onClick={onMarkerClick}/>

                    <InfoWindow
                      marker={info}
                      visible={true}>
                        <div>
                          <p>Confirmed Cases : {data.confirmed}</p>
                          <p>Recovered Cases : {data.recovered}</p>
                          <p>Death Cases : {data.death}</p>
                        </div>
                    </InfoWindow>
              </Map>
          </div>
        </Fragment>
      );
  }
   
  export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_API),
    LoadingContainer: LoadingContainer
  })(MapContainer)