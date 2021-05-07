import React from 'react';
import { Grid, Paper, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import aponta from '../resources/apontamento.jpg';

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
        maxHeight: '35vw',
        minHeight: '200px',
        width: 'auto',
        borderRadius: '10%',
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
                            <p>Especificacoes tecnicas (paraBNDES)</p>
                        </Paper>
                        <Box m={3}></Box>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
