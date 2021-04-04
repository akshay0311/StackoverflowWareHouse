import React from 'react'
import {makeStyles} from "@material-ui/core/styles"; 
import Drawer from "@material-ui/core/Drawer";
const useStyles = makeStyles((theme)=>({
    drawer:{
        height: 'calc(100% - 60px)',
        top: '60px'
    }
}))



function SideMenu({anchorState}) {
    const classes = useStyles();
    return (
        <div>
            <Drawer open={anchorState} classes={{paper:classes.drawer}}>
                <p>Hello From The out</p>
            </Drawer>
        </div>
    )
}

export default SideMenu;
