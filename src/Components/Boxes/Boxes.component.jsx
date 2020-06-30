import React, {useContext, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from "../Box/Box.component";
import {ActionContext} from '../../Context/GlobalState';
import { updateDataGlobal } from "../../Api";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Boxes = () => {
    const classes = useStyles();
    const {data, dispatch} = useContext(ActionContext);

    useEffect(() => {
      (async () => {
        dispatch(await updateDataGlobal())
      })();

    }, []);
  
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Box heading={"Total Case"} count={data.confirmed}/>
          <Box heading={"Total Recoverd"} count={data.recovered}/>
          <Box heading={"Total Death"} count={data.death}/>
        </Grid>
      </div>
    );
  }

  export default Boxes;