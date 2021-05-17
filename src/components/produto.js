import React from 'react';
import { Grid, Paper, Box, Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import aponta from '../resources/apontamento.jpg';
import cartaoBNDES from '../resources/img_cartao_BNDES.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        margin: '25px 25px 25px 40px',
        padding: '5px 20px 15px 35px',
    },
    control: {
        padding: theme.spacing(2),
    },
    titulo: {
        marginLeft: '5vw',
    },
    subtitulo: {
        marginLeft: '14vw',
    },
    aponta: {
        margin: '20px 0px 0px 60px',
        maxHeight: '33vw',
        minHeight: '200px',
        width: 'auto',
        borderRadius: '10%',
    },
    Img_Cartao: {
        borderRadius: '0%',
        width: '10vw',
        minWidth: '110px',
        height: 'auto',
        float: 'right',

    },
}));


export default function Produto() {
    const classes = useStyles();
    return (
        <React.Fragment >
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <h1 className={classes.titulo}>Solução</h1>
                    <h2 className={classes.subtitulo}>Sistema de Apontamento Eletrônico</h2>
                </Grid>
                <Grid container className={classes.root} spacing={1}>
                    <Grid item justify='flex-end' xs={3}>
                        <img className={classes.aponta} src={aponta} />
                    </Grid>
                    <Grid item xs={8}>
                        <Paper className={classes.paper} elevation={5}>
                            <h2>Acompanhamento em tempo real</h2>
                            <p>Acompanhamento em tempo real dos indicadores de OEE identificando facilmente gargalos na produção. O OEE é a medida para saber a eficiência global do equipamento, sendo composto por 3 indicadores, disponibilidade, performance e qualidade da produção.
                            </p>
                            <h2>Apontamento de paradas e retrabalhos e refugos</h2>
                            <p>Registro de tudo que acontece na produção, interligado com sistema de automação e bloquei de equipamento, sendo necessário o apontamento de motivos para retorno da produção gerendo informações mais consistente.</p>
                            <h2>Relatórios</h2>
                            <p>Relatórios com o histórico da performance da produção por máquina  e identificação dos maiores motivos de paradas e refugos, possibilitando a identificação dos motivos que geram baixa produtividade e gargalos.</p>
                            <h2>Fácil Interface para operador</h2>
                            <p>Possui tela TouchScreen para o operador, deixando simples e intuitiva a aplicação e interação com o usuário</p>
                            <Box m={3} />
                            <Grid container wrap="nowrap" spacing={1} xs={12} sm={12} direction="row" justify="flex-end" alignItems="start">
                                <Grid item xs={12} sm={12}  >
                                    <Avatar className={classes.Img_Cartao} src={cartaoBNDES} />
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <Typography variant='body2' style={{ fontWeight: 'bold' }}>Produto habilitado para compra através do cartão BNDES</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Box m={3}></Box>
                    </Grid>
                    <Box m={1} />
                </Grid>
            </Grid>
        </React.Fragment >
    );
}
