import React from 'react';

import { makeStyles, Typography, Grid, Box, GridList, GridListTile } from '@material-ui/core';
import fabrica from '../resources/fabrica.png'

const useStyles = makeStyles((theme) => ({
    root: {
        borderColor: '#F0F0F0',
        borderTopStyle: 'double',
        flexGrow: 1,
        paddingRight: '4vw',
        paddingLeft: '9vw',
        overflow: 'hidden',
    },
    imgFabrica: {
        // paddingTop: '2em',
        maxHeight: '21vw',
        // minHeight: '280px',
        padding: '20px 0px 0px 30px',
    },
}));

export default function Sobre() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid item xs={12}>
                <Box fontSize="h3.fontSize" fontWeight="fontWeightBold" m={2} style={{ marginLeft: '20vw' }} >Sobre a VieliTech </Box>
            </Grid>
            <Grid container >
                <Grid item xs={4} style={{ textAlign: 'left' }}>
                    <img className={classes.imgFabrica} src={fabrica} />
                </Grid>
                <Grid item xs={8}>
                    <Typography variant='div' style={{ textAlign: 'flex-start' }} >
                        <Box fontSize="h6.fontSize" m={2}>A VieliTech nasceu da necessidade da indústria por soluções inteligentes para otimizar processos e aumentar produtividade.</Box>
                        <Box fontSize="h6.fontSize" m={2}>A VieliTech apesar de ser uma empresa nova, traz consigo toda a experiência de mais de 20 anos da empresa Vieli Consultoria industrial no setor moveleiro.</Box>
                        <Box fontSize="h6.fontSize" m={2}>Nossa missão é desenvolver tecnologia para aumentar produtividade e reduzir custos para a industria. Temos como objetivo colocar a industria brasileira em um novo patamar de produtividade.   </Box>
                    </Typography>
                </Grid>
            </Grid>
        </div>

    );
}
