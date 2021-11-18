import React, {useEffect, useState} from 'react';
import Loader from "../components/Loader";
import BookCard from "../components/book-card/BookCard";
import Container from "@mui/material/Container";
import DropSelector from "../components/selectors/DropSelector";
import {API_URL} from "../utils/consts";
import ModalFormCreate from "../components/modal-form/ModalFormCreate";
import axios from "axios";
import ComboBox from "../components/selectors/ComboBox";

const Catalog = () => {
    const [bookNameSortValue, setBookNameSortValue] = useState('asc');
    const [searchValue, setSearchValue] = useState(null);
    const [response, setResponse] = useState({
        loading: false,
        data: null,
        error: false
    })

    function loadResponse() {
        setResponse({
                loading: true,
                data: null,
                error: false
            })
            axios.get(API_URL)
                .then(response => {
                    setResponse({
                        loading: false,
                        data: response.data,
                        error: false
                    })
                    console.log(response.data)
                })
                .catch(() => {
                    setResponse({
                        loading: false,
                        data: null,
                        error: true
                    })
                })
    }

    useEffect(loadResponse, [])

    let content = null
    let allBooks = []

    if (response.error) {
        content = <div className="bg-blue-300 mb-2 p-3 rounded">
            There was an error. Please, try to reload the page.
        </div>
    }

    if (response.loading) {
        content = <Loader/>
    }

    if(response.data) {
        if (bookNameSortValue === 'asc') {
            let processedData = response.data
            if (searchValue !== null) {
                processedData = response.data.filter(book => book.name === searchValue)
            }
            processedData.sort((a, b) => (a.name > b.name) ? 1 : -1)
            content = processedData.map((book, id) =>
                <BookCard key={id} id={book.id} name={book.name} cover={book.imageURL} price={book.price} description={book.description} count={book.count} loadResponse={loadResponse}/>
            )
        } else if (bookNameSortValue === 'desc') {
            let processedData = response.data
            if (searchValue !== null) {
                processedData = response.data.filter(book => book.name === searchValue)
            }
            processedData.sort((a, b) => (a.name < b.name) ? 1 : -1)
            content = processedData.map((book, id) =>
                <BookCard key={id} id={book.id} name={book.name} cover={book.imageURL} price={book.price} description={book.description} count={book.count} loadResponse={loadResponse}/>
            )
        } else {
            let processedData = response.data
            if (searchValue !== null) {
                processedData = response.data.filter(book => book.name === searchValue)
            }
            content = processedData.map((book, id) =>
                <BookCard key={id} id={book.id} name={book.name} cover={book.imageURL} price={book.price} description={book.description} count={book.count} loadResponse={loadResponse}/>
        )
        }

        response.data.map((book) => allBooks.push(book.name))
    }

    return (
        <>
            <Container sx={{paddingBottom: '50px'}} maxWidth="lg">
                <div className="row">
                    <ComboBox
                        label="Search by name"
                        options={allBooks}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                    />
                    <DropSelector
                        select={bookNameSortValue}
                        setSelect={setBookNameSortValue}
                        options={["Asc", "Desc"]}
                        values={["asc", "desc"]}
                        label="Sort by name"
                    />
                    <ModalFormCreate loadResponse={loadResponse}/>
                </div>
                { content }
            </Container>
        </>

    );
};

export default Catalog;