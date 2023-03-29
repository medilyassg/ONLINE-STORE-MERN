import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  status: 'idle',
  error: null,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('http://127.0.0.1:3001/product/getall');
  return response.data;
});

export const addProduct = createAsyncThunk('products/addProduct', async (product) => {
  
  const response = await axios.post('http://127.0.0.1:3001/product/addProduct', product);
  return response.data;
});

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (productId) => {
  const response = await axios.delete(`http://127.0.0.1:3001/product/deletebyid/${productId}`);
  return response.data;
});

export const updateProduct = createAsyncThunk('products/updateProduct', async (product) => {
  const response = await axios.put(`http://127.0.0.1:3001/product/update/${product._id}`, product);
  return response.data;
});

export const getProductById = createAsyncThunk('products/getProductById', async (productId) => {
  const response = await axios.get(`http://127.0.0.1:3001/product/getidproduct/${productId}`);
  return response.data;
});

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = state.products.filter((product) => product._id !== action.payload._id);
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const updatedProduct = action.payload;
        const existingProductIndex = state.products.findIndex((product) => product._id === updatedProduct._id);
        if (existingProductIndex !== -1) {
          state.products.splice(existingProductIndex, 1, updatedProduct);
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getProductById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = [action.payload];
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;