import React, {useRef} from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import {makeStyles} from "@material-ui/core/styles"; 
import GoogleLogo from "../images/logo2.png";
import FacebookLogo from "../images/fb_logo.png";
import Card from "../components/SimpleCard";
import { useAuth } from "../contexts/authContext";
import {useHistory} from 'react-router-dom';
import {useMutation} from '@apollo/client';
import {ADD_USER} from "../queries/ADD_USER";

const useStyles = makeStyles((theme)=>({
    buttons:{
        alignItems: 'center',
        display : "flex",
        flexDirection : "column",
        paddingLeft : theme.spacing(0),
        paddingTop : theme.spacing(3)
    },
    fbLogo : {
        height : "20px",
        width : "20px"
    },
    googleButton : {
        boxShadow : "none",
        background : "#E8E8E8",
        width : "40%",
        minWidth : '280px',
        fontSize : "12px",
        '&:hover': {background:"#E8E8E8" }
    },
    gitButton : {
        boxShadow : "none",
        background : "#242729",
        width : "40%",
        minWidth : '280px',
        color : "white",
        fontSize : "12px",
        '&:hover': {background:"#242729" }
    },
    fbButton : {
        boxShadow : "none",
        background : "#385499",
        width : "40%",
        minWidth : '280px',
        color : "white",
        fontSize : "12px",
        '&:hover': {background:"#385499" }
    },
    
    logo : {
        height: "25px",
        width : "25px"
    },
    label : {
        float : "left",
        marginBottom: theme.spacing(1)
    },
    card: {   
        alignItems: 'center',
        display : "flex",
        flexDirection : "column", 
    },
    textField: {
        width : "100%"
    },
    passwordInfo : {
        fontSize : "12px",
        fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
        color : "#6A737C",
        marginTop : theme.spacing(1)
    },
    reCaptcha: {
        width: "100%"
    },
    signupButton: {
            background:"#0095FF",
            color : "white",
            marginBottom : theme.spacing(1),
            marginLeft : theme.spacing(0.8),
            width : "100%",
            '&:hover': {
                background : "#0077cc"
        },
    },
    icon : {
        color : '#0095FF',
    },
    login: {
        fontSize: '15px',
        textDecoration : 'none',
        marginLeft : theme.spacing(0.5),
    },
    loginLink : {
        fontSize: '15px',
        textDecoration : 'none',
        marginLeft : theme.spacing(0.5),
        color: "#008AD6"
    },
    loginWrapper : {
        display : 'flex',
        marginLeft: theme.spacing(4)
    }
}))

function Signup() {
    const classes = useStyles();
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signup} = useAuth();
    const history = useHistory();
    const [addUser, { data }] = useMutation(ADD_USER);

    const handleSignup = async (e) => {
        e.preventDefault();
        await signup(emailRef.current.value, passwordRef.current.value);
        addUser({ variables: { username: emailRef.current.value, password: passwordRef.current.value} });
        history.push("/");
    }
    const CardContent = () => (
        <div className={classes.cardContent}>
            <form>
                <div>
                    <strong className={classes.label}>Email</strong><br/>
                    <TextField 
                    variant = "outlined" 
                    className= {classes.textField} 
                    InputLabelProps={{shrink: false}} 
                    size="small"
                    inputRef = {emailRef}/>
                </div><br/>
                <div>
                    <strong className={classes.label}>Password</strong><br/>
                    <TextField 
                    variant = "outlined" 
                    className= {classes.textField} 
                    InputLabelProps={{shrink: false}} 
                    size="small"
                    inputRef = {passwordRef}/>
                </div>
                <div className={classes.passwordInfo}>
                Passwords must contain at least eight characters, including at least 1 letter and 1 number.
                </div>
                <br/><br/>
                <Button type='submit' varaint = "contained" className={classes.signupButton} onClick={handleSignup}>Signup Up</Button>
            </form> 
            <br/>
        </div>    
    )

  

    return (
        <Grid container spacing={0}>
            <Grid item sm={4} xs={12}>
            </Grid>
            <Grid item sm={5} xs={12}>
                <div className={classes.buttons}>
                    <Button variant="contained" className={classes.googleButton} startIcon = {<img src={GoogleLogo} className={classes.logo} alt="logo"/>}
                    >Sign up with Google</Button><br/>
                    <Button variant="contained" className={classes.fbButton} startIcon = {<img src={FacebookLogo} className={classes.fbLogo}  alt="logo"/>}>
                    Sign up with Facebook</Button><br/>
                </div>
                <br/>
            </Grid>
            <Grid item sm={3} xs={12}></Grid>
            <Grid item sm={4} xs={12}>
            </Grid>
            <Grid item sm={5} xs={12}>
                <div className={classes.card}>
                    <Card content={CardContent()} cardWidth="30%"/>
                    <div className={classes.loginWrapper}>
                        <p className={classes.login}>Already have an account? 
                        <a href="/" className={classes.loginLink}>Log in</a></p>
                    </div>    
                </div>
            </Grid>
            <Grid item sm={3}></Grid>
        </Grid>
    )
}

export default Signup;
