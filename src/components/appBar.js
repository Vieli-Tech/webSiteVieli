import React from 'react';
import {
    makeStyles,
    MenuItem,
    IconButton,
    Button,
    AppBar,
    Toolbar,
    Typography,
    Paper,
    MenuList,
    Popper,
    Grow,
    ClickAwayListener,
} from '@material-ui/core';
import styled from 'styled-components';
import vieliLogoSM from '../resources/logo_SM_vieli.png'
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const StyledAppBar = styled(AppBar)`
  background-color: green;
  color: white;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 2px 14px;
  &:hover {
    background-color: green;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  padding: 0px 15px 0px 15px;
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
        color: 'white',
        fontWeight: 'bold',
    },
    linkedin: {
        width: "auto",
        height: "50%",
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));

export default function AppTopBar(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <StyledAppBar position="fixed"
        >
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    {/* <MenuIcon /> */}
                </IconButton>
                <img src={vieliLogoSM} height="35" />
                <Typography variant="h6" className={classes.title}>
                    <span className={classes.vielitech} >VieliTech</span>
                </Typography>
                <Button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                >
                    <span className={classes.vielitech} >Contato</span>
                </Button>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown} style={{ padding: '0px' }} >
                                        <StyledMenuItem onClick={handleClose}>
                                            <CallIcon />
                                            <h5>  +55 (47) 3635-5587 </h5>
                                        </StyledMenuItem>
                                        <StyledMenuItem onClick={handleClose}>
                                            <MailOutlineIcon />
                                            <h5> contato@vielitech.com.br </h5>
                                        </StyledMenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </Toolbar >
        </StyledAppBar >
    );
}
