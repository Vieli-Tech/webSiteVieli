import React from 'react';

import { makeStyles, Typography, Grid, Box, GridList, GridListTile } from '@material-ui/core';
import fundo1 from '../resources/fundo1.png'
import fabrica from '../resources/fabrica.png'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingRight: '4vw',
        paddingLeft: '9vw',
        overflow: 'hidden',
    },
    imgFabrica: {
        // paddingTop: '2em',
        maxHeight: '21vw',
        minHeight: '280px',
        paddingLeft: '5em',
        paddingRight: '5em',
    },
    gridList: {
        height: 350,
    },

}));

export default function Sobre() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid item xs={12}>
                <Box fontSize="h3.fontSize" fontWeight="fontWeightBold" m={2} >Sobre a VieliTech </Box>
            </Grid>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
                <Grid item xs={6}>
                    <Typography variant='div'>
                        <Box fontSize="body1.fontSize" m={2}>A VieliTech nasceu da necessidade da indústria por soluções inteligentes para otimizar processos e aumentar produtividade.</Box>
                        <Box fontSize="body1.fontSize" m={2}>A VieliTech apesar de ser uma empresa nova, traz consigo toda a experiência de mais de 20 anos da empresa Vieli Consultoria industrial no setor moveleiro.</Box>
                        <Box fontSize="body1.fontSize" m={2}>Nossa missão é desenvolver tecnologia para aumentar produtividade e reduzir custos para a industria. Temos como objetivo colocar a industria brasileira em um novo patamar de produtividade.   </Box>
                    </Typography>
                </Grid>
                <Grid item xs={6} style={{ textAlign: 'left' }}>
                    <img className={classes.imgFabrica} src={fabrica} />
                </Grid>
            </GridList>
        </div>

    );
}
