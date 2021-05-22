import React from 'react';
import SideMenu from "./sidemenu/SideMenu";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles"; 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme)=>({
  root: {
      background: "#FAFAFB",
      color: "black",
      paddingTop: theme.spacing(0.5)
  },
  title : {
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    },
      flexGrow: 0.8,
      marginLeft : theme.spacing(8),
      fontSize: "22px"
  },
  menu : {
      [theme.breakpoints.down('sm')]: {
          display : 'none'
      }
  },
  menuItem: {
      marginRight: theme.spacing(4)
  },
  menuIcon : {
    [theme.breakpoints.up('sm')]: {
        display : 'none',
        float: "right"
    },
  },
  getStartedButton : {
    [theme.breakpoints.down('sm')]: {
        display : 'none'
    },
      background: "#0095FF",
      color: "white"
  }
}))

function HomeHeader() {
    const [anchorState, setAnchorState] = React.useState(false);

    const handleClick = () => {
        setAnchorState(!anchorState)
    }

    const headerMenu = () => (
        <List>
            {["HOME","ABOUT","GET EXTENSION", "CONTACT"].map((text, index) => (
                <ListItem key={text}>
                <ListItemText className={classes.listItemText} secondary={text} />
                </ListItem>
            ))}
        </List>
    )

    const classes = useStyles();
    return (
        <AppBar position="static" elevation={0} className={classes.root}>
            <Toolbar>
                <div className={classes.title}>
                    StackoverflowWarehouse
                </div>
                <div className={classes.menu}>
                    <span className={classes.menuItem}>HOME</span>
                    <span className={classes.menuItem}>ABOUT</span>
                    <span className={classes.menuItem}>GET EXTENSION</span>
                    <span className={classes.menuItem}>CONTACT</span>
                </div>
                <Button elevation = {0} className={classes.getStartedButton}>Get Started</Button>
                <IconButton edge="start" className={classes.menuButton} className={classes.menuIcon} onClick={handleClick}>
                    <MenuIcon/>
                    <SideMenu anchorState={anchorState} headerSideMenuContent = {headerMenu()}/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default HomeHeader
