import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import fundo1 from '../resources/fundo1.png'

const useStyles = makeStyles((theme) => ({
    logoXL: {
        marginTop: '130px',
        height: '30em',
    },
}));

export default function Sobre() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <h2>Sobre a VieliTech</h2>
            <p>A VieliTech nasceu da necessidade da indústria por soluções inteligentes para otimizar processos e aumentar produtividade.</p>
            <p>A VieliTech apesar de ser uma empresa nova, traz consigo toda a experiência de mais de 20 anos da empresa Vieli Consultoria industrial no setor moveleiro</p>
        </React.Fragment >
    );
}
