import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from "axios";
import {Form} from "react-bootstrap";
import {API_URL} from "../../utils/consts";


export default function ModalFormCreate(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [data, setData] = useState({
        name: "",
        description: "",
        count: "",
        imageURL: "",
        price: ""
    })

    function submit(e) {
        e.preventDefault();
        axios.post(API_URL, {
            name: data.name,
            description: data.description,
            count: data.count,
            imageURL: data.imageURL,
            price: data.price
        })
            .then(res => {
                props.loadResponse()
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
        setData({
            name: "",
            description: "",
            count: "",
            imageURL: "",
            price: ""
        })
    }

    function handle(e){
        const newData={...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }

    const style = {
        marginBottom: 10,
        marginTop: 10
    };

    return (
        <>
            <Button className="shadow-2xl btn-green" variant="contained" color="primary" style={{margin: 20, float: 'right'}} onClick={handleClickOpen}>
                Add new book
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <Form onSubmit={(e) => submit(e)}>
                    <DialogTitle id="form-dialog-title">Add new book</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please, describe the book you want to add.
                        </DialogContentText>
                        <TextField
                            onChange={(e) => handle(e)}
                            value={data.name}
                            style={style}
                            margin="dense"
                            id="name"
                            label="Book Title"
                            type="text"
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            onChange={(e) => handle(e)}
                            value={data.description}
                            style={style}
                            id="description"
                            label="Book Description"
                            type="text"
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                        />
                        <TextField
                            onChange={(e) => handle(e)}
                            value={data.count}
                            style={style}
                            margin="dense"
                            variant="outlined"
                            id="count"
                            label="Count"
                            type="number"
                            fullWidth
                        />
                        <TextField
                            onChange={(e) => handle(e)}
                            value={data.price}
                            style={style}
                            margin="dense"
                            variant="outlined"
                            id="price"
                            label="Price"
                            type="number"
                            fullWidth
                        />
                        <TextField
                            onChange={(e) => handle(e)}
                            value={data.imageURL}
                            style={style}
                            margin="dense"
                            variant="outlined"
                            id="imageURL"
                            label="Image URL"
                            type="text"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleClose} color="primary" type="submit">
                            Add book
                        </Button>
                    </DialogActions>
                </Form>
            </Dialog>
        </>
    );
}