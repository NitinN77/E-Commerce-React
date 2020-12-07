import React from 'react'
import { Typography, Button, Card, CardActionArea, CardContent, CardMedia} from '@material-ui/core';
import useStyles from './styles';

function CartItem({ item }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia image={item.media.source} alt={item.name}
            className={classes.media}/>
            <div className={classes.content}>
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActionArea className={classes.cartActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small">-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small">+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" className={classes.rembtn}>
                    Remove
                </Button>
            </CardActionArea>
            </div>
        </Card>
    )
}

export default CartItem