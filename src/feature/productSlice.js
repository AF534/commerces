import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/commerce",
        );
       return response?.data;
      } catch (error) {
        console.log(error);
      }
    }
  );

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
        [productsFetch.pending]: (state, action) => {
          state.status = "pending";
        },
        [productsFetch.fulfilled]: (state, action) => {
         state.status = "success";
         state.items = action.payload;
        },
        [productsFetch.rejected]: (state, action) => {
          state.status = "rejected";
        },
    },
});

export default productsSlice.reducer;