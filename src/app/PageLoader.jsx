/* eslint-disable no-restricted-imports */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
    progress: {
        margin: theme.spacing(2),
    },
}));

export default function PageLoader() {
    const classes = useStyles();

    return (
        <div className="d-flex flex-column-fluid flex-loader">
            <CircularProgress className={classes.progress} color="secondary" />
        </div>
    );
}