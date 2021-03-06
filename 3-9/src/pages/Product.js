import React from "react";
import Container from "@mui/material/Container";
import {useParams} from "react-router-dom";
import {API_URL} from "../utils/consts";
import {useAxiosGet} from "../hooks/httpRequests";
import Loader from "../components/Loader";
import {Divider, Grid} from "@material-ui/core";
import './product.css'
import Typography from "@mui/material/Typography";
import {useDispatch} from "react-redux";
import {addItemAction} from "../redux/actions/actions";
import Button from "@material-ui/core/Button";

const Product = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    let product = useAxiosGet(API_URL + id)
    let content = null

    const addItem = (id, name, description, imageURL, price, count) => {
        const item = {
            id, name, description, imageURL, price, count
        }
        dispatch(addItemAction(item))
    }

    if(product.error){
        content = <div>
            <div className="bg-blue-300 mb-2 p-3">
                If you see this error. Please remember to create your own <a href="https://mockapi.io/">mock API</a>.
            </div>
            <div className="bg-red-300 p-3">
                There was an error please refresh or try again later.
            </div>
        </div>
    }

    if(product.loading){
        content = <Loader/>
    }

    if(product.data){
        content =
            <div className="product-paper">
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <img
                            className="product-paper__image"
                            src={product.data.imageURL}
                            alt={product.data.name}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography className="book-card__title" component="div" variant="h4">
                                {product.data.name}
                        </Typography>
                            <Divider />
                        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{my: 2}}>
                                Count: {product.data.count}
                        </Typography>
                        <Typography className="book-card__additional" component="div">
                                Description: {product.data.description}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{my: 2}}>
                                Price: {product.data.price}$
                        </Typography>
                        <Button className="shadow-2xl btn-green" variant="contained" color="primary" style={{margin: 20, float: 'right'}} onClick={() => addItem(product.data.id, product.data.name, product.data.description,product.data.imageURL, product.data.price, product.data.count)}>
                            Add to cart
                        </Button>
                    </Grid>
                </Grid>
            </div>
    }

    return (
        <>
            <Container sx={{paddingBottom: '50px'}} maxWidth="lg">
                {content}
            </Container>
        </>
    )
}

export default Product