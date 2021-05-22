import React from 'react'
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles"; 

const useStyles = makeStyles((theme)=>({
    root: {
        background: "#242729",
        paddingTop : theme.spacing(3)
    },
    textColor: {
        color: "white"
    },
    address: {
        paddingLeft : theme.spacing(4)
    },
    list: {
        width: 250,
    },
    listItemText:{
        color: "white",
        margin: 0,
        marginLeft: theme.spacing(3),
        '&:hover': {
            cursor: 'pointer',
        }
    },
    link : {
        listStyleType: "none",
        color: "white",
        fontSize: "18px",
        marginBottom : theme.spacing(2)
    }
}))
function Footer() {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item sm={4} className={classes.address}>
                <h1 className={classes.textColor}>OnePage</h1> 
                <p  className={classes.textColor}>A108 Adam Street
                    New York, NY 535022
                    United States

                    Phone: +1 5589 55488 55
                    Email: info@example.com
                </p>
            </Grid>
            <Grid item sm={4}> 
                {['Home','BookMarked Questions', 'All Questions'].map((text, index) => (
                <ul>
                    <li className={classes.link}>{text}</li>
                </ul>
                ))}
            </Grid>
            <Grid item sm={4}>
                {['Home','BookMarked Questions', 'All Questions'].map((text, index) => (
                <ul>
                    <li className={classes.link}>{text}</li>
                </ul>
                ))}
            </Grid>
        </Grid>
    )
}

export default Footer
