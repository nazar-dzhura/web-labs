import React from 'react';
import './card.css'
import no_image from "../../../assets/img/no_image.jpg";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Card(props) {
    return (
        <div className="item-card">
            <CardMedia
                className="item-card__image"
                component="img"
                image={props.imageURL}
            />
            <Box>
                <CardContent>
                    <Typography className="item-card__title" component="div" variant="h4">
                        {props.heading}
                    </Typography>
                    <Typography className="item-card__additional" component="div">
                        {props.description}
                    </Typography>
                </CardContent>
            </Box>
        </div>
    );
}

export default Card;