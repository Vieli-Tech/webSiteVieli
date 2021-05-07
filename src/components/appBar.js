import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import vieliLogoSM from '../resources/logo_SM_vieli.png'
import { SocialIcon } from 'react-social-icons';


const StyledAppBar = styled(AppBar)`
  background-color: green;
  color: white;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 2px 14px;
  &:hover {
    background-color: green;
  }
`;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },
    title: {
        flexGrow: 1,
        alignItems: 'center',
        marginLeft: '10px',
    },
    vielitech: {

        fontWeight: 'bold',
    },
    linkedin: {
        width: "auto",
        height: "50%",
    },
}));

export default function AppTopBar(props) {
    const classes = useStyles();

    return (
        <StyledAppBar position="fixed"
        >
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <img src={vieliLogoSM} height="35" />
                <Typography variant="h6" className={classes.title}>
                    <span className={classes.vielitech} >VieliTech</span>
                </Typography>
                {/* <Button color="inherit">Login</Button> */}
                {/* <SocialIcon className={classes.linkedin} url="https://linkedin.com/company/vielitech" bgColor="white" /> */}
            </Toolbar>
        </StyledAppBar>
    );
}
