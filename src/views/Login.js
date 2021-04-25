import React from 'react';
import Card from "../components/SimpleCard";
import {makeStyles} from "@material-ui/core/styles"; 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Logo from "../images/logo.png";
import GoogleLogo from "../images/logo2.png";
import GithubLogo from "../images/logo4.svg";
import FacebookLogo from "../images/fb_logo.png";
import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme)=>({
    root:{
        textAlign : "center",
        alignItems : "center",
        display : "flex",
        flexDirection : "column"
    },
    image: {
        height:"50px",
        width: "50px",
        marginTop : theme.spacing(3)
    },
    logo : {
        height: "25px",
        width : "25px"
    },
    fbLogo : {
        height : "20px",
        width : "20px"
    },
    googleButton : {
        boxShadow : "none",
        background : "#E8E8E8",
        width : "20%",
        minWidth : '280px',
        fontSize : "12px",
        '&:hover': {background:"#E8E8E8" }
    },
    gitButton : {
        boxShadow : "none",
        background : "#242729",
        color : "white",
        width : "20%",
        minWidth : '280px',
        fontSize : "12px",
        '&:hover': {background:"#242729" }
    },
    fbButton : {
        boxShadow : "none",
        background : "#385499",
        color : "white",
        width : '20%',
        minWidth : '280px',
        fontSize : "12px",
        '&:hover': {background:"#385499" }
    },
    loginButton : {
        background:"#0095FF",
        color : "white",
        marginBottom : theme.spacing(1),
        marginLeft : theme.spacing(0.8),
        width : "105%",
        '&:hover': {
            background : "#0077cc"
        }
    },
    cardContent: {
        paddingRight: theme.spacing(3)
    },
    label : {
        float : "left",
        marginBottom: theme.spacing(1)
    },
    textField: {
        width : "110%"
    },
    signUp: {
        fontFamily:'Arial, "Helvetica Neue", Helvetica, sans-serif',
        fontSize: '13px',
        marginBottom : theme.spacing(1.5)
    },
    signUpLink: { 
        textDecoration : "none",
        color: "#008AD6",
    }
}))


function Login(props) {
    const classes = useStyles();
    const CardContent = () => (
        <div className={classes.cardContent}>
            <div>
                <strong className={classes.label}>Email</strong><br/>
                <TextField variant="outlined" className= {classes.textField} InputLabelProps={{shrink: false}} size="small"/>
            </div><br/>
            <div>
                <strong className={classes.label}>Password</strong><br/>
                <TextField variant = "outlined" className= {classes.textField} InputLabelProps={{shrink: false}} size="small"/>
            </div>
            <br/><br/>
            <Button variant = "contained" className={classes.loginButton}>Login</Button>
        </div>    
    )
    
    return (
        <Grid container>
            <Grid item sm={4} xs={12}></Grid>
            <Grid item sm={5} xs={12}>
                <div className={classes.root}>
                    <img src={Logo} className={classes.image} alt="logo"/><br/>
                    <Button variant="contained" className={classes.googleButton} startIcon = {<img src={GoogleLogo} className={classes.logo} alt="logo"/>}
                    >Login in with Google</Button><br/>
                    <Button variant="contained" className={classes.gitButton} startIcon = {<img src={GithubLogo} className={classes.logo}  alt="logo"/>}>
                    Login in with Github</Button><br/>
                    <Button variant="contained" className={classes.fbButton} startIcon = {<img src={FacebookLogo} className={classes.fbLogo}  alt="logo"/>}>Login in with Facebook</Button><br/>
                    <br/>
                    <Card content={CardContent()} width="23%"/><br/>
                    <div className = {classes.signUp}>Don’t have an account? {' '}
                        <Link to="/signup" className = {classes.signUpLink}>Sign up</Link> 
                    </div><br/><br/>
                </div>
            </Grid>   
            <Grid item sm={3} xs={12}></Grid> 
        </Grid>    
    )
}

export default Login;
