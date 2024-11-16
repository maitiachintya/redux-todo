import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems, deleteItem } from "../slice/TodoSlice";
import { Button, Typography, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const TodoViewlists = () => {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.items);

    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteItem(id));
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Item List
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/add">
                Add Item
            </Button>
            <List>
                {items.map((item) => (
                    <ListItem key={item.id}>
                        <ListItemText primary={item.name} secondary={item.description} />
                        <Button
                            variant="contained"
                            color="secondary"
                            component={Link}
                            to={`/edit/${item.id}`}
                        >
                            Edit
                        </Button>
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={() => handleDelete(item.id)}
                        >
                            Delete
                        </Button>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default TodoViewlists;
