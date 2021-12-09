import React from 'react';
import Container from "@mui/material/Container";
import {useSelector} from "react-redux";
import BookCardCart from "../components/book-card/BookCardCart";

const Cart = () => {
    const items = useSelector(state => state.cart.cart)

    return (
        <>
            <Container sx={{paddingBottom: '50px'}} maxWidth="lg">
                {items.length > 0 ?
                    <div>
                        {items.map((item, index) => <BookCardCart key={index} id={item.id} name={item.name} cover={item.imageURL} price={item.price} description={item.description} count={item.count}/>)}
                    </div>
                    :
                    <div style={{fontSize: "2rem"}}>
                        There are no items in your cart
                    </div>}
            </Container>
        </>

    );
};

export default Cart;