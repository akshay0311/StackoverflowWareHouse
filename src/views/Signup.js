import React from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import {makeStyles} from "@material-ui/core/styles"; 
import GoogleLogo from "../images/logo2.png";
import GithubLogo from "../images/logo4.svg";
import FacebookLogo from "../images/logo6.webp";
import Card from "../components/SimpleCard";
import ReCAPTCHA from "react-google-recaptcha";


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
        background : "white",
        width : "40%",
        minWidth : '280px',
        fontSize : "12px",
        '&:hover': {background:"white" }
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
    leftHeader : {
        marginBottom: theme.spacing(0),
        marginLeft : theme.spacing(2),
        fontSize: "27px",
        fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif'
    },
    listItem : {
        fontSize : '15px'
    },
    listItemText : {
        marginLeft: theme.spacing(-1)
    },
    listIcon : {
        marginRight : theme.spacing(-1.5)
    },
    label : {
        float : "left",
        marginBottom: theme.spacing(1)
    },
    card: {   
        alignItems: window.innerWidth > 800 ? 'left' : 'center',
        display : "flex",
        flexDirection : "column", 
        marginLeft: theme.spacing(1.5)
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
            width : "95%",
            '&:hover': {
                background : "#0077cc"
        },
    },
    icon : {
        color : '#0095FF',
    },
    policy : {
        fontSize : '13px'
    },
    login: {
        fontSize: '15px',
        textDecoration : 'none',
        marginLeft : theme.spacing(0.5)
    },
    loginWrapper : {
        display : 'flex',
        marginLeft: theme.spacing(4)
    }
}))

function Signup() {
    const classes = useStyles();
    const [email, setEmail] = React.useState(null);
    const [username, setUsername] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    function captchaLoaded () {
        console.log(`Captcha Loaded`);
    }

    const handleForm = async (e) => {
        e.preventDefault();
    }
    
    const CardContent = () => (
        <div className={classes.cardContent}>
            <form onSubmit={(e)=> handleForm(e)}>
                <div>
                    <strong className={classes.label}>Display name</strong><br/>
                    <TextField 
                    variant="outlined" 
                    className= {classes.textField} 
                    InputLabelProps={{shrink: false}} 
                    size="small"
                    onChange={(e)=> setUsername(e.target.value)}/>
                </div><br/>
                <div>
                    <strong className={classes.label}>Email</strong><br/>
                    <TextField 
                    variant = "outlined" 
                    className= {classes.textField} 
                    InputLabelProps={{shrink: false}} 
                    size="small"
                    onChange={(e)=> setEmail(e.target.value)}/>
                </div><br/>
                <div>
                    <strong className={classes.label}>Password</strong><br/>
                    <TextField 
                    variant = "outlined" 
                    className= {classes.textField} 
                    InputLabelProps={{shrink: false}} 
                    size="small"
                    onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <div className={classes.passwordInfo}>
                Passwords must contain at least eight characters, including at least 1 letter and 1 number.
                </div><br/>
                <div className={classes.reCaptcha}>
                    <ReCAPTCHA
                        sitekey="6LdhgKEaAAAAACJdYgPD3obsJvG3LYqtzkVa1KJV"
                        onChange={captchaLoaded}
                    /> 
                </div>
                <br/>
                <Button type='submit' varaint = "contained" className={classes.signupButton}>Signup Up</Button>
            </form> 
            <br/>
            <p className={classes.policy}>By clicking “Sign up”, you agree to our terms of service, privacy policy and cookie policy</p>   
        </div>    
    )

  

    return (
        <Grid container spacing={0}>
            <Grid item sm={5} xs={12}>
            </Grid>
            <Grid item sm={7} xs={12}>
                <div className={classes.buttons}>
                    <Button variant="contained" className={classes.googleButton} startIcon = {<img src={GoogleLogo} className={classes.logo} alt="logo"/>}
                    >Sign up with Google</Button><br/>
                    <Button variant="contained" className={classes.gitButton} startIcon = {<img src={GithubLogo} className={classes.logo}  alt="logo"/>}>
                    Sign up with Github</Button><br/>
                    <Button variant="contained" className={classes.fbButton} startIcon = {<img src={FacebookLogo} className={classes.fbLogo}  alt="logo"/>}>
                    Sign up with Facebook</Button><br/>
                </div>
                <br/>
            </Grid>
            <Grid item sm={2} xs={12} className={classes.leftColumn}>
            </Grid>
            { window.innerWidth > 800 &&
                <Grid item sm={5} xs={12}>
                <div>
                <p className={classes.leftHeader}>Join the Stack Overflow community</p>
                <List>
                    {
                    [{text:"Get unstuck — ask a question",icon:"announcement"},
                    {text:"Unlock new privileges like voting and commenting",icon:"eject"},
                    {text:"Save your favorite tags, filters, and jobs",icon:"local_offer"},
                    {text:"Earn reputation and badges",icon:"announcement"},
                    ].map((listItem)=>(
                        <ListItem className={classes.listItem}>
                            <ListItemIcon className = {classes.listIcon}>
                                <Icon className={classes.icon}>{listItem.icon}</Icon>
                            </ListItemIcon>
                            <ListItemText primary={listItem.text} className={classes.listItemText} />
                        </ListItem>
                    ))
                }
                </List>
                </div>
                </Grid>
            }
            <Grid item sm={5} xs={12}>
                <div className={classes.card}>
                    <Card content={CardContent()} cardWidth="58%"/>
                    <div className={classes.loginWrapper}>
                        <p className={classes.login}>Already have an account? 
                        <a href="/" className={classes.login}>Log in</a></p>
                    </div>    
                </div>
            </Grid>
        </Grid>
    )
}

export default Signup;
