import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import no_image from '../../assets/img/no_image.jpg'
import './book-card.css'
import {useDispatch} from "react-redux";
import {removeItemAction} from "../../redux/actions/actions";

const BookCardCart = ({id, name, cover, description, price, count}) => {
    const dispatch = useDispatch()
    const removeItem = (id) => {
        dispatch(removeItemAction(id))
    }
    return (
            <Card className="book-card">
                <CardMedia
                    className="book-card__image"
                    component="img"
                    image={cover ? cover : no_image}
                    alt={name + " cover"}
                />
                <Box>
                    <CardContent>
                        <Typography className="book-card__title" component="div" variant="h4">
                            {name}
                        </Typography>
                        <button className="book-card__delete-button" onClick={() => removeItem(id)} >
                            <box-icon name='trash'/>
                        </button>
                        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{my: 2}}>
                            $ {price}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{my: 2}}>
                            Count: {count}
                        </Typography>
                        <Typography className="book-card__additional" component="div">
                            {description}
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
    );
}


BookCardCart.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    cover: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    count: PropTypes.string,
    loadResponse: PropTypes.func
};

export default BookCardCart;