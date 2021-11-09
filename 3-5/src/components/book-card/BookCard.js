import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import no_image from '../../assets/img/no_image.jpg'
import './book-card.css'
import axios from "axios";
import {API_URL} from "../../utils/consts";
import ModalFormEdit from "../modal-form/ModalFormEdit";

const BookCard = ({id, name, cover, description, price, count, loadResponse}) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function handleDelete(event) {
        axios.delete(`${API_URL}${id}`)
            .then(r => {
                    loadResponse()
                    console.log(r.data)
                }
            )
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
                            <button className="book-card__delete-button" onClick={handleDelete} >
                                <box-icon name='trash'/>
                            </button>
                            <ModalFormEdit id={id} name={name} cover={cover} description={description} price={price} count={count} loadResponse={loadResponse} open={open} setOpen={setOpen} handleClose={handleClose}/>
                            <button className="book-card__edit-button" onClick={handleClickOpen}>
                                <box-icon name='edit-alt'/>
                            </button>
                    <Typography variant="subtitle1" color="text.secondary" component="div" sx={{my: 2}}>
                        $ {price}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div" sx={{my: 2}}>
                        Count: {count}
                    </Typography>
                    <Typography className="book-card__additional" component="div">
                        {/*{genresNames.length === 0 ? 'Genres for this film was not specified' : genresNames.map((name) =>*/}
                        {/*    (genresNames.indexOf(name) !== genresNames.length -1 ? `${name}, ` : `${name}`))}*/}
                        {description}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
}


BookCard.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    cover: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    count: PropTypes.string,
    loadResponse: PropTypes.func
};

export default BookCard;