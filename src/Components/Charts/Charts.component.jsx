import React, {useContext, useState} from 'react';
import {Pie, Bar} from 'react-chartjs-2';
import {ActionContext} from '../../Context/GlobalState';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles({
    root: {
        minWidth: 375,
        marginBottom: 40,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        width : '60%'
    },
    child : {
        textAlign : 'center'
    },
    formControl: {
        margin: 10,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: 10,
    },
});

const Charts = () => {
    const {data} = useContext(ActionContext);
    const [type, setType] = useState('bar');
    const classes = useStyles();

    const handleChange = ({target : {value}}) => {
            setType(value);
    }

    return (
        <Card className={classes.root}>
            <CardContent className={classes.child}>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Chart Type</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                onChange={handleChange}
                >
                <MenuItem value='pie'>Pie Chart</MenuItem>
                <MenuItem value='bar'>Bar Chart</MenuItem>
                </Select>
            </FormControl>
            {
                type === "pie"
                ?
                <Pie
                    data={
                        {
                            labels: ['Confirm Cases', 'Recovered', 'Death'],
                            datasets: [
                            {
                                label: 'People',
                                backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                                hoverBackgroundColor: ['rgba(0, 0, 255, 0.9)', 'rgba(0, 255, 0, 0.9)', 'rgba(255, 0, 0, 0.9)'],
                                data: [data.confirmed, data.recovered, data.death]
                            }
                            ]
                        }
                    }
                    options={{
                        title:{
                        display:true,
                        text:'Covid 19 Case Study',
                        fontSize:20
                        },
                        legend:{
                        display:true,
                        position:'right'
                        }
                    }}
                />
                :
                <Bar
                    data={
                        {
                            labels: ['Confirm Cases', 'Recovered', 'Death'],
                            datasets: [
                              {
                                label: 'People',
                                backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                                hoverBackgroundColor: ['rgba(0, 0, 255, 0.9)', 'rgba(0, 255, 0, 0.9)', 'rgba(255, 0, 0, 0.9)'],
                                borderWidth: 2,
                                data: [data.confirmed, data.recovered, data.death]
                              }
                            ]
                          }
                    }
                    options={{
                        title:{
                        display:true,
                        text: 'Covid 19 Case Study',
                        fontSize:20
                        },
                        legend:{
                        display:true,
                        position:'right'
                        }
                    }}
                />
            }
            </CardContent>
        </Card>
    )
}

export default Charts;