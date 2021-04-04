import React from 'react'
import logo from "./logo-stackoverflow.png";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import SideMenu from "../sidemenu/SideMenu";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme)=>({
    root : {
        flexGrow: 1
    },
    appBar:{
        height:55,
        background:"#FAFAFB",
        boxShadow: "none"
    },
    menuButton: {
        color:"#848D95",
        paddingBottom: theme.spacing(3)
    },
    image: {
        width:"150px",
        marginLeft: theme.spacing(1.5),
        paddingBottom: theme.spacing(2),
        '&:hover':{
            cursor: 'pointer',
        }
    },
    paper: {
        marginLeft: theme.spacing(3),
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        width: 590,
        height: 34,
        border:"1px solid lightGrey"
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    menu: {
        color:"#7C8186",
        paddingLeft: theme.spacing(4),
        paddingBottom: theme.spacing(1.5),
        '&:hover':{
            cursor: 'pointer',
        }
    },
    signUpButton:{
        padding: theme.spacing(0.8),
        marginBottom: theme.spacing(1),
        fontSize: "12px",
        marginLeft: theme.spacing(1.5),
        boxShadow: "none",
        background:"#0095FF",
        color: "white",
        '&:hover':{
            background:"#0077cc",
            boxShadow:"none"
        }
    },
    loginInButton:{
        padding: theme.spacing(0.8),
        marginBottom: theme.spacing(1),
        fontSize: "12px",
        border: "1px solid",
        borderColor: "#7AA7C7",
        marginLeft: theme.spacing(1.5),
        boxShadow: "none",
        background:"#E1ECF4",
        color: "#39739D",
        '&:hover':{
            background:"#b3d3ea",
            boxShadow:"none"
        }
    },
    dropDownMenu:{
        marginTop: theme.spacing(4)
    },
    dropDownMenuPaper:{
        width: 530
    }
}));

export default function Header() {
    const classes = useStyles();
    const [anchorState, setAnchorState] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [leftMenu, setLeftMenu] = React.useState(false);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleLeftMenu = () => {
        setLeftMenu(!leftMenu)
        setAnchorState(!anchorState)
    }


    return (
        <div className = {classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" onClick={handleLeftMenu}>
                        {leftMenu?<ClearIcon/>:<MenuIcon />}
                        <SideMenu anchorState={anchorState}/>
                    </IconButton>
                    <img src={logo} className={classes.image}/>
                    <Typography variant="h9" className={classes.menu}>
                        About
                    </Typography>
                    <Typography variant="h9" className={classes.menu}>
                        Product
                    </Typography>
                    <Typography variant="h9" className={classes.menu}>
                        For Teams
                    </Typography>
                    <Paper component="form" className={classes.paper} elevation={0}>
                        <IconButton className={classes.iconButton} aria-label="menu">
                            <SearchIcon/>
                        </IconButton>
                        <InputBase
                            className={classes.input}
                            placeholder="Search ..."
                            inputProps={{ 'aria-label': 'search google maps' }}
                            onClick={handleClick}
                        />
                         <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            className={classes.dropDownMenu}
                        >
                            <Paper elevation={0}  className={classes.dropDownMenuPaper}>
                                Hello D
                            </Paper>
                        </Menu>
                    </Paper>
                    <Button variant="contained" className={classes.loginInButton}>Log in</Button>
                    <Button variant="contained" className={classes.signUpButton}>Sign up</Button>
                </Toolbar>
            </AppBar>
      </div>
    )
}
