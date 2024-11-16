import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateItem, fetchItems } from "../slice/TodoSlice";
import { Button, TextField, Box, Typography, CircularProgress } from "@mui/material";

const EditItem = () => {
    const { id } = useParams(); // Get the item ID from the URL
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const items = useSelector((state) => state.items.items); // Get items from Redux state
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(true); // Track loading state
    const [error, setError] = useState(null); // Track any errors

    // Fetch all items from the backend when the component mounts
    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);

    // Find the specific item when `items` or `id` changes
    useEffect(() => {
        if (items.length > 0) {
            const item = items.find((item) => item.id.toString() === id); // Match ID as a string
            if (item) {
                setName(item.name);
                setDescription(item.description);
                setError(null);
            } else {
                setError("Item not found");
            }
            setLoading(false); // End loading state
        }
    }, [items, id]);

    // Handle form submission to update the item
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateItem({ id: parseInt(id), updatedData: { name, description } })).then(() =>
            navigate("/todo-page") // Navigate back to the ToDo page after successful update
        );
    };

    // Render a loading spinner if data is being fetched
    if (loading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <CircularProgress />
            </Box>
        );
    }

    // Render an error message if the item is not found
    if (error) {
        return (
            <Box sx={{ textAlign: "center", marginTop: "50px" }}>
                <Typography variant="h4" color="error">
                    {error}
                </Typography>
                <Button variant="contained" color="primary" onClick={() => navigate("/todo-page")}>
                    Back to Todo Page
                </Button>
            </Box>
        );
    }

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, margin: "auto", marginTop: "50px" }}>
            <Typography variant="h4" gutterBottom>
                Edit Item
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
            <Button type="submit" variant="contained" color="primary" sx={{ marginTop: "20px" }}>
                Update
            </Button>
        </Box>
    );
};

export default EditItem;
