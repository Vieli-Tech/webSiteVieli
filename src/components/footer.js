import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            <Link color="inherit" href="https://www.vielitech.com.br/">
                www.vielitech.com.br
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
    info: {
        color: '#616161',
    },
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <footer className={classes.footer}>
                <Container>
                    <Typography className={classes.info} variant="body1">VieliTech   ||   Rua Carlos Preissler, 245 - São Bento do Sul – SC   ||
                        <Link href="tel:+55-47-3635-5587" variant="inherit"> +55 (47) 3635-5587 </Link>
                        ||
                        <Link href="mailto:contato@vielitech.com.br" target="_blank" variant="inherit">   contato@vielitech.com.br</Link>
                    </Typography>
                    <Copyright />
                </Container>
            </footer>
        </React.Fragment >
    );
}
