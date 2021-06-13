import React from 'react'
import {makeStyles} from "@material-ui/core/styles"; 
import HomeHeader from "../components/HomeHeader";
import Footer from "../components/Footer.js";
import heroBg from "../images/hero-bg.jpg";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme)=>({
    container : {
        position: "relative",
    },
    img: {
        height: "500px",
        width: "100%"
    },
    description : {
        position: "absolute",
        top: "30%",
        left: "57%",
        transform: "translate(-50%, -50%)",
        fontSize : "40px",
        fontWeight: "bold"
    },
    getStartedButton : {
        position: "absolute",
        top: "50%",
        left: "45%",
        background: "#0095FF",
        color: "white",
        fontSize: "20px",
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            top: "55%",
            left: "25%"
        },
        '&:hover':{
            background : "#0095FF"
        }
    },
    getStartedLink: {
        textDecoration: "none"
    },
    aboutUsSection : {
        textAlign: "center"
    },
    aboutUs: {
        fontSize: "40px",
    },
    aboutUsText: {
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(8)
    }
}))
function Home() {
    const classes = useStyles();
    return (
        <div>
            <HomeHeader/>
            <section>
                <div className={classes.container}>
                    <img src = {heroBg} className={classes.img}/>
                    <span className={classes.description}>One place to keep all your Stackoverflow bookmarks</span>
                    <a href="/signup" className={classes.getStartedLink}>
                        <Button className={classes.getStartedButton}>GET STARTED</Button>
                    </a>
                </div>
            </section>
            <br/><br/>
            <section className={classes.aboutUsSection}>
                <div>
                    <span className = {classes.aboutUs}>About us</span>
                    <br/><br/>
                    <div className={classes.aboutUsText}>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                        fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum.
                    </div>
                </div>
            </section>
            <br/>
            <br/>
            <section>
                <Footer/>
            </section>
        </div>
    )
}

export default Home;
