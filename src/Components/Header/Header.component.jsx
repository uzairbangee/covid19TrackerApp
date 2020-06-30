import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, {Fragment, useContext, useState, useEffect} from 'react';
import Switch from '@material-ui/core/Switch';
import {ActionContext} from '../../Context/GlobalState';




const Header = () => {
    const {mode, dispatch} = useContext(ActionContext);

    const handleChange = () => {

        dispatch({
            type: "UPDATE_MODE",
            payload : mode === "light" ? "dark" : 'light',
        })
    }

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit">
                COVID 19 APP
                </Typography>
                <Switch
                    onChange={handleChange}
                    name="mode"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
            </Toolbar>
        </AppBar>
    )
}

export default Header