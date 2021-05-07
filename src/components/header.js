import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import vieliLogoXL from '../resources/logo_XL_vieli.png'

const useStyles = makeStyles((theme) => ({
    logoXL: {
        padding: '6px',
        marginTop: '5em',
        marginBottom: '3em',
        width: '50vw',
        height: 'auto',
    },
}));

export default function He() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container justify='center' maxWidth='lg'>
                <Grid item >
                    <img className={classes.logoXL} src={vieliLogoXL} />
                </Grid>
            </Grid>
        </React.Fragment >
    );
}
