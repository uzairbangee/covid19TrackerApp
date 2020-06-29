import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    pos: {
      marginBottom: 12,
      textAlign: 'center',
    },
  });


const Box = (props) => {
    const classes = useStyles();


    return (
        <Fragment>
            <Grid item xs>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {props.heading}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      <CountUp start={0} end={props.count} duration={2.75} separator="," />
                    </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Fragment>
    )
}

export default Box;