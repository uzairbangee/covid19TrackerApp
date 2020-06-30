import axios from 'axios';

const updateData = async (country) => {

    try {
        const res = await axios.get(`https://covid19.mathdro.id/api/countries/${country}`);
        return ({
            type: "UPDATE_DATA",
            payload : {
                confirmed: res.data.confirmed.value,
                recovered: res.data.recovered.value,
                death: res.data.deaths.value
              }
          })
    }
    catch (err){
        return ({
            type: "ERROR",
            payload : err
          })
    }
}

const updateMap = async (country) => {

    try {
        const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${country}&key=${process.env.REACT_APP_GOOGLE_API}`);
        return ({
            type: "UPDATE_MAP",
            payload : {
                lat: res.data.results[0].geometry.location.lat,
                lng: res.data.results[0].geometry.location.lng,
              }
          })
    }
    catch (err){
        return ({
            type: "ERROR",
            payload : err
          })
    }
}

const updateDataGlobal = async () => {

    try {
        const res = await axios.get(`https://covid19.mathdro.id/api`);
        return ({
            type: "UPDATE_DATA",
            payload : {
                confirmed: res.data.confirmed.value,
                recovered: res.data.recovered.value,
                death: res.data.deaths.value
              }
          })
    }
    catch (err){
        return ({
            type: "ERROR",
            payload : err
          })
    }
}


export {
    updateData,
    updateDataGlobal,
    updateMap
}