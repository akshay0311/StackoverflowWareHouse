import React from 'react'
import {makeStyles} from "@material-ui/core/styles"; 
import Drawer from "@material-ui/core/Drawer";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Public} from '@material-ui/icons';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme)=>({
    root1 : {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    root2 : {
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    drawer:{
        height: 'calc(100% - 60px)',
        top: '60px'
    },
    list: {
        width: 250,
        //background: "#EFF0F1"
    },
    listItemText:{
        margin: 0,
        marginLeft: theme.spacing(3),
        color: '#6A737C',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    icon : {
        marginRight: theme.spacing(-4),
    },
    teams : {
        textAlign : 'center',
        fontSize: '15px',
        padding : theme.spacing(3)
    },
    teamImage : {
        marginLeft: theme.spacing(5)
    },
    teamButtonSection : {
        textAlign : 'center'
    },
    createTeamButton : {
        fontSize : '10px',
        boxShadow : 'none',
        background : '#0095FF',
        color: 'white'
    },
    whatisTeamButton: {
        fontSize : '10px',
        boxShadow : 'none',
    }
}))


export default function SideMenu({anchorState}) {
    const classes = useStyles();

    const list = () => (
        <div className={classes.list} role="presentation">
            <List>
            {['Home','PUBLIC','Questions', 'Tags', 'Users', 'FIND A JOB', "Jobs", "Companies", "TEAMS"].map((text, index) => (
              <ListItem key={text}>
                {
                index === 0 || index === 1 || index === 5 || index === 8? 
                <ListItemText secondary={text} />:
                    index === 2 ? 
                    <>
                        <ListItemIcon className={classes.icon}><Public fontSize='small'/></ListItemIcon><ListItemText secondary={text}/>
                    </>:
                <ListItemText className={classes.listItemText} secondary={text} />
                }
              </ListItem>
            ))}
            <div className={classes.teams}>
                <p><strong>Stack Overflow for Teams – </strong>Collaborate and share knowledge with a private group.</p>
                <img src = "https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e"
                    height="114" width="139" alt="team" className={classes.teamImage}/>
            </div>
            <div className={classes.teamButtonSection}>
                <Button variant="contained" className={classes.createTeamButton}>Create a free team</Button>
                <br/>
                <Button className={classes.whatisTeamButton}>What is teams ?</Button>
            </div>    
            </List>
        </div>
    )

    return (
        <>
            <div className={classes.root1}>
                <Drawer variant='persistent'  open classes={{paper:classes.drawer}}>
                    {list()}
                </Drawer>
            </div>
            <div className={classes.root2}>
                <Drawer  open={anchorState} classes={{paper:classes.drawer}}>
                    {list()}
                </Drawer>
            </div>
        </>
    )
}
