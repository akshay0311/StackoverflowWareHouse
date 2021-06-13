import React from 'react'
import logo from "../../images/logo.png";
import logoText from "../../images/logo-stackoverflow.png";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import SideMenu from "../sidemenu/SideMenu";
import Autocomplete from '@material-ui/lab/Autocomplete';
import {autocompleteTags} from "./autoCompleteTags";
import TextField from '@material-ui/core/TextField';
import { useAuth } from "../../contexts/authContext";
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';


const useStyles = makeStyles((theme)=>({
    root : {
        flexGrow: 1,
        marginBottom : theme.spacing(8)
    },
    appBar:{
        height:55,
        background:"#FAFAFB",
        boxShadow: "none",
    },
    menuButton: {
        marginRight: theme.spacing(-2),
        color:"#848D95",
        paddingBottom: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    logo: {
        [theme.breakpoints.down('sm')]:{
            width: '40px',
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1)
        },
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
        [theme.breakpoints.down('sm')] : {
            width : 130,
            marginLeft:0
        },
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
        padding: theme.spacing(0.9),
        marginBottom: theme.spacing(1),
        fontSize: "11px",
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
        fontSize: "11px",
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
        marginTop: theme.spacing(5),
    },
    dropDownMenuPaper:{
        width: 540,
    },
    searchBar: {
        height : '40px',
        background : '#F8F8F8',
        marginLeft : theme.spacing(2),
        marginBottom : theme.spacing(2)
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
    autoComplete : {
        marginLeft : theme.spacing(3),
        marginRight : theme.spacing(3)
    },
    link: {
        textDecoration: "none"
    }
}));




export default function Header({width}) {
    const classes = useStyles();
    const [anchorState, setAnchorState] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [leftMenu, setLeftMenu] = React.useState(false);
    
    const history = useHistory();
    const {logout, currentUser} = useAuth();

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

    const handleSignout = () => {
        history.push("/");
        logout()
    }

    const AutocompleteSection = () => (
        <div className = {classes.autoComplete}>
            <Autocomplete
            multiple
            id="tags-standard"
            options={autocompleteTags}
            getOptionLabel={(option) => option.tag}
            renderInput={(params) => (
            <TextField
                {...params}
                variant="standard"
                label="Search By Tags"
                placeholder="Tags"
            />
            )}/>
            <br/>
            <Button variant='contained' className={classes.askQBtn}>
                Search
            </Button>  
        </div>    
    )
    return (
        <div className = {classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
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
                            disabled
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
                    {
                        window.location.pathname !== "/records" ?
                        <>
                            <Link to ="/"  className={classes.link}>
                                <Button variant="contained" className={classes.loginInButton}>Log in</Button>
                            </Link>
                            <Link to ="/signup"  className={classes.link}>
                                <Button variant="contained" className={classes.signUpButton}>Sign up</Button>
                            </Link>
                        </>
                        :
                        <>
                            <span style={{color: "black"}}>{currentUser.email}</span>
                            <Button variant="contained" className={classes.signUpButton}
                            onClick = {handleSignout}
                            >Log out</Button>
                        </>
                    }
                </Toolbar>
            </AppBar>
      </div>
    )
}