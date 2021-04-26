import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import fundo1 from '../resources/fundo1.png'
import vieliLogoXL from '../resources/logo_XL_vieli.png'
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    logoXL: {
        marginTop: '130px',
        height: '30em',
    },
}));

export default function He() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="m">
                <div style={{ textAlign: "center" }}>
                    <img className={classes.logoXL} src={vieliLogoXL} />
                </div>
            </Container>
        </React.Fragment >
    );
}
