import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {makeStyles} from "@material-ui/core/styles"; 

const useStyles = makeStyles((theme)=>({
    card: {
        width: props => props.cardWidth,
        marginBottom: theme.spacing(5),
        minWidth : '290px'
    }
}))

function SimpleCard(props) {
    
    const classes = useStyles(props);
    return (
        <Card className= {classes.card}>
            <CardContent>{props.content}</CardContent>
            <CardActions>{props.actions}</CardActions>
        </Card>
    )
}

export default SimpleCard;
