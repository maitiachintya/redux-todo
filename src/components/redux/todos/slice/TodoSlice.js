import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { todoUrl } from "../../../../api/Url_Api";

const api_Url = todoUrl;

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
    const response = await axios.get(api_Url);
    console.log("Axios response for getApi: ", response);
    return response.data;
});

export const addItem = createAsyncThunk("items/addItem", async (newItem) => {
    const response = await axios.post(api_Url, newItem);
    console.log("Axios response for postApi:", response);
    return response.data;
});

export const updateItem = createAsyncThunk("items/updateItem", async ( updatedData ) => {
    const response = await axios.put(`${api_Url}/${updatedData.id}`, updatedData);
    console.log("Axios Response for UpdatedAoi", response);
    return response.data;
})

export const deleteItem = createAsyncThunk("items/deleteItem", async (id) => {
    await axios.delete(`${api_Url}/${id}`);
    return id;
});

const itemSlice = createSlice({
    name: "items",
    initialState: {
        items: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchItems.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(addItem.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(updateItem.fulfilled, (state, action) => {
                const index = state.items.findIndex((item) => item.id === action.payload.id);
                state.items[index] = action.payload;
            })
            .addCase(deleteItem.fulfilled, (state, action) => {
                state.items = state.items.filter((item) => item.id !== action.payload);
            });
    },
});

export default itemSlice.reducer;