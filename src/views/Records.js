import React from 'react';
import Card from '../components/SimpleCard';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {makeStyles} from "@material-ui/core/styles"; 
import {RecordsData} from "../recordsData";
import {aboutListData} from "../aboutListData";
import {Create} from "@material-ui/icons";
import {List,ListItem,ListItemText} from "@material-ui/core";
import RecordAccordionDetail from "../components/RecordAccordionDetail";


const useStyles = makeStyles((theme)=>({
    root : {
        [theme.breakpoints.up('sm')]: {
            width : '100%',
            marginLeft : theme.spacing(-6.5)
        },
        marginTop : theme.spacing(0.5)
    },
    header : {
        borderBottom: '1px solid lightGrey',
        paddingBottom : theme.spacing(2),
        display : 'flex',
        flexDirection : 'column',
        paddingLeft: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            marginLeft : theme.spacing(-6),
            paddingLeft : theme.spacing(6)
        }
    },
    title : {
        fontSize : '26px',
        marginBottom : theme.spacing(2),
        fontFamily: 'Arial, Helvetica, sans-serif'
    },
    count : {
        fontSize : '15px'
    },
    votesCount : {
        fontSize: '20px',
        color:"#6A737C"
    },
    votesText : {
        fontSize : '13px',
        color:"#6A737C"
    },
    views : {
        display: 'flex',
        fontSize : '14px',
        color:"#6A737C"
    },
    accordionSummary : {
        display: 'flex',
    },
    accordionLeft : {
        marginTop: theme.spacing(1.2),
        [theme.breakpoints.down('sm')]: {
            paddingRight: theme.spacing(0.5)
        }   
    },
    accordionLeftDetails: {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center'
    },
    accordionCenter : {
        [theme.breakpoints.down('sm')]:{
            paddingLeft: theme.spacing(0.5),
        }
    },
    accordionRight : {
        [theme.breakpoints.down('sm')]:{
            display: 'none'
        },
        marginTop : theme.spacing(2),
        marginRight: theme.spacing(2),
    },
    questionHeader: {
        color: '#696969'
    },
    questionLink : {
        fontSize : "13px",
        textDecoration : 'none',
        color : "#0077CC",
        '&:hover':{
            color : '#0095FF'
        }
    },
    tagSection : {
        display: 'flex'
    },
    tag : {
        fontSize: '13px',
        padding : theme.spacing(0.5),
        background : "#E1ECF4",
        color : '#497EAB'
    },
    aboutTitle : {
        color : "#6A737C",
        fontSize: '15px',
        padding: theme.spacing(6),
        paddingBottom : theme.spacing(1.5),
        margin : theme.spacing(-6),
        background: "#FBF2D4"
    },
    aboutContent : {
        marginTop : theme.spacing(8)
    },
    icon : {
        fontSize: "15px",
        color : "#6A737C",
        marginLeft : theme.spacing(-2),
        marginRight : theme.spacing(2),
        marginBottom : theme.spacing(1)
    },
    expandIcon : {
        textAlign : 'center',
        color: '#696969'
    }
}))


function Records() {
    const [expanded, setExpanded] = React.useState(RecordsData);
    const classes = useStyles();
    const toggle = (i) => {
        var newArr = [];
        newArr = expanded.slice();
        newArr[i].expanded = !newArr[i].expanded;
        setExpanded(newArr);
    }
    const CardContent = () => (
        <div>
            <p className={classes.aboutTitle}>About StackoverflowWarehouse</p>
            <br/><br/>
            <List>
                {
                    aboutListData.map((listItem)=>(
                        <ListItem>
                            <span><Create className={classes.icon}/></span><ListItemText secondary={listItem}/>
                        </ListItem>
                    ))
                }
            </List>    
        </div>
    )
    return (
        <Grid container>
            <Grid item sm={3}></Grid>
            <Grid item sm={6} xs={12}>
                <div className={classes.header}>
                    <span className={classes.title}>All Questions</span>
                    <span className={classes.count}>222,44 Bookmarked Questions</span>
                </div>
                <div className = {classes.root}>
                    {
                    RecordsData.map((Record, index)=>( 
                    <Accordion elevation={0} expanded={expanded[index].expanded} onClick={() => toggle(index)}>
                        <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Grid container className={classes.accordionSummary}>
                            <Grid item xs={2} className={classes.accordionLeft}>
                                <div className={classes.accordionLeftDetails}>
                                    <span className={classes.votesCount}>{Record.votes}</span>
                                    <span className={classes.votesText}>votes</span>
                                </div>
                                <br/>
                                <div className={classes.accordionLeftDetails}>
                                    <span className={classes.votesCount}>{Record.answersCount}</span>
                                    <span className={classes.votesText}>answers</span>
                                </div>
                                <br/>
                                <div className={classes.accordionLeftDetails}>
                                    <div className={classes.views}>
                                        <span>{Record.viewsCount}</span>&nbsp;
                                        <span>views</span>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={10} className={classes.accordionCenter}>
                                <Typography variant="h6" className={classes.questionHeader}>
                                    {Record.questionHeader}
                                </Typography>
                                <br/>
                                <Typography variant = "h8">
                                    <a className={classes.questionLink} href={Record.questionLink}>{Record.questionLink}</a>
                                </Typography>
                                <br/>
                                <br/>
                                <div className={classes.tagSection}>
                                    {  
                                        Record.tags.map((tag)=> (
                                            <>
                                                <Paper className={classes.tag} elevation={0}>{tag}</Paper>&nbsp;&nbsp;
                                            </>    
                                        ))
                                    }
                                </div>
                                <br/>
                                <div className={classes.expandIcon}>
                                    {
                                        expanded[index].expanded ?<ExpandLessIcon/>:<ExpandMoreIcon/> 
                                    }
                                </div>
                            </Grid>
                        </Grid>
                        </AccordionSummary>
                        <AccordionDetails className={classes.accordionDetails1}>
                                <RecordAccordionDetail 
                                displayName={Record.expandedInfo.owner.displayName}
                                dp = {Record.expandedInfo.owner.dp}
                                user_info_link={Record.expandedInfo.owner.user_info_link}
                                reputation = {Record.expandedInfo.owner.reputation}
                                creation_date={Record.expandedInfo.creation_date}
                                bookmark_date={Record.expandedInfo.bookmark_date}/>
                        </AccordionDetails>
                    </Accordion> 
                    ))
                    }
                </div>
            </Grid>
            <Grid item xs={3}>
                <div className = {classes.accordionRight}>
                    <Card content={CardContent()} background="#FDF7E3"/>
                </div>
            </Grid>
        </Grid>   
    )
}

export default Records
