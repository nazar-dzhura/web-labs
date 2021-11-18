import React from "react";
import Container from "@mui/material/Container";
import {Grid} from "@material-ui/core";
import "./home.css"
import Typography from "@mui/material/Typography";
import DiscoverCards from "../components/sections/discover-cards/DiscoverCards";

const Home = () => {
    return (
        <>
            <Container className="home" maxWidth="lg">
                <div className="home__heading-section">
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <img className='home__image' src='https://www.oecd-nea.org/upload/docs/image/jpeg/2020-11/book_stack.jpg' alt="books" style={{width: '100%'}}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography className='home__title' component="div" variant="h3">
                            Heading
                        </Typography>
                        <Typography component="div">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit vehicula gravida. Praesent congue enim ac volutpat vehicula. Nam dictum rutrum libero, sed mattis est.
                        </Typography>
                    </Grid>
                </Grid>
                <DiscoverCards/>
                </div>
            </Container>
        </>
    )
}

export default Home