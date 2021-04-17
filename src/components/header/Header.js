import React from 'react'
import logo from "../../images/logo.png";
import logoText from "../../images/logo-stackoverflow.png";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import SideMenu from "../sidemenu/SideMenu";
import {autocompleteItems} from "./autoCompleteItems";
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
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    logo: {
        width:"50px",
        paddingBottom: theme.spacing(2),
        '&:hover':{
            cursor: 'pointer',
        }
    },
    logoText: {
        width : "120px",
        paddingBottom: theme.spacing(2),
        '&:hover':{
            cursor: 'pointer',
        }
    },
    paper: {
        marginLeft: theme.spacing(6),
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        width: 750,
        height: 34,
        border:"1px solid lightGrey"
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    menu: {
        color:"#7C8186",
        float: "left",
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
        marginTop: theme.spacing(5)
    },
    dropDownMenuPaper:{
        width: 540,
    },
    autocompleteItem : {
        padding : theme.spacing(0.5)
    },
    autocompleteItem1 : {
        fontFamily : 'consolas',
        fontSize : '13px'
    },
    autocompleteItemText2 : {
        fontFamily: 'arial',
        fontSize : '13px',
        color: '#9fa6ad'
    },
    autoCompleteAction: {
       marginBottom : theme.spacing(3),
    },
    autoCompleteButton: {
        float: 'left',
    },
    autoCompleteLink: {
        float: 'right'
    },
    askQBtn : {
        fontSize : '10px',
        background: '#DEEBF3',
        padding : theme.spacing(0.8),
        border: "1px solid",
        borderColor: "#7AA7C7",
        boxShadow: 'none',
        '&:hover' : {
            background:"#b3d3ea",
        },
        marginLeft : theme.spacing(2),
        marginBottom : theme.spacing(2)
    },
    link : {
        color: '#39739D',
        textDecoration: 'none'
    },
    searchLink : {
        color: '#39739D',
        textDecoration: 'none',
        fontSize : '14px',
        marginRight: theme.spacing(2),
        marginTop : theme.spacing(5)
    },
    hr : {
        marginTop :theme.spacing(3),
        marginBottom : theme.spacing(1),
        backgroundColor: 'lightGrey',
        border: 'none',
        height: "0.5px"
    }
}));




export default function Header({width}) {
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

    const AutocompleteSection = () => (
        <>
            <Grid container spacing={0}>
                    { autocompleteItems.map((element)=> (
                        <Grid item xs={6}>
                            <div className={classes.autocompleteItem}>
                                <span className={classes.autocompleteItemText1}>{element.text1}</span>&nbsp;
                                <span className={classes.autocompleteItemText2}>{element.text2}</span>
                            </div>
                        </Grid>
                        ))
                    }  
            </Grid>
            <hr className= {classes.hr}/>
            <div className={classes.autoCompleteAction}>
                <div className={classes.autoCompleteButton}>
                    <a href="/" className={classes.link}>
                        <Button variant='contained' className={classes.askQBtn}>
                            Ask a question
                        </Button>
                    </a>    
            </div>
                <div className={classes.autoCompleteLink}>
                    <a href="/" className={classes.searchLink}>
                        Search help
                    </a>
                </div>
            </div>
        </>
    )

    return (
        <div className = {classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleLeftMenu}>
                        {leftMenu?<ClearIcon className={classes.menuButton}/>:<MenuIcon  className={classes.menuButton}/>}
                        <SideMenu anchorState={anchorState}/>
                    </IconButton>
                    <img src={logo} className={classes.logo} alt="logo"/>
                    {width > 800 && <img src = {logoText} className={classes.logoText}/>}
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
                                {AutocompleteSection()}
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