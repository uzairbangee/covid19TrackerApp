import React, {Fragment, useContext, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';
import {ActionContext} from '../../Context/GlobalState';
import { updateData, updateDataGlobal, updateMap } from "../../Api";

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 190,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const SelectBox = () => {
    const classes = useStyles();
    const [country, setCountry] = useState("");
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState('');

    const {dispatch, data} = useContext(ActionContext);

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get('https://covid19.mathdro.id/api/countries');
                setCountries(res.data.countries);
            }
            catch (err){
                setError(err)
            }
        })();      
    }, [])

    const handleChange = async ({target : {value}}) => {
        setCountry(value);
        if(value === 'global')
            dispatch(await updateDataGlobal())
        else
            dispatch(await updateData(value));

        if(value !== "global"){
            dispatch(await updateMap(value));
        }
    }

    return (
        <Fragment>
            <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple"></InputLabel>
                <Select
                value={country}
                native
                onChange={handleChange}
                inputProps={{
                    name: 'country',
                    id: 'age-native-simple',
                }}
                >
                <option value="global">Global</option>
                {
                    countries.map((country, index) => (
                        <option key={index} value={country.name}>{country.name}</option>
                    ))
                }
                </Select>
            </FormControl>
        </Fragment>
    )
}

export default SelectBox;