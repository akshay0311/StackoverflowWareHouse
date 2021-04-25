import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import time from "../utils/timeStamp2Utc";
import BookmarkIcon from '@material-ui/icons/Bookmark'
const useStyles = makeStyles((theme)=>({
    root :{
        display:'flex',
        flexDirection: 'column'
    },
    imgSection : {
        display : 'flex',
        marginTop : theme.spacing(1)
    },
    img : {
        height : 30,
        width : 30,
        marginRight : theme.spacing(1)
    },
    nameSection :{
        display:'flex',
        flexDirection: 'column'
    },
    displayName : {
        color : "#4286CE",
        fontSize : '14px',
        textDecoration : 'none'
    },
    reputation : {
        fontSize : '14px',
        color: "grey" 
    },
    askedTime : {
        fontSize : '14px',
        color : 'grey'
    },
    bookmark: {
        display : 'flex'
    },
    bookmarkIcon : {
        color : 'grey',
        width : 30
    },
    bookmarkTime : {
        fontSize :'14px',
        marginLeft: theme.spacing(1),
        color : 'grey'
    }
}))
function RecordAccordionDetail({user_info_link, displayName,dp,reputation, creation_date, bookmark_date}) {
    const classes = useStyles()
    const time_date = time.timeStamp2Utc(creation_date);
    const bookmark_day = time.timeStamp2Utc(bookmark_date);
    return (
        <Grid container>
                <Grid item item xs={2}></Grid>
                <Grid item xs= {8}>
                    <div className={classes.root}>
                        <div className={classes.askedTime}>asked: <b>{time_date}</b></div>
                        <div className={classes.imgSection}>
                            <img src={dp} className={classes.img}/>
                            <div className={classes.nameSection}>
                                <span><a className={classes.displayName} href={user_info_link}>{displayName}</a></span>
                                <span className={classes.reputation}>{reputation}</span>
                            </div>
                        </div>
                        <br/>
                        <div className={classes.bookmark}>
                            <BookmarkIcon fontSize='small' className={classes.bookmarkIcon}/>
                            <b className={classes.bookmarkTime}>{bookmark_day}</b>
                        </div>
                    </div>
                </Grid>
        </Grid>
       )
}

export default RecordAccordionDetail;
