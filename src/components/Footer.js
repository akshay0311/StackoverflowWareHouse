import React from 'react'
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles"; 
const useStyles = makeStyles((theme)=>({
    root: {
        background: "#242729",
        paddingTop : theme.spacing(3)
    },
    textColor: {
        color: "#F5F5F5"
    },
    address: {
        paddingLeft : theme.spacing(4)
    },
    list: {
        width: 250,
    },
    listItemText:{
        color: "#F5F5F5",
        margin: 0,
        marginLeft: theme.spacing(3),
        '&:hover': {
            cursor: 'pointer',
        }
    },
    link : {
        listStyleType: "none",
        color: "#F8F8F8",
        fontSize: "16px",
        marginBottom : theme.spacing(3)
    },
    ul: {
        marginTop: theme.spacing(4)
    },
    a:{
        textDecoration: "none"
    }
}))
const menus = [{
               name: "HOME",
                link : "/home"
             },{
                name: "BOOKMARKED QUESTIONS",
                link: "/records"
            },
            {
                name: "ALL QUESTIONS",
                link: "https://stackoverflow.com/questions"
            }]
function Footer() {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item sm={4} className={classes.address}>
                <h1 className={classes.textColor}>StackoverflowWarehouse</h1> 
                <p  className={classes.textColor}>Church Road,
                    Indira Nagar,
                    Lucknow Pincode(226016)
                    India</p>
                   <p className={classes.textColor}> Phone: +91 7390980727 </p>
                    <p className={classes.textColor}>Email: mishraakshay859@gmail.com
                </p>
            </Grid>
            <Grid item sm={4}> 
                {menus.map((menu, index) => (
                <ul className={classes.ul}>
                    <a href = {menu.link} className={classes.a}>
                        <li className={classes.link}>{menu.name}</li>
                    </a>
                </ul>
                ))}
            </Grid>
        </Grid>
    )
}

export default Footer
