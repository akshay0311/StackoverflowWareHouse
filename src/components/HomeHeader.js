import React from 'react';
import SideMenu from "./sidemenu/SideMenu";
import {makeStyles} from "@material-ui/core/styles"; 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import logo from "../images/logo.png";
import logoText from "../images/logo-stackoverflow.png";

const useStyles = makeStyles((theme)=>({
    root: {
   /*      background:"#FAFAFB", */
        background: "white",
        color: "black",
        paddingTop: theme.spacing(0.5)
    },
    logo: {
        [theme.breakpoints.down('sm')]:{
            width: '40px',
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1)
        },
        width:"50px",
        
        '&:hover':{
            cursor: 'pointer',
        }
    },
    logoText: {
        width : "120px",
        paddingBottom: theme.spacing(1.5),
        '&:hover':{
            cursor: 'pointer',
        }
    },
    list: {
        width: 200
    },
    listItemText:{
    margin: 0,
    marginLeft: theme.spacing(3),
    '&:hover': {
        cursor: 'pointer',
        background: "lightGrey"
    }
    },
    title : {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
        flexGrow: 0.8,
        marginLeft : theme.spacing(8),
        fontSize: "22px"
    },
    menu : {
        [theme.breakpoints.down('sm')]: {
            display : 'none'
        }
    },
    menuItem: {
        marginRight: theme.spacing(4),
        textDecoration: "none",
        color: "black"
    },
    menuIcon : {
        [theme.breakpoints.up('sm')]: {
            display : 'none',
            float: "right"
        },
    },
    getStartedButton : {
        [theme.breakpoints.down('sm')]: {
            display : 'none'
        },
        background: "#0095FF",
        color: "white",
        '&:hover':{
        background : "#0095FF"
        }
    },
    getStartedLink : {
        textDecoration: "none"
    }
}))

function HomeHeader() {
    const [anchorState, setAnchorState] = React.useState(false);

    const handleClick = () => {
        setAnchorState(!anchorState)
    }

    const headerMenu = () => (
        <List className={classes.list}>
            {["HOME","ABOUT","GET EXTENSION", "CONTACT"].map((text, index) => (
                <ListItem key={text}>
                    <ListItemText className={classes.listItemText} secondary={text} />
                </ListItem>
            ))}
        </List>
    )

    const classes = useStyles();
    return (
        <AppBar position="static" elevation={0} className={classes.root}>
            <Toolbar>
                <div className={classes.title}>
                    <img src={logo} className={classes.logo} alt="logo"/>
                    <img src = {logoText} className={classes.logoText}/>
                </div>
                <div className={classes.menu}>
                    <a href="#" className={classes.menuItem}>HOME</a>
                    <a href="#" className={classes.menuItem}>ABOUT</a>
                    <a href="#" className={classes.menuItem}>GET EXTENSION</a>
                </div>
                <a href="/signup" className={classes.getStartedLink}>
                    <Button elevation = {0} className={classes.getStartedButton}>Get Started</Button>
                </a>
                <IconButton edge="start" className={classes.menuButton} className={classes.menuIcon} onClick={handleClick}>
                    <MenuIcon/>
                    <SideMenu anchorState={anchorState} headerSideMenuContent = {headerMenu()}/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default HomeHeader
