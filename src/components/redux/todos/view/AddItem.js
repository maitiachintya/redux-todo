import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../slice/TodoSlice";
import { Button, TextField, Box, Typography } from "@mui/material";

const AddItem = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addItem({ name, description })).then(() => navigate("/todo-page"));
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, margin: "auto" }}>
            <Typography variant="h4" gutterBottom>
                Add Item
            </Typography>
            <TextField
                fullWidth
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                margin="normal"
            />
            <TextField
                fullWidth
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
                Add
            </Button>
        </Box>
    );
};

export default AddItem;
