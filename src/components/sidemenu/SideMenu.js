import React from 'react'
import {makeStyles} from "@material-ui/core/styles"; 
import Drawer from "@material-ui/core/Drawer";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme)=>({
    drawer:{
        height: 'calc(100% - 60px)',
        top: '60px',
        [theme.breakpoints.up('sm')]: {
            width: "21%"
        }
    },
    list: {
        width: 250,
        //background: "#EFF0F1"
    },
    listItemText:{
        margin: 0,
        marginLeft: theme.spacing(3),
        '&:hover': {
            cursor: 'pointer',
            background: "lightGrey"
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


export default function SideMenu({anchorState , headerSideMenuContent}) {
    const classes = useStyles();

    const list = () => (
        <div className={classes.list} role="presentation">
            <List>
            {['Home','BookMarked Questions', 'All Questions'].map((text, index) => (
              <ListItem key={text}>
                <ListItemText className={classes.listItemText} secondary={text} />
              </ListItem>
            ))}
            <div className={classes.teams}>
                <strong>Stack Overflow for Sharing – </strong>
                <br/>
                <span>Bookmark all your findings in Stackoverflow.</span>
                <img src = "https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e"
                    height="114" width="139" alt="team" className={classes.teamImage}/>
            </div>  
            </List>
        </div>
    )
    console.log(headerSideMenuContent);

    return (
        <>
            <Hidden smDown>
                { headerSideMenuContent === undefined ? 
                    <Drawer variant='permanent'  open classes={{paper:classes.drawer}}>
                        {list()}
                    </Drawer>: null
                }
            </Hidden>
            <Hidden smUp>
                <Drawer  open={anchorState} classes={{paper:classes.drawer}}>
                    { 
                        headerSideMenuContent ? headerSideMenuContent : list()
                    }
                </Drawer>
            </Hidden>
        </>
    )
}
